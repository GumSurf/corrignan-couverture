import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zone d'intervention - Damien Corrignan, couvreur à Lorient et alentours",
  description: "Découvrez notre zone d'intervention : Lorient, Lanester, Ploemeur, Hennebont, Quéven, Locmiquélic, Larmor Plage et tout le bassin lorientais. Couvreur indépendant Damien Corrignan.",
  keywords: "zone intervention couvreur, Lorient, Lanester, Ploemeur, Locmiquélic, Larmor Plage, Morbihan, Damien Corrignan",
  openGraph: {
    title: "Zone d'intervention - Damien Corrignan",
    description: "Intervention dans le bassin lorientais et Morbihan.",
    type: "website",
  },
};

const villes = [
  { nom: "Lorient", description: "Cœur économique du Morbihan, interventions sur toitures anciennes et modernes." },
  { nom: "Lanester", description: "Notre base, expertise locale pour tous types de couverture." },
  { nom: "Ploemeur", description: "Quartiers résidentiels, rénovation de toitures en ardoise." },
  { nom: "Hennebont", description: "Proche de Lanester, interventions rapides et de qualité." },
  { nom: "Quéven", description: "Couvertures zinc et aluminium pour bâtiments industriels." },
  { nom: "Locmiquélic", description: "Ville historique, pose d'ardoise sur monuments." },
  { nom: "Larmor Plage", description: "Extension de zone, devis sur demande." },
];

export default function ZoneInterventionPage() {
  return (
    <main className="bg-night-800 min-h-screen">
      {/* Hero */}
      <section className="py-16 px-4 bg-night-900 border-b border-[#c9a84c22]">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Zone d&apos;<span className="text-[#f0d080]">intervention</span>
          </h1>
          <p className="text-[#b8b09a] max-w-2xl mx-auto">
            Damien Corrignan couvreur indépendant intervient dans le bassin lorientais et le Morbihan.
            Découvrez les villes où nous réalisons vos projets de couverture.
          </p>
        </div>
      </section>

      {/* Villes */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6">
            {villes.map((ville) => (
              <div key={ville.nom} className="bg-night-700 rounded-2xl p-6 border border-[#c9a84c22]">
                <h3 className="text-xl font-bold text-white mb-2">{ville.nom}</h3>
                <p className="text-[#b8b09a]">{ville.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-night-900">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Votre ville n&apos;est pas listée ?</h2>
          <p className="text-[#b8b09a] mb-8">
            Contactez-nous pour discuter de votre projet, même en dehors de notre zone principale.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-br from-[#b8882a] to-[#e0b84a] text-[#120d00] font-medium rounded-lg text-sm px-6 py-3 hover:opacity-90 transition"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </main>
  );
}