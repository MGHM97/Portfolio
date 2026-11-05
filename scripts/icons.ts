import { chromium } from '@playwright/test';
import { join } from 'node:path';
import { inlineFonts, root } from './lib/fonts.ts';

// Same mark as favicon.svg, rendered with the site's font. Icons are full squares:
// iOS and Android apply their own corner masks. `inset` keeps the letters inside
// the safe zone when Android crops a maskable icon into a circle.
const icons = [
  { file: 'apple-touch-icon.png', size: 180, inset: 0 },
  { file: 'icon-192.png', size: 192, inset: 0 },
  { file: 'icon-512.png', size: 512, inset: 0 },
  { file: 'icon-maskable-512.png', size: 512, inset: 0.1 },
];

const fonts = inlineFonts();
const browser = await chromium.launch();

for (const { file, size, inset } of icons) {
  const page = await browser.newPage({ viewport: { width: size, height: size } });
  await page.setContent(`<!doctype html><html><head><style>
${fonts}
* { margin: 0; }
body {
  width: ${size}px; height: ${size}px; display: grid; place-items: center;
  background: #0b6b5f;
  font-family: var(--font-sans); font-weight: 700; color: #fbfaf7;
  font-size: ${size * (0.44 - inset)}px; letter-spacing: -0.02em;
}
</style></head><body>MV</body></html>`);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: join(root, 'public', file) });
  console.log(`icon: public/${file}`);
  await page.close();
}

await browser.close();
