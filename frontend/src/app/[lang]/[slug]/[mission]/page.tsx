import { notFound } from 'next/navigation';
import { languages, type Language } from '../../../locales/routes';
import { AnimatedMissionDetails } from '../../../components/features/missions';
import { getMissionKeyFromSlug } from '../../../locales/missionSlugs';

interface Props {
  params: Promise<{ lang: string; slug: string; mission: string }>;
}

interface MissionData {
  title: string;
  short: string;
  intro: string;
  details: string[];
  image: string;
  more?: string;
  slug: string;
}

export async function generateStaticParams() {
  const { missionSlugs } = await import('../../../locales/missionSlugs');
  const paths: { lang: string; slug: string; mission: string }[] = [];
  
  languages.forEach(lang => {
    const missionsSlug = lang === 'fr' ? 'nos-missions' : 'our-missions';
    
    // Ajouter toutes les missions pour cette langue
    Object.entries(missionSlugs[lang]).forEach(([, translatedSlug]) => {
      paths.push({
        lang,
        slug: missionsSlug,
        mission: translatedSlug
      });
    });
  });
  
  return paths;
}

export default async function MissionPage({ params }: Props) {
  const { lang, slug, mission: missionSlug } = await params;
  
  // Vérifier si la langue est valide
  if (!languages.includes(lang as Language)) {
    notFound();
  }
  
  // Vérifier si le slug correspond à "missions"
  const isMissionRoute = (lang === 'fr' && slug === 'nos-missions') || 
                        (lang === 'en' && slug === 'our-missions');
  
  if (!isMissionRoute) {
    notFound();
  }

  // Obtenir la clé de mission depuis le slug traduit
  const missionKey = getMissionKeyFromSlug(missionSlug, lang as Language);
  
  if (!missionKey) {
    notFound();
  }

  // Charger les traductions pour obtenir les données de mission
  const translations = await import(`../../../locales/${lang}.ts`);
  const missions = translations.default.missionsPage.missions;
  
  // Trouver la mission correspondante par sa clé française (slug original)
  const mission = missions.find((m: MissionData) => m.slug === missionKey);
  
  if (!mission) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-white flex flex-col items-center pb-16">
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-10 mt-10 px-4">
        <AnimatedMissionDetails mission={mission} />
      </div>
    </div>
  );
} 