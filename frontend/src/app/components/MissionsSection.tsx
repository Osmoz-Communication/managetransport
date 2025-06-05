"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../hooks/useTranslation";
import { getLocalizedPath } from "../locales/routes";
import { getLocalizedMissionSlug, type MissionKey } from "../locales/missionSlugs";

interface Mission {
  slug: string;
  title: string;
  short: string;
}

export const MissionsSection = () => {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Utiliser les vraies missions depuis les traductions
  const missionsData = t('missionsPage.missions');
  const missions = Array.isArray(missionsData) 
    ? (missionsData as unknown as Mission[])
    : [];
  
  // Sélectionner les 6 premières missions pour l'affichage sur la page d'accueil
  const featuredMissions = missions.slice(0, 6);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0");
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index]);
            }, index * 150);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* En-tête de section */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6 tracking-wider uppercase">
            {t("homepage.missions.badge") as string}
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {t("homepage.missions.title") as string}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Découvrez nos expertises pour optimiser votre stratégie transport et logistique
          </p>
        </div>

        {/* Grille des missions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredMissions.map((mission: Mission, i: number) => {
            const missionPath = getLocalizedPath('missions', lang);
            const missionSlug = getLocalizedMissionSlug(mission.slug as MissionKey, lang);
            const fullPath = `${missionPath}/${missionSlug}`;
            
            return (
              <Link key={mission.slug} href={fullPath} className="group">
                <div
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  data-index={i}
                  className={`relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20 transition-all duration-700 ${
                    visibleItems.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transition: "all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    willChange: "transform, opacity",
                  }}
                >
                  {/* Image avec overlay */}
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <Image
                      src={`/images/home/missions/${
                        mission.slug === 'organisation-appels-offres' ? 'appel_offre' : 
                        mission.slug === 'plan-de-transport' ? 'plan-transport' : 
                        mission.slug === 'optimisation-conditionnement' ? 'budget' : 
                        mission.slug === 'enquetes-satisfaction' ? 'satisfaction' : 
                        mission.slug === 'gestion-litiges-transport' ? 'litiges' : 
                        mission.slug === 'assurance-securisation-marchandises' ? 'assurance' : 
                        mission.slug === 'mise-en-place-kpi' ? 'kpi' : 
                        mission.slug === 'choix-prestataires-qualite' ? 'emballage' : 
                        mission.slug === 'distribution-urbaine' ? 'distribution-urbaine' : 
                        'placeholder'
                      }.webp`}
                      alt={mission.title}
                      width={600}
                      height={280}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                      unoptimized
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Badge flottant */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                      {t('missionsPage.card.discover') as string}
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-8 flex flex-col justify-between" style={{ minHeight: '280px' }}>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                        {mission.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">{mission.short}</p>
                    </div>

                    {/* Bouton avec effet - toujours en bas */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-primary font-semibold group-hover:text-blue-600 transition-colors duration-300">
                        <span className="text-lg">{t('missionsPage.card.learnMore') as string}</span>
                        <svg
                          className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
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

                      {/* Indicateur de statut */}
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-gray-500 font-medium">{t('missionsPage.card.available') as string}</span>
                      </div>
                    </div>
                  </div>

                  {/* Effet de brillance au hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bouton CTA simple */}
        <div className="flex justify-center mt-16">
          <Link 
            href={getLocalizedPath('missions', lang)} 
            className="bg-primary hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {t("homepage.missions.button") as string}
          </Link>
        </div>
      </div>
    </section>
  );
}; 