import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getRouteFromSlug, languages, type Language } from '../../locales/routes';

// Import des composants de pages
import { ContactPage } from '../../(pages)/contact';
import { MissionsPage } from '../../(pages)/missions';
import { ValuesPage } from '../../(pages)/values';
import { AboutPage } from '../../(pages)/about';

interface Props {
  params: Promise<{ lang: string; slug: string }>;
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  
  if (!languages.includes(lang as Language)) {
    return {};
  }
  
  const route = getRouteFromSlug(slug, lang as Language);
  const isEnglish = lang === 'en';
  
  const metadataMap = {
    contact: {
      titles: {
        fr: 'Contact - Manage Transport',
        en: 'Contact - Manage Transport'
      },
      descriptions: {
        fr: 'Contactez Manage Transport pour vos besoins en conseil transport et logistique. Devis gratuit et réponse rapide sous 24h.',
        en: 'Contact Manage Transport for your transport and logistics consulting needs. Free quote and quick response within 24h.'
      }
    },
    missions: {
      titles: {
        fr: 'Nos Missions - Services de conseil en transport',
        en: 'Our Missions - Transport consulting services'
      },
      descriptions: {
        fr: 'Découvrez nos services de conseil en transport : appels d\'offres, plans de transport, optimisation des coûts, gestion des litiges.',
        en: 'Discover our transport consulting services: tenders, transport plans, cost optimization, dispute management.'
      }
    },
    values: {
      titles: {
        fr: 'Nos Valeurs - Manage Transport',
        en: 'Our Values - Manage Transport'
      },
      descriptions: {
        fr: 'Les valeurs qui guident Manage Transport : confiance, réactivité, organisation, maîtrise des coûts et satisfaction client.',
        en: 'The values that guide Manage Transport: trust, reactivity, organization, cost control and customer satisfaction.'
      }
    },
    about: {
      titles: {
        fr: 'Qui sommes-nous - À propos de Manage Transport',
        en: 'About us - About Manage Transport'
      },
      descriptions: {
        fr: 'Rencontrez Jean-Claude Ravineau, expert-conseil en transport avec plus de 20 ans d\'expérience dans la logistique.',
        en: 'Meet Jean-Claude Ravineau, transport consulting expert with over 20 years of experience in logistics.'
      }
    }
  };
  
  const routeData = metadataMap[route as keyof typeof metadataMap];
  
  if (!routeData) {
    return {};
  }
  
  return {
    title: routeData.titles[lang as keyof typeof routeData.titles],
    description: routeData.descriptions[lang as keyof typeof routeData.descriptions],
    alternates: {
      canonical: `/${lang}/${slug}`,
      languages: {
        'fr': `/fr/${lang === 'en' ? 
          slug.replace('our-', 'nos-').replace('about-us', 'qui-sommes-nous') 
          : slug}`,
        'en': `/en/${lang === 'fr' ? 
          slug.replace('nos-', 'our-').replace('qui-sommes-nous', 'about-us') 
          : slug}`,
      },
    },
    openGraph: {
      title: routeData.titles[lang as keyof typeof routeData.titles],
      description: routeData.descriptions[lang as keyof typeof routeData.descriptions],
      url: `https://managetransport.fr/${lang}/${slug}`,
      locale: isEnglish ? 'en_US' : 'fr_FR',
    },
    twitter: {
      title: routeData.titles[lang as keyof typeof routeData.titles],
      description: routeData.descriptions[lang as keyof typeof routeData.descriptions],
    },
  };
}

export default async function DynamicPage({ params }: Props) {
  const { lang, slug } = await params;
  
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