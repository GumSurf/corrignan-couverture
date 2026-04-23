'use client';

import Link from "next/link";
import { fadeUp, item} from '../animation/variants';
import { motion } from "framer-motion";
import { useStagger } from '../animation/useStagger';
import Image from "next/image";

export default function Hero() {
const stagger = useStagger(0.08);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-night-800 px-3 sm:px-10 pt-10"
    >
      {/* Glow décoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#c9a84c22] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#7ac0e022] blur-[120px] rounded-full" />
      </div>

      <main className="relative flex flex-col items-center max-w-7xl mx-auto w-full">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 mb-6 flex items-center space-x-2 border border-[#c9a84c44] text-[#f0d080] text-xs rounded-full px-4 pr-2 py-1.5 bg-[#0f0f0f]"
        >
          <span>Couvreur · Morbihan depuis 1999</span>
        </motion.div>

        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-center text-white font-bold text-3xl sm:text-4xl md:text-5xl max-w-2xl leading-tight"
        >
          Votre toiture entre les mains de{" "}
          <span className="text-[#f0d080]">Damien Corrignan</span>, couvreur du Morbihan
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-center text-[#b8b09a] max-w-lg text-sm sm:text-base leading-relaxed"
        >
          Ardoise, zinc, bac acier, aluminium, bardage, Corrignan Couverture intervient sur Lanester,
          Lorient, Ploemeur, Hennebont, Quéven, Locmiquélic, L'Armor Plage et tout le bassin lorientais. Devis gratuit.
        </motion.p>

        {/* Services */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mt-6 flex flex-wrap justify-center gap-2"
        >
          {["Ardoise", "Zinc", "Bac acier", "Aluminium", "Bardage"].map((s) => (
            <motion.span
              key={s}
              variants={item}
              className="text-xs px-3 py-1.5 rounded-full bg-[#0f0f0f] border border-[#c9a84c22] text-[#b8b09a] font-medium"
            >
              {s}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3"
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="/contact"
              className="bg-gradient-to-br from-[#b8882a] to-[#e0b84a] text-[#120d00] px-6 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 hover:opacity-90 transition"
            >
              Demander un devis gratuit
            </Link>
          </motion.div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="tel:0604107018"
            className="flex items-center gap-2 text-sm font-medium text-[#f0d080] hover:text-white transition px-4 py-2.5 rounded-lg border border-[#c9a84c33] bg-[#0f0f0f]"
          >
            06 04 10 70 18
          </motion.a>
        </motion.div>

        {/* Image hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-14 max-w-5xl w-full"
        >
          <Image
            className="rounded-[40px] w-full h-72 object-cover border border-[#c9a84c22] shadow-2xl"
            src="/images/hero/hero.jpg"
              width={1200}
              height={288}
            alt="Chantier de couverture en ardoise, Corrignan Couverture Lanester"
          />
        </motion.div>

      </main>
    </section>
  );
}