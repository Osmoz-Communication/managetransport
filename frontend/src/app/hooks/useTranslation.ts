import fr from '../locales/fr';
import en from '../locales/en';

const translations = { fr, en };

export function useTranslation(lang: 'fr' | 'en') {
  function t(key: string) {
    const keys = key.split('.');
    let value: any = translations[lang];
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) return key;
    }
    return value;
  }
  return { t };
} 