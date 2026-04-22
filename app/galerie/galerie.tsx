'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface GalerieProps {
  images: string[];
}

export default function Galerie({ images }: GalerieProps) {
  const [visible, setVisible] = useState(9);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const visibleImages = images.slice(0, visible);

  const close = () => setSelectedIndex(null);

  const next = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % images.length);
  };

  const prev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev! === 0 ? images.length - 1 : prev! - 1
    );
  };

  // ESC + arrows
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedIndex]);

  // swipe mobile
  let touchStartX = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartX;

    if (diff > 50) prev();
    if (diff < -50) next();
  };

  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-7xl">

        {/* GRID */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {visibleImages.map((src, index) => (
            <motion.div
              key={src}
              onClick={() => setSelectedIndex(index)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="cursor-pointer group overflow-hidden rounded-[28px] border border-[#c9a84c33] bg-night-700"
            >
              <div className="relative w-full h-64">
                <Image
                  src={src}
                  alt={`Photo de chantier ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-105"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* LOAD MORE */}
        {visible < images.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisible((prev) => prev + 6)}
              className="px-6 py-3 rounded-lg bg-[#c9a84c] text-black font-medium hover:opacity-90 transition"
            >
              Voir plus
            </button>
          </div>
        )}

        {/* MODAL */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            >
              <motion.div
                className="relative w-full max-w-6xl h-[80vh]"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <Image
                  src={images[selectedIndex]}
                  alt="Photo chantier"
                  fill
                  className="object-contain rounded-xl"
                  sizes="100vw"
                  priority
                />

                {/* CLOSE */}
                <button
                  onClick={close}
                  className="absolute top-4 right-4 text-white text-3xl"
                >
                  ✕
                </button>

                {/* LEFT */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl"
                >
                  ‹
                </button>

                {/* RIGHT */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl"
                >
                  ›
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}