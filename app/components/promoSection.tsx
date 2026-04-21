'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const scale = {
  hidden: { opacity: 0, scale: 0.97 },
  show: { opacity: 1, scale: 1 },
};

export default function PromoSection() {
  return (
    <section className="bg-night-800 px-4 py-16">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid max-w-screen-xl rounded-2xl bg-[#0f0f0f] border border-[#c9a84c22] p-6 md:p-10 lg:grid-cols-12 lg:gap-10"
      >

        {/* Image */}
        <motion.div
          variants={scale}
          transition={{ duration: 0.4 }}
          className="lg:col-span-5 flex items-center justify-center"
        >
          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="mb-4 w-full max-w-sm rounded-xl object-cover h-64 md:h-80 md:max-w-full border border-[#c9a84c22] shadow-xl"
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
            alt="Maison avec toiture en ardoise refaite par Corrignan Couverture"
          />
        </motion.div>

        {/* Texte */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.4 }}
          className="lg:col-span-7 place-self-center"
        >

          <motion.h2
            variants={fadeUp}
            className="mb-3 text-2xl font-bold leading-tight tracking-tight text-white md:text-4xl"
          >
            Votre devis toiture gratuit, <br />
            <span className="text-[#f0d080]">sans engagement.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mb-6 text-[#b8b09a] leading-relaxed"
          >
            Fuite, rénovation complète, bardage ou simple entretien, on se déplace pour évaluer
            votre chantier et vous remettre un devis clair, détaillé et gratuit.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-[#b8882a] to-[#e0b84a] px-5 py-3 text-base font-medium text-[#120d00] hover:opacity-90 transition"
            >
              Demander un devis
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715"
                  stroke="#120d00"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-6 w-20 h-[2px] bg-gradient-to-r from-[#c9a84c] to-[#e0b84a]"
          />

        </motion.div>

      </motion.div>
    </section>
  );
}