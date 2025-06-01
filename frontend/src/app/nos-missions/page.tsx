"use client"

import { useEffect } from "react"
import { MissionsFullSection } from "./MissionsFullSection"
import { CTASection } from "../components/CTASection"

export default function NosMissions() {
  useEffect(() => {
    // Réinitialiser AOS si nécessaire
    if (typeof window !== "undefined") {
      const AOS = require("aos")
      AOS.refresh()
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section professionnel */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 py-16 lg:py-20 overflow-hidden">
        {/* Image de fond subtile */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/90"></div>
        </div>

        {/* Effets géométriques subtils */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>

        <div className="relative container mx-auto px-4 text-center">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-offset="0"
            className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium text-sm mb-6"
          >
            Expertise Transport
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-offset="0"
            className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Nos Missions
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-offset="0"
            className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Découvrez l&apos;ensemble de nos expertises pour optimiser votre stratégie transport et logistique
          </p>
        </div>
      </section>

      {/* Section missions */}
      <MissionsFullSection />

      {/* Section CTA moderne */}
      <CTASection
        title="Prêt à optimiser votre logistique ?"
        description="Nos experts analysent vos besoins et vous proposent des solutions sur mesure pour transformer vos défis transport en opportunités."
        secondaryButtonText="Découvrir nos valeurs"
        secondaryButtonHref="/nos-valeurs"
      />
    </div>
  )
}