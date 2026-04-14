'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const services = [
  {
    slug: "ardoise",
    label: "Ardoise",
    image: "/images/services/ardoise.jpeg",
    short:
      "La couverture traditionnelle bretonne par excellence. Naturelle ou artificielle, l'ardoise offre une durabilité exceptionnelle et s'intègre parfaitement dans le paysage du Morbihan.",
    tags: ["Ardoise naturelle", "Ardoise artificielle", "Rénovation", "Neuf"],
  },
  {
    slug: "zinc",
    label: "Zinc",
    image: "/images/services/zinc.png",
    short:
      "Matériau noble et durable, le zinc est idéal pour les toitures complexes, les noues, les lucarnes et les façades.",
    tags: ["Zinc naturel", "Zinc prépatiné", "Noues & raccords", "Lucarnes"],
  },
  {
    slug: "bac-acier",
    label: "Bac acier",
    image: "/images/services/bac-acier.jpg",
    short:
      "Solution économique et rapide à poser, le bac acier est parfait pour les bâtiments agricoles et extensions.",
    tags: ["Agricole", "Extensions", "Faible pente", "Grandes surfaces"],
  },
  {
    slug: "aluminium",
    label: "Aluminium",
    image: "/images/services/aluminium.jpg",
    short:
      "Léger, inoxydable et sans entretien, idéal pour les projets modernes.",
    tags: ["Toiture plate", "Terrasses", "Anti-corrosion", "Bord de mer"],
  },
  {
    slug: "bardage",
    image: "/images/services/bardage.jpg",
    label: "Bardage",
    short:
      "Le bardage habille et protège vos façades tout en améliorant l'isolation.",
    tags: ["Zinc", "Alu", "Bac acier", "Isolation extérieure"],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-night-800 text-white">

      {/* HERO */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="py-16 px-4 bg-night-900 border-b border-[#c9a84c22]"
      >
        <div className="mx-auto max-w-screen-xl text-center">
          <p className="text-xs tracking-widest uppercase text-[#c9a84c] mb-3">
            Nos métiers
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#f0d080]">
            Nos services de couverture
          </h1>

          <p className="text-[#b8b09a] max-w-2xl mx-auto">
            Ardoise, zinc, bac acier, aluminium ou bardage, on maîtrise tous les matériaux.
          </p>
        </div>
      </motion.section>

      {/* GRID */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="py-16 px-4"
      >
        <div className="mx-auto max-w-screen-xl grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <motion.div key={service.slug} variants={fadeUp}>
              <Link
                href={`/services/${service.slug}`}
                className="group rounded-2xl overflow-hidden bg-night-700 border border-[#c9a84c22] hover:border-[#c9a84c66] transition block"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.label}
                    fill
                    className="object-cover transition group-hover:scale-105 duration-300"
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-[#f0d080] mb-3">
                    {service.label}
                  </h2>

                  <p className="text-sm text-[#b8b09a] mb-5 leading-relaxed">
                    {service.short}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-[#c9a84c10] text-[#c9a84c]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[#c9a84c] group-hover:gap-2 transition-all">
                    En savoir plus →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}

        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="py-16 px-4 bg-night-900 border-t border-[#c9a84c22]"
      >
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="text-3xl font-extrabold mb-4 text-[#f0d080]">
            Un projet ? On se déplace.
          </h2>

          <p className="text-[#b8b09a] mb-6">
            Devis gratuit sous 48h sur tout le Morbihan.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-br from-[#b8882a] to-[#e0b84a] text-[#120d00] font-medium px-5 py-3 rounded-lg hover:opacity-90 transition"
            >
              Demander un devis gratuit
            </Link>

            <a
              href="tel:0604107018"
              className="border border-[#c9a84c33] text-[#f0d080] px-5 py-3 rounded-lg hover:border-[#c9a84c] transition"
            >
              06 04 10 70 18
            </a>
          </div>
        </div>
      </motion.section>

    </main>
  );
}