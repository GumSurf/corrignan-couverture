"use client";

import { container, item } from "../animation/variants"
import { motion } from "framer-motion";

export default function GalerieHero() {

  return (
    <motion.section
  initial="hidden"
  animate="show"
  variants={container}
  className="py-16 px-4 bg-night-900 border-b border-[#c9a84c22]"
>
  <div className="mx-auto max-w-7xl text-center">
    <motion.p variants={item} className="text-[#f0d080] text-xs font-medium tracking-widest uppercase mb-3">
      Galerie
    </motion.p>

    <motion.h1 variants={item} className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
      Galerie photo
    </motion.h1>

    <motion.p variants={item} className="text-[#b8b09a] max-w-2xl mx-auto">
      Une sélection d'images de nos réalisations en couverture et bardage dans le Morbihan.
    </motion.p>
  </div>
</motion.section>
  );
}