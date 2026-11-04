---
title: Shipping micro-frontends to millions of devices through a native host
summary: How I build and deploy React micro-frontends for HP's cross-platform app, where the web UI runs inside native clients on Windows, macOS, iOS and Android.
company: HP Inc.
role: Senior Software Engineer
period: May 2025 — Present
stack: [React, TypeScript, SystemJS, Import maps, Jest, Playwright, GitHub Actions]
outcomes:
  - 12+ production micro-frontends on millions of active devices
  - ~30% faster cross-team bug resolution
  - ~90% test coverage enforced in CI
  - React 16 → 18 upgrade with no production regressions
order: 1
draft: true
---

## Context

HP's core companion app runs on Windows, macOS, iOS and Android. Its interface is built as a set of React micro-frontends that a native client loads at runtime, so a single screen can involve web code, a JavaScript-to-native bridge and platform libraries written in C#/.NET.

I joined through Wipro as a Senior Software Engineer and have shipped more than twelve of those micro-frontends to production.

<!-- TODO: one sentence on what the app does for users, in NDA-safe terms. -->

## The problem

Two things slowed teams down.

**Releases were coupled.** Micro-frontends only pay off if each one can ship on its own schedule. Inside a native host that is harder than on the web: the host decides what to load, and every change has to move through DEV, ITG and PROD.

**Bugs crossed boundaries.** When something broke, the cause could be in the UI, in the bridge, or in native code, and each layer belonged to a different team. Without shared visibility into what actually crossed the bridge, triage turned into back-and-forth between teams.

<!-- TODO: confirm this framing matches what you saw. Add an example if you can share one. -->

## What I did

### Independent deployments with SystemJS and import maps

I designed deployment pipelines where each micro-frontend is built, versioned and promoted independently. The host resolves modules at runtime through import maps and SystemJS, so rolling a micro-frontend forward or back means changing which version the map points to instead of rebuilding the host.

<!-- TODO: why SystemJS over Module Federation? (e.g. host constraints, existing single-spa setup) -->

### Observability that respects privacy

I added structured logs that expose API and native payloads at the bridge, with sensitive fields kept out by design, and wrote playbooks so any team could follow a failure across layers. Cross-team bug resolution got about 30% faster.

### Debugging through the bridge

Some regressions only showed up on one platform. I traced them from the JavaScript UI through the bridge APIs into the native C#/.NET libraries, which meant reading native code to understand device-management behavior, not just the web side.

### A safer upgrade path

I led the upgrade from React 16 to 18 and standardized the testing toolchain on Jest, React Testing Library and Playwright, holding about 90% coverage in GitHub Actions. The upgrade reached production without regressions.

## Outcome

- 12+ micro-frontends in production across four platforms
- ~30% faster bug resolution between teams
- A test baseline of ~90% coverage that new work has to keep

## What I'd do differently

<!-- TODO: one honest lesson. Hiring managers read this section closely. -->
