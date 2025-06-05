"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { defaultLanguage, type Language } from './locales/routes';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Récupérer la langue stockée ou celle du navigateur
    let preferredLang: Language = defaultLanguage;
    
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('user-lang');
      if (storedLang && ['fr', 'en'].includes(storedLang)) {
        preferredLang = storedLang as Language;
      } else {
        const browserLang = navigator.language?.slice(0, 2).toLowerCase();
        if (['fr', 'en'].includes(browserLang)) {
          preferredLang = browserLang as Language;
        }
      }
    }

    // Rediriger vers la page d'accueil avec la langue appropriée
    router.replace(`/${preferredLang}`);
  }, [router]);

  // Affichage d'un loading pendant la redirection
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
    </div>
  );
}