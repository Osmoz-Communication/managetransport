"use client";

// AOS CSS maintenant chargé dynamiquement
import { 
  Slider, 
  Advantages
} from "../components/features/homepage";
import { LazyLoadComponent } from "../components/ui/lazy-load/LazyLoadComponent";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../hooks/useTranslation";
import { lazy, Suspense } from "react";

// Lazy loading des composants non critiques pour réduire le bundle initial
const SatisfactionGuarantees = lazy(() => 
  import("../components/features/homepage").then(module => ({ 
    default: module.SatisfactionGuarantees 
  }))
);

const ParallaxSection = lazy(() => 
  import("../components/features/homepage").then(module => ({ 
    default: module.ParallaxSection 
  }))
);

const MissionsSection = lazy(() => 
  import("../components/features/homepage").then(module => ({ 
    default: module.MissionsSection 
  }))
);

const CTASection = lazy(() => 
  import("../components/ui/cta-section").then(module => ({ 
    default: module.CTASection 
  }))
);

interface SlideData {
  title: string;
  description: string;
}

// Fallback optimisé pour le lazy loading
const SectionFallback = () => (
  <div className="animate-pulse bg-gray-100 h-64 rounded-lg mx-4 my-8"></div>
);

export default function HomePage() {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);

  const slides = (t("homepage.slides") as unknown as SlideData[]).map((slide: SlideData, index: number) => ({
    image: index === 0 ? "/images/slider/highway.webp" 
          : index === 1 ? "/images/slider/consulting.webp"
          : "/images/slider/meeting.webp",
    title: slide.title,
    description: slide.description,
  }));

  return (
    <div className="min-h-screen bg-white flex flex-col relative">
      {/* Composants critiques chargés immédiatement */}
      <div data-aos="fade-down" data-aos-once="true" data-aos-duration="600" data-aos-offset="0" data-aos-anchor-placement="top-bottom">
        <Slider slides={slides} />
      </div>
      <div data-aos="fade-up" data-aos-once="true" data-aos-duration="600" data-aos-delay="100" data-aos-offset="50" data-aos-anchor-placement="top-bottom">
        <Advantages />
      </div>
      
      {/* Composants non critiques avec lazy loading */}
      <LazyLoadComponent 
        fallback={<SectionFallback />}
        rootMargin="100px"
        className="min-h-[200px]"
      >
        <div data-aos="fade-up" data-aos-once="true" data-aos-duration="600" data-aos-delay="150" data-aos-offset="50" data-aos-anchor-placement="top-bottom">
          <Suspense fallback={<SectionFallback />}>
            <SatisfactionGuarantees />
          </Suspense>
        </div>
      </LazyLoadComponent>

      <LazyLoadComponent 
        fallback={<SectionFallback />}
        rootMargin="100px"
        className="min-h-[300px]"
      >
        <div data-aos="zoom-in" data-aos-once="true" data-aos-duration="600" data-aos-delay="200" data-aos-offset="50" data-aos-anchor-placement="center-bottom" className="relative">
          <Suspense fallback={<SectionFallback />}>
            <ParallaxSection />
          </Suspense>
        </div>
      </LazyLoadComponent>

      <LazyLoadComponent 
        fallback={<SectionFallback />}
        rootMargin="100px"
        className="min-h-[400px]"
      >
        <div data-aos="fade-up" data-aos-once="true" data-aos-duration="600" data-aos-delay="250" data-aos-offset="50" data-aos-anchor-placement="top-bottom">
          <Suspense fallback={<SectionFallback />}>
            <MissionsSection />
          </Suspense>
        </div>
      </LazyLoadComponent>

      <LazyLoadComponent 
        fallback={<SectionFallback />}
        rootMargin="50px"
        className="min-h-[200px]"
      >
        <div data-aos="fade-up" data-aos-once="true" data-aos-duration="600" data-aos-delay="300" data-aos-offset="50" data-aos-anchor-placement="top-bottom">
          <Suspense fallback={<SectionFallback />}>
            <CTASection />
          </Suspense>
        </div>
      </LazyLoadComponent>
    </div>
  );
} 