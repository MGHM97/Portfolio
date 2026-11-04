---
title: Building the interface for an AI that predicts dementia progression
summary: Leading the front-end of a research platform that monitors 200+ patients, captures clinical data and validates wearable signals for AI models.
company: UFAM
role: Lead Front-end Engineer
period: July 2025 — Present
stack: [React 19, TypeScript, Vite, React Hook Form, MUI X Charts, JWT]
outcomes:
  - Platform used to monitor 200+ patients
  - 16 case report forms with real-time biomarker risk
  - 841 research fields exportable to XLSX/CSV
order: 2
draft: true
---

## Context

At the Federal University of Amazonas (UFAM), a research team is building an AI and web platform to help doctors and nurses predict how dementia progresses in their patients. I lead its front-end architecture as a part-time academic project, alongside my master's in electrical engineering with a focus on AI.

The platform follows more than 200 patients. Clinicians use it to record assessments, researchers use it to export data, and the AI models depend on what both groups enter.

<!-- TODO: team size and your role in it (how many devs, who you work with on the AI side). -->

## The problem

In a clinical study, the interface is part of the data pipeline. A confusing form produces bad data, and bad data produces a worse model. The front-end had to:

- capture assessments across 16 case report forms, each with fields that depend on earlier answers
- compute biomarker-based risk while the clinician is still filling the form
- let researchers check wearable signals before they reach a training set
- keep access restricted by role, since the data is about real patients

## What I did

### Forms that guide clinicians

I built the electronic data capture workflow with React Hook Form: 16 case report forms with conditional fields and real-time risk calculations from biomarkers such as ApoB and the Aβ42/40 ratio. Clinicians see the result as they type instead of after submitting.

<!-- TODO: how you validated with clinicians (feedback sessions? usability tests?) -->

### Making sensor data inspectable

I built a dashboard with MUI X Charts that shows daily and hourly heart rate, EDA, PPG and sleep data from wearables. Researchers use it to spot gaps and artifacts before the data is used to train or evaluate models.

### Getting data out safely

Researchers needed everything in their own tools, so I delivered an export of 841 fields across the 16 forms to XLSX and CSV, plus PDF medical reports. Access is protected with JWT authentication and role-based permissions.

## Outcome

- One platform for capture, monitoring and export across 200+ patients
- Risk feedback at the moment of data entry
- Wearable data reviewed visually before it reaches the models

<!-- TODO: any result you can share — fewer data errors, time saved per assessment, a publication or demo. -->

## What I'd do differently

<!-- TODO: one honest lesson. -->
