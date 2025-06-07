"use client";

import { useState, useEffect, useCallback } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import LanguageSelector from "./LanguageSelector";
import { SocialIcon } from "../../ui/social-icon";
import { useLanguage } from "../../../contexts/LanguageContext";

export default function Header() {
  const { lang, changeLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  // Effet pour le montage (éviter l'hydratation mismatch)
  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  // Fermer le menu avec Escape et gérer l'overflow du body
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Effet pour le scroll avec calcul en temps réel
  useEffect(() => {
    if (!isMounted) return;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      // Calculer le progrès du scroll (0 à 1)
      const maxScroll = 60;
      const progress = Math.min(currentScrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateScroll();
    
    // Listener pour les changements de taille d'écran
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMounted]);

  // Rendu côté serveur : état initial fixe
  if (!isMounted) {
    return (
      <header 
        className="w-full bg-white border-b border-gray-100"
        role="banner"
        aria-label="Header principal"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          height: 'var(--header-height)', // Hauteur fixe CSS
          backgroundColor: 'white'
        }}
      >
        <div className="flex items-center justify-between w-full px-4 sm:px-6 py-3 md:py-4 max-w-screen h-full">
          <div className="flex items-center flex-shrink-0">
            <Logo className="w-[150px] md:w-[250px]" />
          </div>
          <nav 
            id="main-navigation"
            className="hidden md:flex flex-1 justify-center min-w-0"
            role="navigation"
            aria-label="Navigation principale"
          >
            <Nav lang={lang} />
          </nav>
          <div className="hidden md:flex items-center gap-2 bg-transparent" role="complementary" aria-label="Actions utilisateur">
            <LanguageSelector currentLang={lang} onLangChange={changeLang} />
            <div className="h-6 w-px bg-gray-200 mx-2" aria-hidden="true" />
            <div className="flex items-center gap-2 bg-transparent" role="list" aria-label="Réseaux sociaux">
              <div role="listitem">
                <SocialIcon brand="facebook" variant="header" />
              </div>
              <div role="listitem">
                <SocialIcon brand="linkedin" variant="header" />
              </div>
              <div role="listitem">
                <SocialIcon brand="instagram" variant="header" />
              </div>
            </div>
          </div>
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            onClick={toggleMenu}
            aria-label="Ouvrir le menu de navigation"
            aria-expanded={false}
            aria-controls="mobile-menu"
            aria-haspopup="menu"
            type="button"
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
    );
  }

  // Calculs interpolés basés sur le progrès du scroll
  const isScrolled = scrollProgress > 0.1;
  
  // Interpolation fluide des valeurs (0 = état normal, 1 = état scrollé)
  // py-3 = 12px mobile, py-4 = 16px desktop → réduit à 8px/12px quand scrollé
  const isDesktop = windowWidth >= 768;
  const paddingY = isDesktop 
    ? 16 - (4 * scrollProgress) // 16px -> 12px (desktop)
    : 12 - (4 * scrollProgress); // 12px -> 8px (mobile)
  const logoScale = 1 - (0.2 * scrollProgress); // 1 -> 0.8
  const navScale = 1 - (0.1 * scrollProgress); // 1 -> 0.9

  return (
    <header 
      className={`w-full bg-white border-b border-gray-100 ${isScrolled ? 'shadow-md' : ''}`}
      role="banner"
      aria-label="Header principal"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        height: 'var(--header-height)', // Hauteur toujours fixe
        backgroundColor: 'white'
      }}
    >
      <div 
        className="flex items-center justify-between w-full px-4 sm:px-6 max-w-screen h-full"
        style={{
          paddingTop: `${paddingY}px`,
          paddingBottom: `${paddingY}px`,
          transition: 'none' // Pas de transition CSS, tout est calculé en temps réel
        }}
      >
        <div className="flex items-center flex-shrink-0">
          <div
            style={{
              transform: `scale(${logoScale})`,
              transformOrigin: 'left center',
              transition: 'none'
            }}
          >
            <Logo className="w-[150px] md:w-[250px]" />
          </div>
        </div>
        
        <nav 
          id="main-navigation"
          className="hidden md:flex flex-1 justify-center min-w-0"
          role="navigation"
          aria-label="Navigation principale"
          style={{
            transform: `scale(${navScale})`,
            transformOrigin: 'center',
            transition: 'none'
          }}
        >
          <Nav lang={lang} />
        </nav>
        
        <div 
          className="hidden md:flex items-center gap-2 bg-transparent" 
          role="complementary" 
          aria-label="Actions utilisateur"
          style={{
            transform: `scale(${navScale})`,
            transformOrigin: 'right center',
            transition: 'none'
          }}
        >
          <LanguageSelector currentLang={lang} onLangChange={changeLang} />
          <div className="h-6 w-px bg-gray-200 mx-2" aria-hidden="true" />
          <div className="flex items-center gap-2 bg-transparent" role="list" aria-label="Réseaux sociaux">
            <div role="listitem">
              <SocialIcon brand="facebook" variant="header" />
            </div>
            <div role="listitem">
              <SocialIcon brand="linkedin" variant="header" />
            </div>
            <div role="listitem">
              <SocialIcon brand="instagram" variant="header" />
            </div>
          </div>
        </div>
        
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-haspopup="menu"
          type="button"
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
          className="md:hidden bg-white border-t border-gray-100 px-4 py-4 animate-fade-in absolute top-full left-0 right-0 shadow-lg"
          role="menu"
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
              <div role="listitem">
                <SocialIcon brand="facebook" variant="header" />
              </div>
              <div role="listitem">
                <SocialIcon brand="linkedin" variant="header" />
              </div>
              <div role="listitem">
                <SocialIcon brand="instagram" variant="header" />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 