import type { Dictionary } from './en';

export const de: Dictionary = {
  meta: {
    title: 'Mateus Vieira — Senior Frontend Engineer',
    description:
      'Senior Frontend Engineer für barrierefreie, zuverlässige Benutzeroberflächen im großen Maßstab mit React, TypeScript und Micro-Frontends. Offen für Remote-Stellen und Relocation in Nordamerika und Europa.',
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
    headline: 'Ich entwickle barrierefreie, zuverlässige Oberflächen für den großen Maßstab.',
    summary:
      'Rund fünf Jahre Erfahrung mit React- und TypeScript-Produkten. Bei HP Inc. entwickle ich Micro-Frontends für eine plattformübergreifende App, die auf Millionen von Geräten läuft. An der UFAM habe ich das Frontend der klinischen Datenplattform eines Demenz-Forschungsprojekts von Grund auf aufgebaut und leite es. Daneben absolviere ich einen Master mit KI-Schwerpunkt.',
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
        role: 'Lead Frontend Engineer · Klinische Forschungsplattform',
        note: 'Akademisches Projekt in Teilzeit',
        highlights: [
          'Frontend der Webplattform (React 19, TypeScript, Vite) von Grund auf aufgebaut und geleitet (rund 90 % des Codes), in der Ärzte, Pflegekräfte und Medizinstudierende über 200 Patientinnen und Patienten eines Demenz-Forschungsprojekts erfassen und begleiten. Das KI-Team des Projekts trainiert seine Modelle mit diesen Daten.',
          'Erfassung klinischer Daten umgesetzt: 16 Prüfbögen (Case Report Forms) mit bedingten Feldern und Risikoberechnung anhand von Biomarkern in Echtzeit (ApoB, Aβ42/40).',
          'Dashboards entwickelt, die den Verlauf jeder Patientin und jedes Patienten zeigen, einschließlich täglicher und stündlicher Wearable-Daten (Herzfrequenz, EDA, PPG, Schlaf).',
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
