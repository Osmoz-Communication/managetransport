"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MissionsRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Récupérer la langue préférée ou utiliser français par défaut
    let preferredLang = 'fr';
    
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('user-lang');
      if (storedLang && ['fr', 'en'].includes(storedLang)) {
        preferredLang = storedLang;
      } else {
        const browserLang = navigator.language?.slice(0, 2).toLowerCase();
        if (['fr', 'en'].includes(browserLang)) {
          preferredLang = browserLang;
        }
      }
    }

    // Rediriger vers la nouvelle structure
    const newSlug = preferredLang === 'fr' ? 'nos-missions' : 'our-missions';
    router.replace(`/${preferredLang}/${newSlug}`);
  }, [router]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
    </div>
  );
}