import { chromium } from '@playwright/test';
import { join } from 'node:path';
import { inlineFonts, root } from './lib/fonts.ts';

// Same mark as favicon.svg (MV over the two rivers), rendered with the site's serif. Icons are full squares:
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
  const pad = size * inset;
  await page.setContent(`<!doctype html><html><head><style>
${fonts}
* { margin: 0; }
html { background: #2a1a10; }
body {
  position: relative; width: ${size}px; height: ${size}px;
  display: grid; place-items: center;
  font-family: var(--font-display); font-weight: 600; color: #e0b27e;
  font-size: ${size * (0.46 - inset)}px; letter-spacing: -0.03em;
}
.rivers {
  position: absolute; left: ${pad}px; right: ${pad}px; bottom: ${pad + size * 0.12}px;
  display: flex; height: ${Math.max(2, size * 0.05)}px; margin-inline: ${size * 0.2}px;
}
.rivers span:first-child { flex: 1.4; background: #6b4126; }
.rivers span:last-child { flex: 1; background: #c9a074; }
</style></head><body>MV<div class="rivers"><span></span><span></span></div></body></html>`);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: join(root, 'public', file) });
  console.log(`icon: public/${file}`);
  await page.close();
}

await browser.close();
