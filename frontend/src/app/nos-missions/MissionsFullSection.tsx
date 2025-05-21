import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { missions } from "./missionData";
import Image from "next/image";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.15 + i * 0.10,
      ease: "easeOut",
    },
  }),
};

export const MissionsFullSection = () => (
  <section className="w-full bg-[#f4f5fa] py-16 flex flex-col items-center">
    <div className="w-full max-w-7xl px-4 mx-auto">
      <div className="flex flex-col items-center mb-10">
        <span className="uppercase text-gray-500 text-sm font-semibold tracking-widest mb-2">NOS MISSIONS</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">Découvrez l&apos;ensemble de nos expertises</h2>
        <p className="text-gray-600 text-lg text-center max-w-2xl mb-6">Nous vous accompagnons sur tous les aspects de votre logistique et de votre transport, de l&apos;audit à la mise en œuvre opérationnelle.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
        {missions.map((mission, i) => (
          <Link key={mission.slug} href={`/nos-missions/${mission.slug}`} className="group h-full">
            <motion.div
              className="bg-white rounded-2xl shadow p-0 flex flex-col h-full overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 cursor-pointer"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Image
                src={mission.image}
                alt={mission.title}
                width={600}
                height={192}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                unoptimized
              />
              <div className="flex flex-col flex-1 justify-between">
                <div className="p-6 text-center font-bold text-lg mb-2 text-gray-900 group-hover:text-[#5d6ef8] transition-colors duration-300">{mission.title}</div>
                <div className="px-6 pb-6 text-center text-gray-600 text-base line-clamp-3 overflow-hidden">{mission.short}</div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <a href="/contact" className="bg-[#5d6ef8] hover:bg-[#4a6cf7] text-white font-semibold px-8 py-3 rounded-full text-lg shadow transition-colors">Demander un devis</a>
      </div>
    </div>
  </section>
); 