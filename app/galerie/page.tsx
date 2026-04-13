import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie — Corrignan Couverture, couvreur à Lanester",
  description: "Galerie photo des réalisations de Corrignan Couverture au Morbihan : ardoise, zinc, bac acier, aluminium.",
  keywords: "galerie couverture, photos chantier toiture, réalisations couverture Morbihan, couvreur Lanester",
  openGraph: {
    title: "Galerie — Corrignan Couverture",
    description: "Galerie photo des réalisations de Corrignan Couverture au Morbihan.",
    type: "website",
  },
};

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

export default function RealisationsPage() {
  return (
    <main className="bg-night-800">

      {/* ── Hero ── */}
      <section className="py-16 px-4 bg-night-900 border-b border-[#c9a84c22]">
        <div className="mx-auto max-w-screen-xl text-center">
          <p className="text-[#f0d080] text-xs font-medium tracking-widest uppercase mb-3">
            Galerie
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Galerie photo
          </h1>

          <p className="text-[#b8b09a] max-w-2xl mx-auto">
            Une sélection d'images de nos réalisations en couverture et bardage dans le Morbihan.
          </p>
        </div>
      </section>

      {/* ── Galerie photo basique ── */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {galleryImages.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="group overflow-hidden rounded-[28px] border border-[#c9a84c33] bg-night-700 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
              >
                <div className="relative h-96 sm:h-[30rem]">
                  <Image
                    src={src}
                    alt={`Photo de couverture ${index + 1}`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA simple ── */}
      <section className="py-16 px-4 bg-night-900">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-3xl md:text-4xl font-extrabold text-white">
            Vous voulez la même qualité sur votre toit ?
          </h2>
          <p className="mb-8 text-[#b8b09a] leading-relaxed">
            Contactez-nous dès maintenant pour un devis rapide et une visite de chantier.
          </p>
          <a
            href="mailto:contact@corrignan-couverture.fr"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#b8882a] to-[#e0b84a] px-8 py-4 text-sm font-semibold text-[#120d00] shadow-lg shadow-[#00000060] transition hover:opacity-90"
          >
            Envoyer un message
          </a>
        </div>
      </section>

    </main>
  );
}
