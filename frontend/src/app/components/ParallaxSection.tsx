import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export const ParallaxSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Appliquer un effet de parallaxe plus subtil et ajuster l'opacité
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]); // Moins de mouvement vertical
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.5, 1, 1, 0.5]
  ); // Apparition et disparition plus douces

  return (
    <section
      ref={ref}
      className="relative min-h-[80vh] md:min-h-[calc(100vh-128px)] overflow-hidden flex flex-col justify-end"
    >
      {/* Image de fond avec effet parallaxe via Framer Motion */}
      <motion.div
        style={{ y, opacity }} // Utiliser les transformations de Framer Motion
        className="absolute inset-0 w-full h-[120%] z-0" // Assurer que l'image est derrière le contenu
      >
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80"
          alt="Paysage montagneux"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </motion.div>
      {/* Titre et sous-titre animés avec AOS */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-24 pb-10 px-4">
        <h2
          data-aos="fade-down"
          className="text-4xl md:text-5xl font-bold text-white mb-4 text-center drop-shadow-lg"
        >
          Atteignez vos objectifs
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg md:text-2xl text-white mb-10 text-center drop-shadow max-w-3xl mx-auto"
        >
          Nous serons votre bras droit pour vous aider à atteindre les sommets
          dont vous rêvez...
        </p>
      </div>
      {/* Cartes animées avec AOS */}
      <div className="relative z-20 flex flex-col md:flex-row justify-center items-stretch gap-0 md:gap-0 w-full max-w-6xl mx-auto -mb-24 px-4 md:px-0">
        {/* Carte 1 */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex-1 bg-[#5d6ef8] p-8 md:p-10 flex flex-col items-start rounded-t-xl md:rounded-l-xl md:rounded-tr-none text-white min-w-[260px]"
        >
          <div className="mb-4">
            <Image
              src="/icons/clock.png"
              alt="Disponibilités"
              width={48}
              height={48}
            />
          </div>
          <div className="font-bold text-2xl mb-2">Disponibilités</div>
          <div className="mb-2 text-base font-semibold">
            Du lundi au vendredi
          </div>
          <div className="mb-1">8h30 - 12h30</div>
          <div className="mb-4">13h30 - 18h30</div>
          <a
            href="#"
            className="mt-auto underline font-semibold flex items-center gap-1"
          >
            En savoir plus <span>›</span>
          </a>
        </div>
        {/* Carte 2 */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex-1 bg-[#4a6cf7] p-8 md:p-10 flex flex-col items-start text-white min-w-[260px]"
        >
          <div className="mb-4">
            <Image
              src="/icons/phone.png"
              alt="Téléphone"
              width={48}
              height={48}
            />
          </div>
          <div className="font-bold text-2xl mb-2">Appelez-nous...</div>
          <div className="mb-2 text-2xl font-bold">+33 6 43 32 88 74</div>
          <div className="mb-4">
            Pour toute question ou toute demande, n&#39;hésitez pas !
          </div>
          <a
            href="#"
            className="mt-auto underline font-semibold flex items-center gap-1"
          >
            Nous contacter <span>›</span>
          </a>
        </div>
        {/* Carte 3 */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="flex-1 bg-[#53b6e8] p-8 md:p-10 flex flex-col items-center justify-center rounded-b-xl md:rounded-r-xl md:rounded-bl-none text-white min-w-[260px]"
        >
          <div className="mb-4">
            <Image src="/icons/mail.png" alt="E-mail" width={48} height={48} />
          </div>
          <div className="font-bold text-2xl mb-2 text-center">
            ...ou envoyez-nous un
            <br className="hidden md:block" /> e-mail !
          </div>
        </div>
      </div>
      <div className="h-32 md:h-24" />{" "}
      {/* Espace pour ne pas couper les cartes */}
    </section>
  );
};
