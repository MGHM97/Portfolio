import type { Dictionary } from './en';

export const fr: Dictionary = {
  meta: {
    title: 'Mateus Vieira — Ingénieur Front-end Senior',
    description:
      'Je conçois des interfaces accessibles et propulsées par l’IA, à grande échelle. Ouvert au télétravail et à la relocalisation en Amérique du Nord et en Europe.',
  },
  a11y: {
    skipToContent: 'Aller au contenu',
    primaryNav: 'Principale',
    toggleTheme: 'Activer le mode sombre',
    language: 'Langue',
  },
  nav: {
    work: 'Projets',
    experience: 'Expérience',
    skills: 'Compétences',
    contact: 'Contact',
  },
  hero: {
    role: 'Ingénieur Front-end Senior',
    headline: 'Je conçois des interfaces accessibles et propulsées par l’IA, à grande échelle.',
    summary:
      'Près de cinq ans à livrer des produits React et TypeScript. Je conçois actuellement l’architecture micro-frontend chez HP Inc., déployée sur des millions d’appareils dans le monde, et je dirige le front-end d’un projet de R&D en santé fondé sur l’IA à l’UFAM.',
    availability: 'Ouvert au télétravail et à la relocalisation — Amérique du Nord et Europe',
    location: 'Manaus, Brésil',
    getInTouch: 'Me contacter',
    downloadCv: 'Télécharger le CV',
  },
  work: {
    title: 'Projets choisis',
    allWork: 'Tous les projets',
    outcomes: 'Résultats',
    stack: 'Technologies',
    draft: 'Brouillon — masqué en production',
    fallbackNotice:
      'Cette étude de cas n’est pas encore traduite ; elle est donc affichée en anglais.',
  },
  experience: {
    title: 'Expérience',
    educationTitle: 'Formation',
    present: 'aujourd’hui',
    expected: (year) => `Prévu en ${year}`,
    jobs: {
      hp: {
        role: 'Ingénieur logiciel senior',
        highlights: [
          'Conception de l’architecture micro-frontend d’un produit multiplateforme utilisé sur des millions d’appareils actifs dans le monde.',
        ],
      },
      ufam: {
        role: 'Lead Front-end · R&D santé et IA',
        highlights: [
          'Direction du front-end d’un projet de recherche qui intègre des modèles d’IA dans des interfaces à usage clinique.',
        ],
      },
    },
    degrees: {
      msc: 'Master en intelligence artificielle',
    },
  },
  skills: {
    title: 'Compétences',
    groups: {
      languages: 'Langages',
      frontend: 'Frontend',
      quality: 'Qualité et accessibilité',
      delivery: 'Livraison',
    },
  },
  contact: {
    title: 'Contact',
    lead: 'Vous recrutez pour une équipe front-end ou produit IA ? Parlons du poste, d’une relocalisation ou de la façon dont j’aborderais votre produit.',
  },
  footer: {
    builtWith: 'Réalisé avec Astro, avec',
    pairProgrammer: 'en pair programming.',
    source: 'Code source',
  },
  notFound: {
    title: 'Page introuvable',
    heading: 'Cette page n’existe pas.',
    back: 'Retour à l’accueil',
  },
};
