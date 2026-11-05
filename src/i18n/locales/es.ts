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
    openSource: 'Código abierto',
    writing: 'Artículos',
    experience: 'Experiencia',
    skills: 'Habilidades',
    contact: 'Contacto',
  },
  hero: {
    role: 'Ingeniero Front-end Sénior',
    headline: 'Construyo interfaces accesibles y fiables a gran escala.',
    summary:
      'Unos cinco años creando productos con React y TypeScript. En HP Inc. desarrollo micro-frontends para la HP App, usada en millones de dispositivos. En la UFAM creé desde cero, y lidero, el front-end de la plataforma de datos clínicos de un proyecto de investigación sobre enfermedades neurodegenerativas. Además, curso un máster con enfoque en IA.',
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
  openSource: {
    title: 'Código abierto',
    status: (version) => `v${version} · en desarrollo activo`,
    source: 'Código fuente',
    demos: 'Demos en vivo',
    projects: {
      'parley-ui': {
        tagline: 'Componentes React accesibles para interfaces de IA',
        description:
          'La mayoría de los chats con IA vuelcan el texto en streaming en una región aria-live y ahí se quedan: los lectores de pantalla releen toda la respuesta con cada token o anuncian fragmentos sueltos. parley-ui es mi respuesta en código abierto: componentes React pequeños y sin estilos que resuelven bien la accesibilidad de las interfaces de IA.',
        highlights: [
          'StreamingText anuncia las respuestas en streaming frase a frase, en lugar de saturar al lector de pantalla con fragmentos.',
          'PromptInput gestiona Enter, Shift+Enter y Escape, nunca envía en mitad de una composición IME y mantiene el botón de envío enfocable.',
          'ToolCall muestra lo que hace un agente y anuncia cada cambio de estado una sola vez, sin volver a leer las llamadas ya terminadas del historial.',
          '3,4 KB con gzip, TypeScript estricto, 49 tests con Testing Library y axe-core, y una verificación de accesibilidad en el CI.',
        ],
      },
    },
  },
  writing: {
    title: 'Artículos',
    allPosts: 'Todos los artículos',
    readingTime: (minutes) => `${minutes} min de lectura`,
    fallbackNotice: 'Este artículo aún no está traducido, por eso se muestra en inglés.',
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
          'Desarrollé más de 12 micro-frontends en producción con React y TypeScript para la HP App, la aplicación multiplataforma de HP (Windows, macOS, iOS, Android) donde las personas añaden y gestionan sus portátiles, ordenadores de sobremesa, monitores y accesorios, usada en millones de dispositivos activos.',
          'Reduje en ~30 % el tiempo de resolución de bugs entre equipos con logs de observabilidad que respetan la privacidad, para payloads de API y nativos, y guías de diagnóstico.',
          'Entregué micro-frontends a través de pipelines de despliegue independientes basados en SystemJS e import maps, desde la carga en tiempo de ejecución y el versionado hasta los despliegues DEV/ITG/PROD dentro del host nativo de Windows.',
          'Rastreé regresiones multiplataforma desde la interfaz en JavaScript, pasando por las bridge APIs, hasta las bibliotecas nativas en C#/.NET.',
          'Ejecuté las migraciones de React 16 a 18 y estandaricé Jest, Playwright y React Testing Library, manteniendo ~90 % de cobertura de tests en el CI de GitHub Actions.',
        ],
      },
      ufam: {
        role: 'Líder de Front-end · Plataforma de investigación clínica',
        note: 'Proyecto académico a tiempo parcial',
        highlights: [
          'Creé desde cero y lidero el front-end (~90 % del código) de la plataforma web (React 19, TypeScript, Vite) en la que médicos, enfermeros y estudiantes de medicina registran y siguen a más de 200 pacientes de un proyecto de investigación sobre enfermedades neurodegenerativas. El equipo de IA del proyecto entrena sus modelos con estos datos.',
          'Desarrollé el flujo de captura de datos clínicos: 16 formularios de caso con campos condicionales y puntuaciones de riesgo calculadas en tiempo real.',
          'Desarrollé paneles que muestran la evolución de cada paciente, incluidos datos de dispositivos wearables.',
          'Entregué la exportación de datos de investigación (841 campos a XLSX/CSV), informes médicos en PDF y autenticación JWT con permisos por rol.',
          'Desarrollé el flujo de solicitudes de ajuste dentro de la plataforma: los profesionales describen lo que necesitan, adjuntan capturas o PDF y ven una fecha estimada de entrega.',
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
    creditBefore: 'Diseñado y desarrollado por Mateus Vieira, con desarrollo asistido por IA (',
    creditAfter: ').',
    source: 'Código fuente',
  },
  notFound: {
    title: 'Página no encontrada',
    heading: 'Esta página no existe.',
    back: 'Volver al inicio',
  },
};
