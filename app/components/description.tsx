'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function Description() {
  return (
    <section className="bg-night-800 py-16 px-4">

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto max-w-screen-xl lg:px-6"
      >

        <motion.div
          variants={fadeUp}
          className="max-w-screen-lg text-[#b8b09a] sm:text-lg"
        >

          <motion.h2
            variants={fadeUp}
            className="mb-4 text-4xl tracking-tight font-bold text-white leading-tight"
          >
            Artisan couvreur expérimenté dans le{" "}
            <span className="text-[#f0d080] font-extrabold">bassin lorientais</span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="w-20 h-[2px] bg-gradient-to-r from-[#c9a84c] to-[#e0b84a] mb-6"
          />

          <motion.p variants={fadeUp} className="mb-4 leading-relaxed">
            Depuis septembre 2024, Damien Corrignan, couvreur indépendant, pose de l'ardoise à Lorient, refait des toits en zinc à Locmiquélic, installe des bacs acier à Ploemeur...
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mb-6 font-medium text-[#d6cbb3] leading-relaxed"
          >
            Je ne cherche pas à être la plus grosse entreprise du coin, mais plutôt l'artisan de confiance pour votre toiture dans le Morbihan.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 font-medium text-[#f0d080] hover:text-white transition"
            >
              Voir nos réalisations
              <svg className="w-6 h-6" fill="none" viewBox="0 0 20 20">
                <path
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </Link>
          </motion.div>

        </motion.div>

      </motion.div>
    </section>
  );
}