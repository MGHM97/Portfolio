export const profile = {
  name: 'Mateus Vieira',
  timezone: 'UTC−4',
  email: 'mateusoliveira469@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/mateusoliveira469',
    github: 'https://github.com/MGHM97',
    source: 'https://github.com/MGHM97/Portfolio',
  },
  cv: null as string | null,
};

export const figures = [
  { id: 'microFrontends', value: '12+' },
  { id: 'triage', value: '~30%' },
  { id: 'patients', value: '200+' },
  { id: 'coverage', value: '~90%' },
] as const;

export type FigureId = (typeof figures)[number]['id'];

export type WorkMode = 'remote' | 'onSite' | 'hybrid';

export const experience = [
  {
    id: 'hp',
    company: 'HP Inc.',
    via: 'Wipro',
    city: 'Palo Alto, CA',
    country: 'US',
    mode: 'remote',
    start: '2025-05',
    end: null,
  },
  {
    id: 'ufam',
    company: 'UFAM',
    via: null,
    city: 'Manaus, AM',
    country: 'BR',
    mode: 'onSite',
    start: '2025-07',
    end: null,
  },
  {
    id: 'ipdec',
    company: 'Instituto IPDEC',
    via: null,
    city: 'Manaus, AM',
    country: 'BR',
    mode: 'hybrid',
    start: '2022-10',
    end: '2025-02',
  },
  {
    id: 'driven',
    company: 'Driven Education',
    via: null,
    city: 'São Paulo, SP',
    country: 'BR',
    mode: 'remote',
    start: '2022-01',
    end: '2022-10',
  },
] as const satisfies readonly {
  id: string;
  company: string;
  via: string | null;
  city: string;
  country: string;
  mode: WorkMode;
  start: string;
  end: string | null;
}[];

export const education = [
  { id: 'msc', school: 'UFAM', end: '2027', expected: true },
  { id: 'bsc', school: 'FAM', end: '2024', expected: false },
] as const;

export const spokenLanguages = ['pt', 'en'] as const;

export const skills = {
  languages: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'Sass'],
  frontend: [
    'React 19',
    'Vue.js',
    'Vite',
    'MUI',
    'React Hook Form',
    'React Router',
    'Styled Components',
  ],
  architecture: [
    'Micro-frontends',
    'single-spa',
    'SystemJS',
    'Import maps',
    'Feature flags',
    'Design systems',
    'WCAG 2.2',
  ],
  backend: ['Node.js', 'Express', 'REST APIs', 'Prisma', 'PostgreSQL', 'MongoDB', 'JWT'],
  delivery: [
    'Jest',
    'React Testing Library',
    'Playwright',
    'Docker',
    'GitHub Actions',
    'Azure DevOps',
    'Webpack',
  ],
  crossPlatform: ['C# / .NET', 'JavaScript–native bridge APIs'],
} as const;

export type ExperienceId = (typeof experience)[number]['id'];
export type EducationId = (typeof education)[number]['id'];
export type SpokenLanguage = (typeof spokenLanguages)[number];
export type SkillGroup = keyof typeof skills;

export const openSource = [
  {
    id: 'parley-ui',
    name: 'parley-ui',
    version: '0.1',
    repo: 'https://github.com/MGHM97/parley-ui',
    demo: 'https://mghm97.github.io/parley-ui/',
    stack: ['React', 'TypeScript', 'WAI-ARIA', 'Vitest', 'axe-core', 'Storybook'],
  },
] as const satisfies readonly {
  id: string;
  name: string;
  version: string;
  repo: string;
  demo: string | null;
  stack: readonly string[];
}[];

export type OpenSourceId = (typeof openSource)[number]['id'];
