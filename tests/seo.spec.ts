import { expect, test } from '@playwright/test';
import { locales } from './locales';

const roles: Record<string, string> = {
  en: 'Senior Front-end Engineer',
  es: 'Ingeniero Front-end Sénior',
  fr: 'Ingénieur Front-end Senior',
  de: 'Senior Frontend Engineer',
  'pt-br': 'Engenheiro Front-end Sênior',
};

for (const locale of locales) {
  test(`${locale.code} home describes the person in JSON-LD`, async ({ page }) => {
    await page.goto(locale.path);
    const blocks = await page.locator('head script[type="application/ld+json"]').allTextContents();
    const person = blocks
      .map((block) => JSON.parse(block))
      .find((data) => data['@type'] === 'Person');

    expect(person).toMatchObject({
      '@context': 'https://schema.org',
      name: 'Mateus Vieira',
      jobTitle: roles[locale.code],
      sameAs: expect.arrayContaining([expect.stringContaining('linkedin.com')]),
    });
    expect(new URL(person.url).pathname).toBe(locale.path);
  });
}

test('pages advertise the RSS feed', async ({ page, request }) => {
  await page.goto('/');
  await expect(page.locator('link[rel="alternate"][type="application/rss+xml"]')).toHaveAttribute(
    'href',
    '/rss.xml',
  );

  const response = await request.get('/rss.xml');
  expect(response.ok()).toBe(true);
  const body = await response.text();
  expect(body).toContain('<rss version="2.0">');
  expect(body).toContain('<title>Mateus Vieira — Writing</title>');
});
