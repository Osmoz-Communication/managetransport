import { motion } from "framer-motion";
import Image from "next/image";

const imageVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: 0.2 + i * 0.18,
      ease: "easeOut",
    },
  }),
};

export const SatisfactionGuarantees = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      alt: "Route",
      className: "row-span-2 rounded-xl overflow-hidden relative",
    },
    {
      src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      alt: "Camions",
      className: "rounded-xl overflow-hidden relative",
    },
    {
      src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
      alt: "Bureau",
      className: "rounded-xl overflow-hidden relative",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Texte à gauche */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-primary text-base font-semibold mb-2"
          >
            À propos
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-10"
          >
            Vos garanties de satisfaction
          </motion.h3>

          <div className="flex flex-col gap-8 mb-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center text-left gap-4"
            >
              <span className="flex-shrink-0">
                <Image src="/icons/shield.png" alt="Bouclier" width={48} height={48} style={{filter: 'drop-shadow(0 0 2px #5d6ef8)'}} />
              </span>
              <div>
                <div className="font-bold text-2xl md:text-3xl text-gray-900 mb-1">Un responsable transport en temps partagé</div>
                <div className="text-gray-600 text-base md:text-lg">Vous bénéficierez de tout notre savoir-faire jusqu&apos;à l&apos;aboutissement de votre projet</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex items-center text-left gap-4"
            >
              <span className="flex-shrink-0">
                <Image src="/icons/answer.png" alt="Réponse rapide" width={48} height={48} style={{filter: 'drop-shadow(0 0 2px #58468c)'}} />
              </span>
              <div>
                <div className="font-bold text-2xl md:text-3xl text-gray-900 mb-1">Une réponse sous 48 heures</div>
                <div className="text-gray-600 text-base md:text-lg">Chez Manage Transport, nous faisons le nécessaire pour vous répondre sous 2 jours maximum</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex justify-center lg:justify-start"
          >
            <button className="bg-primary text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors text-lg flex items-center gap-2">
              En savoir plus
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Images à droite avec effet d'apparition */}
        <motion.div 
          className="grid grid-cols-2 grid-rows-2 gap-4 h-[420px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              className={img.className}
              custom={i}
              variants={imageVariants}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}; 