import fr from '../locales/fr';
import en from '../locales/en';

type TranslationValue = string | { [key: string]: TranslationValue } | TranslationValue[];

type Translations = {
  [key: string]: { [key: string]: TranslationValue };
};

const translations: Translations = { fr, en };

export function useTranslation(lang: 'fr' | 'en') {
  function t(key: string) {
    const keys = key.split('.');
    let value: TranslationValue = translations[lang];
    for (const k of keys) {
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        value = (value as { [key: string]: TranslationValue })[k];
      } else {
        return key;
      }
      if (value === undefined) {
        return key;
      }
    }
    return value;
  }
  return { t };
} 