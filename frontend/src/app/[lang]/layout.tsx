import { notFound } from 'next/navigation';
import { languages, type Language } from '../locales/routes';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

interface Props {
  children: React.ReactNode;
  params: { lang: string };
}

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default function LangLayout({ children, params }: Props) {
  // Vérifier si la langue est valide
  if (!languages.includes(params.lang as Language)) {
    notFound();
  }

  return (
    <LanguageProvider initialLang={params.lang as Language}>
      <Header />
      {children}
      <Footer />
    </LanguageProvider>
  );
} 