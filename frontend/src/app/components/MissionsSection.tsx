import React from "react";
import Image from "next/image";
import Link from "next/link";

const missions = [
  {
    img: "/images/home/missions/appel_offre.webp",
    alt: "Organisation et gestion d'appels d'offres",
    title: "Organisation et gestion d'appels d'offres",
  },
  {
    img: "/images/home/missions/budget.webp",
    alt: "Optimisation de votre budget transport",
    title: "Optimisation de votre budget transport",
  },
  {
    img: "/images/home/missions/emballage.webp",
    alt: "Optimisation de votre stratégie d'emballage",
    title: "Optimisation de votre stratégie d'emballage",
  },
  {
    img: "/images/home/missions/satisfaction.webp",
    alt: "Rapport d'enquête de satisfaction de vos clients",
    title: "Rapport d'enquête de satisfaction de vos clients",
  },
  {
    img: "/images/home/missions/litiges.webp",
    alt: "Gestion des litiges transport",
    title: "Gestion des litiges transport",
  },
  {
    img: "/images/home/missions/assurance.webp",
    alt: "Assurer et sécuriser vos marchandises",
    title: "Assurer et sécuriser vos marchandises",
  },
];

export const MissionsSection = () => (
  <section className="w-full bg-[#f4f5fa] py-16 flex flex-col items-center">
    <div className="w-full max-w-6xl px-4 mx-auto">
      <div data-aos="fade-down" className="flex flex-col items-center mb-10">
        <span className="uppercase text-gray-500 text-sm font-semibold tracking-widest mb-2">NOS MISSIONS</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">De quoi avez-vous besoin aujourd'hui ?</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
        {missions.map((mission, i) => (
          <div
            key={mission.title}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="bg-white rounded-2xl shadow p-0 flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <Image 
              src={mission.img} 
              alt={mission.alt} 
              width={600}
              height={400}
              className="w-full h-40 object-cover" 
            />
            <div className="p-6 text-center font-medium text-lg">{mission.title}</div>
          </div>
        ))}
      </div>
      <div data-aos="fade-up" data-aos-delay="300" className="flex justify-center">
        <Link href="/nos-missions" className="bg-[#5d6ef8] hover:bg-[#4a6cf7] text-white font-semibold px-8 py-3 rounded-full text-lg shadow transition-colors">En voir plus</Link>
      </div>
    </div>
  </section>
); 