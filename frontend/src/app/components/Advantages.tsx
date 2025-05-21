import { motion } from "framer-motion";

const advantages = [
  {
    icon: (
      <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15.5H8M12 15.5C14.2091 15.5 16 13.7091 16 11.5V5.5C16 3.29086 14.2091 1.5 12 1.5C9.79086 1.5 8 3.29086 8 5.5V11.5C8 13.7091 9.79086 15.5 12 15.5ZM19 9.5V11.5C19 15.366 15.866 18.5 12 18.5C8.13401 18.5 5 15.366 5 11.5V9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Expertise",
    description: "Plus de 30 ans d'expérience dans le secteur du transport",
  },
  {
    icon: (
      <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Disponibilité",
    description: "Présent dès que vous en avez besoin",
  },
  {
    icon: (
      <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 14.5C9.5 14.5 7.5 12.5 7.5 10C7.5 7.5 9.5 5.5 12 5.5C14.5 5.5 16.5 7.5 16.5 10C16.5 12.5 14.5 14.5 12 14.5ZM12 14.5V17.5M12 17.5H9M12 17.5H15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Économique",
    description: "Un prix juste et adapté à tous vos projets",
  },
  {
    icon: (
      <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 16.5L21 21M6 11.5H12M18 11.5C18 15.6421 14.6421 19 10.5 19C6.35786 19 3 15.6421 3 11.5C3 7.35786 6.35786 4 10.5 4C14.6421 4 18 7.35786 18 11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Accompagnement",
    description: "À vos côtés du début à la fin",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const Advantages = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
            POURQUOI NOUS ?
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Nos avantages
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="mb-4 p-3 rounded-full bg-primary/10">
                {advantage.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {advantage.title}
              </h4>
              <p className="text-gray-600">{advantage.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-3 bg-white p-4 rounded-xl shadow-lg">
            <span className="flex-shrink-0">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M3 3V21M3 21H21M3 21L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <div className="text-left">
              <h4 className="font-semibold">English speaker</h4>
              <p className="text-sm text-gray-600">
                Profitez d&apos;une expérience entièrement bilingue pour vos missions
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 