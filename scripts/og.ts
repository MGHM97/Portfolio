import { chromium } from '@playwright/test';
import { join } from 'node:path';
import { de } from '../src/i18n/locales/de.ts';
import { en, type Dictionary } from '../src/i18n/locales/en.ts';
import { es } from '../src/i18n/locales/es.ts';
import { fr } from '../src/i18n/locales/fr.ts';
import { ptBr } from '../src/i18n/locales/pt-br.ts';
import { inlineFonts, root } from './lib/fonts.ts';

const dictionaries: Record<string, Dictionary> = { en, es, fr, de, 'pt-br': ptBr };

const escape = (text: string) =>
  text.replace(
    /[&<>"]/g,
    (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[char]!,
  );

function headline(text: string) {
  return escape(text).replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

function template(dict: Dictionary, fonts: string) {
  return `<!doctype html>
<html><head><meta charset="utf-8"><style>
${fonts}
* { margin: 0; box-sizing: border-box; }
body {
  width: 1200px; height: 630px; padding: 72px 80px 64px;
  display: flex; flex-direction: column; justify-content: space-between;
  background: #14100c; color: #f2e9dc; font-family: var(--font-sans);
}
.role { font-size: 26px; font-weight: 500; color: #e0b27e; }
h1 {
  margin-top: 22px; max-width: 1000px;
  font-family: var(--font-display); font-size: 76px; font-weight: 500;
  line-height: 1.02; letter-spacing: -0.025em;
}
em { font-style: italic; color: #e0b27e; }
.rivers { display: flex; height: 12px; border-radius: 999px; overflow: hidden; }
.rivers span:first-child { flex: 1.4; background: #6b4126; }
.rivers span:last-child { flex: 1; background: #c9a074; }
footer { display: flex; align-items: flex-end; justify-content: space-between; gap: 40px; margin-top: 28px; }
.name { font-family: var(--font-display); font-size: 40px; font-weight: 600; letter-spacing: -0.01em; }
.status { max-width: 520px; font-size: 22px; line-height: 1.35; color: #b3a491; text-align: right; }
</style></head>
<body>
  <div>
    <p class="role">${escape(dict.hero.role)} — ${escape(dict.hero.location)}</p>
    <h1>${headline(dict.hero.headline)}</h1>
  </div>
  <div>
    <div class="rivers"><span></span><span></span></div>
    <footer>
      <p class="name">Mateus Vieira</p>
      <p class="status">${escape(dict.hero.availability)}</p>
    </footer>
  </div>
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
