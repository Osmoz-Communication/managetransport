"use client";

import { Hero } from "../../components/ui/hero";
import { MissionsFullSection } from "../../nos-missions/MissionsFullSection";
import { CTASection } from "../../components/ui/cta-section";
import { useTranslation } from "../../hooks/useTranslation";
import { useLanguage } from "../../contexts/LanguageContext";

export default function MissionsPage() {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);

  return (
    <div className="min-h-screen bg-white">
      <div data-aos="fade-down">
        <Hero
          badge={t('missionsPage.hero.badge') as string}
          title={t('missionsPage.hero.title') as string}
          description={t('missionsPage.hero.description') as string}
          backgroundImage="/images/hero/nos-missions.webp"
        />
      </div>
      <div data-aos="fade-up" data-aos-once="true" data-aos-delay="100" data-aos-duration="600">
        <MissionsFullSection />
      </div>
      <div data-aos="fade-up" data-aos-once="true" data-aos-delay="200" data-aos-duration="600">
        <CTASection />
      </div>
    </div>
  );
} 