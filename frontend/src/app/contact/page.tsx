"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold text-gray-700 mb-2 text-center"
      >
        Nous rencontrer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-gray-600 mb-10 text-center max-w-2xl"
      >
        Prenez contact avec nous afin de pouvoir nous rencontrer et discuter de votre projet transport !
      </motion.p>

      {/* Formulaire */}
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="bg-white rounded-xl shadow-xl p-8 md:p-12 w-full max-w-4xl mb-12 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="md:col-span-1 flex flex-col gap-4">
          <label className="font-semibold text-gray-700">Prénom <span className="text-red-500">*</span></label>
          <input type="text" required className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50" />
        </div>
        <div className="md:col-span-1 flex flex-col gap-4">
          <label className="font-semibold text-gray-700">Nom <span className="text-red-500">*</span></label>
          <input type="text" required className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50" />
        </div>
        <div className="md:col-span-1 flex flex-col gap-4">
          <label className="font-semibold text-gray-700">Entreprise</label>
          <input type="text" className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50" />
        </div>
        <div className="md:col-span-3 flex flex-col gap-4">
          <label className="font-semibold text-gray-700">Email <span className="text-red-500">*</span></label>
          <input type="email" required className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50" />
        </div>
        <div className="md:col-span-3 flex flex-col gap-4">
          <label className="font-semibold text-gray-700">Message <span className="text-red-500">*</span></label>
          <textarea required rows={4} className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
        </div>
        <div className="md:col-span-3 flex justify-center mt-2">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="bg-blue-400 hover:bg-blue-500 text-white font-semibold px-10 py-3 rounded-full text-lg shadow transition-colors"
          >
            Envoyer
          </motion.button>
        </div>
      </motion.form>

      {/* Carte de visite animée */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="w-full max-w-3xl bg-white rounded-xl shadow-2xl flex flex-col md:flex-row items-center md:items-stretch overflow-hidden mb-10"
      >
        <div className="md:w-1/3 flex items-center justify-center bg-gray-100 p-6 md:p-0">
          <Image src="/jc-ravineau.jpg" alt="Jean-Claude Ravineau" width={220} height={220} className="rounded-lg object-cover" />
        </div>
        <div className="md:w-2/3 flex flex-col justify-center p-8 relative">
          <div className="absolute top-6 right-6">
            <Image src="/logo.png" alt="Logo Manage Transport" width={60} height={60} />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-1">Jean-Claude <span className="font-bold text-gray-900">RAVINEAU</span></h3>
          <div className="h-1 w-24 bg-yellow-400 mb-2" />
          <div className="text-yellow-600 font-semibold mb-2">Fondateur et Dirigeant de Manage Transport</div>
          <div className="text-gray-700 mb-1">jeanclauderavineau@gmail.com</div>
          <div className="text-gray-700 mb-1">Mobile : 06 72 42 79 80</div>
          <div className="text-gray-700 mb-4">Site : managetransport.fr</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center"
      >
        <a href="tel:0672427980" className="bg-blue-400 hover:bg-blue-500 text-white font-semibold px-12 py-4 rounded-full text-lg transition-colors">Nous appeler</a>
      </motion.div>
    </div>
  );
} 