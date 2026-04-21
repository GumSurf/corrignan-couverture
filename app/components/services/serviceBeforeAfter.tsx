"use client";

import { motion } from "framer-motion";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

type Item = {
  before: string;
  after: string;
  caption: string;
};

type Props = {
  items: Item[]; // 👈 on passe en tableau maintenant
};

export default function ServiceBeforeAfter({ items }: Props) {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-12 px-4 max-w-screen-xl mx-auto space-y-10">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-2xl text-white">Avant / Après</h2>
        <p className="text-[#b8b09a]">
          Découvrez la transformation de nos chantiers
        </p>
      </motion.div>

      {/* Liste des before/after */}
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <div className="relative w-full aspect-3/2 overflow-hidden rounded-2xl">
            <ReactBeforeSliderComponent
              firstImage={{ imageUrl: item.after }}
              secondImage={{ imageUrl: item.before }}
            />
          </div>
          <p className="text-[#b8b09a] text-sm">
            {item.caption}
          </p>
        </motion.div>
      ))}
    </section>
  );
}