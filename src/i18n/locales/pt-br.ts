import type { Dictionary } from './en';

export const ptBr: Dictionary = {
  meta: {
    title: 'Mateus Vieira — Engenheiro Front-end Sênior',
    description:
      'Construo interfaces acessíveis e com IA em grande escala. Aberto a vagas remotas e realocação para a América do Norte e a Europa.',
  },
  a11y: {
    skipToContent: 'Pular para o conteúdo',
    primaryNav: 'Principal',
    toggleTheme: 'Alternar modo escuro',
    language: 'Idioma',
  },
  nav: {
    work: 'Projetos',
    experience: 'Experiência',
    skills: 'Habilidades',
    contact: 'Contato',
  },
  hero: {
    role: 'Engenheiro Front-end Sênior',
    headline: 'Construo interfaces acessíveis e com IA em grande escala.',
    summary:
      'Quase cinco anos entregando produtos com React e TypeScript. Hoje sou responsável pela arquitetura de micro-frontends na HP Inc., usados em milhões de dispositivos no mundo todo, e lidero o front-end de um projeto de P&D em saúde com IA na UFAM.',
    availability: 'Aberto a vagas remotas e realocação — América do Norte e Europa',
    location: 'Manaus, Brasil',
    getInTouch: 'Entre em contato',
    downloadCv: 'Baixar currículo',
  },
  work: {
    title: 'Projetos em destaque',
    allWork: 'Todos os projetos',
    outcomes: 'Resultados',
    stack: 'Tecnologias',
    draft: 'Rascunho — oculto em produção',
    fallbackNotice: 'Este case ainda não foi traduzido, por isso aparece em inglês.',
  },
  experience: {
    title: 'Experiência',
    educationTitle: 'Formação',
    present: 'Atual',
    expected: (year) => `Previsão: ${year}`,
    jobs: {
      hp: {
        role: 'Engenheiro de Software Sênior',
        highlights: [
          'Arquitetura de micro-frontends para um produto multiplataforma usado em milhões de dispositivos ativos no mundo todo.',
        ],
      },
      ufam: {
        role: 'Líder de Front-end · P&D em saúde com IA',
        highlights: [
          'Liderança do front-end de um projeto de pesquisa que leva modelos de IA para interfaces de uso clínico.',
        ],
      },
    },
    degrees: {
      msc: 'Mestrado em Inteligência Artificial',
    },
  },
  skills: {
    title: 'Habilidades',
    groups: {
      languages: 'Linguagens',
      frontend: 'Frontend',
      quality: 'Qualidade e acessibilidade',
      delivery: 'Entrega',
    },
  },
  contact: {
    title: 'Contato',
    lead: 'Contratando para um time de front-end ou de produto com IA? Vamos conversar sobre vagas, realocação ou sobre como eu abordaria o seu produto.',
  },
  footer: {
    builtWith: 'Feito com Astro, com',
    pairProgrammer: 'como pair programmer.',
    source: 'Código-fonte',
  },
  notFound: {
    title: 'Página não encontrada',
    heading: 'Esta página não existe.',
    back: 'Voltar para o início',
  },
};
