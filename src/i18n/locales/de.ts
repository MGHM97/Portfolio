import type { Dictionary } from './en';

export const de: Dictionary = {
  meta: {
    title: 'Mateus Vieira — Senior Frontend Engineer',
    description:
      'Senior Frontend Engineer für barrierefreie, KI-gestützte Benutzeroberflächen im großen Maßstab. React, TypeScript und Micro-Frontends. Offen für Remote-Stellen und Relocation in Nordamerika und Europa.',
  },
  a11y: {
    skipToContent: 'Zum Inhalt springen',
    primaryNav: 'Hauptnavigation',
    toggleTheme: 'Dunkelmodus umschalten',
    language: 'Sprache',
  },
  nav: {
    work: 'Projekte',
    experience: 'Erfahrung',
    skills: 'Kenntnisse',
    contact: 'Kontakt',
  },
  hero: {
    role: 'Senior Frontend Engineer',
    headline: 'Ich entwickle barrierefreie, KI‑gestützte Oberflächen für den großen Maßstab.',
    summary:
      'Rund fünf Jahre Erfahrung mit React- und TypeScript-Produkten. Bei HP Inc. entwickle ich Micro-Frontends für eine plattformübergreifende App, die auf Millionen von Geräten läuft. An der UFAM leite ich das Frontend einer KI-Plattform, die medizinischem Fachpersonal hilft, den Verlauf von Demenz vorherzusagen.',
    availability: 'Offen für Remote-Stellen und Relocation — Nordamerika und Europa',
    location: 'Manaus, Brasilien',
    overlap: 'Volle Überschneidung mit der US-Ostküste und dem europäischen Vormittag',
    getInTouch: 'Kontakt aufnehmen',
    downloadCv: 'Lebenslauf herunterladen (Englisch)',
  },
  work: {
    title: 'Ausgewählte Projekte',
    allWork: 'Alle Projekte',
    outcomes: 'Ergebnisse',
    stack: 'Technologien',
    draft: 'Entwurf — in Produktion ausgeblendet',
    fallbackNotice:
      'Diese Fallstudie ist noch nicht übersetzt und wird daher auf Englisch angezeigt.',
  },
  experience: {
    title: 'Erfahrung',
    educationTitle: 'Ausbildung',
    languagesTitle: 'Sprachen',
    present: 'heute',
    expected: (year) => `Voraussichtlich ${year}`,
    via: (company) => `über ${company}`,
    modes: { remote: 'Remote', onSite: 'Vor Ort', hybrid: 'Hybrid' },
    jobs: {
      hp: {
        role: 'Senior Software Engineer',
        highlights: [
          'Über 12 Micro-Frontends mit React und TypeScript für die zentrale plattformübergreifende App von HP (Windows, macOS, iOS, Android) in Produktion gebracht, genutzt auf Millionen aktiver Geräte.',
          'Fehlerbehebung zwischen Teams um ~30 % beschleunigt – mit datenschutzkonformen Observability-Logs für API- und native Payloads sowie Troubleshooting-Playbooks.',
          'Unabhängige Deployment-Pipelines mit SystemJS und Import Maps konzipiert, inklusive Laden zur Laufzeit, Versionierung und DEV/ITG/PROD-Rollouts im nativen Windows-Host.',
          'Plattformübergreifende Regressionen von der JavaScript-Oberfläche über Bridge-APIs bis in native C#/.NET-Bibliotheken zurückverfolgt.',
          'Upgrade von React 16 auf 18 geleitet und Jest, Playwright und React Testing Library vereinheitlicht, bei ~90 % Testabdeckung in der GitHub-Actions-CI.',
        ],
      },
      ufam: {
        role: 'Lead Frontend Engineer · KI-Forschung im Gesundheitswesen',
        note: 'Akademisches Projekt in Teilzeit',
        highlights: [
          'Leitung der Frontend-Architektur (React 19, TypeScript, Vite) einer KI- und Webplattform, die über 200 Patientinnen und Patienten begleitet und Ärzten und Pflegekräften hilft, den Verlauf von Demenz vorherzusagen.',
          'Erfassung klinischer Daten umgesetzt: 16 Prüfbögen (Case Report Forms) mit bedingten Feldern und Risikoberechnung anhand von Biomarkern in Echtzeit (ApoB, Aβ42/40).',
          'Dashboard für Wearable-Daten (Herzfrequenz, EDA, PPG, Schlaf) zur Validierung der KI-Datensätze entwickelt.',
          'Export der Forschungsdaten (841 Felder nach XLSX/CSV), medizinische PDF-Berichte und JWT-Authentifizierung mit rollenbasierten Berechtigungen geliefert.',
        ],
      },
      ipdec: {
        role: 'Frontend Developer',
        highlights: [
          'Prozesslaufzeiten für Industriekunden wie LG und Denso von einem Monat auf eine Woche verkürzt – mit einer abteilungsübergreifenden Plattform für Automatisierung und Qualitätstests.',
          'Verstreute interne Abläufe in einer Plattform mit React, TypeScript und Vue.js zusammengeführt und die Bearbeitungszeit um 20 % gesenkt.',
        ],
      },
      driven: {
        role: 'Full Stack Web Developer',
        highlights: [
          'Full-Stack-Lernanwendungen und REST-APIs (React, TypeScript, Node.js, Express, Prisma, PostgreSQL) in Docker für die Ausbildung von Bootcamp-Teilnehmenden entwickelt.',
        ],
      },
    },
    degrees: {
      msc: 'Master Elektrotechnik (Schwerpunkt KI)',
      bsc: 'B.Sc. Informatik',
    },
    spoken: {
      pt: { name: 'Portugiesisch', level: 'Muttersprache' },
      en: { name: 'Englisch', level: 'Verhandlungssicher' },
    },
  },
  skills: {
    title: 'Kenntnisse',
    groups: {
      languages: 'Sprachen',
      frontend: 'Frontend',
      architecture: 'Architektur',
      backend: 'Backend & APIs',
      delivery: 'Tests & Delivery',
      crossPlatform: 'Plattformübergreifend',
    },
  },
  contact: {
    title: 'Kontakt',
    lead: 'Sie suchen Verstärkung für ein Frontend- oder KI-Produktteam? Ich spreche gern über Stellen, Relocation oder darüber, wie ich Ihr Produkt angehen würde.',
  },
  footer: {
    builtWith: 'Erstellt mit Astro, mit',
    pairProgrammer: 'als Pair-Programmer.',
    source: 'Quellcode',
  },
  notFound: {
    title: 'Seite nicht gefunden',
    heading: 'Diese Seite existiert nicht.',
    back: 'Zur Startseite',
  },
};
