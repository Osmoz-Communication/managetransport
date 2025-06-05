export type Language = 'fr' | 'en';

export const routes = {
  fr: {
    home: '',
    missions: 'nos-missions',
    values: 'nos-valeurs', 
    about: 'qui-sommes-nous',
    contact: 'contact'
  },
  en: {
    home: '',
    missions: 'our-missions',
    values: 'our-values',
    about: 'about-us', 
    contact: 'contact'
  }
} as const;

export const getLocalizedPath = (path: keyof typeof routes.fr, lang: Language): string => {
  const localizedSlug = routes[lang][path];
  return `/${lang}${localizedSlug ? `/${localizedSlug}` : ''}`;
};

export const getRouteFromSlug = (slug: string, lang: Language): keyof typeof routes.fr | null => {
  const entries = Object.entries(routes[lang]) as Array<[keyof typeof routes.fr, string]>;
  const found = entries.find(([, routeSlug]) => routeSlug === slug);
  return found ? found[0] : null;
};

export const defaultLanguage: Language = 'fr';
export const languages: Language[] = ['fr', 'en']; 