"use client";

import Image from "next/image";
import SocialIcon from "../SocialIcon";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-20 px-4 py-10 md:pt-12 md:pb-4 max-w-7xl mx-auto w-full text-center md:text-left">
        {/* Bloc logo + slogan */}
        <div className="flex-1 min-w-[220px] flex flex-col items-center text-center">
          <Image 
            src="/arbre-de-vie-150x150.png" 
            alt="Logo Manage Transport" 
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto h-auto mx-auto" 
            unoptimized
          />
          <div className="my-5 text-lg text-center">Faisons avancer votre projet de transport<br />ensemble</div>
        </div>
        {/* Bloc liens */}
        <div className="flex-1 min-w-[180px] flex flex-col items-center">
          <div className="font-bold text-primary text-xl mb-4">Les pages importantes</div>
          <div className="flex flex-col gap-1 text-base items-center">
            <a href="/" className="text-gray-900 hover:text-primary transition-colors">Accueil</a>
            <a href="/solutions" className="text-gray-900 hover:text-primary transition-colors">Nos solutions</a>
            <a href="/valeurs" className="text-gray-900 hover:text-primary transition-colors">Nos valeurs</a>
            <a href="/equipe" className="text-gray-900 hover:text-primary transition-colors">Qui sommes-nous</a>
            <a href="/contact" className="text-gray-900 hover:text-primary transition-colors">Nous rencontrer</a>
            <a href="/cgv" className="text-gray-900 hover:text-primary transition-colors">Conditions générales de vente</a>
          </div>
        </div>
        {/* Bloc contacts + social icons */}
        <div className="flex-1 min-w-[220px] flex flex-col items-center">
          <div className="font-bold text-primary text-xl mb-4">Nos contacts</div>
          <div className="flex flex-col gap-3 text-base items-center">
            <div className="flex items-center gap-2">
              <svg width={20} height={20} fill="#2d347b" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.61a1 1 0 01-1 1C10.07 22 2 13.93 2 4.99a1 1 0 011-1h3.61a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.21z" /></svg>
              06 43 32 88 74
            </div>
            <div className="flex items-center gap-2">
              <svg width={20} height={20} fill="#2d347b" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" /></svg>
              contact@managetransport.fr
            </div>
            <div className="flex items-center gap-2">
              <svg width={20} height={20} fill="#2d347b" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
              11 Grande Rue, 77580 Guérard
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <SocialIcon brand="facebook" variant="footer" />
            <SocialIcon brand="linkedin" variant="footer" />
            <SocialIcon brand="instagram" variant="footer" />
          </div>
        </div>
      </div>
      <div className="bg-black text-white text-center py-3 text-base font-bold">
        ©{year} ManageTransport - Tous droits réservés
      </div>
    </footer>
  );
} 