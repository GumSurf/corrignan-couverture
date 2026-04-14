"use client";

import { motion } from "framer-motion";

export default function GalerieCta() {
  return (
    <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="py-16 px-4 bg-night-900"
>
  <div className="mx-auto max-w-screen-sm text-center">
    <h2 className="mb-4 text-3xl md:text-4xl font-extrabold text-white">
      Vous voulez la même qualité sur votre toit ?
    </h2>

    <p className="mb-8 text-[#b8b09a] leading-relaxed">
      Contactez-nous dès maintenant pour un devis rapide et une visite de chantier.
    </p>

    <a
      href="mailto:contact@corrignan-couverture.fr"
      className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#b8882a] to-[#e0b84a] px-8 py-4 text-sm font-semibold text-[#120d00] shadow-lg shadow-[#00000060] transition hover:opacity-90"
    >
      Envoyer un message
    </a>
  </div>
</motion.section>
  );
}