import type { Locale } from '../i18n/config';
import { getLocalized } from './localized';

export async function getWork(locale: Locale) {
  const work = await getLocalized('work', locale);
  return work.sort((a, b) => a.entry.data.order - b.entry.data.order);
}
