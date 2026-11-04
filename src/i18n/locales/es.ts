import type { Dictionary } from './en';

export const es: Dictionary = {
  meta: {
    title: 'Mateus Vieira — Ingeniero Front-end Sénior',
    description:
      'Ingeniero Front-end Sénior que construye interfaces accesibles y fiables a gran escala con React, TypeScript y micro-frontends. Disponible para trabajo remoto y reubicación en Norteamérica y Europa.',
  },
  a11y: {
    skipToContent: 'Saltar al contenido',
    primaryNav: 'Principal',
    toggleTheme: 'Cambiar modo oscuro',
    language: 'Idioma',
  },
  nav: {
    work: 'Proyectos',
    experience: 'Experiencia',
    skills: 'Habilidades',
    contact: 'Contacto',
  },
  hero: {
    role: 'Ingeniero Front-end Sénior',
    headline: 'Construyo interfaces accesibles y fiables a gran escala.',
    summary:
      'Unos cinco años creando productos con React y TypeScript. En HP Inc. desarrollo micro-frontends para una aplicación multiplataforma usada en millones de dispositivos. En la UFAM construí desde cero, como único ingeniero front-end, la plataforma de datos clínicos de un proyecto de investigación sobre demencia. Además, curso un máster con enfoque en IA.',
    availability: 'Disponible para trabajo remoto y reubicación — Norteamérica y Europa',
    location: 'Manaos, Brasil',
    overlap: 'Coincidencia horaria total con la costa este de EE. UU. y las mañanas europeas',
    getInTouch: 'Contáctame',
    downloadCv: 'Descargar CV (en inglés)',
  },
  work: {
    title: 'Proyectos destacados',
    allWork: 'Todos los proyectos',
    outcomes: 'Resultados',
    stack: 'Tecnologías',
    draft: 'Borrador — oculto en producción',
    fallbackNotice: 'Este caso de estudio aún no está traducido, por eso se muestra en inglés.',
  },
  experience: {
    title: 'Experiencia',
    educationTitle: 'Formación',
    languagesTitle: 'Idiomas',
    present: 'actualidad',
    expected: (year) => `Previsto para ${year}`,
    via: (company) => `a través de ${company}`,
    modes: { remote: 'Remoto', onSite: 'Presencial', hybrid: 'Híbrido' },
    jobs: {
      hp: {
        role: 'Ingeniero de Software Sénior',
        highlights: [
          'Desarrollé más de 12 micro-frontends en producción con React y TypeScript para la aplicación multiplataforma principal de HP (Windows, macOS, iOS, Android), usada en millones de dispositivos activos.',
          'Reduje en ~30 % el tiempo de resolución de bugs entre equipos con logs de observabilidad que respetan la privacidad, para payloads de API y nativos, y guías de diagnóstico.',
          'Diseñé pipelines de despliegue independientes con SystemJS e import maps, que gestionan la carga en tiempo de ejecución, el versionado y los despliegues DEV/ITG/PROD dentro del host nativo de Windows.',
          'Rastreé regresiones multiplataforma desde la interfaz en JavaScript, pasando por las bridge APIs, hasta las bibliotecas nativas en C#/.NET.',
          'Lideré la migración de React 16 a 18 y estandaricé Jest, Playwright y React Testing Library, manteniendo ~90 % de cobertura de tests en el CI de GitHub Actions.',
        ],
      },
      ufam: {
        role: 'Líder de Front-end · Plataforma de investigación clínica',
        note: 'Proyecto académico a tiempo parcial',
        highlights: [
          'Construí desde cero, como único ingeniero front-end, la plataforma web (React 19, TypeScript, Vite) en la que médicos, enfermeros y estudiantes de medicina registran y siguen a más de 200 pacientes de un proyecto de investigación sobre demencia. El equipo de IA del proyecto entrena sus modelos con estos datos.',
          'Desarrollé el flujo de captura de datos clínicos: 16 formularios de caso con campos condicionales y cálculo de riesgo por biomarcadores en tiempo real (ApoB, Aβ42/40).',
          'Desarrollé paneles que muestran la evolución de cada paciente, incluidos datos diarios y por hora de wearables (frecuencia cardíaca, EDA, PPG, sueño).',
          'Entregué la exportación de datos de investigación (841 campos a XLSX/CSV), informes médicos en PDF y autenticación JWT con permisos por rol.',
        ],
      },
      ipdec: {
        role: 'Desarrollador Front-end',
        highlights: [
          'Reduje los ciclos de proceso de un mes a una semana para clientes industriales como LG y Denso, con una plataforma de automatización y pruebas de calidad entre departamentos.',
          'Unifiqué tareas internas dispersas en una sola plataforma con React, TypeScript y Vue.js, reduciendo el tiempo de procesamiento en un 20 %.',
        ],
      },
      driven: {
        role: 'Desarrollador Web Full Stack',
        highlights: [
          'Desarrollé aplicaciones educativas full stack y APIs REST (React, TypeScript, Node.js, Express, Prisma, PostgreSQL) en Docker para formar a estudiantes de bootcamp.',
        ],
      },
    },
    degrees: {
      msc: 'Máster en Ingeniería Eléctrica (especialización en IA)',
      bsc: 'Grado en Ciencias de la Computación',
    },
    spoken: {
      pt: { name: 'Portugués', level: 'Nativo' },
      en: { name: 'Inglés', level: 'Competencia profesional plena' },
    },
  },
  skills: {
    title: 'Habilidades',
    groups: {
      languages: 'Lenguajes',
      frontend: 'Frontend',
      architecture: 'Arquitectura',
      backend: 'Backend y APIs',
      delivery: 'Pruebas y entrega',
      crossPlatform: 'Multiplataforma',
    },
  },
  contact: {
    title: 'Contacto',
    lead: '¿Buscas a alguien para un equipo de front-end o de producto con IA? Hablemos de puestos, reubicación o de cómo abordaría tu producto.',
  },
  footer: {
    builtWith: 'Hecho con Astro, con',
    pairProgrammer: 'como pair programmer.',
    source: 'Código fuente',
  },
  notFound: {
    title: 'Página no encontrada',
    heading: 'Esta página no existe.',
    back: 'Volver al inicio',
  },
};
