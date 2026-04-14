"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type OtherServiceCardProps = {
  slug: string;
  label: string;
  tagline: string;
  image: string;
};

export default function OtherServiceCard({
  slug,
  label,
  tagline,
  image,
}: OtherServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Link
        href={`/services/${slug}`}
        className="group flex flex-col rounded-2xl border border-[#c9a84c33] bg-night-700 overflow-hidden hover:border-[#c9a84c66] hover:shadow-md transition-all duration-300 h-full"
      >
        {/* Photo */}
        <motion.div
          className="relative w-full h-48 overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={image}
            alt={label}
            fill
            className="object-cover transition-all duration-300 group-hover:brightness-110"
          />
        </motion.div>

        {/* Texte */}
        <motion.div
          className="flex items-center justify-between gap-3 p-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="min-w-0">
            <motion.p
              className="font-semibold text-white truncate"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {label}
            </motion.p>
            <motion.p
              className="text-sm text-[#b8b09a] truncate"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {tagline}
            </motion.p>
          </div>

          <motion.span
            className="shrink-0 inline-flex items-center gap-1 text-sm font-medium text-[#f0d080] whitespace-nowrap group-hover:gap-2 transition-all duration-200"
            whileHover={{ x: 5 }}
          >
            En savoir plus
            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              whileHover={{ x: 3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>
          </motion.span>
        </motion.div>
      </Link>
    </motion.div>
  );
}