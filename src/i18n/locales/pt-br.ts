import type { Dictionary } from './en';

export const ptBr: Dictionary = {
  meta: {
    title: 'Mateus Vieira — Engenheiro Front-end Sênior',
    description:
      'Engenheiro Front-end Sênior que constrói interfaces acessíveis e confiáveis em grande escala com React, TypeScript e micro-frontends. Aberto a vagas remotas e realocação para a América do Norte e a Europa.',
  },
  a11y: {
    skipToContent: 'Pular para o conteúdo',
    primaryNav: 'Principal',
    toggleTheme: 'Alternar modo escuro',
    language: 'Idioma',
  },
  nav: {
    work: 'Projetos',
    openSource: 'Open source',
    writing: 'Artigos',
    experience: 'Experiência',
    skills: 'Habilidades',
    contact: 'Contato',
  },
  hero: {
    role: 'Engenheiro Front-end Sênior',
    headline: 'Construo interfaces acessíveis e confiáveis em grande escala.',
    summary:
      'Cerca de cinco anos construindo produtos com React e TypeScript. Na HP Inc., desenvolvo micro-frontends para um app multiplataforma usado em milhões de dispositivos. Na UFAM, criei do zero e lidero o front-end da plataforma de dados clínicos de um projeto de pesquisa sobre demência. Também faço mestrado com ênfase em IA.',
    availability: 'Aberto a vagas remotas e realocação — América do Norte e Europa',
    location: 'Manaus, Brasil',
    overlap: 'Horário compatível com a costa leste dos EUA e com as manhãs na Europa',
    getInTouch: 'Entre em contato',
    downloadCv: 'Baixar currículo (em inglês)',
  },
  work: {
    title: 'Projetos em destaque',
    allWork: 'Todos os projetos',
    outcomes: 'Resultados',
    stack: 'Tecnologias',
    draft: 'Rascunho — oculto em produção',
    fallbackNotice: 'Este case ainda não foi traduzido, por isso aparece em inglês.',
  },
  openSource: {
    title: 'Open source',
    status: (version) => `v${version} · em desenvolvimento ativo`,
    source: 'Código-fonte',
    demos: 'Demos ao vivo',
    projects: {
      'parley-ui': {
        tagline: 'Componentes React acessíveis para interfaces de IA',
        description:
          'A maioria dos chats com IA joga o texto em streaming numa região aria-live e para por aí: o leitor de tela relê a resposta inteira a cada token ou anuncia fragmentos soltos. O parley-ui é a minha resposta open source: componentes React pequenos e sem estilo que acertam a acessibilidade de interfaces de IA.',
        highlights: [
          'O StreamingText anuncia respostas em streaming uma frase completa por vez, em vez de inundar o leitor de tela com fragmentos.',
          'O PromptInput trata Enter, Shift+Enter e Esc, nunca envia no meio de uma composição IME e mantém o botão de enviar focável.',
          'O ToolCall mostra o que um agente está fazendo e anuncia cada mudança de status uma única vez, sem reler chamadas já concluídas do histórico.',
          '3,4 KB com gzip, TypeScript estrito, 49 testes com Testing Library e axe-core, e uma checagem de acessibilidade no CI.',
        ],
      },
    },
  },
  writing: {
    title: 'Artigos',
    allPosts: 'Todos os artigos',
    readingTime: (minutes) => `${minutes} min de leitura`,
    fallbackNotice: 'Este artigo ainda não foi traduzido, por isso aparece em inglês.',
  },
  experience: {
    title: 'Experiência',
    educationTitle: 'Formação',
    languagesTitle: 'Idiomas',
    present: 'atual',
    expected: (year) => `Previsão: ${year}`,
    via: (company) => `via ${company}`,
    modes: { remote: 'Remoto', onSite: 'Presencial', hybrid: 'Híbrido' },
    jobs: {
      hp: {
        role: 'Engenheiro de Software Sênior',
        highlights: [
          'Desenvolvi mais de 12 micro-frontends em produção com React e TypeScript para o principal app multiplataforma da HP (Windows, macOS, iOS, Android), usado em milhões de dispositivos ativos.',
          'Acelerei em ~30% a resolução de bugs entre times com logs de observabilidade que respeitam a privacidade, expondo payloads de API e nativos, e playbooks de troubleshooting.',
          'Arquitetei pipelines de deploy independentes com SystemJS e import maps, cuidando do carregamento em tempo de execução, versionamento e rollouts DEV/ITG/PROD dentro do host nativo Windows.',
          'Rastreei regressões multiplataforma desde a interface em JavaScript, passando pelas bridge APIs, até as bibliotecas nativas em C#/.NET.',
          'Liderei a migração do React 16 para o 18 e padronizei Jest, Playwright e React Testing Library, mantendo ~90% de cobertura de testes no CI com GitHub Actions.',
        ],
      },
      ufam: {
        role: 'Líder de Front-end · Plataforma de pesquisa clínica',
        note: 'Projeto acadêmico em meio período',
        highlights: [
          'Criei do zero e lidero o front-end (~90% do código) da plataforma web (React 19, TypeScript, Vite) onde médicos, enfermeiros e estudantes de medicina cadastram e acompanham mais de 200 pacientes de um projeto de pesquisa sobre demência. O time de IA do projeto constrói seus modelos a partir desses dados.',
          'Desenvolvi o fluxo de captura de dados clínicos: 16 fichas clínicas (CRFs) com campos condicionais e cálculo de risco por biomarcadores em tempo real (ApoB, Aβ42/40).',
          'Desenvolvi dashboards que acompanham a evolução de cada paciente, incluindo dados diários e por hora de wearables (frequência cardíaca, EDA, PPG, sono).',
          'Entreguei a exportação de dados de pesquisa (841 campos para XLSX/CSV), laudos médicos em PDF e autenticação JWT com permissões por perfil.',
        ],
      },
      ipdec: {
        role: 'Desenvolvedor Front-end',
        highlights: [
          'Reduzi ciclos de processo de um mês para uma semana para clientes industriais como LG e Denso, com uma plataforma de automação e testes de qualidade integrando vários departamentos.',
          'Unifiquei tarefas internas dispersas em uma única plataforma com React, TypeScript e Vue.js, reduzindo o tempo de processamento em 20%.',
        ],
      },
      driven: {
        role: 'Desenvolvedor Web Full Stack',
        highlights: [
          'Desenvolvi aplicações educacionais full stack e APIs REST (React, TypeScript, Node.js, Express, Prisma, PostgreSQL) em Docker para formar alunos de bootcamp.',
        ],
      },
    },
    degrees: {
      msc: 'Mestrado em Engenharia Elétrica (ênfase em IA)',
      bsc: 'Bacharelado em Ciência da Computação',
    },
    spoken: {
      pt: { name: 'Português', level: 'Nativo' },
      en: { name: 'Inglês', level: 'Proficiência profissional plena' },
    },
  },
  skills: {
    title: 'Habilidades',
    groups: {
      languages: 'Linguagens',
      frontend: 'Frontend',
      architecture: 'Arquitetura',
      backend: 'Backend e APIs',
      delivery: 'Testes e entrega',
      crossPlatform: 'Multiplataforma',
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
