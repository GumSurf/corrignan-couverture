import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Couvreur Lorient, Lanester et Morbihan - Zone d’intervention | Corrignan Couverture",
  description:
    "Couvreur à Lorient, Lanester et dans tout le Morbihan. Intervention rapide pour rénovation de toiture, ardoise, zinc, bac acier et dépannage fuite. Devis gratuit.",
  keywords:
    "couvreur Lorient, couvreur Lanester, couvreur Morbihan, toiture ardoise Lorient, réparation toiture, fuite toiture Bretagne",
  openGraph: {
    title: "Couvreur Lorient et Morbihan - Zone d’intervention",
    description:
      "Intervention rapide sur Lorient, Lanester, Ploemeur et tout le bassin lorientais.",
    type: "website",
  },
};

const villes = [
  {
    nom: "Lorient",
    description:
      "Intervention de couvreur à Lorient pour rénovation de toiture, ardoise, zinc et dépannage urgent de fuite sur maisons anciennes et immeubles.",
  },
  {
    nom: "Lanester",
    description:
      "Notre base d’activité à Lanester. Travaux de couverture, réparation de toiture et rénovation complète de charpente et zinguerie.",
  },
  {
    nom: "Ploemeur",
    description:
      "Couvreur à Ploemeur pour maisons individuelles, extensions et rénovation de toitures ardoise ou bac acier.",
  },
  {
    nom: "Hennebont",
    description:
      "Intervention rapide à Hennebont pour réparation de toiture, entretien et recherche de fuite.",
  },
  {
    nom: "Quéven",
    description:
      "Travaux de couverture zinc et aluminium à Quéven pour particuliers et bâtiments professionnels.",
  },
  {
    nom: "Locmiquélic",
    description:
      "Rénovation de toitures traditionnelles et pose d’ardoise à Locmiquélic et alentours.",
  },
  {
    nom: "Larmor-Plage",
    description:
      "Couvreur à Larmor-Plage pour entretien, rénovation et dépannage toiture en bord de mer.",
  },
];

export default function ZoneInterventionPage() {
  return (
    <main className="bg-night-800 min-h-screen">

      {/* HERO SEO */}
      <section className="py-16 px-4 bg-night-900 border-b border-[#c9a84c22]">
        <div className="mx-auto max-w-7xl text-center">

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Couvreur à <span className="text-[#f0d080]">Lorient</span> et dans tout le Morbihan
          </h1>

          <p className="text-[#b8b09a] max-w-2xl mx-auto leading-relaxed">
            Corrignan Couverture intervient rapidement sur Lorient, Lanester et tout le bassin lorientais
            pour vos travaux de toiture : rénovation, ardoise, zinc, bac acier et dépannage urgent de fuite.
          </p>

        </div>
      </section>

      {/* VILLES SEO */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-5xl">

          <h2 className="text-2xl font-bold text-white mb-10 text-center">
            Nos zones d’intervention dans le Morbihan
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {villes.map((ville) => (
              <div
                key={ville.nom}
                className="bg-night-700 rounded-2xl p-6 border border-[#c9a84c22]"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  Couvreur {ville.nom}
                </h3>
                <p className="text-[#b8b09a] leading-relaxed">
                  {ville.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA CONVERSION */}
      <section className="py-16 px-4 bg-night-900">
        <div className="mx-auto max-w-7xl text-center">

          <h2 className="text-3xl font-bold text-white mb-4">
            Besoin d’un couvreur près de chez vous ?
          </h2>

          <p className="text-[#b8b09a] mb-8 max-w-xl mx-auto">
            Même si votre ville n’est pas listée, nous intervenons dans tout le Morbihan.
            Contactez-nous pour un devis gratuit et rapide.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-br from-[#b8882a] to-[#e0b84a] text-[#120d00] font-medium rounded-lg text-sm px-6 py-3 hover:opacity-90 transition"
          >
            Demander un devis gratuit
          </Link>

        </div>
      </section>

    </main>
  );
}