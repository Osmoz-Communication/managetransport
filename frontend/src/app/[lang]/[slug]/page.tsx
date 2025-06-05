import { notFound } from 'next/navigation';
import { getRouteFromSlug, languages, type Language } from '../../locales/routes';

// Import des composants de pages
import ContactPage from '../../components/ContactPage';
import MissionsPage from '../../components/MissionsPage';
import ValuesPage from '../../components/ValuesPage';
import AboutPage from '../../components/AboutPage';

interface Props {
  params: { lang: string; slug: string };
}

export async function generateStaticParams() {
  const paths: { lang: string; slug: string }[] = [];
  
  languages.forEach(lang => {
    // Ajout des routes statiques pour chaque langue
    paths.push(
      { lang, slug: 'contact' },
      { lang, slug: lang === 'fr' ? 'nos-missions' : 'our-missions' },
      { lang, slug: lang === 'fr' ? 'nos-valeurs' : 'our-values' },
      { lang, slug: lang === 'fr' ? 'qui-sommes-nous' : 'about-us' }
    );
  });
  
  return paths;
}

export default function DynamicPage({ params }: Props) {
  const { lang, slug } = params;
  
  // Vérifier si la langue est valide
  if (!languages.includes(lang as Language)) {
    notFound();
  }
  
  // Obtenir la route correspondante au slug
  const route = getRouteFromSlug(slug, lang as Language);
  
  if (!route) {
    notFound();
  }
  
  // Rendu du composant approprié selon la route
  switch (route) {
    case 'contact':
      return <ContactPage />;
    case 'missions':
      return <MissionsPage />;
    case 'values':
      return <ValuesPage />;
    case 'about':
      return <AboutPage />;
    default:
      notFound();
  }
} 