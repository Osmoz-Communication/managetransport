import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { languages, type Language } from '../locales/routes';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '../components/layout/header/Header';
import HeaderPortal from '../components/layout/header/HeaderPortal';
import MainContent from '../components/layout/MainContent';
import Footer from '../components/layout/footer/Footer';

interface Props {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  
  const isEnglish = lang === 'en';
  
  const titles = {
    fr: 'Accueil - Expert-conseil en transport et logistique',
    en: 'Home - Transport and Logistics Consulting Expert'
  };
  
  const descriptions = {
    fr: 'Expert-conseil en transport et logistique. Optimisation des coûts, organisation des appels d\'offres, plans de transport personnalisés. Solutions sur-mesure pour votre entreprise.',
    en: 'Transport and logistics consulting expert. Cost optimization, tender organization, personalized transport plans. Tailor-made solutions for your business.'
  };
  
  const keywords = {
    fr: ['transport', 'logistique', 'conseil', 'optimisation', 'appels d\'offres', 'France', 'expert', 'coûts'],
    en: ['transport', 'logistics', 'consulting', 'optimization', 'tenders', 'France', 'expert', 'costs']
  };
  
  return {
    title: titles[lang as keyof typeof titles],
    description: descriptions[lang as keyof typeof descriptions],
    keywords: keywords[lang as keyof typeof keywords],
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'fr': '/fr',
        'en': '/en',
      },
    },
    openGraph: {
      title: titles[lang as keyof typeof titles],
      description: descriptions[lang as keyof typeof descriptions],
      url: `https://managetransport.fr/${lang}`,
      locale: isEnglish ? 'en_US' : 'fr_FR',
      alternateLocale: isEnglish ? ['fr_FR'] : ['en_US'],
    },
    twitter: {
      title: titles[lang as keyof typeof titles],
      description: descriptions[lang as keyof typeof descriptions],
    },
  };
}

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params;
  
  // Vérifier si la langue est valide
  if (!languages.includes(lang as Language)) {
    notFound();
  }

  return (
    <LanguageProvider initialLang={lang as Language}>
      <HeaderPortal>
        <Header />
      </HeaderPortal>
      <MainContent>
        {children}
      </MainContent>
      <Footer />
    </LanguageProvider>
  );
} 