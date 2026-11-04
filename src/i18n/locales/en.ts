import type { EducationId, ExperienceId, SkillGroup } from '../../data/profile';

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  a11y: {
    skipToContent: string;
    primaryNav: string;
    toggleTheme: string;
    language: string;
  };
  nav: {
    work: string;
    experience: string;
    skills: string;
    contact: string;
  };
  hero: {
    role: string;
    headline: string;
    summary: string;
    availability: string;
    location: string;
    getInTouch: string;
    downloadCv: string;
  };
  work: {
    title: string;
    allWork: string;
    outcomes: string;
    stack: string;
    draft: string;
    fallbackNotice: string;
  };
  experience: {
    title: string;
    educationTitle: string;
    present: string;
    expected: (year: string) => string;
    jobs: Record<ExperienceId, { role: string; highlights: string[] }>;
    degrees: Record<EducationId, string>;
  };
  skills: {
    title: string;
    groups: Record<SkillGroup, string>;
  };
  contact: {
    title: string;
    lead: string;
  };
  footer: {
    builtWith: string;
    pairProgrammer: string;
    source: string;
  };
  notFound: {
    title: string;
    heading: string;
    back: string;
  };
}

export const en: Dictionary = {
  meta: {
    title: 'Mateus Vieira — Senior Front-end Engineer',
    description:
      'I build accessible, AI-powered interfaces at scale. Open to remote roles and relocation in North America and Europe.',
  },
  a11y: {
    skipToContent: 'Skip to content',
    primaryNav: 'Primary',
    toggleTheme: 'Toggle dark mode',
    language: 'Language',
  },
  nav: {
    work: 'Work',
    experience: 'Experience',
    skills: 'Skills',
    contact: 'Contact',
  },
  hero: {
    role: 'Senior Front-end Engineer',
    headline: 'I build accessible, AI‑powered interfaces at scale.',
    summary:
      'Nearly five years shipping React and TypeScript products. I currently architect micro-frontends at HP Inc. serving millions of devices worldwide, and lead front-end engineering for an AI-driven healthcare R&D project at UFAM.',
    availability: 'Open to remote roles and relocation — North America & Europe',
    location: 'Manaus, Brazil',
    getInTouch: 'Get in touch',
    downloadCv: 'Download CV',
  },
  work: {
    title: 'Selected work',
    allWork: 'All work',
    outcomes: 'Outcomes',
    stack: 'Stack',
    draft: 'Draft — hidden in production',
    fallbackNotice: 'This case study is not translated yet, so it is shown in English.',
  },
  experience: {
    title: 'Experience',
    educationTitle: 'Education',
    present: 'Present',
    expected: (year) => `Expected ${year}`,
    jobs: {
      hp: {
        role: 'Senior Software Engineer',
        highlights: [
          'Architect micro-frontends for a cross-platform product used on millions of active devices globally.',
        ],
      },
      ufam: {
        role: 'Lead Front-end Engineer · AI Healthcare R&D',
        highlights: [
          'Lead front-end for a research project that brings AI models into clinical-facing user experiences.',
        ],
      },
    },
    degrees: {
      msc: 'M.Sc. in Artificial Intelligence',
    },
  },
  skills: {
    title: 'Skills',
    groups: {
      languages: 'Languages',
      frontend: 'Frontend',
      quality: 'Quality & a11y',
      delivery: 'Delivery',
    },
  },
  contact: {
    title: 'Contact',
    lead: "Hiring for a front-end or AI product team? I'm happy to talk about roles, relocation, or how I'd approach your product.",
  },
  footer: {
    builtWith: 'Built with Astro, with',
    pairProgrammer: 'as pair programmer.',
    source: 'Source',
  },
  notFound: {
    title: 'Page not found',
    heading: "This page doesn't exist.",
    back: 'Back to home',
  },
};
