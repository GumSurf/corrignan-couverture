"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Data = {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
};

type Props = {
  data: Data;
};

export default function ServiceImageText({ data }: Props) {
  if (!data) return null;

  return (
    <section className="py-12 px-4">
      <div className="mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-64 md:h-80 rounded-2xl overflow-hidden"
        >
          <Image
            src={data.image}
            alt={data.imageAlt}
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl text-white mb-4">{data.title}</h2>
          <p className="text-[#b8b09a]">{data.body}</p>
        </motion.div>

      </div>
    </section>
  );
}