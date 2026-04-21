'use client';

import { container, item } from '../animation/variants';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface GalerieProps {
  images: string[];
}

export default function Galerie({ images }: GalerieProps) {
  if (images.length === 0) {
    return (
      <section className="py-16 px-4 text-center text-[#b8b09a]">
        Aucune photo de chantier pour l&apos;instant.
      </section>
    );
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="py-16 px-4"
    >
      <div className="mx-auto max-w-screen-xl">
        <motion.div
          variants={container}
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
        >
          {images.map((src, index) => (
            <motion.div
              key={src}
              variants={item}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-[28px] border border-[#c9a84c33] bg-night-700 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            >
              <div className="relative h-96 sm:h-[30rem]">
                <Image
                  src={src}
                  alt={`Photo de chantier ${index + 1}`}
                  loading="lazy"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-105"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}