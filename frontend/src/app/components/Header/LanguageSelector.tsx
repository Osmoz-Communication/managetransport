import { useState, useEffect, useRef } from "react";

type Language = 'fr' | 'en';

interface LanguageSelectorProps {
  currentLang: Language;
  onLangChange: (lang: Language) => void;
}

const flags = {
  en: (
    <svg className="w-6 h-4" viewBox="0 0 36 24">
      <rect width="36" height="24" fill="#012169" />
      <path d="M0,0 L36,24 M36,0 L0,24" stroke="#fff" strokeWidth="2.4" />
      <path d="M18,0 L18,24 M0,12 L36,12" stroke="#fff" strokeWidth="4" />
      <path d="M18,0 L18,24 M0,12 L36,12" stroke="#C8102E" strokeWidth="2.4" />
    </svg>
  ),
  fr: (
    <svg className="w-6 h-4" viewBox="0 0 36 24">
      <rect width="36" height="24" fill="#ED2939" />
      <rect width="12" height="24" fill="#002395" />
      <rect x="12" width="12" height="24" fill="#fff" />
    </svg>
  ),
};

export default function LanguageSelector({ currentLang, onLangChange }: LanguageSelectorProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={(e) => {
          e.preventDefault();
          setOpen((o) => !o);
        }}
        className="flex items-center justify-center p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Choisir la langue"
        aria-expanded={open}
        type="button"
      >
        {flags[currentLang]}
      </button>
      {open && (
        <div className="absolute top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-lg py-2 border border-gray-200 z-[9999] min-w-[48px]">
          {(['fr', 'en'] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => {
                onLangChange(lang);
                setOpen(false);
              }}
              className={`w-full p-2 hover:bg-gray-100 transition-colors flex items-center justify-center ${
                currentLang === lang ? 'bg-gray-100' : ''
              }`}
              aria-label={lang.toUpperCase()}
            >
              {flags[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 