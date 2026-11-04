import type { Dictionary } from './en';

export const fr: Dictionary = {
  meta: {
    title: 'Mateus Vieira — Ingénieur Front-end Senior',
    description:
      'Ingénieur Front-end Senior qui conçoit des interfaces accessibles et fiables, à grande échelle, avec React, TypeScript et les micro-frontends. Ouvert au télétravail et à la relocalisation en Amérique du Nord et en Europe.',
  },
  a11y: {
    skipToContent: 'Aller au contenu',
    primaryNav: 'Principale',
    toggleTheme: 'Activer le mode sombre',
    language: 'Langue',
  },
  nav: {
    work: 'Projets',
    openSource: 'Open source',
    writing: 'Articles',
    experience: 'Expérience',
    skills: 'Compétences',
    contact: 'Contact',
  },
  hero: {
    role: 'Ingénieur Front-end Senior',
    headline: 'Je conçois des interfaces accessibles et fiables, à grande échelle.',
    summary:
      'Environ cinq ans à livrer des produits React et TypeScript. Chez HP Inc., je développe des micro-frontends pour une application multiplateforme utilisée sur des millions d’appareils. À l’UFAM, j’ai créé de zéro et je dirige le front-end de la plateforme de données cliniques d’un projet de recherche sur les maladies neurodégénératives. Je prépare également un master orienté IA.',
    availability: 'Ouvert au télétravail et à la relocalisation — Amérique du Nord et Europe',
    location: 'Manaus, Brésil',
    overlap: 'Disponible sur les horaires de la côte Est américaine et des matinées européennes',
    getInTouch: 'Me contacter',
    downloadCv: 'Télécharger le CV (en anglais)',
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
  openSource: {
    title: 'Open source',
    status: (version) => `v${version} · en développement actif`,
    source: 'Code source',
    demos: 'Démos en ligne',
    projects: {
      'parley-ui': {
        tagline: 'Des composants React accessibles pour les interfaces d’IA',
        description:
          'La plupart des interfaces de chat IA envoient le texte en streaming dans une région aria-live et s’arrêtent là : les lecteurs d’écran relisent toute la réponse à chaque token ou annoncent des fragments sans suite. parley-ui est ma réponse open source : de petits composants React sans style qui traitent correctement l’accessibilité des interfaces d’IA.',
        highlights: [
          'StreamingText annonce les réponses en streaming phrase par phrase, au lieu de submerger les lecteurs d’écran de fragments.',
          'PromptInput gère Entrée, Maj+Entrée et Échap, n’envoie jamais au milieu d’une composition IME et garde son bouton d’envoi focalisable.',
          'ToolCall montre ce que fait un agent et annonce chaque changement de statut une seule fois, sans relire les appels déjà terminés de l’historique.',
          '3,4 Ko gzippé, TypeScript strict, 49 tests avec Testing Library et axe-core, et un contrôle d’accessibilité dans la CI.',
        ],
      },
    },
  },
  writing: {
    title: 'Articles',
    allPosts: 'Tous les articles',
    readingTime: (minutes) => `${minutes} min de lecture`,
    fallbackNotice: 'Cet article n’est pas encore traduit ; il est donc affiché en anglais.',
  },
  experience: {
    title: 'Expérience',
    educationTitle: 'Formation',
    languagesTitle: 'Langues',
    present: 'aujourd’hui',
    expected: (year) => `Prévu en ${year}`,
    via: (company) => `via ${company}`,
    modes: { remote: 'Télétravail', onSite: 'Sur site', hybrid: 'Hybride' },
    jobs: {
      hp: {
        role: 'Ingénieur logiciel senior',
        highlights: [
          'Développement de plus de 12 micro-frontends en production avec React et TypeScript pour l’application multiplateforme principale de HP (Windows, macOS, iOS, Android), utilisée sur des millions d’appareils actifs.',
          'Réduction d’environ 30 % du temps de résolution des bugs entre équipes grâce à des logs d’observabilité respectueux de la vie privée pour les payloads API et natifs, accompagnés de guides de diagnostic.',
          'Conception de pipelines de déploiement indépendants avec SystemJS et les import maps, gérant le chargement à l’exécution, le versionnage et les déploiements DEV/ITG/PROD dans l’hôte Windows natif.',
          'Analyse de régressions multiplateformes depuis l’interface JavaScript, à travers les bridge APIs, jusqu’aux bibliothèques natives C#/.NET.',
          'Pilotage de la migration de React 16 à 18 et standardisation de Jest, Playwright et React Testing Library, avec une couverture de tests d’environ 90 % dans la CI GitHub Actions.',
        ],
      },
      ufam: {
        role: 'Lead Front-end · Plateforme de recherche clinique',
        note: 'Projet académique à temps partiel',
        highlights: [
          'Création de zéro et direction du front-end (environ 90 % du code) de la plateforme web (React 19, TypeScript, Vite) où médecins, infirmiers et étudiants en médecine enregistrent et suivent plus de 200 patients d’un projet de recherche sur les maladies neurodégénératives. L’équipe IA du projet construit ses modèles à partir de ces données.',
          'Développement du flux de saisie des données cliniques : 16 formulaires de cas avec champs conditionnels et scores de risque calculés en temps réel.',
          'Développement de tableaux de bord qui suivent l’évolution de chaque patient, y compris les données d’objets connectés.',
          'Livraison de l’export des données de recherche (841 champs vers XLSX/CSV), de rapports médicaux en PDF et d’une authentification JWT avec permissions par rôle.',
          'Développement du flux de demandes d’ajustement intégré à la plateforme : les soignants décrivent leur besoin, joignent captures d’écran ou PDF et voient une date de livraison estimée.',
        ],
      },
      ipdec: {
        role: 'Développeur Front-end',
        highlights: [
          'Réduction des cycles de traitement d’un mois à une semaine pour des clients industriels comme LG et Denso, grâce à une plateforme transverse d’automatisation et de tests qualité.',
          'Regroupement de tâches internes dispersées dans une seule plateforme React, TypeScript et Vue.js, réduisant le temps de traitement de 20 %.',
        ],
      },
      driven: {
        role: 'Développeur Web Full Stack',
        highlights: [
          'Développement d’applications pédagogiques full stack et d’API REST (React, TypeScript, Node.js, Express, Prisma, PostgreSQL) sous Docker pour former des élèves de bootcamp.',
        ],
      },
    },
    degrees: {
      msc: 'Master en génie électrique (spécialité IA)',
      bsc: 'Licence en informatique',
    },
    spoken: {
      pt: { name: 'Portugais', level: 'Langue maternelle' },
      en: { name: 'Anglais', level: 'Compétence professionnelle complète' },
    },
  },
  skills: {
    title: 'Compétences',
    groups: {
      languages: 'Langages',
      frontend: 'Frontend',
      architecture: 'Architecture',
      backend: 'Backend et API',
      delivery: 'Tests et livraison',
      crossPlatform: 'Multiplateforme',
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
