"use client";

import Image from "next/image";
import { SocialIcon } from "../../ui/social-icon";
import Link from "next/link";
import { useLanguage } from "../../../contexts/LanguageContext";
import { useTranslation } from "../../../hooks/useTranslation";
import { getLocalizedPath } from "../../../locales/routes";

export default function Footer() {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);
  const year = new Date().getFullYear();
  
  return (
    <footer 
      id="footer"
      className="bg-white border-t border-gray-200"
      role="contentinfo"
      aria-label="Informations de contact et liens du site"
    >
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-20 px-4 py-10 md:pt-12 md:pb-4 max-w-7xl mx-auto w-full text-center md:text-left">
        {/* Bloc logo + slogan */}
        <div 
          className="flex-1 min-w-[220px] flex flex-col items-center text-center"
          role="banner"
          aria-labelledby="footer-logo"
        >
          <Image 
            src="/arbre-de-vie-150x150.png" 
            alt="Logo Manage Transport - Votre conseiller personnel en transport" 
            width={150}
            height={150}
            sizes="150px"
            className="w-auto h-auto mx-auto" 
            priority={false}
          />
          <div 
            id="footer-logo"
            className="my-5 text-lg text-center"
            dangerouslySetInnerHTML={{ __html: t("footer.slogan") as string }}
            aria-label="Slogan de l'entreprise"
          />
        </div>
        
        {/* Bloc liens */}
        <nav 
          className="flex-1 min-w-[180px] flex flex-col items-center"
          role="navigation"
          aria-labelledby="footer-nav-title"
        >
          <h3 id="footer-nav-title" className="font-bold text-primary text-xl mb-4">
            {t("footer.importantPages") as string}
          </h3>
          <ul className="flex flex-col gap-1 text-base items-center list-none" role="list">
            <li>
              <Link 
                href={`/${lang}`} 
                className="text-gray-900 hover:text-primary focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 transition-colors"
                aria-label={`${t("footer.links.home") as string} - Page d'accueil`}
              >
                {t("footer.links.home") as string}
              </Link>
            </li>
            <li>
              <Link 
                href={getLocalizedPath('missions', lang)} 
                className="text-gray-900 hover:text-primary focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 transition-colors"
                aria-label={`${t("footer.links.missions") as string} - Nos services`}
              >
                {t("footer.links.missions") as string}
              </Link>
            </li>
            <li>
              <Link 
                href={getLocalizedPath('values', lang)} 
                className="text-gray-900 hover:text-primary focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 transition-colors"
                aria-label={`${t("footer.links.values") as string} - Nos valeurs`}
              >
                {t("footer.links.values") as string}
              </Link>
            </li>
            <li>
              <Link 
                href={getLocalizedPath('about', lang)} 
                className="text-gray-900 hover:text-primary focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 transition-colors"
                aria-label={`${t("footer.links.about") as string} - À propos de nous`}
              >
                {t("footer.links.about") as string}
              </Link>
            </li>
            <li>
              <Link 
                href={getLocalizedPath('contact', lang)} 
                className="text-gray-900 hover:text-primary focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 transition-colors"
                aria-label={`${t("footer.links.contact") as string} - Nous contacter`}
              >
                {t("footer.links.contact") as string}
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Bloc contacts + social icons */}
        <div 
          className="flex-1 min-w-[220px] flex flex-col items-center"
          role="complementary"
          aria-labelledby="footer-contact-title"
        >
          <h3 id="footer-contact-title" className="font-bold text-primary text-xl mb-4">
            {t("footer.contacts") as string}
          </h3>
          <address className="flex flex-col gap-3 text-base items-center not-italic">
            <div className="flex items-center gap-2" role="group" aria-label="Numéro de téléphone">
              <svg width={20} height={20} fill="#2d347b" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.61a1 1 0 01-1 1C10.07 22 2 13.93 2 4.99a1 1 0 011-1h3.61a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.21z" />
              </svg>
              <span aria-label="Téléphone">{t("footer.phone") as string}</span>
            </div>
            <div className="flex items-center gap-2" role="group" aria-label="Adresse email">
              <svg width={20} height={20} fill="#2d347b" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
              </svg>
              <span aria-label="Email">{t("footer.email") as string}</span>
            </div>
            <div className="flex items-center gap-2" role="group" aria-label="Adresse postale">
              <svg width={20} height={20} fill="#2d347b" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span aria-label="Adresse">{t("footer.address") as string}</span>
            </div>
          </address>
          <div 
            className="flex justify-center gap-4 mt-6"
            role="list"
            aria-label="Liens vers nos réseaux sociaux"
          >
            <SocialIcon brand="facebook" variant="footer" />
            <SocialIcon brand="linkedin" variant="footer" />
            <SocialIcon brand="instagram" variant="footer" />
          </div>
        </div>
      </div>
      <div 
        className="bg-black text-white text-center py-3 text-base font-bold"
        role="contentinfo"
        aria-label="Copyright et mentions légales"
      >
        ©{year} ManageTransport - {t("footer.copyright") as string}
      </div>
    </footer>
  );
} 