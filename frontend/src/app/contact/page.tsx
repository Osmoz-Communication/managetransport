"use client";

import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section professionnel */}
      <div data-aos="fade-down">
        <section className="relative bg-gradient-to-br from-primary to-primary/80 py-16 lg:py-20 overflow-hidden">
          {/* Image de fond subtile */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/90"></div>
          </div>
          
          {/* Effets géométriques subtils */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
          
          <div className="relative container mx-auto px-4 text-center">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium text-sm mb-6">
              Contactez-nous
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Nous Contacter
            </h1>
            
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Prenez contact avec nous afin de pouvoir nous rencontrer et discuter de votre projet transport
            </p>
          </div>
        </section>
      </div>

      {/* Section formulaire */}
      <div data-aos="fade-up">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6">
                Formulaire de Contact
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Commençons le dialogue
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Partagez-nous votre projet et nous vous recontacterons rapidement
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
              <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <label className="block font-semibold text-gray-700 mb-2 text-sm">
                    Prénom <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    required 
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300" 
                  />
                </div>
                
                <div className="md:col-span-1">
                  <label className="block font-semibold text-gray-700 mb-2 text-sm">
                    Nom <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    required 
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300" 
                  />
                </div>
                
                <div className="md:col-span-1">
                  <label className="block font-semibold text-gray-700 mb-2 text-sm">
                    Entreprise
                  </label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300" 
                  />
                </div>
                
                <div className="md:col-span-3">
                  <label className="block font-semibold text-gray-700 mb-2 text-sm">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    required 
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300" 
                  />
                </div>
                
                <div className="md:col-span-3">
                  <label className="block font-semibold text-gray-700 mb-2 text-sm">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    required 
                    rows={5} 
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none" 
                  />
                </div>
                
                <div className="md:col-span-3 text-center mt-6">
                  <button
                    type="submit"
                    className="group inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                  >
                    <span>Envoyer le message</span>
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Section contact direct */}
      <div data-aos="fade-up">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6">
                Contact Direct
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Rencontrez notre expert
              </h2>
            </div>
            
            <div className="bg-gray-50 rounded-2xl shadow-xl border border-gray-100 flex flex-col lg:flex-row overflow-hidden">
              {/* Photo */}
              <div className="lg:w-2/5 bg-white flex items-center justify-center p-10">
                <Image 
                  src="/jc-ravineau.jpg" 
                  alt="Jean-Claude Ravineau" 
                  width={240} 
                  height={240} 
                  className="rounded-xl object-cover shadow-lg" 
                />
              </div>
              
              {/* Informations */}
              <div className="lg:w-3/5 p-10 relative">
                <div className="absolute top-6 right-6">
                  <Image src="/logo.png" alt="Logo Manage Transport" width={50} height={50} />
                </div>
                
                <div className="max-w-lg">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                    Jean-Claude RAVINEAU
                  </h3>
                  <div className="h-1 w-20 bg-primary rounded-full mb-4" />
                  <div className="text-primary font-semibold text-lg mb-8">
                    Fondateur et Dirigeant de Manage Transport
                  </div>
                  
                  <div className="space-y-3 text-gray-700 mb-8">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="font-medium">jeanclauderavineau@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <span className="font-medium">06 72 42 79 80</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                        </svg>
                      </div>
                      <span className="font-medium">managetransport.fr</span>
                    </div>
                  </div>
                  
                  <a 
                    href="tel:0672427980" 
                    className="group inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-6 h-6 bg-white/20 rounded-md flex items-center justify-center mr-3">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span>Nous appeler maintenant</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 