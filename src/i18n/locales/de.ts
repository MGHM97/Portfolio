import type { Dictionary } from './en';

export const de: Dictionary = {
  meta: {
    title: 'Mateus Vieira — Senior Frontend Engineer',
    description:
      'Ich entwickle barrierefreie, KI-gestützte Benutzeroberflächen für den großen Maßstab. Offen für Remote-Stellen und Relocation in Nordamerika und Europa.',
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
      'Fast fünf Jahre Erfahrung mit React- und TypeScript-Produkten. Derzeit verantworte ich bei HP Inc. die Architektur von Micro-Frontends, die auf Millionen von Geräten weltweit laufen, und leite die Frontend-Entwicklung eines KI-gestützten Forschungsprojekts im Gesundheitswesen an der UFAM.',
    availability: 'Offen für Remote-Stellen und Relocation — Nordamerika und Europa',
    location: 'Manaus, Brasilien',
    getInTouch: 'Kontakt aufnehmen',
    downloadCv: 'Lebenslauf herunterladen',
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
    present: 'heute',
    expected: (year) => `Voraussichtlich ${year}`,
    jobs: {
      hp: {
        role: 'Senior Software Engineer',
        highlights: [
          'Architektur von Micro-Frontends für ein plattformübergreifendes Produkt, das auf Millionen aktiver Geräte weltweit läuft.',
        ],
      },
      ufam: {
        role: 'Lead Frontend Engineer · KI-Forschung im Gesundheitswesen',
        highlights: [
          'Leitung der Frontend-Entwicklung eines Forschungsprojekts, das KI-Modelle in klinische Anwendungen bringt.',
        ],
      },
    },
    degrees: {
      msc: 'M.Sc. Künstliche Intelligenz',
    },
  },
  skills: {
    title: 'Kenntnisse',
    groups: {
      languages: 'Sprachen',
      frontend: 'Frontend',
      quality: 'Qualität & Barrierefreiheit',
      delivery: 'Delivery',
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
