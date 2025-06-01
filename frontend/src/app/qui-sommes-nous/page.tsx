"use client";

import Image from "next/image";
import { CTASection } from "../components/CTASection";

export default function QuiSommesNous() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 py-16 lg:py-20 overflow-hidden">
        {/* Image de fond subtile */}
        <div 
          data-aos="fade-in"
          data-aos-duration="1000"
          className="absolute inset-0 opacity-10"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/90"></div>
        </div>
        
        {/* Effets géométriques subtils */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="800"
          className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"
        ></div>
        <div 
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-duration="800"
          className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full blur-xl"
        ></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium text-sm mb-6"
          >
            Notre Histoire
          </div>
          
          <h1 
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="800"
            className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Qui sommes-nous ?
          </h1>
          
          <p 
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-duration="800"
            className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed"
          >
            Découvrez l&apos;expertise et la passion qui animent notre engagement à vos côtés
          </p>
        </div>
      </section>

      {/* Section Présentation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo et informations */}
            <div className="text-center lg:text-left">
              <div 
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="800"
                className="relative inline-block mb-8"
              >
                <div className="w-80 h-80 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                  <Image 
                    src="/jc.webp" 
                    alt="Jean-Claude Ravineau" 
                    width={320} 
                    height={320} 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Effet décoratif */}
                <div 
                  data-aos="fade-in"
                  data-aos-delay="600"
                  className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"
                ></div>
                <div 
                  data-aos="fade-in"
                  data-aos-delay="800"
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/5 rounded-full blur-lg"
                ></div>
              </div>
              
              <div 
                data-aos="fade-up"
                data-aos-delay="400"
                className="max-w-md mx-auto lg:mx-0"
              >
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  Jean-Claude RAVINEAU
                </h2>
                <div 
                  data-aos="slide-right"
                  data-aos-delay="600"
                  className="h-1 w-20 bg-primary rounded-full mb-4 mx-auto lg:mx-0"
                ></div>
                <p 
                  data-aos="fade-up"
                  data-aos-delay="800"
                  className="text-primary font-semibold text-lg"
                >
                  Fondateur et dirigeant de ManageTransport
                </p>
              </div>
            </div>

            {/* Contenu textuel */}
            <div className="space-y-6">
              <div 
                data-aos="fade-left"
                data-aos-delay="300"
                className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6"
              >
                Notre Expertise
              </div>
              
              <p 
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="800"
                data-aos-offset="0"
                className="text-gray-700 leading-relaxed text-lg"
              >
                <strong>Diplômé de l&apos;EDC Business School</strong>, Coach et praticien en PNL certifié à l&apos;ICI (Institut de Coaching International depuis 15 ans), je me suis très vite tourné vers la relation client, la négociation de prestations de services et le management des ventes.
              </p>
              
              <p 
                data-aos="fade-left"
                data-aos-delay="700"
                data-aos-duration="800"
                data-aos-offset="0"
                className="text-gray-700 leading-relaxed"
              >
                En 2022, et après un parcours de <strong>30 années au sein d&apos;entreprises de transport de marchandises ou industrielles de toutes tailles</strong>, de la multi-nationale à l&apos;entreprise familiale en tant que directeur des ventes, European et National Key Account Manager, j&apos;ai décidé de mettre à profit toute mon expertise métier en créant mon cabinet de conseil et d&apos;expertise en transport.
              </p>
              
              <div 
                id="citation-block"
                data-aos="zoom-in"
                data-aos-delay="600"
                data-aos-duration="500"
                data-aos-offset="0"
                data-aos-once="true"
                data-aos-easing="ease-out"
                className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg"
              >
                <p className="text-gray-800 font-medium italic">
                  &ldquo;Durant toutes ces années, j&apos;ai appris une chose essentielle : <span className="text-primary font-bold">la seule réalité qui compte, c&apos;est la perception qu&apos;ont vos clients de vos services et de votre entreprise</span>.&rdquo;
                </p>
              </div>
              
              <p 
                data-aos="fade-left"
                data-aos-delay="1100"
                data-aos-duration="800"
                data-aos-offset="0"
                className="text-gray-700 leading-relaxed"
              >
                Mais également que les tâches essentielles doivent impérativement être faites chaque jour avant 10h du matin. Le transport étant un dernier ressenti de l&apos;expérience client, il est donc primordial de s&apos;assurer de son excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div 
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-offset="0"
              className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6"
            >
              Notre Mission
            </div>
            <h2 
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
              data-aos-offset="0"
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
            >
              ManageTransport vous accompagne
            </h2>
          </div>
          
          <div 
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-duration="800"
            data-aos-offset="0"
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100"
          >
            <p 
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-offset="0"
              className="text-lg text-gray-700 leading-relaxed mb-8 text-center"
            >
              <strong>ManageTransport</strong> vous propose de vous accompagner dans l&apos;optimisation et l&apos;amélioration de la qualité de votre activité transport et des coûts associés tout en préservant l&apos;aspect humain, éthique et environnemental de votre entreprise et de vos prestataires.
            </p>
            
            <div 
              data-aos="fade-up"
              data-aos-delay="900"
              data-aos-duration="800"
              data-aos-offset="0"
              className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-8 text-center"
            >
              <h3 
                data-aos="fade-up"
                data-aos-delay="1100"
                data-aos-offset="0"
                className="text-2xl font-bold text-primary mb-4"
              >
                Notre priorité est votre satisfaction
              </h3>
              <p 
                data-aos="fade-up"
                data-aos-delay="1300"
                data-aos-offset="0"
                className="text-gray-700 leading-relaxed"
              >
                Nous mettons notre expertise de 30 ans au service de votre réussite, en combinant performance opérationnelle et valeurs humaines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Valeurs clés */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <div 
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-offset="0"
              className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6"
            >
              Nos Atouts
            </div>
            <h2 
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
              data-aos-offset="0"
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
            >
              Ce qui nous distingue
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
              data-aos-offset="0"
              className="text-center group hover:scale-105 transition-all duration-500 ease-out"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 ease-out">
                <svg className="w-8 h-8 text-white transition-transform duration-300 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-offset="0"
                className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300 ease-out"
              >
                30 ans d&apos;expérience
              </h3>
              <p 
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-offset="0"
                className="text-gray-600 transition-colors duration-300 ease-out"
              >
                Une expertise terrain éprouvée dans tous les secteurs du transport
              </p>
            </div>
            
            <div 
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="800"
              data-aos-offset="0"
              className="text-center group hover:scale-105 transition-all duration-500 ease-out"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 ease-out">
                <svg className="w-8 h-8 text-white transition-transform duration-300 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-offset="0"
                className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300 ease-out"
              >
                Approche humaine
              </h3>
              <p 
                data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-offset="0"
                className="text-gray-600 transition-colors duration-300 ease-out"
              >
                Coach certifié PNL, nous privilégions la dimension humaine
              </p>
            </div>
            
            <div 
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="800"
              data-aos-offset="0"
              className="text-center group hover:scale-105 transition-all duration-500 ease-out"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 ease-out">
                <svg className="w-8 h-8 text-white transition-transform duration-300 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 
                data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-offset="0"
                className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300 ease-out"
              >
                Excellence opérationnelle
              </h3>
              <p 
                data-aos="fade-up"
                data-aos-delay="1200"
                data-aos-offset="0"
                className="text-gray-600 transition-colors duration-300 ease-out"
              >
                Des solutions concrètes pour optimiser vos performances
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <div 
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
      >
        <CTASection 
          title="Prêt à découvrir notre expertise ?"
          description="Rencontrons-nous pour discuter de vos défis transport et construire ensemble des solutions sur mesure."
          primaryButtonText="Prendre rendez-vous"
          secondaryButtonText="Découvrir nos missions"
          secondaryButtonHref="/nos-missions"
          badge="Expertise & Conseil"
        />
      </div>
    </div>
  );
} 