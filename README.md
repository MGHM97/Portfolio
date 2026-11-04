# mateusvieira.dev

Personal site and portfolio of **Mateus Vieira**, Senior Front-end Engineer building accessible, AI-powered interfaces.

## Stack

- [Astro](https://astro.build) — static output, zero client JS except a tiny theme toggle
- TypeScript in `strictest` mode
- Plain CSS with custom properties (light/dark themes)
- Static i18n in five languages with typed dictionaries
- Playwright + axe-core for end-to-end and WCAG 2.2 AA checks on desktop and mobile, in every locale
- GitHub Actions for formatting, type checks, build and tests

## Getting started

```sh
yarn install
yarn dev          # http://localhost:4321
yarn build        # type check + production build
yarn test:e2e     # runs against the production build
```

## Internationalization

The site ships in English (default, at `/`), Spanish (`/es/`), French (`/fr/`), German (`/de/`) and Brazilian Portuguese (`/pt-br/`). Every locale is a static page with its own `<html lang>`, canonical URL, `hreflang` alternates and sitemap entry. No JavaScript is involved in switching languages.

- **UI copy** lives in [`src/i18n/locales/`](src/i18n/locales). Each dictionary is typed against the English one, so a missing translation fails `astro check` and the build.
- **Locale-independent data** (name, links, companies, dates, skills) lives in [`src/data/profile.ts`](src/data/profile.ts).
- **Case studies** live in `src/content/work/<locale>/`. English is the source of truth; when a translation is missing, the English version is shown with a notice, marked `lang="en-US"` and canonicalized to the English URL.
- **Tests** run accessibility, layout and `hreflang` checks for every locale.

To add a string, add it to the `Dictionary` type in `en.ts`; TypeScript then points at every locale that still needs it.

## Credits

Designed and built by Mateus Vieira, with [Claude Code](https://claude.com/claude-code) as pair programmer.
