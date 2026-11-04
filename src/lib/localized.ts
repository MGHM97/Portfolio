import { getCollection, type CollectionEntry } from 'astro:content';
import { defaultLocale, type Locale } from '../i18n/config';

type LocalizedCollection = 'work' | 'posts';

export interface Localized<C extends LocalizedCollection> {
  slug: string;
  entry: CollectionEntry<C>;
  isFallback: boolean;
}

function splitId(id: string) {
  const [locale = '', ...rest] = id.split('/');
  return { locale, slug: rest.join('/') };
}

// English entries define what exists; a translation replaces its English
// original when present, otherwise the original is served with isFallback.
export async function getLocalized<C extends LocalizedCollection>(
  collection: C,
  locale: Locale,
): Promise<Localized<C>[]> {
  const entries = (await getCollection(collection)).filter(
    (entry) => import.meta.env.DEV || !entry.data.draft,
  ) as CollectionEntry<C>[];
  const byId = new Map(entries.map((entry) => [entry.id, entry]));

  return entries
    .filter((entry) => splitId(entry.id).locale === defaultLocale)
    .map((original) => {
      const { slug } = splitId(original.id);
      const translated = byId.get(`${locale}/${slug}`);
      return {
        slug,
        entry: translated ?? original,
        isFallback: !translated && locale !== defaultLocale,
      };
    });
}
