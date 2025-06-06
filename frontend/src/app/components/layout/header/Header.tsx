"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import LanguageSelector from "./LanguageSelector";
import { SocialIcon } from "../../ui/social-icon";
import { useLanguage } from "../../../contexts/LanguageContext";



export default function Header() {
  const { lang, changeLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <header 
      className="w-full bg-white border-b border-gray-100 sticky top-0 z-30 transition-all duration-300"
      role="banner"
      aria-label="Header principal"
    >
      <div className="flex items-center justify-between w-full px-4 sm:px-6 py-3 md:py-4 max-w-screen">
        <div className="flex items-center flex-shrink-0">
          <Logo className={`transition-all duration-300 ${isScrolled ? 'w-[120px] md:w-[180px]' : 'w-[150px] md:w-[250px]'}`} />
        </div>
        <nav 
          id="main-navigation"
          className={`hidden md:flex flex-1 justify-center min-w-0 transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}
          role="navigation"
          aria-label="Navigation principale"
        >
          <Nav lang={lang} />
        </nav>
        <div className="hidden md:flex items-center gap-2 bg-transparent" role="complementary" aria-label="Actions utilisateur">
          <LanguageSelector currentLang={lang} onLangChange={changeLang} />
          <div className="h-6 w-px bg-gray-200 mx-2" aria-hidden="true" />
          <div className="flex items-center gap-2 bg-transparent" role="list" aria-label="Réseaux sociaux">
            <SocialIcon brand="facebook" variant="header" />
            <SocialIcon brand="linkedin" variant="header" />
            <SocialIcon brand="instagram" variant="header" />
          </div>
        </div>
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-haspopup="true"
        >
          <svg 
            width={24} 
            height={24} 
            fill="none" 
            stroke="currentColor" 
            strokeWidth={2} 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden bg-white border-t border-gray-100 px-4 py-4 animate-fade-in"
          role="dialog"
          aria-modal="false"
          aria-labelledby="mobile-menu-title"
        >
          <h2 id="mobile-menu-title" className="sr-only">Menu de navigation mobile</h2>
          <nav role="navigation" aria-label="Navigation mobile">
            <Nav lang={lang} />
          </nav>
          <div className="flex items-center gap-4 mt-6 justify-center" role="complementary" aria-label="Actions utilisateur mobile">
            <LanguageSelector currentLang={lang} onLangChange={changeLang} />
            <div className="h-6 w-px bg-gray-200" aria-hidden="true" />
            <div className="flex items-center gap-2 bg-transparent" role="list" aria-label="Réseaux sociaux">
              <SocialIcon brand="facebook" variant="header" />
              <SocialIcon brand="linkedin" variant="header" />
              <SocialIcon brand="instagram" variant="header" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 