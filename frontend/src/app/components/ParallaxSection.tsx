"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../hooks/useTranslation";
import { getLocalizedPath } from "../locales/routes";

interface ContactInfo {
  title: string;
  phone: string;
  description: string;
  button: string;
}

interface AvailabilityInfo {
  title: string;
  schedule: string;
  morning: string;
  afternoon: string;
  button: string;
}

interface EmailInfo {
  title: string;
}

export const ParallaxSection = () => {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);
  
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Appliquer un effet de parallaxe plus subtil et ajuster l'opacité
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]); // Moins de mouvement vertical
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.5, 1, 1, 0.5]
  ); // Apparition et disparition plus douces

  const availability = t("homepage.parallax.availability") as unknown as AvailabilityInfo;
  const contact = t("homepage.parallax.contact") as unknown as ContactInfo;
  const email = t("homepage.parallax.email") as unknown as EmailInfo;

  return (
    <section
      ref={ref}
      className="relative min-h-[80vh] md:min-h-[calc(100vh-128px)] overflow-hidden flex flex-col justify-end"
    >
      {/* Image de fond avec effet parallaxe via Framer Motion */}
      <motion.div
        style={{ y, opacity }} // Utiliser les transformations de Framer Motion
        className="absolute inset-0 w-full h-[120%] z-0" // Assurer que l'image est derrière le contenu
      >
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80"
          alt="Paysage montagneux"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </motion.div>
      {/* Titre et sous-titre animés avec AOS */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-24 pb-10 px-4">
        <h2
          data-aos="fade-down"
          className="text-4xl md:text-5xl font-bold text-white mb-4 text-center drop-shadow-lg"
        >
          {t("homepage.parallax.title") as string}
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg md:text-2xl text-white mb-10 text-center drop-shadow max-w-3xl mx-auto"
        >
          {t("homepage.parallax.subtitle") as string}
        </p>
      </div>
      {/* Cartes animées avec AOS */}
      <div className="relative z-20 flex flex-col md:flex-row justify-center items-stretch gap-0 md:gap-0 w-full max-w-6xl mx-auto -mb-24 px-4 md:px-0">
        {/* Carte 1 */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex-1 bg-[#5d6ef8] p-8 md:p-10 flex flex-col items-start rounded-t-xl md:rounded-l-xl md:rounded-tr-none text-white min-w-[260px]"
        >
          <div className="mb-4">
            {/* Icône d'horloge SVG */}
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="font-bold text-2xl mb-2">{availability.title}</div>
          <div className="mb-2 text-base font-semibold">
            {availability.schedule}
          </div>
          <div className="mb-1">{availability.morning}</div>
          <div className="mb-4">{availability.afternoon}</div>
          <Link
            href={getLocalizedPath('contact', lang)}
            className="mt-auto underline font-semibold flex items-center gap-1"
          >
            {availability.button} <span>›</span>
          </Link>
        </div>
        {/* Carte 2 */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex-1 bg-[#4a6cf7] p-8 md:p-10 flex flex-col items-start text-white min-w-[260px]"
        >
          <div className="mb-4">
            {/* Icône de téléphone SVG */}
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="font-bold text-2xl mb-2">{contact.title}</div>
          <div className="mb-2 text-2xl font-bold">{contact.phone}</div>
          <div className="mb-4">
            {contact.description}
          </div>
          <Link
            href={getLocalizedPath('contact', lang)}
            className="mt-auto underline font-semibold flex items-center gap-1"
          >
            {contact.button} <span>›</span>
          </Link>
        </div>
        {/* Carte 3 */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="flex-1 bg-[#53b6e8] p-8 md:p-10 flex flex-col items-center justify-center rounded-b-xl md:rounded-r-xl md:rounded-bl-none text-white min-w-[260px]"
        >
          <div className="mb-4">
            {/* Icône d'email SVG */}
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
              <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <Link
            href={getLocalizedPath('contact', lang)}
            className="font-bold text-2xl mb-2 text-center cursor-pointer"
          >
            {email.title}
          </Link>
        </div>
      </div>
      <div className="h-32 md:h-24" />{" "}
      {/* Espace pour ne pas couper les cartes */}
    </section>
  );
};
