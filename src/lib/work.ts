import { getCollection } from 'astro:content';

export async function getPublishedWork() {
  const entries = await getCollection('work', ({ data }) => import.meta.env.DEV || !data.draft);
  return entries.sort((a, b) => a.data.order - b.data.order);
}
