"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { missions } from "./missionData"
import Image from "next/image"

export const MissionsFullSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")

            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index])
            }, index * 150)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* En-tête de section moderne */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6 tracking-wider uppercase">
            Nos Expertises
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Découvrez l'ensemble de nos
            <span className="block text-primary">expertises</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Nous vous accompagnons sur tous les aspects de votre logistique et de votre transport, de l'audit à la mise
            en œuvre opérationnelle.
          </p>
        </div>

        {/* Grille des missions ultra-moderne */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {missions.map((mission, i) => (
            <Link key={mission.slug} href={`/nos-missions/${mission.slug}`} className="group">
              <div
                ref={(el) => (itemRefs.current[i] = el)}
                data-index={i}
                className={`relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20 transition-all duration-700 ${
                  visibleItems.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transition: "all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  willChange: "transform, opacity",
                }}
              >
                {/* Image avec overlay moderne */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <Image
                    src={mission.image || "/placeholder.svg"}
                    alt={mission.title}
                    width={600}
                    height={280}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  {/* Overlay gradient moderne */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Badge flottant moderne */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                    Découvrir →
                  </div>
                </div>

                {/* Contenu moderne */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {mission.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">{mission.short}</p>

                  {/* Bouton moderne avec effet */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-primary font-semibold group-hover:text-blue-600 transition-colors duration-300">
                      <span className="text-lg">En savoir plus</span>
                      <svg
                        className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>

                    {/* Indicateur de statut moderne */}
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-500 font-medium">Disponible</span>
                    </div>
                  </div>
                </div>

                {/* Effet de brillance au hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}