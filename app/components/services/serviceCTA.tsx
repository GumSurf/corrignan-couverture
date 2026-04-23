"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServiceCTA({ cta }: { cta: string }) {
  return (
    <section className="py-12 px-4 text-center">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl text-white mb-4">
          Un projet en {cta} ?
        </h2>

        <p className="text-[#b8b09a] mb-6">
          Devis gratuit
        </p>

        <Link href="/contact" className="bg-gold-500 px-6 py-3 rounded-lg">
          Demander un devis
        </Link>
      </motion.div>

    </section>
  );
}