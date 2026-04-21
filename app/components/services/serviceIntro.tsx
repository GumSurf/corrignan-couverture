"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

type Service = {
  label: string;
  tagline: string;
  article: string;
  description: string;
  points: string[];
};

type Props = {
  service: Service;
};

export default function ServiceIntro({ service }: Props) {
  if (!service) return null;

  return (
    <section className="py-12 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Pourquoi choisir {service.article} ?
          </h2>

          <p className="text-[#b8b09a] mb-8">
            {service.description}
          </p>

          <Link
            href="/contact"
            className="bg-gold-500 px-5 py-2.5 rounded-lg"
          >
            Demander un devis
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-night-700 rounded-2xl p-6 mt-10 lg:mt-0 border"
        >
          <h3 className="text-white mb-5">Les points forts</h3>

          <ul className="space-y-3">
            {service.points.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-[#b8b09a] flex items-center gap-2"
              >
                <CheckCircle className="w-4 h-4 text-[#c9a84c]" />
                {point}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}