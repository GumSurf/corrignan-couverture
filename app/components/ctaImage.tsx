'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.97 },
  show: { opacity: 1, scale: 1 },
};

export default function CtaImage() {
  return (
    <section className="bg-night-800 py-16 px-4">

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="gap-10 items-center mx-auto max-w-7xl md:grid md:grid-cols-2 lg:px-6"
      >

        <motion.div variants={imageVariant} transition={{ duration: 0.4 }}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden border border-[#c9a84c22] shadow-xl"
          >
            <Image
              src="/images/chantiers/camion1.jpg"
              alt="Couvreur en intervention sur un toit dans le bassin lorientais"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Texte */}
        <motion.div
          variants={fadeUp}
          className="mt-6 md:mt-0"
        >

          <motion.h2
            variants={fadeUp}
            className="mb-4 text-4xl tracking-tight font-extrabold text-white leading-tight"
          >
            Une toiture qui tient dans le temps,{" "}
            <span className="text-[#f0d080]">posée par des professionel.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mb-6 text-[#b8b09a] md:text-lg leading-relaxed"
          >
            Chez Corrignan Couverture, on travaille en direct, pas de sous-traitance, pas d'intermédiaire.
            Du premier coup de téléphone jusqu&apos;à la fin du chantier.
          </motion.p>

          <motion.div variants={fadeUp}>
            <div className="mb-6 w-20 h-[2px] bg-gradient-to-r from-[#c9a84c] to-[#e0b84a]" />
          </motion.div>

          <motion.div
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-br from-[#b8882a] to-[#e0b84a] text-[#120d00] font-medium rounded-lg text-sm px-5 py-3 hover:opacity-90 transition"
            >
              Nous contacter
              <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                <path
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3"
                  stroke="#120d00"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>

        </motion.div>

      </motion.div>
    </section>
  );
}