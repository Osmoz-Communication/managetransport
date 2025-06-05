"use client"

import { useEffect } from "react"
import { MissionsFullSection } from "./MissionsFullSection"
import { CTASection } from "../components/CTASection"
import { Hero } from "../components/Hero"

export default function NosMissions() {
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
        badge="Expertise Transport"
        title="Nos Missions"
        description="Découvrez l'ensemble de nos expertises pour optimiser votre stratégie transport et logistique"
        backgroundImage="/images/hero/nos-missions.webp"
      />

      {/* Section missions */}
      <div data-aos="fade-up" data-aos-once="true" data-aos-delay="100" data-aos-duration="600">
        <MissionsFullSection />
      </div>

      {/* Section CTA moderne */}
      <div data-aos="fade-up" data-aos-once="true" data-aos-delay="200" data-aos-duration="600">
        <CTASection
          title="Prêt à optimiser votre logistique ?"
          description="Nos experts analysent vos besoins et vous proposent des solutions sur mesure pour transformer vos défis transport en opportunités."
          secondaryButtonText="Découvrir nos valeurs"
          secondaryButtonHref="/nos-valeurs"
        />
      </div>
    </div>
  )
}