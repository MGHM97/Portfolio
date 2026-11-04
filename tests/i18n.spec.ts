import { expect, test } from '@playwright/test';
import { locales } from './locales';

for (const locale of locales) {
  test(`${locale.code} page declares its language and every alternate`, async ({ page }) => {
    await page.goto(locale.path);

    await expect(page.locator('html')).toHaveAttribute('lang', locale.lang);
    for (const alternate of locales) {
      await expect(
        page.locator(`link[rel="alternate"][hreflang="${alternate.lang}"]`),
      ).toHaveAttribute('href', new RegExp(`${alternate.path}$`));
    }
    await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveCount(1);
  });
}

test('language switcher keeps the visitor on the same page', async ({ page }) => {
  await page.goto('/');

  await page.locator('.language-switcher summary').click();
  await page.getByRole('link', { name: 'Español' }).click();
  await expect(page).toHaveURL(/\/es\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');

  await page.locator('.language-switcher summary').click();
  await expect(page.getByRole('link', { name: 'Español' })).toHaveAttribute('aria-current', 'true');
  await page.getByRole('link', { name: 'English' }).click();
  await expect(page).toHaveURL(/\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en-US');
});

test('language options are announced in their own language', async ({ page }) => {
  await page.goto('/');
  for (const locale of locales) {
    await expect(page.locator(`.language-switcher a[hreflang="${locale.lang}"]`)).toHaveAttribute(
      'lang',
      locale.lang,
    );
  }
});

test('language switcher closes on Escape and returns focus', async ({ page }) => {
  await page.goto('/');
  const summary = page.locator('.language-switcher summary');

  await summary.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.language-switcher')).toHaveAttribute('open', '');

  await page.keyboard.press('Escape');
  await expect(page.locator('.language-switcher')).not.toHaveAttribute('open');
  await expect(summary).toBeFocused();
});
