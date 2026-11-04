---
title: Building a clinical research platform from scratch
summary: The web platform where doctors, nurses and medical students record and follow 200+ patients in a neurodegenerative disease research project, and the data source for the project's AI team.
company: UFAM
role: Lead Front-end Engineer
period: July 2025 — Present
stack: [React 19, TypeScript, Vite, React Hook Form, MUI X Charts, JWT]
outcomes:
  - Started from scratch; I lead the front-end and wrote ~90% of it
  - 200+ patients followed by the clinical team
  - 16 case report forms with real-time risk scores
  - 841 research fields exportable to XLSX/CSV
order: 2
draft: true
---

## Context

At the Federal University of Amazonas (UFAM), a research project follows patients with neurodegenerative diseases over time. Doctors, nurses and medical students take part in it, and a separate AI team builds predictive models.

I started the web platform the clinical team works in from the first commit and lead its front-end, having written about 90% of the code; colleagues have contributed form adjustments and the CI pipeline. It's a part-time academic role alongside my master's in electrical engineering with a focus on AI.

There is no AI in the interface itself. The AI team reads what clinicians enter directly from the platform's database, which makes the front-end the place where data quality is decided.

Besides the forms, the platform covers patient registration, visit scheduling, follow-up and data-extraction reports, and an admin area for users, profiles and the devices used in the study. The interface is available in Portuguese and English.

## The problem

The clinical team needed one place to register patients, run assessments and follow each patient over time. That meant:

- 16 case report forms, many with fields that depend on earlier answers
- risk scores shown while the assessment is still being filled in
- a view of each patient's evolution, including wearable data
- exports researchers can open in their own tools
- access limited by role, since the records are about real patients

A form that is confusing or lets inconsistent answers through doesn't just annoy the clinician. It ends up in the dataset the models are trained on.

## What I did

### Forms that guide the clinician

I built the data capture workflow with React Hook Form: 16 case report forms with conditional fields and risk scores calculated in real time, so the result appears while the clinician types.

Sixteen forms only stay maintainable if they all work the same way. Each one is split in two: the page handles layout and interaction, and a pure module maps the API payload to form values and back, applies defaults and computes scores. Those modules are unit-tested with Jest, so a clinical rule can be checked without rendering a screen.

### Treating "not answered" as data

In a clinical record, "no" and "not assessed" mean different things, and mixing them up corrupts the dataset. Inputs that would normally be plain checkboxes keep a third state for "no answer", so an untouched field reaches the database as missing instead of as a false negative. Dates and decimals go through localized inputs, so a value typed with a decimal comma is stored the same way as one typed with a dot.

### Following patients over time

I built dashboards with MUI X Charts that show each patient's evolution, including data from the wearable devices used in the study.

### A feedback loop clinicians actually use

The people using the platform are doctors and nurses in the middle of a study, not a product team. Feedback had to be as easy as reporting a problem to a colleague.

So the platform has its own change-request screen. A clinician describes the adjustment they need, attaches a screenshot or PDF when it's something visual, and sees an estimated delivery date for it. For anything urgent, they can still message the team directly. Most improvements to the forms came through this loop.

The screen is still new, and clinicians have already used it for around eight requests.

### Getting data out safely

Researchers needed everything in spreadsheets, so I delivered an export of 841 fields across the 16 forms to XLSX and CSV, plus PDF medical reports. Access is protected with JWT authentication and role-based permissions, and sensitive forms can be restricted individually from a central registry that also drives the user management screen.

## Outcome

- A platform built from zero that the clinical team uses to follow 200+ patients
- Risk feedback at the moment of data entry
- A direct channel for clinicians to request changes, with a visible delivery estimate
- A clean, exportable dataset that the AI team builds on

## What I learned

Healthcare was never a field I expected to work in. It turned out the same skills apply: understand who uses the screen, make the right thing the easy thing, and keep the data clean. Web development can bring something new and useful to almost any domain, and that's a big part of why I enjoy this project.
