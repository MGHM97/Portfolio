import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, posix, relative } from 'node:path';

// External links are only checked for hosts we control. Sites like LinkedIn
// block automated requests and would make CI flaky.
const CHECKED_HOSTS = new Set(['github.com', 'mghm97.github.io']);
const SKIPPED_PROTOCOLS = ['mailto:', 'tel:', 'data:', 'javascript:'];

const args = process.argv.slice(2);
const checkExternal = args.includes('--external');
const dist = args.find((arg) => !arg.startsWith('--')) ?? 'dist';

function htmlFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return htmlFiles(path);
    return path.endsWith('.html') ? [path] : [];
  });
}

const pages = new Map(
  htmlFiles(dist).map((file) => [
    `/${relative(dist, file).split('\\').join('/')}`,
    readFileSync(file, 'utf8'),
  ]),
);

const canonical = pages.get('/index.html')?.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
const siteOrigin = canonical ? new URL(canonical).origin : null;

function resolveFile(pathname: string) {
  const path = decodeURIComponent(pathname);
  const candidates = path.endsWith('/')
    ? [`${path}index.html`]
    : [path, `${path}/index.html`, `${path}.html`];
  return candidates.find((candidate) => existsSync(join(dist, candidate)));
}

function hasAnchor(file: string, id: string) {
  const html = pages.get(file) ?? '';
  return new RegExp(`\\s(?:id|name)="${id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`).test(html);
}

const broken: string[] = [];
const external = new Map<string, string[]>();

for (const [page, html] of pages) {
  const base = new URL(page, 'http://site.local');

  for (const [, raw] of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const value = raw!.replace(/&amp;/g, '&');
    if (SKIPPED_PROTOCOLS.some((protocol) => value.startsWith(protocol))) continue;

    const url = new URL(value, base);
    const isInternal = url.host === 'site.local' || url.origin === siteOrigin;

    if (!isInternal) {
      if (!url.protocol.startsWith('http')) continue;
      const pagesUsingIt = external.get(url.href) ?? [];
      external.set(url.href, [...pagesUsingIt, page]);
      continue;
    }

    const file = resolveFile(url.pathname);
    if (!file) {
      broken.push(`${page} → ${value} (no such file)`);
      continue;
    }
    const id = decodeURIComponent(url.hash.slice(1));
    if (id && file.endsWith('.html') && !hasAnchor(posix.normalize(file), id)) {
      broken.push(`${page} → ${value} (no element with id "${id}")`);
    }
  }
}

if (checkExternal) {
  const targets = [...external.keys()].filter((href) => CHECKED_HOSTS.has(new URL(href).host));
  await Promise.all(
    targets.map(async (href) => {
      try {
        const response = await fetch(href, {
          method: 'GET',
          redirect: 'follow',
          signal: AbortSignal.timeout(15_000),
        });
        if (!response.ok)
          broken.push(`${external.get(href)![0]} → ${href} (HTTP ${response.status})`);
      } catch (error) {
        broken.push(`${external.get(href)![0]} → ${href} (${(error as Error).message})`);
      }
    }),
  );
  console.log(`links: checked ${targets.length} external URLs on ${[...CHECKED_HOSTS].join(', ')}`);
}

console.log(`links: scanned ${pages.size} pages`);

if (broken.length > 0) {
  console.error(`\n${broken.length} broken link(s):`);
  for (const line of [...new Set(broken)]) console.error(`  ${line}`);
  process.exit(1);
}

console.log('links: all good');
