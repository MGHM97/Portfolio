---
title: Shipping micro-frontends to millions of devices through a native host
summary: How I build and ship React micro-frontends for the HP App, where the web UI runs inside native clients on Windows, macOS, iOS and Android.
company: HP Inc.
role: Senior Software Engineer
period: May 2025 — Present
stack: [React, TypeScript, SystemJS, Import maps, Feature flags, Jest, Playwright, GitHub Actions]
outcomes:
  - 12+ production micro-frontends on millions of active devices
  - ~30% faster cross-team bug resolution
  - ~90% test coverage enforced in CI
  - React 16 → 18 upgrades with no production regressions
order: 1
draft: true
---

## Context

The [HP App](https://www.hp.com/us-en/hp-app/overview.html) is where people add and manage their HP products: laptops, desktops, monitors, mice, keyboards and most other devices HP makes. They can register a device as its owner or simply add it, then manage it from one place. It runs on Windows, macOS, iOS and Android.

Much of its interface is built as React micro-frontends that a native client loads at runtime, so a single screen can involve web code, a JavaScript-to-native bridge and platform code owned by separate Android, iOS and Windows teams.

I joined through Wipro as a Senior Software Engineer and have shipped more than twelve of those micro-frontends to production.

## The problem

Two things made the work hard.

**Releases had to stay independent.** Micro-frontends only pay off if each one can ship on its own schedule. Inside a native host that takes discipline: the host decides what to load, and every change moves through DEV, ITG and PROD.

**Bugs crossed team boundaries.** When something broke, the cause could be in the UI, in the bridge or in native code, and each layer belonged to a different team. Without shared visibility into what actually crossed the bridge, tracing a failure meant a lot of back-and-forth between teams.

## What I did

### Shipping on SystemJS and import maps

The platform loads micro-frontends at runtime with SystemJS and import maps, and the deployment pipelines were already in place when I joined. My work is delivering micro-frontends through them: each one is built, versioned and promoted on its own, and because the host resolves modules through the import map, rolling forward or back means changing which version the map points to instead of rebuilding the host.

### Observability that respects privacy

Tracing a failure across teams was slow until I added structured logs at the bridge. They expose the API and native payloads that cross it, with sensitive fields kept out by design, and come with playbooks so any team can follow a failure from the UI to native code. Cross-team bug resolution got about 30% faster.

### Debugging through the bridge

Some regressions only showed up on one platform. I traced them from the JavaScript UI through the bridge APIs into the native C#/.NET libraries, which meant reading native code to understand device-management behavior, not just the web side.

### A safer upgrade path

I carried out the upgrades from React 16 to 18 and standardized the testing toolchain on Jest, React Testing Library and Playwright, holding about 90% coverage in GitHub Actions. The upgrades reached production without regressions.

## Outcome

- 12+ micro-frontends in production across four platforms
- ~30% faster bug resolution between teams
- A test baseline of ~90% coverage that new work has to keep

## What I learned

Micro-frontends and feature flags were both new to me when I joined. Working with them changed how I think about shipping: small, independent pieces, each released on its own and switched on when it's ready, instead of one large release everyone has to coordinate. It's now the way I prefer to work.
