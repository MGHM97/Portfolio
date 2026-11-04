import { expect, test } from '@playwright/test';
import { locales } from './locales';

for (const locale of locales) {
  test(`${locale.code} home loads without console errors or CSP violations`, async ({ page }) => {
    const problems: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') problems.push(message.text());
    });
    page.on('pageerror', (error) => problems.push(error.message));

    await page.goto(locale.path);
    await page.getByRole('button', { name: /dark|oscuro|sombre|Dunkel|escuro/ }).click();
    await page.locator('.language-switcher summary').click();

    expect(problems).toEqual([]);
  });
}

test('pages ship a content security policy', async ({ page }) => {
  await page.goto('/');
  const policy = await page
    .locator('meta[http-equiv="content-security-policy"]')
    .getAttribute('content');

  expect(policy).toContain("default-src 'self'");
  expect(policy).toContain("object-src 'none'");
  expect(policy).toMatch(/script-src 'self' 'sha256-/);
  expect(policy).not.toContain('unsafe-inline');
});

test('robots.txt points to the sitemap', async ({ request }) => {
  const response = await request.get('/robots.txt');
  expect(response.ok()).toBe(true);
  expect(await response.text()).toMatch(/Sitemap: https?:\/\/.+\/sitemap-index\.xml/);
});

for (const locale of locales) {
  test(`${locale.code} page has a social preview image`, async ({ page, request }) => {
    await page.goto(locale.path);
    const image = await page.locator('meta[property="og:image"]').getAttribute('content');

    expect(image).toMatch(new RegExp(`/og/${locale.code}\\.png$`));
    const response = await request.get(new URL(image!).pathname);
    expect(response.ok()).toBe(true);
    expect(response.headers()['content-type']).toBe('image/png');
  });
}
