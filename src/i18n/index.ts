import type { Locale } from './config';
import { de } from './locales/de';
import { en, type Dictionary } from './locales/en';
import { es } from './locales/es';
import { fr } from './locales/fr';
import { ptBr } from './locales/pt-br';

const dictionaries: Record<Locale, Dictionary> = { en, es, fr, de, 'pt-br': ptBr };

export function t(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export * from './config';
export type { Dictionary };
export * from './format';
