"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { getRouteFromSlug, getLocalizedPath, type Language } from '../locales/routes';
import { getMissionKeyFromSlug, getLocalizedMissionSlug } from '../locales/missionSlugs';

interface LanguageContextType {
  lang: Language;
  changeLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const supportedLangs = ['fr', 'en'];
const LANG_KEY = 'user-lang';

export const LanguageProvider = ({ 
  children, 
  initialLang 
}: { 
  children: ReactNode;
  initialLang?: Language;
}) => {
  const [lang, setLang] = useState<Language>(initialLang || 'fr');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (initialLang) {
      setLang(initialLang);
      if (typeof window !== 'undefined') {
        localStorage.setItem(LANG_KEY, initialLang);
      }
    } else if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem(LANG_KEY);
      if (storedLang && supportedLangs.includes(storedLang)) {
        setLang(storedLang as Language);
      } else {
        const browserLang = navigator.language?.slice(0, 2).toLowerCase();
        if (supportedLangs.includes(browserLang)) {
          setLang(browserLang as Language);
        }
      }
    }
  }, [initialLang]);

  // Synchroniser la langue avec l'URL actuelle
  useEffect(() => {
    if (pathname) {
      const pathParts = pathname.split('/').filter(Boolean);
      if (pathParts.length >= 1) {
        const urlLang = pathParts[0];
        if (supportedLangs.includes(urlLang) && urlLang !== lang) {
          setLang(urlLang as Language);
        }
      }
    }
  }, [pathname, lang]);

  const changeLang = (newLang: Language) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(LANG_KEY, newLang);
      
      // Rediriger vers la nouvelle langue avec slug traduit
      const currentPath = window.location.pathname;
      
      // Extraire la langue et les segments actuels
      const pathParts = currentPath.split('/').filter(Boolean);
      if (pathParts.length >= 1) {
        const currentLang = pathParts[0] as Language;
        const currentSlug = pathParts[1] || '';
        const missionSlug = pathParts[2] || '';
        
        // Vérifier si on est sur une page de mission spécifique
        if (missionSlug && (currentSlug === 'nos-missions' || currentSlug === 'our-missions')) {
          // On est sur une mission spécifique
          const missionKey = getMissionKeyFromSlug(missionSlug, currentLang);
          if (missionKey) {
            // Traduire vers la nouvelle langue
            const newMissionsPath = getLocalizedPath('missions', newLang);
            const newMissionSlug = getLocalizedMissionSlug(missionKey, newLang);
            const newPath = `${newMissionsPath}/${newMissionSlug}`;
            router.push(newPath);
            return;
          }
        }
        
        // Pour les autres pages, utiliser la logique existante
        const route = currentSlug ? getRouteFromSlug(currentSlug, currentLang) : 'home';
        const newPath = route ? getLocalizedPath(route, newLang) : `/${newLang}`;
        router.push(newPath);
      } else {
        // Si pas de langue dans l'URL, rediriger vers la page d'accueil
        router.push(`/${newLang}`);
      }
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 