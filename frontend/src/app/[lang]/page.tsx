"use client";

import 'aos/dist/aos.css';
import { 
  Slider, 
  Advantages, 
  SatisfactionGuarantees, 
  ParallaxSection, 
  MissionsSection 
} from "../components/features/homepage";
import { CTASection } from "../components/ui/cta-section";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../hooks/useTranslation";

interface SlideData {
  title: string;
  description: string;
}

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
    <div className="min-h-screen bg-white flex flex-col">
      <div data-aos="fade-down" data-aos-once="true" data-aos-duration="600" data-aos-offset="0" data-aos-anchor-placement="top-bottom">
        <Slider slides={slides} />
      </div>
      <div data-aos="fade-up" data-aos-once="true" data-aos-duration="600" data-aos-delay="100" data-aos-offset="50" data-aos-anchor-placement="top-bottom">
        <Advantages />
      </div>
      <div data-aos="fade-up" data-aos-once="true" data-aos-duration="600" data-aos-delay="150" data-aos-offset="50" data-aos-anchor-placement="top-bottom">
        <SatisfactionGuarantees />
      </div>
      <div data-aos="zoom-in" data-aos-once="true" data-aos-duration="600" data-aos-delay="200" data-aos-offset="50" data-aos-anchor-placement="center-bottom">
        <ParallaxSection />
      </div>
      <div data-aos="fade-up" data-aos-once="true" data-aos-duration="600" data-aos-delay="250" data-aos-offset="50" data-aos-anchor-placement="top-bottom">
        <MissionsSection />
      </div>
      <div data-aos="fade-up" data-aos-once="true" data-aos-duration="600" data-aos-delay="300" data-aos-offset="50" data-aos-anchor-placement="top-bottom">
        <CTASection />
      </div>
    </div>
  );
} 