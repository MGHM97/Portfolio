import { getCollection, type CollectionEntry } from 'astro:content';
import { defaultLocale, type Locale } from '../i18n/config';

export interface LocalizedWork {
  slug: string;
  entry: CollectionEntry<'work'>;
  isFallback: boolean;
}

function splitId(id: string) {
  const [locale = '', ...rest] = id.split('/');
  return { locale, slug: rest.join('/') };
}

export async function getWork(locale: Locale): Promise<LocalizedWork[]> {
  const entries = await getCollection('work', ({ data }) => import.meta.env.DEV || !data.draft);
  const byLocale = new Map(entries.map((entry) => [entry.id, entry]));

  return entries
    .filter((entry) => splitId(entry.id).locale === defaultLocale)
    .map((original) => {
      const { slug } = splitId(original.id);
      const translated = byLocale.get(`${locale}/${slug}`);
      return {
        slug,
        entry: translated ?? original,
        isFallback: !translated && locale !== defaultLocale,
      };
    })
    .sort((a, b) => a.entry.data.order - b.entry.data.order);
}
