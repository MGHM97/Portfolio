import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { locales, wcagTags } from './locales';

for (const locale of locales) {
  test(`every published ${locale.code} case study and article is reachable and accessible`, async ({
    page,
  }) => {
    await page.goto(locale.path);
    const hrefs = await page
      .locator('#work h3 a, #writing h3 a')
      .evaluateAll((links) => links.map((link) => link.getAttribute('href') ?? ''));

    test.skip(hrefs.length === 0, 'No published case studies or articles yet');

    for (const href of hrefs) {
      await page.goto(href);
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

      const results = await new AxeBuilder({ page }).withTags(wcagTags).analyze();
      expect(results.violations, href).toEqual([]);
    }
  });
}
