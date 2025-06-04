"use client";

import 'aos/dist/aos.css';
import { Slider } from "./components/Slider";
import { Advantages } from "./components/Advantages";
import { SatisfactionGuarantees } from "./components/SatisfactionGuarantees";
import { ParallaxSection } from "./components/ParallaxSection";
import { MissionsSection } from "./components/MissionsSection";
import { CTASection } from "./components/CTASection";

export default function Dashboard() {
  const slides = [
    {
      image: "/images/slider/highway.webp",
      title: "Pour vos négociations transports",
      description: "Faites appel à Manage Transport",
    },
    {
      image: "/images/slider/consulting.webp",
      title: "Expertise professionnelle",
      description: "Plus de 30 ans d'expérience dans le transport",
    },
    {
      image: "/images/slider/meeting.webp",
      title: "Solutions sur mesure",
      description: "Gagnez du temps et économisez de l'argent",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div data-aos="fade-down">
        <Slider slides={slides} />
      </div>
      <div data-aos="fade-up">
        <Advantages />
      </div>
      <div data-aos="fade-up">
        <SatisfactionGuarantees />
      </div>
      <div data-aos="zoom-in">
        <ParallaxSection />
      </div>
      <div data-aos="fade-up">
        <MissionsSection />
      </div>
      <div data-aos="fade-up">
        <CTASection />
      </div>
    </div>
  );
}