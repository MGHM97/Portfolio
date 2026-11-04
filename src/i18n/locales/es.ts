import type { Dictionary } from './en';

export const es: Dictionary = {
  meta: {
    title: 'Mateus Vieira — Ingeniero Front-end Sénior',
    description:
      'Construyo interfaces accesibles y potenciadas por IA a gran escala. Disponible para trabajo remoto y reubicación en Norteamérica y Europa.',
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
    headline: 'Construyo interfaces accesibles y potenciadas por IA a gran escala.',
    summary:
      'Casi cinco años creando productos con React y TypeScript. Actualmente diseño la arquitectura de micro-frontends en HP Inc., usados en millones de dispositivos en todo el mundo, y lidero el front-end de un proyecto de I+D en salud con IA en la UFAM.',
    availability: 'Disponible para trabajo remoto y reubicación — Norteamérica y Europa',
    location: 'Manaos, Brasil',
    getInTouch: 'Contáctame',
    downloadCv: 'Descargar CV',
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
    present: 'Actualidad',
    expected: (year) => `Previsto para ${year}`,
    jobs: {
      hp: {
        role: 'Ingeniero de Software Sénior',
        highlights: [
          'Diseño la arquitectura de micro-frontends para un producto multiplataforma usado en millones de dispositivos activos en todo el mundo.',
        ],
      },
      ufam: {
        role: 'Líder de Front-end · I+D en salud con IA',
        highlights: [
          'Lidero el front-end de un proyecto de investigación que lleva modelos de IA a experiencias de uso clínico.',
        ],
      },
    },
    degrees: {
      msc: 'Máster en Inteligencia Artificial',
    },
  },
  skills: {
    title: 'Habilidades',
    groups: {
      languages: 'Lenguajes',
      frontend: 'Frontend',
      quality: 'Calidad y accesibilidad',
      delivery: 'Entrega',
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
