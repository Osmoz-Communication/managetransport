import React from "react";

export const QuoteSection = () => (
  <section className="w-full bg-white py-16 flex flex-col items-center">
    <div className="w-full max-w-4xl px-4 mx-auto">
      <div data-aos="zoom-in" className="bg-white rounded-xl shadow-2xl p-10 flex flex-col items-center text-center" style={{boxShadow: '0 8px 64px 0 rgba(0,0,0,0.08)'}}>
        <h2 data-aos="fade-down" data-aos-delay="200" className="text-3xl md:text-4xl font-bold text-gray-600 mb-4">Demandez un devis maintenant</h2>
        <p data-aos="fade-up" data-aos-delay="300" className="text-gray-600 mb-8">Écrivez-nous dès maintenant pour commencer à collaborer ensemble !</p>
        <a data-aos="zoom-in" data-aos-delay="400" href="/contact" className="bg-blue-400 hover:bg-blue-500 text-white font-semibold px-12 py-4 rounded-full text-lg transition-colors">Nous contacter</a>
      </div>
    </div>
  </section>
);