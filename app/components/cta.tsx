'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export default function Cta() {
  return (
    <section className="relative bg-night-800 py-20 px-4 overflow-hidden">

      {/* glow décoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#c9a84c22] blur-[120px] rounded-full" />
      </div>

      <motion.div
        className="relative mx-auto max-w-screen-sm text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >

        <motion.h2
          variants={item}
          className="mb-4 text-3xl md:text-4xl font-extrabold leading-tight text-white"
        >
          Un projet de toiture ?{" "}
          <span className="text-[#f0d080]">On en parle.</span>
        </motion.h2>

        <motion.div
          variants={item}
          className="mx-auto w-20 h-[2px] bg-gradient-to-r from-[#c9a84c] to-[#e0b84a] mb-6"
        />

        <motion.p
          variants={item}
          className="mb-8 text-[#b8b09a] md:text-lg leading-relaxed"
        >
          Devis gratuit sous 48h, sans engagement. On se déplace sur Lorient, Lanester, Auray
          et tout le bassin lorientais.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-br from-[#b8882a] to-[#e0b84a] text-[#120d00] font-medium rounded-lg text-sm px-6 py-3 hover:opacity-90 transition shadow-lg"
          >
            Demander un devis gratuit
          </Link>

          <a
            href="tel:0604107018"
            className="flex items-center gap-2 text-sm font-medium text-[#f0d080] hover:text-white transition px-5 py-3 rounded-lg border border-[#c9a84c33] bg-[#0f0f0f]"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f0d080" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.17 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            06 04 10 70 18
          </a>

        </motion.div>

      </motion.div>
    </section>
  );
}