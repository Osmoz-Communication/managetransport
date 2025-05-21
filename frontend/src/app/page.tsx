"use client";

import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center">
      <main className="flex flex-col md:flex-row items-center justify-between px-4 md:px-[10vw] pt-12 md:pt-24 w-full">
        {/* Texte à gauche */}
        <section className="max-w-xl w-full">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-[1.1] text-gray-900 drop-shadow-md">
            Pour vos<br />
            négociations<br />
            transports,<br />
            faites appel à <span className="text-primary drop-shadow-none">Manage Transport</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-gray-800">
            Vous souhaitez recevoir des conseils et une expertise par des professionnels dans ce métier depuis plus de 30 ans ?<br />
            Vous souhaitez gagner du temps et économiser de l'argent ?<br />
            <br />
            Contactez-nous, nous ferons un point téléphonique de vos problématiques transport actuelles pour voir ensemble la meilleure démarche à entreprendre.<br />
            <br />
            À bientôt chez Manage Transport !
          </p>
          <button
            className="mt-8 px-8 py-3 rounded-full border border-gray-800 bg-white font-medium text-lg hover:bg-gray-100 transition-colors"
          >
            En savoir plus sur nous →
          </button>
        </section>
        {/* Image à droite */}
        <section className="mt-10 md:mt-0 md:ml-12 flex-shrink-0">
          <Image
            src="https://source.unsplash.com/random/500x600?person,smile"
            alt="Visuel random"
            width={500}
            height={600}
            className="rounded-3xl object-cover shadow-xl w-[300px] h-[360px] md:w-[400px] md:h-[480px] lg:w-[500px] lg:h-[600px]"
            priority
          />
        </section>
      </main>
    </div>
  );
} 