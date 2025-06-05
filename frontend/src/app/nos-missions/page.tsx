"use client"

import { useEffect } from "react"
import { MissionsFullSection } from "./MissionsFullSection"
import { CTASection } from "../components/CTASection"
import { Hero } from "../components/Hero"
import { useLanguage } from "../contexts/LanguageContext"
import { useTranslation } from "../hooks/useTranslation"
import { getLocalizedPath } from "../locales/routes"

export default function NosMissions() {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);

  useEffect(() => {
    // Réinitialiser AOS si nécessaire
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.default.refresh()
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Hero
        badge={t('missionsPage.hero.badge') as string}
        title={t('missionsPage.hero.title') as string}
        description={t('missionsPage.hero.description') as string}
        backgroundImage="/images/hero/nos-missions.webp"
      />

      {/* Section missions */}
      <div data-aos="fade-up" data-aos-once="true" data-aos-delay="100" data-aos-duration="600">
        <MissionsFullSection />
      </div>

      {/* Section CTA moderne */}
      <div data-aos="fade-up" data-aos-once="true" data-aos-delay="200" data-aos-duration="600">
        <CTASection
          title={t('missionsPage.cta.title') as string}
          description={t('missionsPage.cta.description') as string}
          secondaryButtonText={t('missionsPage.cta.secondaryButton') as string}
          secondaryButtonHref={getLocalizedPath('values', lang)}
        />
      </div>
    </div>
  )
}