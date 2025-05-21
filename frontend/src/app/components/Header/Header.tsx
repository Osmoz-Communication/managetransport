"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import LanguageSelector from "./LanguageSelector";
import SocialIcon from "../SocialIcon";

const supportedLangs = ['fr', 'en'];
const LANG_KEY = 'user-lang';

export default function Header() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem(LANG_KEY);
      if (storedLang && supportedLangs.includes(storedLang)) {
        setLang(storedLang as 'fr' | 'en');
      } else {
        const browserLang = navigator.language?.slice(0, 2).toLowerCase();
        if (supportedLangs.includes(browserLang)) {
          setLang(browserLang as 'fr' | 'en');
        }
      }

      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleLangChange = (newLang: 'fr' | 'en') => {
    setLang(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(LANG_KEY, newLang);
    }
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-30 transition-all duration-300">
      <div className="flex items-center justify-between w-full px-4 sm:px-6 py-3 md:py-4 max-w-screen">
        <div className="flex items-center flex-shrink-0">
          <Logo className={`transition-all duration-300 ${isScrolled ? 'w-[120px] md:w-[180px]' : 'w-[150px] md:w-[250px]'}`} />
        </div>
        <nav className={`hidden md:flex flex-1 justify-center min-w-0 transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
          <Nav lang={lang} />
        </nav>
        <div className="hidden md:flex items-center gap-2 bg-transparent">
          <LanguageSelector currentLang={lang} onLangChange={handleLangChange} />
          <div className="h-6 w-px bg-gray-200 mx-2" />
          <div className="flex items-center gap-2 bg-transparent">
            <SocialIcon brand="facebook" variant="header" />
            <SocialIcon brand="linkedin" variant="header" />
            <SocialIcon brand="instagram" variant="header" />
          </div>
        </div>
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Ouvrir le menu"
        >
          <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 animate-fade-in">
          <Nav lang={lang} />
          <div className="flex items-center gap-4 mt-6 justify-center">
            <LanguageSelector currentLang={lang} onLangChange={handleLangChange} />
            <div className="h-6 w-px bg-gray-200" />
            <div className="flex items-center gap-2 bg-transparent">
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