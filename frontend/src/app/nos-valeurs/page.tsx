"use client"

import { useEffect, useRef, useState } from "react"
import { HandshakeIcon, ReactivityIcon, EarIcon, OrganizationIcon, MoneyIcon, StarIcon } from "../icons"
import { CTASection } from "../components/CTASection"
import { Hero } from "../components/Hero"

export default function NosValeurs() {
  const [visibleValeurs, setVisibleValeurs] = useState<number[]>([])
  const [visibleEtapes, setVisibleEtapes] = useState<number[]>([])
  const valeursRefs = useRef<(HTMLDivElement | null)[]>([])
  const etapesRefs = useRef<(HTMLDivElement | null)[]>([])

  const valeurs = [
    {
      icon: HandshakeIcon,
      title: "Confiance",
      subtitle: "Un prérequis indispensable au bon",
      description: "déroulement de notre collaboration, du début à la fin",
    },
    {
      icon: ReactivityIcon,
      title: "Réactivité",
      subtitle: "Réagir sans attendre à l'expression de",
      description: "votre besoin par une prise de contact sous 24/48H",
    },
    {
      icon: MoneyIcon,
      title: "Maîtrise des coûts",
      subtitle: "Des services de qualité au prix le plus",
      description: "abordable possible pour un rapport qualité-prix optimal",
    },
    {
      icon: EarIcon,
      title: "Écoute",
      subtitle: "Votre opinion et vos désirs",
      description: "représentent notre ligne directrice",
    },
    {
      icon: OrganizationIcon,
      title: "Organisation",
      subtitle: "Un agenda précisément défini",
      description: "avec un engagement mutuel",
    },
    {
      icon: StarIcon,
      title: "Satisfaction",
      subtitle: "C'est notre priorité, chaque projet",
      description: "à nos côtés a pour objectif de vous apporter pleine satisfaction",
    },
  ]

  const etapes = [
    {
      numero: "01",
      titre: "Prise de contact",
      description: "Prise de contact en vue d'un projet d'intervention (méthodologie, étapes, timing, budget)",
    },
    {
      numero: "02",
      titre: "Validation du projet",
      description: "Validation du projet et contrat de mission",
    },
    {
      numero: "03",
      titre: "Analyse et diagnostic",
      description: "Analyse des données et diagnostic",
    },
    {
      numero: "04",
      titre: "Plan d'action",
      description: "Élaboration d'un plan d'action à mettre en œuvre",
    },
    {
      numero: "05",
      titre: "Suivi et assistance",
      description: "Suivi et assistance",
    },
    {
      numero: "06",
      titre: "Évaluation des résultats",
      description: "Évaluation et analyse des résultats avec le client",
    },
  ]

  useEffect(() => {
    // Observer pour les valeurs
    const valeursObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setTimeout(() => {
              setVisibleValeurs((prev) => [...prev, index])
            }, index * 150)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    // Observer pour les étapes
    const etapesObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setTimeout(() => {
              setVisibleEtapes((prev) => [...prev, index])
            }, index * 200)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    valeursRefs.current.forEach((ref) => {
      if (ref) valeursObserver.observe(ref)
    })

    etapesRefs.current.forEach((ref) => {
      if (ref) etapesObserver.observe(ref)
    })

    return () => {
      valeursObserver.disconnect()
      etapesObserver.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Hero
        badge="Excellence & Valeurs"
        title="Nos Valeurs"
        description="Les principes qui guident notre expertise et forgent notre engagement envers votre réussite"
        backgroundImage="/images/hero/nos-valeurs.webp"
      />

      {/* Section des valeurs */}
      <section className="py-20 bg-white" data-aos="fade-up" data-aos-once="true" data-aos-delay="100" data-aos-duration="600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div 
              className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6"
              data-aos="fade-down" 
              data-aos-once="true"
              data-aos-delay="200" 
              data-aos-duration="500"
            >
              Nos Fondamentaux
            </div>
            <h2 
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-aos="fade-up" 
              data-aos-once="true"
              data-aos-delay="300" 
              data-aos-duration="600"
            >
              Ce qui nous guide au quotidien
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {valeurs.map((valeur, index) => {
              const IconComponent = valeur.icon
              return (
                <div
                  key={index}
                  ref={(el) => {
                    valeursRefs.current[index] = el;
                  }}
                  data-index={index}
                  className={`group bg-white rounded-xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-700 ${
                    visibleValeurs.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transition: "all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    willChange: "transform, opacity",
                  }}
                >
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 ease-out">
                      <IconComponent className="w-8 h-8 text-primary transition-colors duration-300 ease-out" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300 ease-out">
                    {valeur.title}
                  </h3>
                  <p className="text-gray-700 mb-2 font-medium transition-colors duration-300 ease-out">
                    {valeur.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed transition-colors duration-300 ease-out">
                    {valeur.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section processus avec timeline moderne */}
      <section className="py-20 bg-white" data-aos="fade-up" data-aos-once="true" data-aos-delay="200" data-aos-duration="600">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <div 
              className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6"
              data-aos="fade-down" 
              data-aos-once="true"
              data-aos-delay="300" 
              data-aos-duration="500"
            >
              Notre Méthodologie
            </div>
            <h2 
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-aos="fade-up" 
              data-aos-once="true"
              data-aos-delay="400" 
              data-aos-duration="600"
            >
              Comment nous procédons
            </h2>
            <p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up" 
              data-aos-once="true"
              data-aos-delay="500" 
              data-aos-duration="600"
            >
              Une approche structurée en 6 étapes claires
            </p>
          </div>

          {/* Timeline simplifiée */}
          <div className="relative max-w-3xl mx-auto">
            {/* Ligne centrale */}
            <div className="absolute left-12 lg:left-1/2 lg:transform lg:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-primary/30 via-primary to-primary/30"></div>

            {/* Étapes */}
            <div className="space-y-12">
              {etapes.map((etape, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    etapesRefs.current[index] = el;
                  }}
                  data-index={index}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-row transition-all duration-700 ${
                    visibleEtapes.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transition: "all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    willChange: "transform, opacity",
                  }}
                >
                  {/* Contenu */}
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16 lg:text-left"
                    } pl-24 lg:pl-0`}
                  >
                    <div className="group">
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3 transition-colors duration-300 group-hover:bg-primary/20">
                        Étape {etape.numero}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                        {etape.titre}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{etape.description}</p>
                    </div>
                  </div>

                  {/* Point central simple */}
                  <div className="absolute left-12 lg:left-1/2 lg:transform lg:-translate-x-1/2 flex-shrink-0">
                    <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Espace pour l'autre côté (desktop seulement) */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Message de conclusion simple */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-6 py-3 bg-primary/5 rounded-full border border-primary/20">
              <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm font-medium text-primary">Approche éprouvée depuis 30 ans</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <CTASection
        title="Prêt à commencer ensemble ?"
        description="Transformons vos défis transport en opportunités de croissance avec notre expertise reconnue"
        secondaryButtonText="Découvrir nos missions"
        secondaryButtonHref="/nos-missions"
        badge="Passez à l&apos;action"
      />
    </div>
  )
}