import { expect, test } from '@playwright/test';
import { locales } from './locales';

for (const locale of locales) {
  test(`${locale.code} desktop header keeps every label on one line`, async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 700 });
    await page.goto(locale.path);

    await expect(page.locator('.menu-button')).toBeHidden();
    const heights = await page
      .locator('header .brand, #primary-nav a')
      .evaluateAll((items) => items.map((item) => item.getClientRects().length));
    expect(heights.every((lines) => lines === 1)).toBe(true);
  });
}

test.describe('mobile menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 800 });
    await page.goto('/');
  });

  test('starts collapsed and opens with the menu button', async ({ page }) => {
    const button = page.locator('.menu-button');
    await expect(page.locator('#primary-nav')).toBeHidden();

    await button.click();

    await expect(button).toHaveAttribute('aria-expanded', 'true');
    await expect(page.getByRole('navigation', { name: 'Primary' })).toBeVisible();
  });

  test('closes on Escape and returns focus to the button', async ({ page }) => {
    const button = page.locator('.menu-button');
    await button.click();
    await page.keyboard.press('Escape');

    await expect(button).toHaveAttribute('aria-expanded', 'false');
    await expect(button).toBeFocused();
    await expect(page.locator('#primary-nav')).toBeHidden();
  });

  test('closes after choosing a section', async ({ page }) => {
    await page.locator('.menu-button').click();
    await page.locator('#primary-nav a', { hasText: 'Contact' }).click();

    await expect(page).toHaveURL(/#contact$/);
    await expect(page.locator('.menu-button')).toHaveAttribute('aria-expanded', 'false');
  });
});

test.describe('without JavaScript', () => {
  test.use({ javaScriptEnabled: false });

  test('small screens still show the section links', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 800 });
    await page.goto('/');

    await expect(page.locator('.menu-button')).toBeHidden();
    await expect(page.locator('#primary-nav')).toBeVisible();
  });
});
