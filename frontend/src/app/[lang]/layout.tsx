import { notFound } from 'next/navigation';
import { languages, type Language } from '../locales/routes';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '../components/layout/header/Header';
import Footer from '../components/layout/footer/Footer';

interface Props {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params;
  
  // Vérifier si la langue est valide
  if (!languages.includes(lang as Language)) {
    notFound();
  }

  return (
    <LanguageProvider initialLang={lang as Language}>
      <Header />
      {children}
      <Footer />
    </LanguageProvider>
  );
} 