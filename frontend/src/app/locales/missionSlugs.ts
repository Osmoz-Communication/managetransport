import { type Language } from './routes';

// Mapping des slugs de missions pour chaque langue
export const missionSlugs = {
  fr: {
    'organisation-appels-offres': 'organisation-appels-offres',
    'plan-de-transport': 'plan-de-transport', 
    'optimisation-conditionnement': 'optimisation-conditionnement',
    'enquetes-satisfaction': 'enquetes-satisfaction',
    'gestion-litiges-transport': 'gestion-litiges-transport',
    'assurance-securisation-marchandises': 'assurance-securisation-marchandises',
    'mise-en-place-kpi': 'mise-en-place-kpi',
    'choix-prestataires-qualite': 'choix-prestataires-qualite',
    'distribution-urbaine': 'distribution-urbaine'
  },
  en: {
    'organisation-appels-offres': 'tender-organization-management',
    'plan-de-transport': 'transport-plan-diagnosis',
    'optimisation-conditionnement': 'packaging-optimization',
    'enquetes-satisfaction': 'satisfaction-surveys',
    'gestion-litiges-transport': 'transport-dispute-management',
    'assurance-securisation-marchandises': 'cargo-insurance-security',
    'mise-en-place-kpi': 'kpi-implementation',
    'choix-prestataires-qualite': 'quality-service-providers',
    'distribution-urbaine': 'urban-distribution'
  }
} as const;

// Type pour les clés de missions (basé sur les slugs français)
export type MissionKey = keyof typeof missionSlugs.fr;

// Fonction pour obtenir le slug traduit d'une mission
export const getLocalizedMissionSlug = (missionKey: MissionKey, lang: Language): string => {
  return missionSlugs[lang][missionKey];
};

// Fonction pour obtenir la clé de mission depuis un slug traduit
export const getMissionKeyFromSlug = (slug: string, lang: Language): MissionKey | null => {
  const entries = Object.entries(missionSlugs[lang]) as Array<[MissionKey, string]>;
  const found = entries.find(([, missionSlug]) => missionSlug === slug);
  return found ? found[0] : null;
}; 