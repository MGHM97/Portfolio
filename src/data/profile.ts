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

export const experience = [
  { id: 'hp', company: 'HP Inc.', start: 'YYYY', end: null },
  { id: 'ufam', company: 'UFAM', start: 'YYYY', end: null },
] as const;

export const education = [{ id: 'msc', school: 'UFAM', end: '2027', expected: true }] as const;

export const skills = {
  languages: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'C#'],
  frontend: ['React', 'Vue', 'Micro-frontends', 'Vite', 'Sass', 'MUI'],
  quality: ['WCAG 2.2', 'WAI-ARIA', 'Jest', 'Playwright'],
  delivery: ['Node.js', 'Docker', 'GitHub Actions', 'Azure DevOps'],
} as const;

export type ExperienceId = (typeof experience)[number]['id'];
export type EducationId = (typeof education)[number]['id'];
export type SkillGroup = keyof typeof skills;
