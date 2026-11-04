import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('every published case study is reachable and accessible', async ({ page }) => {
  await page.goto('/');
  const hrefs = await page
    .locator('#work h3 a')
    .evaluateAll((links) => links.map((link) => link.getAttribute('href') ?? ''));

  test.skip(hrefs.length === 0, 'No published case studies yet');

  for (const href of hrefs) {
    await page.goto(href);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(results.violations, href).toEqual([]);
  }
});
