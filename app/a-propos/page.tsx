import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import TestimonialsSwiper from "../components/testimonialsSwiper";
import FAQ from "../components/faq";
import { type FaqItem } from "../components/faq";

export const metadata: Metadata = {
  title: "À propos, Damien Corrignan, couvreur indépendant à Lanester",
  description: "Découvrez Damien Corrignan, couvreur indépendant depuis septembre 2024 dans le Morbihan. Ardoise, zinc, aluminium, expertise locale et savoir-faire traditionnel à Lorient, Ploemeur, Auray.",
  keywords: "Damien Corrignan, couvreur Lanester, couvreur indépendant Morbihan, couvreur Lorient, artisan couverture Bretagne, Corrignan Couverture",
  openGraph: {
    title: "À propos, Damien Corrignan, Corrignan Couverture",
    description: "Couvreur indépendant depuis septembre 2024 dans le Morbihan. Expertise locale et savoir-faire traditionnel.",
    type: "website",
  },
};

const valeurs = [
  {
    title: "Savoir-faire local",
    description: "Depuis septembre 2024 dans le Morbihan, je connais le climat breton et les spécificités de chaque région autour de Lorient.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#f0d080]">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9,22 9,12 15,12 15,22"/>
      </svg>
    ),
  },
  {
    title: "Qualité et durabilité",
    description: "Nous privilégions les matériaux de qualité et les techniques éprouvées pour des réalisations qui durent.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#f0d080]">
        <polygon points="12,2 15,8 22,9 17,14 18,21 12,18 6,21 7,14 2,9 9,8"/>
      </svg>
    ),
  },
  {
    title: "Transparence",
    description: "Devis clairs, explications détaillées, pas de mauvaises surprises. Vous savez toujours où vous en êtes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#f0d080]">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    title: "Réactivité",
    description: "Intervention rapide pour les urgences, délais respectés, coordination parfaite des chantiers.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#f0d080]">
        <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
      </svg>
    ),
  },
];

const equipe = [
  {
    nom: "Damien Corrignan",
    role: "Couvreur indépendant",
    description: "Artisan couvreur expérimenté, spécialisé en ardoise, zinc, bac acier et aluminium. Intervention dans tout le bassin lorientais : Lorient, Lanester, Ploemeur, Hennebont, Quéven, Auray.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  },
];

const certifications = [
  {
    title: "Qualification RGE",
    description: "Reconnu Garant de l'Environnement pour les travaux d'isolation et de rénovation énergétique.",
  },
  {
    title: "Assurance Décennale",
    description: "Couverture complète pour tous vos travaux de couverture, garantie légale obligatoire.",
  },
  {
    title: "FFB - Fédération Française du Bâtiment",
    description: "Membre de la Fédération Française du Bâtiment, garantissant le respect des normes et standards.",
  },
  {
    title: "Formation continue",
    description: "Équipe régulièrement formée aux dernières techniques et matériaux de couverture.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Depuis quand existe Corrignan Couverture ?",
    answer: "Damien Corrignan a lancé son activité de couvreur indépendant le 3 septembre 2024. Basé à Lanester, il intervient dans tout le bassin lorientais et le Morbihan.",
  },
  {
    question: "Êtes-vous une entreprise familiale ?",
    answer: "Corrignan Couverture est une entreprise individuelle dirigée par Damien Corrignan. En tant qu'artisan indépendant, je m'occupe personnellement de chaque chantier pour garantir la qualité.",
  },
  {
    question: "Quelle est votre zone d'intervention ?",
    answer: "J'interviens principalement dans le bassin lorientais : Lorient, Lanester, Hennebont, Ploemeur, Quéven, Auray, Vannes. Je me déplace également sur l'ensemble du Morbihan selon la nature du chantier.",
  },
  {
    question: "Travaillez-vous avec des sous-traitants ?",
    answer: "Non, je réalise l'ensemble des travaux moi-même, de la préparation à la finition. Cela garantit la qualité et la cohérence de chaque chantier.",
  },
  {
    question: "Comment choisissez-vous vos matériaux ?",
    answer: "Je travaille avec des fournisseurs locaux et nationaux reconnus pour leur qualité. Je privilégie les matériaux durables et adaptés au climat breton : ardoise espagnole, zinc français, aluminium européen, etc.",
  },
  {
    question: "Proposez-vous des formations ou stages ?",
    answer: "En tant qu'artisan indépendant, je suis ouvert à accueillir des apprentis ou stagiaires pour transmettre le savoir-faire de la couverture.",
  },
];

export default function AProposPage() {
  return (
    <main className="bg-night-800">

      {/* ── Hero ── */}
      <section className="py-16 px-4 bg-night-900 border-b border-[#c9a84c22]">
        <div className="mx-auto max-w-screen-xl text-center">
          <p className="text-[#f0d080] text-xs font-medium tracking-widest uppercase mb-3">
            Notre histoire
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Corrignan <span className="text-[#f0d080]">Couverture</span>
          </h1>

          <p className="text-[#b8b09a] max-w-2xl mx-auto">
            Artisan couvreur indépendant depuis septembre 2024, spécialisé dans la couverture du Morbihan.
            Savoir-faire local, qualité et transparence, mes valeurs depuis le premier jour.
          </p>
        </div>
      </section>

      {/* ── Histoire ── */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-screen-xl lg:px-6">

          <div className="max-w-screen-lg mx-auto text-[#b8b09a]">

            <h2 className="mb-8 text-3xl md:text-4xl font-bold text-white text-center">
              Une histoire de passion et de savoir-faire
            </h2>

            <div className="grid gap-8 lg:grid-cols-2 items-center">

              <div className="space-y-6">
                <p className="leading-relaxed">
                  Tout commence en 2004 quand Jean Corrignan, couvreur passionné originaire du Morbihan,
                  décide de créer sa propre entreprise. Après 15 ans d&apos;expérience dans différentes entreprises
                  de couverture, il veut proposer une alternative différente : une entreprise à taille humaine,
                  locale, qui privilégie la qualité et la relation client.
                </p>

                <p className="leading-relaxed">
                  Installé à Lanester, au cœur du bassin lorientais, Corrignan Couverture grandit petit à petit
                  et constitue une équipe d&apos;artisans qualifiés. L&apos;entreprise se spécialise dans tous types
                  de couverture : ardoise naturelle, zinc, bac acier, aluminium et bardage. Chaque chantier
                  est l&apos;occasion de démontrer notre savoir-faire collectif et notre exigence de qualité.
                </p>

                <p className="leading-relaxed font-medium text-[#d6cbb3]">
                  Aujourd&apos;hui, après plus de 300 chantiers réalisés, nous sommes fiers de notre réputation
                  d&apos;artisans sérieux et compétents. Le bouche-à-oreille reste notre meilleure publicité.
                </p>
              </div>

              <div className="relative">
                <Image
                  className="rounded-2xl w-full h-80 object-cover border border-[#c9a84c22] shadow-xl"
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop"
                  alt="Chantier de couverture en cours, Corrignan Couverture"
                  width={800}
                  height={320}
                />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── Valeurs ── */}
      <section className="py-16 px-4 bg-night-700">
        <div className="mx-auto max-w-screen-xl">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nos valeurs
            </h2>
            <p className="text-[#b8b09a] max-w-2xl mx-auto">
              Ce qui guide notre travail au quotidien depuis 20 ans
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {valeurs.map((valeur, index) => (
              <div
                key={index}
                className="bg-night-800 rounded-2xl p-6 border border-[#c9a84c33] text-center"
              >
                <div className="flex justify-center mb-4">{valeur.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{valeur.title}</h3>
                <p className="text-[#b8b09a] text-sm leading-relaxed">{valeur.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Équipe ── */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-screen-xl">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Notre équipe
            </h2>
            <p className="text-[#b8b09a] max-w-2xl mx-auto">
              Des artisans passionnés et expérimentés à votre service
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {equipe.map((personne, index) => (
              <div
                key={index}
                className="bg-night-700 rounded-2xl p-6 border border-[#c9a84c33] text-center"
              >
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#c9a84c33]">
                  <Image
                    src={personne.image}
                    alt={personne.nom}
                    fill
                    sizes="(max-width: 768px) 96px, (max-width: 1024px) 96px, 96px"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{personne.nom}</h3>
                <p className="text-[#f0d080] text-sm font-medium mb-3">{personne.role}</p>
                <p className="text-[#b8b09a] text-sm leading-relaxed">{personne.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="py-16 px-4 bg-night-700">
        <div className="mx-auto max-w-screen-xl">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nos certifications
            </h2>
            <p className="text-[#b8b09a] max-w-2xl mx-auto">
              Garanties de qualité et de sérieux pour vos travaux
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((certif, index) => (
              <div
                key={index}
                className="bg-night-800 rounded-2xl p-6 border border-[#c9a84c33]"
              >
                <h3 className="text-xl font-bold text-white mb-3">{certif.title}</h3>
                <p className="text-[#b8b09a] leading-relaxed">{certif.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Témoignages ── */}
      <TestimonialsSwiper />

      {/* ── FAQ ── */}
      <FAQ
        faqs={faqs}
        title="Questions sur Corrignan Couverture"
        subtitle="Tout savoir sur notre entreprise, notre équipe et notre façon de travailler, on se déplace sur Lorient, Lanester, Auray et tout le bassin lorientais."
      />

      {/* ── CTA ── */}
      <section className="py-16 px-4 bg-night-900">
        <div className="mx-auto max-w-screen-sm text-center">

          <h2 className="mb-4 text-3xl md:text-4xl font-extrabold text-white">
            Prêt à nous confier votre projet ?
          </h2>

          <p className="mb-8 text-[#b8b09a] leading-relaxed">
            Contactez-nous pour un devis gratuit et sans engagement.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-br from-[#b8882a] to-[#e0b84a] text-[#120d00] font-medium rounded-lg text-sm px-6 py-3 hover:opacity-90 transition"
            >
              Nous contacter
            </Link>

            <a
              href="tel:0604107018"
              className="flex items-center gap-2 text-sm font-medium text-[#f0d080] hover:text-white transition px-5 py-3 rounded-lg border border-[#c9a84c33] bg-[#0f0f0f]"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f0d080" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.17 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              06 04 10 70 18
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}