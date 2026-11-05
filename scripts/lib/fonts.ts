import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export const root = new URL('../..', import.meta.url).pathname;

// Reuse the exact @font-face rules Astro emitted, inlined so the page needs no server.
export function inlineFonts() {
  const html = readFileSync(join(root, 'dist/index.html'), 'utf8');
  const rules = html.match(/@font-face\{[^}]+\}|:root\{--font-[^}]+\}/g) ?? [];
  if (rules.length === 0) throw new Error('No @font-face rules found. Run `yarn build` first.');
  return rules
    .map((rule) =>
      rule.replace(/url\("?(\/_astro\/fonts\/[^)"]+\.woff2)"?\)/g, (_, path: string) => {
        const data = readFileSync(join(root, 'dist', path)).toString('base64');
        return `url(data:font/woff2;base64,${data})`;
      }),
    )
    .join('\n');
}
