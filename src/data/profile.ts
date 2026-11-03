export const profile = {
  name: 'Mateus Vieira',
  role: 'Senior Front-end Engineer',
  headline: 'I build accessible, AI‑powered interfaces at scale.',
  summary:
    'Nearly five years shipping React and TypeScript products. I currently architect micro-frontends at HP Inc. serving millions of devices worldwide, and lead front-end engineering for an AI-driven healthcare R&D project at UFAM.',
  location: 'Manaus, Brazil',
  timezone: 'UTC−4',
  availability: 'Open to remote roles and relocation — North America & Europe',
  email: 'mateusoliveira469@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/mateusoliveira469',
    github: 'https://github.com/MGHM97',
  },
  cv: null as string | null,
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: 'HP Inc.',
    role: 'Senior Software Engineer',
    period: 'YYYY — Present',
    highlights: [
      'Architect micro-frontends for a cross-platform product used on millions of active devices globally.',
    ],
  },
  {
    company: 'UFAM',
    role: 'Lead Front-end Engineer · AI Healthcare R&D',
    period: 'YYYY — Present',
    highlights: [
      'Lead front-end for a research project that brings AI models into clinical-facing user experiences.',
    ],
  },
];

export const education = [
  {
    school: 'UFAM',
    degree: 'M.Sc. in Artificial Intelligence',
    period: 'Expected 2027',
  },
];

export const skills: Record<string, string[]> = {
  Languages: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'C#'],
  Frontend: ['React', 'Vue', 'Micro-frontends', 'Vite', 'Sass', 'MUI'],
  Quality: ['Web Accessibility (WCAG)', 'Jest', 'Playwright'],
  Delivery: ['Node.js', 'Docker', 'GitHub Actions', 'Azure DevOps'],
};
