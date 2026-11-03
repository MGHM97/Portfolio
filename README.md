# mateusvieira.dev

Personal site and portfolio of **Mateus Vieira**, Senior Front-end Engineer building accessible, AI-powered interfaces.

## Stack

- [Astro](https://astro.build) — static output, zero client JS except a tiny theme toggle
- TypeScript in `strictest` mode
- Plain CSS with custom properties (light/dark themes)
- Playwright + axe-core for end-to-end and WCAG 2.2 AA checks on desktop and mobile
- GitHub Actions for formatting, type checks, build and tests

## Getting started

```sh
yarn install
yarn dev          # http://localhost:4321
yarn build        # type check + production build
yarn test:e2e     # runs against the production build
```

Content lives in [`src/data/profile.ts`](src/data/profile.ts), so most updates don't touch components.

## Credits

Designed and built by Mateus Vieira, with [Claude Code](https://claude.com/claude-code) as pair programmer.
