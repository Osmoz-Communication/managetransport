"use client";

import { Slider } from "./components/Slider";
import { Advantages } from "./components/Advantages";
import { SatisfactionGuarantees } from "./components/SatisfactionGuarantees";
import { ParallaxSection } from "./components/ParallaxSection";
import { QuoteSection } from "./components/QuoteSection";
import { MissionsSection } from "./components/MissionsSection";

export default function Dashboard() {
  const slides = [
    {
      image: "https://source.unsplash.com/random/1920x600?transport,truck",
      title: "Pour vos négociations transports",
      description: "Faites appel à Manage Transport",
    },
    {
      image: "https://source.unsplash.com/random/1920x600?logistics,warehouse",
      title: "Expertise professionnelle",
      description: "Plus de 30 ans d'expérience dans le transport",
    },
    {
      image: "https://source.unsplash.com/random/1920x600?business,meeting",
      title: "Solutions sur mesure",
      description: "Gagnez du temps et économisez de l'argent",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Slider slides={slides} />
      <Advantages />
      <SatisfactionGuarantees />
      <ParallaxSection />
      <MissionsSection />
      <QuoteSection />
    </div>
  );
}