"use client";

import Image from "next/image";
import { Hero } from "../../components/ui/hero";
import { CTASection } from "../../components/ui/cta-section";
import { useTranslation } from "../../hooks/useTranslation";
import { useLanguage } from "../../contexts/LanguageContext";
import { getLocalizedPath } from "../../locales/routes";

interface StrengthItem {
  icon: string;
  title: string;
  description: string;
}

export default function AboutPage() {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);

  const strengthsData = t('aboutPage.strengths.items');
  const strengths = Array.isArray(strengthsData) ? strengthsData as unknown as StrengthItem[] : [];

  return (
    <div className="min-h-screen bg-white">
      <div data-aos="fade-down">
        <Hero
          badge={t('aboutPage.hero.badge') as string}
          title={t('aboutPage.hero.title') as string}
          description={t('aboutPage.hero.description') as string}
          backgroundImage="/images/hero/qui-sommes-nous.webp"
        />
      </div>

      {/* Section présentation */}
      <div data-aos="fade-up" data-aos-once="true" data-aos-delay="100" data-aos-duration="600">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6">
                {t('aboutPage.presentation.badge') as string}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Rencontrez {t('aboutPage.presentation.founderName') as string}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('aboutPage.presentation.founderRole') as string}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Photo du fondateur */}
                <div className="relative p-10 lg:p-16 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                  <div className="relative">
                    <Image
                      src="/photo_JC.jpg"
                      alt={t('aboutPage.presentation.founderName') as string}
                      width={320}
                      height={400}
                      className="rounded-2xl object-cover shadow-2xl"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-xl shadow-lg">
                      <Image
                        src="/cropped-arbre-de-vie-192x192.png"
                        alt="Logo Manage Transport"
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                </div>

                {/* Contenu textuel */}
                <div className="p-10 lg:p-16 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {t('aboutPage.presentation.founderName') as string}
                  </h3>
                  <div className="h-1 w-20 bg-primary rounded-full mb-6" />
                  
                  <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                    <p>{t('aboutPage.presentation.bio1') as string}</p>
                    <p>{t('aboutPage.presentation.bio2') as string}</p>
                    <p>{t('aboutPage.presentation.bio3') as string}</p>
                  </div>

                  <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 rounded-xl border-l-4 border-primary">
                    <blockquote className="text-lg font-medium text-gray-900 italic mb-4">
                      &ldquo;{t('aboutPage.presentation.quote') as string}&rdquo;
                    </blockquote>
                    <cite className="text-primary font-bold">
                      — {t('aboutPage.presentation.founderName') as string}
                    </cite>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Section mission */}
      <div data-aos="fade-up" data-aos-once="true" data-aos-delay="200" data-aos-duration="600">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6">
                {t('aboutPage.mission.badge') as string}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t('aboutPage.mission.title') as string}
              </h2>
            </div>

            <div className="bg-gradient-to-br from-primary/5 via-white to-primary/5 rounded-2xl shadow-xl border border-gray-100 p-10 lg:p-16 text-center">
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  {t('aboutPage.mission.description') as string}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {t('aboutPage.mission.priorityTitle') as string}
                    </h3>
                    <p className="text-gray-600">
                      {t('aboutPage.mission.priorityDescription') as string}
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Excellence & Innovation</h3>
                    <p className="text-gray-600">
                      Solutions innovantes et performance opérationnelle pour votre réussite durable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Section atouts */}
      <div data-aos="fade-up" data-aos-once="true" data-aos-delay="300" data-aos-duration="600">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6">
                {t('aboutPage.strengths.badge') as string}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t('aboutPage.strengths.title') as string}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trois piliers fondamentaux qui guident notre expertise au quotidien
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {strengths.map((strength, index) => (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-300">
                      {index === 0 && (
                        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                    {strength.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {strength.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div data-aos="fade-up" data-aos-once="true" data-aos-delay="400" data-aos-duration="600">
        <CTASection 
          title={t('aboutPage.cta.title') as string}
          description={t('aboutPage.cta.description') as string}
          primaryButtonText={t('aboutPage.cta.primaryButton') as string}
          secondaryButtonText={t('aboutPage.cta.secondaryButton') as string}
          secondaryButtonHref={getLocalizedPath('missions', lang)}
          badge={t('aboutPage.cta.badge') as string}
        />
      </div>
    </div>
  );
} 