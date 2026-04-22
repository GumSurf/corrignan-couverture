"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TestimonialsSwiper from "../components/testimonialsSwiper";
import FAQ from "../components/faq";
import { type FaqItem } from "../components/faq";

// ── Metadata est dans un fichier séparé (metadata.ts) car cette page est "use client"
// export const metadata: Metadata = { ... }

// ── Helpers d'animation ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

/** Wrapper qui déclenche les animations quand la section entre dans le viewport */
function InViewSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────

const valeurs = [
  {
    title: "Savoir-faire local",
    description:
      "Depuis septembre 2024 dans le Morbihan, je connais le climat breton et les spécificités de chaque région autour de Lorient.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-[#f0d080]"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
  },
  {
    title: "Qualité et durabilité",
    description:
      "Nous privilégions les matériaux de qualité et les techniques éprouvées pour des réalisations qui durent.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-[#f0d080]"
      >
        <polygon points="12,2 15,8 22,9 17,14 18,21 12,18 6,21 7,14 2,9 9,8" />
      </svg>
    ),
  },
  {
    title: "Transparence",
    description:
      "Devis clairs, explications détaillées, pas de mauvaises surprises. Vous savez toujours où vous en êtes.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-[#f0d080]"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Réactivité",
    description:
      "Intervention rapide pour les urgences, délais respectés, coordination parfaite des chantiers.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-[#f0d080]"
      >
        <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
      </svg>
    ),
  },
];

const equipe = [
  {
    nom: "Damien Corrignan",
    role: "Artisan couvreur à Lanester",
    description:
      "Couvreur indépendant spécialisé en ardoise, zinc, bac acier, aluminium et bardage. J’interviens à Lanester, Lorient, Ploemeur, Hennebont et dans tout le Morbihan pour vos travaux de toiture.",
    image:
      "/images/damien_corrignan.enc",
  },
];

const certifications = [
  {
    title: "Qualification RGE",
    description:
      "Reconnu Garant de l'Environnement pour les travaux d'isolation et de rénovation énergétique.",
  },
  {
    title: "Assurance Décennale",
    description:
      "Couverture complète pour tous vos travaux de couverture, garantie légale obligatoire.",
  },
  {
    title: "FFB - Fédération Française du Bâtiment",
    description:
      "Membre de la Fédération Française du Bâtiment, garantissant le respect des normes et standards.",
  },
  {
    title: "Formation continue",
    description:
      "Équipe régulièrement formée aux dernières techniques et matériaux de couverture.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Depuis quand existe Corrignan Couverture ?",
    answer:
      "Damien Corrignan a lancé son activité de couvreur indépendant le 3 septembre 2024. Basé à Lanester, il intervient dans tout le bassin lorientais et le Morbihan.",
  },
  {
    question: "Êtes-vous une entreprise familiale ?",
    answer:
      "Corrignan Couverture est une entreprise individuelle dirigée par Damien Corrignan. En tant qu'artisan indépendant, je m'occupe personnellement de chaque chantier pour garantir la qualité.",
  },
  {
    question: "Quelle est votre zone d'intervention ?",
    answer:
      "J'interviens principalement dans le bassin lorientais : Lorient, Lanester, Hennebont, Ploemeur, Quéven, Locmiquélic, L'Armor Plage. Je me déplace également sur l'ensemble du Morbihan selon la nature du chantier.",
  },
  {
    question: "Travaillez-vous avec des sous-traitants ?",
    answer:
      "Non, je réalise l'ensemble des travaux moi-même, de la préparation à la finition. Cela garantit la qualité et la cohérence de chaque chantier.",
  },
  {
    question: "Comment choisissez-vous vos matériaux ?",
    answer:
      "Je travaille avec des fournisseurs locaux et nationaux reconnus pour leur qualité. Je privilégie les matériaux durables et adaptés au climat breton : ardoise espagnole, zinc français, aluminium européen, etc.",
  },
  {
    question: "Proposez-vous des formations ou stages ?",
    answer:
      "En tant qu'artisan indépendant, je suis ouvert à accueillir des apprentis ou stagiaires pour transmettre le savoir-faire de la couverture.",
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function AProposPage() {
  return (
    <main className="bg-night-800">

      {/* ── Hero ── */}
      <section className="py-16 px-4 bg-night-900 border-b border-[#c9a84c22]">
        <div className="mx-auto max-w-screen-xl text-center">
          <motion.p
            className="text-[#f0d080] text-xs font-medium tracking-widest uppercase mb-3"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Artisan couvreur à Lanester
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-4 text-white"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            Damien <span className="text-[#f0d080]">Corrignan</span> — Couvreur à Lanester
          </motion.h1>

          <motion.p
            className="text-[#b8b09a] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.22 }}
          >
            Artisan couvreur indépendant dans le Morbihan, j’interviens à Lanester, Lorient et dans tout le bassin lorientais pour vos travaux de toiture, zinguerie, bardage et rénovation.
          </motion.p>
        </div>
      </section>

      {/* ── Histoire ── */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-screen-xl lg:px-6">
          <div className="max-w-screen-lg mx-auto text-[#b8b09a]">

            <InViewSection>
              <motion.h2
                variants={fadeUp}
                className="mb-8 text-3xl md:text-4xl font-bold text-white text-center"
                custom={0}
              >
                Une histoire de passion et de savoir-faire
              </motion.h2>
            </InViewSection>

            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <InViewSection className="space-y-6">
                {[
                  `Je m'appelle Damien Corrignan, artisan couvreur basé à Lanester. 
  Après avoir exercé en tant qu’indépendant, j’ai créé Corrignan Couverture avec une volonté simple : proposer un travail propre, durable et sans intermédiaire.`,

                  `Chaque chantier est réalisé avec la même exigence, qu’il s’agisse d’une rénovation complète, d’une réparation ou d’un projet neuf. 
  J’interviens directement, sans sous-traitance, pour garantir la qualité et le suivi du début à la fin.`,

                  `Installé dans le bassin lorientais, je connais les contraintes du climat breton : humidité, vent, air marin. 
  C’est cette expérience terrain qui me permet de proposer des solutions adaptées et durables pour votre toiture.`,
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    className={`leading-relaxed${i === 2 ? " font-medium text-[#d6cbb3]" : ""}`}
                    variants={fadeUp}
                    custom={i}
                  >
                    {text}
                  </motion.p>
                ))}
              </InViewSection>

              <InViewSection>
                <motion.div
                  className="relative"
                  variants={scaleIn}
                  custom={0}
                >
                  <Image
                    className="rounded-2xl w-full h-80 object-cover border border-[#c9a84c22] shadow-xl"
                    src="/images/chantiers/camion1.jpg"
                    alt="Chantier de couverture en cours, Corrignan Couverture"
                    width={800}
                    height={320}
                  />
                </motion.div>
              </InViewSection>
            </div>

          </div>
        </div>
      </section>

      {/* ── Valeurs ── */}
      <section className="py-16 px-4 bg-night-700">
        <div className="mx-auto max-w-screen-xl">

          <InViewSection className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              variants={fadeUp}
              custom={0}
            >
              Nos valeurs
            </motion.h2>
            <motion.p
              className="text-[#b8b09a] max-w-2xl mx-auto"
              variants={fadeUp}
              custom={1}
            >
              Ce qui guide notre travail au quotidien depuis 20 ans
            </motion.p>
          </InViewSection>

          <InViewSection className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {valeurs.map((valeur, index) => (
              <motion.div
                key={index}
                className="bg-night-800 rounded-2xl p-6 border border-[#c9a84c33] text-center"
                variants={scaleIn}
                custom={index}
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(201,168,76,0.12)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex justify-center mb-4">{valeur.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{valeur.title}</h3>
                <p className="text-[#b8b09a] text-sm leading-relaxed">{valeur.description}</p>
              </motion.div>
            ))}
          </InViewSection>

        </div>
      </section>

      {/* ── Équipe ── */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-screen-xl">

          <InViewSection className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              variants={fadeUp}
              custom={0}
            >
              Notre équipe
            </motion.h2>
            <motion.p
              className="text-[#b8b09a] max-w-2xl mx-auto"
              variants={fadeUp}
              custom={1}
            >
              Des artisans passionnés et expérimentés à votre service
            </motion.p>
          </InViewSection>

          <InViewSection className="flex justify-center">
            {equipe.map((personne, index) => (
              <motion.div
                key={index}
                className="bg-night-700 rounded-2xl p-6 border border-[#c9a84c33] text-center w-full max-w-xs"
                variants={scaleIn}
                custom={index}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
              >
                <motion.div
                  className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#c9a84c33]"
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                >
                  <Image
                    src={personne.image}
                    alt={personne.nom}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </motion.div>
                <h3 className="text-lg font-bold text-white mb-1">{personne.nom}</h3>
                <p className="text-[#f0d080] text-sm font-medium mb-3">{personne.role}</p>
                <p className="text-[#b8b09a] text-sm leading-relaxed">{personne.description}</p>
              </motion.div>
            ))}
          </InViewSection>

        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="py-16 px-4 bg-night-700">
        <div className="mx-auto max-w-screen-xl">

          <InViewSection className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              variants={fadeUp}
              custom={0}
            >
              Nos certifications
            </motion.h2>
            <motion.p
              className="text-[#b8b09a] max-w-2xl mx-auto"
              variants={fadeUp}
              custom={1}
            >
              Garanties de qualité et de sérieux pour vos travaux
            </motion.p>
          </InViewSection>

          <InViewSection className="grid gap-6 md:grid-cols-2">
            {certifications.map((certif, index) => (
              <motion.div
                key={index}
                className="bg-night-800 rounded-2xl p-6 border border-[#c9a84c33]"
                variants={fadeUp}
                custom={index}
                whileHover={{ borderColor: "rgba(201,168,76,0.45)" }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-bold text-white mb-3">{certif.title}</h3>
                <p className="text-[#b8b09a] leading-relaxed">{certif.description}</p>
              </motion.div>
            ))}
          </InViewSection>

        </div>
      </section>

      {/* ── Témoignages ── */}
      <TestimonialsSwiper />

      {/* ── FAQ ── */}
      <FAQ
        faqs={faqs}
        title="Questions sur Corrignan Couverture"
        subtitle="Tout savoir sur notre entreprise, notre équipe et notre façon de travailler, on se déplace sur Lorient, Lanester, Locmiquélic et tout le bassin lorientais."
      />

      {/* ── CTA ── */}
      <section className="py-16 px-4 bg-night-900">
        <div className="mx-auto max-w-screen-sm text-center">

          <InViewSection>
            <motion.h2
              className="mb-4 text-3xl md:text-4xl font-extrabold text-white"
              variants={fadeUp}
              custom={0}
            >
              Prêt à nous confier votre projet ?
            </motion.h2>

            <motion.p
              className="mb-8 text-[#b8b09a] leading-relaxed"
              variants={fadeUp}
              custom={1}
            >
              Contactez-nous pour un devis gratuit et sans engagement.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
              variants={fadeUp}
              custom={2}
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-br from-[#b8882a] to-[#e0b84a] text-[#120d00] font-medium rounded-lg text-sm px-6 py-3 hover:opacity-90 transition"
                >
                  Nous contacter
                </Link>
              </motion.div>

              <motion.a
                href="tel:0604107018"
                className="flex items-center gap-2 text-sm font-medium text-[#f0d080] hover:text-white transition px-5 py-3 rounded-lg border border-[#c9a84c33] bg-[#0f0f0f]"
                whileHover={{ scale: 1.04, borderColor: "rgba(201,168,76,0.6)" }}
                whileTap={{ scale: 0.97 }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f0d080"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.17 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                06 04 10 70 18
              </motion.a>
            </motion.div>
          </InViewSection>

        </div>
      </section>

    </main>
  );
}