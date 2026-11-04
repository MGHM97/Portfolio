import type {
  EducationId,
  ExperienceId,
  OpenSourceId,
  SkillGroup,
  SpokenLanguage,
  WorkMode,
} from '../../data/profile';

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
    openSource: string;
    writing: string;
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
    overlap: string;
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
  openSource: {
    title: string;
    status: (version: string) => string;
    source: string;
    demos: string;
    projects: Record<OpenSourceId, { tagline: string; description: string; highlights: string[] }>;
  };
  writing: {
    title: string;
    allPosts: string;
    readingTime: (minutes: number) => string;
    fallbackNotice: string;
  };
  experience: {
    title: string;
    educationTitle: string;
    languagesTitle: string;
    present: string;
    expected: (year: string) => string;
    via: (company: string) => string;
    modes: Record<WorkMode, string>;
    jobs: Record<ExperienceId, { role: string; note?: string; highlights: string[] }>;
    degrees: Record<EducationId, string>;
    spoken: Record<SpokenLanguage, { name: string; level: string }>;
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
      'Senior Front-end Engineer building accessible, reliable interfaces at scale with React, TypeScript and micro-frontends. Open to remote roles and relocation in North America and Europe.',
  },
  a11y: {
    skipToContent: 'Skip to content',
    primaryNav: 'Primary',
    toggleTheme: 'Toggle dark mode',
    language: 'Language',
  },
  nav: {
    work: 'Work',
    openSource: 'Open source',
    writing: 'Writing',
    experience: 'Experience',
    skills: 'Skills',
    contact: 'Contact',
  },
  hero: {
    role: 'Senior Front-end Engineer',
    headline: 'I build accessible, reliable interfaces at scale.',
    summary:
      'About five years building React and TypeScript products. At HP Inc. I ship micro-frontends for the HP App, used on millions of devices. At UFAM I built from scratch, and lead, the front-end of the clinical data platform behind a neurodegenerative disease research project. I’m also pursuing a master’s with a focus on AI.',
    availability: 'Open to remote roles and relocation — North America & Europe',
    location: 'Manaus, Brazil',
    overlap: 'Full overlap with US Eastern and European mornings',
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
  openSource: {
    title: 'Open source',
    status: (version) => `v${version} · in active development`,
    source: 'Source code',
    demos: 'Live demos',
    projects: {
      'parley-ui': {
        tagline: 'Accessible React components for AI interfaces',
        description:
          'Most AI chat interfaces stream text into a live region and stop there, so screen readers either re-read the whole answer on every token or announce broken fragments. parley-ui is my open-source answer: small, unstyled React components that get the accessibility of AI interfaces right.',
        highlights: [
          'StreamingText announces streamed responses one complete sentence at a time instead of flooding screen readers with fragments.',
          'PromptInput handles Enter, Shift+Enter and Escape, never sends in the middle of an IME composition, and keeps its send button focusable.',
          'ToolCall shows what an agent is doing and announces each status change once, while finished calls from chat history stay quiet.',
          '3.4 KB gzipped, strict TypeScript, 49 tests with Testing Library and axe-core, and an accessibility gate in CI.',
        ],
      },
    },
  },
  writing: {
    title: 'Writing',
    allPosts: 'All writing',
    readingTime: (minutes) => `${minutes} min read`,
    fallbackNotice: 'This article is not translated yet, so it is shown in English.',
  },
  experience: {
    title: 'Experience',
    educationTitle: 'Education',
    languagesTitle: 'Languages',
    present: 'Present',
    expected: (year) => `Expected ${year}`,
    via: (company) => `via ${company}`,
    modes: { remote: 'Remote', onSite: 'On-site', hybrid: 'Hybrid' },
    jobs: {
      hp: {
        role: 'Senior Software Engineer',
        highlights: [
          "Built 12+ production micro-frontends in React and TypeScript for the HP App, HP's cross-platform app (Windows, macOS, iOS, Android) where people add and manage their laptops, desktops, monitors and accessories, used on millions of active devices.",
          'Cut cross-team bug resolution time by ~30% with privacy-compliant observability logs for API and native payloads, plus troubleshooting playbooks.',
          'Delivered micro-frontends through independent deployment pipelines on SystemJS and import maps, from runtime loading and versioning to DEV/ITG/PROD rollouts inside the native Windows host.',
          'Traced cross-platform regressions from the JavaScript UI through bridge APIs down to native C#/.NET libraries.',
          'Carried out the React 16 → 18 upgrades and standardized Jest, Playwright and React Testing Library, keeping ~90% test coverage in GitHub Actions CI.',
        ],
      },
      ufam: {
        role: 'Lead Front-end Engineer · Clinical research platform',
        note: 'Part-time academic project',
        highlights: [
          'Started from scratch and lead the front-end (~90% of the code) of the web platform (React 19, TypeScript, Vite) where doctors, nurses and medical students record and follow 200+ patients in a neurodegenerative disease research project. The project’s AI team builds its models on this data.',
          'Built the clinical data capture workflow: 16 case report forms with conditional fields and risk scores calculated in real time.',
          'Built dashboards that track each patient over time, including data from wearable devices.',
          'Delivered research data export (841 fields to XLSX/CSV), PDF medical reports and role-based JWT authentication.',
          'Built the in-app change-request flow: clinicians describe what they need, attach screenshots or PDFs and see an estimated delivery date.',
        ],
      },
      ipdec: {
        role: 'Front-end Developer',
        highlights: [
          'Cut process lifecycles from one month to one week for industrial clients such as LG and Denso with a cross-departmental automation and quality-testing platform.',
          'Unified scattered internal tasks into a single React, TypeScript and Vue.js platform, reducing processing time by 20%.',
        ],
      },
      driven: {
        role: 'Full Stack Web Developer',
        highlights: [
          'Built full-stack educational apps and REST APIs (React, TypeScript, Node.js, Express, Prisma, PostgreSQL) in Docker to teach bootcamp students.',
        ],
      },
    },
    degrees: {
      msc: "Master's in Electrical Engineering (AI focus)",
      bsc: 'B.Sc. in Computer Science',
    },
    spoken: {
      pt: { name: 'Portuguese', level: 'Native' },
      en: { name: 'English', level: 'Full professional proficiency' },
    },
  },
  skills: {
    title: 'Skills',
    groups: {
      languages: 'Languages',
      frontend: 'Frontend',
      architecture: 'Architecture',
      backend: 'Backend & APIs',
      delivery: 'Testing & delivery',
      crossPlatform: 'Cross-platform',
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
