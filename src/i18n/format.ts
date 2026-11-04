import { languageTags, type Locale } from './config';

export function formatMonth(locale: Locale, yearMonth: string) {
  const [year = 0, month = 1] = yearMonth.split('-').map(Number);
  return new Intl.DateTimeFormat(languageTags[locale], {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year, month - 1)));
}

export function formatCountry(locale: Locale, regionCode: string) {
  return (
    new Intl.DisplayNames([languageTags[locale]], { type: 'region' }).of(regionCode) ?? regionCode
  );
}

export function formatDate(locale: Locale, date: Date) {
  return new Intl.DateTimeFormat(languageTags[locale], {
    dateStyle: 'long',
    timeZone: 'UTC',
  }).format(date);
}
