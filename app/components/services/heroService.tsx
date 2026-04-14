"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Service = {
  label: string;
  tagline: string;
  image: string;
  imageAlt: string;
};

type Props = {
  service: Service;
};

export default function HeroService({ service }: Props) {
  if (!service) return null;
  
  return (
    <section className="relative overflow-hidden">

      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
        className="relative w-full h-64 md:h-96"
      >
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 bg-night-900/60 flex flex-col justify-end p-6 md:p-12">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/services" className="text-white/70 hover:text-white text-sm mb-4 inline-block">
            ← Tous les services
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/70 text-sm mb-1"
        >
          {service.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-extrabold text-white"
        >
          {service.label}
        </motion.h1>

      </div>
    </section>
  );
}