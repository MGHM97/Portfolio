import { chromium } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { de } from '../src/i18n/locales/de.ts';
import { en, type Dictionary } from '../src/i18n/locales/en.ts';
import { es } from '../src/i18n/locales/es.ts';
import { fr } from '../src/i18n/locales/fr.ts';
import { ptBr } from '../src/i18n/locales/pt-br.ts';

const root = new URL('..', import.meta.url).pathname;
const dictionaries: Record<string, Dictionary> = { en, es, fr, de, 'pt-br': ptBr };

// Reuse the exact @font-face rules Astro emitted, inlined so the page needs no server.
function inlineFonts() {
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

const escape = (text: string) =>
  text.replace(
    /[&<>"]/g,
    (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[char]!,
  );

function template(dict: Dictionary, fonts: string) {
  return `<!doctype html>
<html><head><meta charset="utf-8"><style>
${fonts}
* { margin: 0; box-sizing: border-box; }
body {
  width: 1200px; height: 630px; padding: 72px 80px;
  display: flex; flex-direction: column; justify-content: space-between;
  background: #121211; color: #ecebe6;
  font-family: var(--font-sans);
}
.role { font-family: var(--font-mono); font-size: 26px; letter-spacing: 0.04em; color: #4fd1b8; }
h1 { margin-top: 24px; max-width: 980px; font-size: 68px; font-weight: 650; line-height: 1.08; letter-spacing: -0.03em; }
footer { display: flex; align-items: flex-end; justify-content: space-between; gap: 32px; }
.name { font-size: 34px; font-weight: 600; }
.stack { margin-top: 8px; font-family: var(--font-mono); font-size: 20px; color: #a3a29b; }
.status { display: flex; align-items: center; gap: 12px; max-width: 460px; padding: 12px 20px;
  background: #15302b; border-radius: 16px; font-size: 20px; line-height: 1.3; }
.dot { flex-shrink: 0; width: 12px; height: 12px; border-radius: 50%; background: #4fd1b8; }
</style></head>
<body>
  <div>
    <p class="role">${escape(dict.hero.role)}</p>
    <h1>${escape(dict.hero.headline)}</h1>
  </div>
  <footer>
    <div>
      <p class="name">Mateus Vieira</p>
      <p class="stack">React · TypeScript · Micro-frontends · WCAG</p>
    </div>
    <p class="status"><span class="dot"></span>${escape(dict.hero.availability)}</p>
  </footer>
</body></html>`;
}

const fonts = inlineFonts();
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });

for (const [locale, dict] of Object.entries(dictionaries)) {
  await page.setContent(template(dict, fonts));
  await page.evaluate(() => document.fonts.ready);
  const file = join(root, 'public/og', `${locale}.png`);
  await page.screenshot({ path: file });
  console.log(`og: ${file.replace(root, '')}`);
}

await browser.close();
