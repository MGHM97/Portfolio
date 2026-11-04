import type { Locale } from '../i18n/config';
import { getLocalized } from './localized';

const WORDS_PER_MINUTE = 220;

export async function getPosts(locale: Locale) {
  const posts = await getLocalized('posts', locale);
  return posts.sort((a, b) => b.entry.data.published.getTime() - a.entry.data.published.getTime());
}

export function readingMinutes(markdown = '') {
  const words = markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
