"use client";

import { AdvantagesIcon, CalendarIcon, CompassIcon, SearchIcon } from "../../../icons";
import { useLanguage } from "../../../contexts/LanguageContext";
import { useTranslation } from "../../../hooks/useTranslation";

interface AdvantageItem {
  title: string;
  description: string;
}

interface BilingualInfo {
  title: string;
  description: string;
}

export const Advantages = () => {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);

  const icons = [
    <AdvantagesIcon key="advantages" className="w-12 h-12 text-primary" />,
    <CalendarIcon key="calendar" className="w-12 h-12 text-primary" />,
    <CompassIcon key="compass" className="w-12 h-12 text-primary" />,
    <SearchIcon key="search" className="w-12 h-12 text-primary" />
  ];

  const advantages = (t("homepage.advantages.items") as unknown as AdvantageItem[]).map((item, index) => ({
    icon: icons[index],
    title: item.title,
    description: item.description,
  }));

  const bilingual = t("homepage.advantages.bilingual") as unknown as BilingualInfo;

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          data-aos="fade-down"
          className="text-center mb-12"
        >
          <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
            {t("homepage.advantages.badge") as string}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("homepage.advantages.title") as string}
          </h3>
        </div>

        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {advantages.map((advantage, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4 p-3 rounded-full bg-primary/10">
                {advantage.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {advantage.title}
              </h4>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-3 bg-white p-4 rounded-xl shadow-lg">
            <span className="flex-shrink-0">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 12h20" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </span>
            <div className="text-left">
              <h4 className="font-semibold">{bilingual.title}</h4>
              <p className="text-sm text-gray-600">
                {bilingual.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 