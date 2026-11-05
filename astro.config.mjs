import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { defaultLocale, languageTags, locales } from './src/i18n/config.ts';

// SITE_URL wins once a custom domain exists; until then Vercel's production
// URL keeps canonical links, hreflang and the sitemap pointing somewhere real.
const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:4321');

export default defineConfig({
  site,
  build: {
    // The CSS is a few KB; inlining it removes the only render-blocking requests.
    inlineStylesheets: 'always',
  },
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "base-uri 'self'",
        "form-action 'none'",
        "object-src 'none'",
      ],
    },
  },
  markdown: {
    // Shiki relies on inline styles, which the CSP doesn't allow; Prism only emits classes.
    syntaxHighlight: 'prism',
  },
  i18n: {
    locales: [...locales],
    defaultLocale,
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap({ i18n: { defaultLocale, locales: languageTags } })],
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Geist',
      cssVariable: '--font-sans',
      weights: ['400 700'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Geist Mono',
      cssVariable: '--font-mono',
      weights: [400, 500],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],
});
