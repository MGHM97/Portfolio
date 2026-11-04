import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { profile } from '../data/profile';
import { defaultLocale, t } from '../i18n';
import { getPosts } from '../lib/posts';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getPosts(defaultLocale);
  const dict = t(defaultLocale);

  return rss({
    title: `${profile.name} — ${dict.writing.title}`,
    description: dict.meta.description,
    site: site!,
    items: posts.map(({ slug, entry }) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.published,
      link: `/writing/${slug}/`,
      categories: entry.data.tags,
    })),
    customData: '<language>en-us</language>',
  });
};
