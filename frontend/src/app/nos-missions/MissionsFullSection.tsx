"use client"

import { useRef, useMemo, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "../contexts/LanguageContext"
import { useTranslation } from "../hooks/useTranslation"
import { useOptimizedIntersectionObserver } from "../hooks/useOptimizedIntersectionObserver"
import { getLocalizedPath } from "../locales/routes"
import { getLocalizedMissionSlug, type MissionKey } from "../locales/missionSlugs"
import "../styles/missions-optimized.css"

interface MissionData {
  title: string;
  short: string;
  slug: MissionKey;
}

export const MissionsFullSection = () => {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);
  
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const missions = useMemo(() => 
    (t('missionsPage.missions') || []) as unknown as MissionData[]
  , [t]);

  // Hook optimisé pour l'intersection observer
  const { isVisible, observeElement } = useOptimizedIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -20px 0px",
    triggerOnce: true,
  });

  // Fonction optimisée pour le mapping des images
  const getImageSrc = useCallback((slug: MissionKey) => {
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* En-tête de section moderne */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6 tracking-wider uppercase">
            {t('missionsPage.section.badge') as string}
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {t('missionsPage.section.title') as string}
            <span className="block text-primary">{t('missionsPage.section.titleHighlight') as string}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('missionsPage.section.description') as string}
          </p>
        </div>

        {/* Grille des missions optimisée */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {missions.map((mission: MissionData, i: number) => {
            const missionPath = getLocalizedPath('missions', lang);
            const missionSlug = getLocalizedMissionSlug(mission.slug, lang);
            const fullPath = `${missionPath}/${missionSlug}`;
            
            return (
            <Link key={mission.slug} href={fullPath} className="group">
              <div
                ref={(el) => {
                  itemRefs.current[i] = el;
                  if (el) {
                    observeElement(el, i);
                  }
                }}
                data-index={i}
                className={`mission-card relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full transition-all duration-400 ease-out ${
                  isVisible(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                {/* Image optimisée */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <Image
                    src={getImageSrc(mission.slug)}
                    alt={mission.title}
                    width={400}
                    height={240}
                    className="mission-image w-full h-56 object-cover transition-transform duration-300 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    quality={85}
                  />
                  
                  {/* Overlay simplifié */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Badge optimisé */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 shadow-lg">
                    {t('missionsPage.card.discover') as string}
                  </div>
                </div>

                {/* Contenu optimisé */}
                <div className="p-8 flex flex-col justify-between" style={{ minHeight: '280px' }}>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                      {mission.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">{mission.short}</p>
                  </div>

                  {/* Bouton simplifié - toujours en bas */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-primary font-semibold group-hover:text-blue-600 transition-colors duration-300">
                      <span className="text-lg">{t('missionsPage.card.learnMore') as string}</span>
                      <svg
                        className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>

                    {/* Indicateur de statut simplifié */}
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-xs text-gray-500 font-medium">{t('missionsPage.card.available') as string}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            );
          })}
        </div>
      </div>
    </section>
  )
}