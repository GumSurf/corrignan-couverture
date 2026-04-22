'use client';

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Heading() {
  return (
    <section className="bg-night-800 py-16 px-4">
      
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="gap-16 items-center mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:px-6"
      >

        {/* Texte */}
        <div className="font-light text-[#b8b09a] sm:text-lg">

          <motion.h2
            variants={fadeUp}
            className="mb-4 text-4xl tracking-tight font-extrabold text-white"
          >
            Un savoir-faire local, des chantiers soignés
          </motion.h2>

          <motion.p variants={fadeUp} className="mb-4 leading-relaxed">
            Corrignan Couverture, c&apos;est une entreprise familiale basée à Lanester, au cœur du bassin
            lorientais. On intervient sur tous types de toitures, ardoise naturelle, zinc, bac acier,
            aluminium, avec le soin qu&apos;on apporterait à sa propre maison. Assez proches pour être
            réactifs, assez expérimentés pour tout gérer de A à Z.
          </motion.p>

          <motion.p variants={fadeUp} className="leading-relaxed">
            Chaque chantier est suivi personnellement, du devis à la réception des travaux. Pas de
            sous-traitance, pas de mauvaise surprise : vous savez toujours qui est sur votre toit.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-6 w-16 h-[2px] bg-gradient-to-r from-[#c9a84c] to-[#e0b84a]"
          />

        </div>

        {/* Images */}
        <motion.div
          variants={container}
          className="grid grid-cols-2 gap-4 mt-10 lg:mt-0"
        >

          <motion.img
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="w-full rounded-xl object-cover h-64 lg:h-auto border border-[#c9a84c22] shadow-lg"
            src="/images/chantiers/ardoise/ardoise2.jpg"
          />

          <motion.img
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="mt-4 w-full lg:mt-10 rounded-xl object-cover h-64 lg:h-auto border border-[#c9a84c22] shadow-lg"
            src="/images/chantiers/bacAcier/bac_acier2.jpg"
          />

        </motion.div>

      </motion.div>
    </section>
  );
}