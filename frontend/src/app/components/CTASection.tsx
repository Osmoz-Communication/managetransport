import React from "react";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../hooks/useTranslation";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  badge?: string;
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title: titleProp,
  description: descriptionProp,
  primaryButtonText: primaryButtonTextProp,
  primaryButtonHref = "/contact",
  secondaryButtonText: secondaryButtonTextProp,
  secondaryButtonHref: secondaryButtonHrefProp,
  badge: badgeProp,
  className = ""
}) => {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);

  const title = titleProp ?? t('cta.default.title');
  const description = descriptionProp ?? t('cta.default.description');
  const primaryButtonText = primaryButtonTextProp ?? t('cta.default.primaryButton');
  const secondaryButtonText = secondaryButtonTextProp ?? t('cta.default.secondaryButton');
  const secondaryButtonHref = secondaryButtonHrefProp ?? '/nos-missions';
  const badge = badgeProp ?? t('cta.default.badge');

  return (
    <section className={`py-20 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div 
            data-aos="fade-up"
            className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100 relative overflow-hidden"
          >
            {/* Effet de brillance de fond */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div 
                data-aos="fade-down"
                data-aos-delay="100"
                className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6"
              >
                {badge as string}
              </div>
              
              <h2 
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              >
                {title as string}
              </h2>
              
              <p 
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
              >
                {description as string}
              </p>
              
              <div 
                data-aos="zoom-in"
                data-aos-delay="400"
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <a 
                  href={primaryButtonHref}
                  className="group relative inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10">{primaryButtonText as string}</span>
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  
                  {/* Effet de brillance moderne */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  
                  {/* Effet de pulse subtil */}
                  <div className="absolute inset-0 bg-primary/20 rounded-lg opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                </a>
                
                {secondaryButtonHref && secondaryButtonText && (
                  <Link 
                    href={secondaryButtonHref}
                    className="group inline-flex items-center px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    <span>{secondaryButtonText as string}</span>
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                )}
              </div>
              
              {/* Indicateurs de confiance */}
              <div 
                data-aos="fade-up"
                data-aos-delay="500"
                className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600"
              >
                <div 
                  data-aos="fade-right"
                  data-aos-delay="600"
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>{t('cta.response') as string}</span>
                </div>
                <div 
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>{t('cta.quote') as string}</span>
                </div>
                <div 
                  data-aos="fade-left"
                  data-aos-delay="800"
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>{t('cta.experience') as string}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 