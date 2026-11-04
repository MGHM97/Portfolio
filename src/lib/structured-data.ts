import { profile } from '../data/profile';
import { languageTags, localizePath, t, type Locale } from '../i18n';

// `<` is escaped so a string containing "</script>" can't end the block early.
export function serializeJsonLd(data: object) {
  return JSON.stringify({ '@context': 'https://schema.org', ...data }).replace(/</g, '\\u003c');
}

export function personSchema(locale: Locale, site: URL) {
  const dict = t(locale);
  return {
    '@type': 'Person',
    '@id': new URL('/#person', site).href,
    name: profile.name,
    url: new URL(localizePath(locale), site).href,
    image: new URL(`/og/${locale}.png`, site).href,
    jobTitle: dict.hero.role,
    description: dict.meta.description,
    email: `mailto:${profile.email}`,
    address: { '@type': 'PostalAddress', addressLocality: 'Manaus', addressCountry: 'BR' },
    knowsLanguage: ['pt-BR', 'en'],
    knowsAbout: ['React', 'TypeScript', 'Micro-frontends', 'Web accessibility', 'WCAG'],
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Universidade Federal do Amazonas' },
      { '@type': 'CollegeOrUniversity', name: 'Centro Universitário das Américas' },
    ],
    sameAs: [profile.links.linkedin, profile.links.github],
  };
}

interface ArticleInput {
  title: string;
  description: string;
  published: Date;
  updated?: Date | undefined;
  url: URL;
  contentLocale: Locale;
  site: URL;
}

export function articleSchema(article: ArticleInput) {
  return {
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    datePublished: article.published.toISOString(),
    dateModified: (article.updated ?? article.published).toISOString(),
    inLanguage: languageTags[article.contentLocale],
    url: article.url.href,
    mainEntityOfPage: article.url.href,
    author: {
      '@type': 'Person',
      '@id': new URL('/#person', article.site).href,
      name: profile.name,
    },
  };
}
