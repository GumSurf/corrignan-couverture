'use client';

import { container, item } from "../animation/variants";
import { motion } from "framer-motion";
import Image from "next/image";
  const galleryImages = [
  "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558618047-f4b3a2c6d3c4?q=80&w=1200&auto=format&fit=crop",
];

export default function Galerie() {
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
      {galleryImages.map((src, index) => (
        <motion.div
          key={`${src}-${index}`}
          variants={item}
          whileHover={{ y: -6 }}
          className="group overflow-hidden rounded-[28px] border border-[#c9a84c33] bg-night-700 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
        >
          <div className="relative h-96 sm:h-[30rem]">
            <Image
              src={src}
              alt={`Photo de couverture ${index + 1}`}
              fill
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