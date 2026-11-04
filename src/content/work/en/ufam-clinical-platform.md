---
title: Building a clinical research platform from scratch, as the only front-end engineer
summary: The web platform where doctors, nurses and medical students record and follow 200+ patients in a dementia research project, and the data source for the project's AI team.
company: UFAM
role: Lead Front-end Engineer
period: July 2025 — Present
stack: [React 19, TypeScript, Vite, React Hook Form, MUI X Charts, JWT]
outcomes:
  - Built from scratch as the only front-end engineer
  - 200+ patients followed by the clinical team
  - 16 case report forms with real-time biomarker risk
  - 841 research fields exportable to XLSX/CSV
order: 2
draft: true
---

## Context

At the Federal University of Amazonas (UFAM), a research project studies how dementia progresses in its patients. Doctors, nurses and medical students take part in it, and a separate AI team builds predictive models.

I built the web platform the clinical team works in, from the first commit, and I'm the only front-end engineer on it. It's a part-time academic role alongside my master's in electrical engineering with a focus on AI.

There is no AI in the interface itself. The AI team reads what clinicians enter directly from the platform's database, which makes the front-end the place where data quality is decided.

<!-- TODO: who else is on the web side (backend? designer?) and how you work with the AI team. -->

## The problem

The clinical team needed one place to register patients, run assessments and follow each patient over time. That meant:

- 16 case report forms, many with fields that depend on earlier answers
- biomarker-based risk shown while the assessment is still being filled in
- a view of each patient's evolution, including wearable data
- exports researchers can open in their own tools
- access limited by role, since the records are about real patients

A form that is confusing or lets inconsistent answers through doesn't just annoy the clinician. It ends up in the dataset the models are trained on.

## What I did

### Forms that guide the clinician

I built the data capture workflow with React Hook Form: 16 case report forms with conditional fields and real-time risk calculations from biomarkers such as ApoB and the Aβ42/40 ratio, so the result appears while the clinician types.

<!-- TODO: how you made the forms consistent across 16 CRFs (shared schema? field components?) and how you validated them with clinicians. -->

### Following patients over time

I built dashboards with MUI X Charts that show each patient's evolution, including daily and hourly wearable data: heart rate, EDA, PPG and sleep.

### Getting data out safely

Researchers needed everything in spreadsheets, so I delivered an export of 841 fields across the 16 forms to XLSX and CSV, plus PDF medical reports. Access is protected with JWT authentication and role-based permissions.

## Outcome

- A platform built from zero that the clinical team uses to follow 200+ patients
- Risk feedback at the moment of data entry
- A clean, exportable dataset that the AI team builds on

<!-- TODO: any result you can share — fewer data-entry errors, time saved per assessment, feedback from clinicians. -->

## What I'd do differently

<!-- TODO: one honest lesson. -->
