// src/components/AnimatedMissionDetails.tsx
"use client"; // This directive makes it a Client Component

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useCallback } from "react";
import { useSlider } from "../../../hooks/useSlider"; // Path to your custom hook
import { useLanguage } from "../../../contexts/LanguageContext";
import { useTranslation } from "../../../hooks/useTranslation";
import { getLocalizedPath } from "../../../locales/routes";
import { getLocalizedMissionSlug, type MissionKey } from "../../../locales/missionSlugs";

interface MissionDetailsProps {
  mission: {
    title: string;
    short: string;
    intro: string;
    details: string[];
    image: string;
    more?: string;
    slug: string;
  };
}

interface MissionData {
  title: string;
  short: string;
  intro: string;
  details: string[];
  more?: string;
  slug: MissionKey;
}

export function AnimatedMissionDetails({ mission }: MissionDetailsProps) {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);
  
  const allMissions = useMemo(() => {
    return (t('missionsPage.missions') || []) as unknown as MissionData[];
  }, [t]);
  
  const otherMissions = useMemo(
    () => allMissions.filter((m: MissionData) => m.slug !== mission.slug),
    [allMissions, mission.slug]
  );

  // Find the translated mission data
  const translatedMission = useMemo(
    () => allMissions.find((m: MissionData) => m.slug === mission.slug) || mission,
    [allMissions, mission]
  );

  const slidesPerView = 3; // Keep this consistent with your slider logic
  const {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
    isDragging,
  } = useSlider({
    itemsCount: otherMissions.length,
    slidesPerView,
    autoPlayInterval: 5000,
  });

  // Calculate slide width based on slidesPerView
  const slideWidth = 100 / slidesPerView;

  // Fonction optimisée pour le mapping des images
  const getImagePath = useCallback((slug: string) => {
    const imageMap: Record<string, string> = {
      'organisation-appels-offres': 'appel_offre',
      'plan-de-transport': 'plan-transport',
      'optimisation-conditionnement': 'budget',
      'enquetes-satisfaction': 'satisfaction',
      'gestion-litiges-transport': 'litiges',
      'assurance-securisation-marchandises': 'assurance',
      'mise-en-place-kpi': 'kpi',
      'choix-prestataires-qualite': 'emballage',
      'distribution-urbaine': 'distribution-urbaine'
    };
    return `/images/home/missions/${imageMap[slug] || 'placeholder'}.webp`;
  }, []);

  return (
    <>
      {/* Main mission details block */}
      <div className="w-full flex flex-col md:flex-row items-start gap-10 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-shrink-0 w-full md:w-[380px] max-w-xl rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src={getImagePath(mission.slug)}
            alt={translatedMission.title}
            width={800}
            height={500}
            className="object-cover w-full h-72 md:h-96"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex-1 w-full flex flex-col justify-start bg-[#f8f9fc] md:bg-white border-l-0 md:border-l-4 border-[#5d6ef8] rounded-2xl md:rounded-l-none p-6 md:p-10 shadow-inner min-h-[400px]"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {translatedMission.title}
          </h1>
          <div className="text-lg text-[#5d6ef8] font-semibold mb-4">
            {translatedMission.short}
          </div>
          <p className="text-base text-gray-700 mb-4">{translatedMission.intro}</p>
          {translatedMission.details && translatedMission.details.length > 0 && (
            <ul className="mb-8 pl-5 space-y-2">
              {translatedMission.details.map((d: string, i: number) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
                  className="relative text-base text-gray-800 before:content-['•'] before:text-[#5d6ef8] before:mr-2 before:text-xl"
                >
                  {d}
                </motion.li>
              ))}
            </ul>
          )}
          {translatedMission.more && (
            <div className="bg-[#f4f5fa] rounded-xl p-6 text-gray-700 text-base mb-6 shadow-inner animate-fade-in">
              {translatedMission.more}
            </div>
          )}
          <div className="flex justify-center mt-auto">
            <Link
              href={getLocalizedPath('contact', lang)}
              className="inline-block bg-[#5d6ef8] hover:bg-[#4a6cf7] text-white font-semibold px-8 py-3 rounded-full text-lg shadow transition-colors"
            >
              {t('missionsPage.detail.contact') as string}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Card-slider section */}
      {otherMissions.length > 0 && (
        <div className="w-full flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            {t('missionsPage.detail.otherServices') as string}
          </h2>
          {/* Main slider container. This div still gets 'group' for arrow visibility. */}
          <div className="relative group w-full max-w-6xl mx-auto px-12">
            {/* Previous button - visibility controlled by 'group-hover' from parent div */}
            <button
              onClick={prevSlide}
              className="hidden sm:block absolute -left-8 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 text-[#5d6ef8] p-3 rounded-full transition-all duration-300 shadow-lg backdrop-blur-sm select-none opacity-0 group-hover:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            {/* Next button - visibility controlled by 'group-hover' from parent div */}
            <button
              onClick={nextSlide}
              className="hidden sm:block absolute -right-8 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 text-[#5d6ef8] p-3 rounded-full transition-all duration-300 shadow-lg backdrop-blur-sm select-none opacity-0 group-hover:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Slider content wrapper - this is what actually scrolls */}
            <div
              className="relative overflow-hidden select-none"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              style={{ cursor: isDragging ? "grabbing" : "grab" }}
            >
              <div
                className="flex transition-transform duration-700 ease-out select-none"
                style={{
                  transform: `translateX(-${currentIndex * slideWidth}%)`,
                }}
              >
                {otherMissions.map((m: MissionData) => (
                  <div
                    key={m.slug}
                    style={{ width: `${slideWidth}%` }}
                    className="flex-shrink-0 px-3 select-none"
                  >
                    {/* The Link for each card */}
                    <Link
                      href={`${getLocalizedPath('missions', lang)}/${getLocalizedMissionSlug(m.slug, lang)}`}
                      className="flex flex-col items-center w-full"
                    >
                      <div className="rounded-xl overflow-hidden shadow-lg mb-2 w-full aspect-square bg-white">
                        {/* Image optimisée */}
                        <Image
                          src={getImagePath(m.slug)}
                          alt={m.title}
                          width={300}
                          height={300}
                          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 300px"
                          loading="lazy"
                          quality={80}
                        />
                      </div>
                      {/* Title */}
                      <div className="text-base font-medium text-center mt-2 text-gray-900 hover:text-[#5d6ef8] transition-colors duration-300">
                        {m.title}
                      </div>
                      {/* Short Description */}
                      <div className="text-sm text-gray-500 text-center line-clamp-2 mt-1">
                        {m.short}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-8 space-x-2 select-none">
                {Array.from({
                  length: otherMissions.length - (slidesPerView - 1),
                }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentIndex === index
                        ? "bg-[#5d6ef8] w-4"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`${t('missionsPage.detail.goToSlide') as string} ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}