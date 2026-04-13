import Link from "next/link";
import Image from "next/image";

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
      "Matériau noble et durable, le zinc est idéal pour les toitures complexes, les noues, les lucarnes et les façades. Il vieillit bien et résiste parfaitement au climat côtier breton.",
    tags: ["Zinc naturel", "Zinc prépatiné", "Noues & raccords", "Lucarnes"],
  },
  {
    slug: "bac-acier",
    label: "Bac acier",
    short:
      "Solution économique et rapide à poser, le bac acier est parfait pour les bâtiments agricoles, les extensions et les constructions à faible pente.",
    tags: ["Bâtiments agricoles", "Extensions", "Faible pente", "Grandes surfaces"],
  },
  {
    slug: "aluminium",
    label: "Aluminium",
    short:
      "Léger, inoxydable et sans entretien, l'aluminium est une solution haut de gamme pour les toitures plates et bardages.",
    tags: ["Toiture plate", "Terrasses", "Anti-corrosion", "Bord de mer"],
  },
  {
    slug: "bardage",
    label: "Bardage",
    short:
      "Le bardage habille et protège vos façades tout en améliorant l'isolation du bâtiment.",
    tags: ["Zinc", "Aluminium", "Bac acier", "Isolation par l'extérieur"],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-night-800 text-white">

      {/* HERO */}
      <section className="py-16 px-4 bg-night-900 border-b border-[#c9a84c22]">
        <div className="mx-auto max-w-screen-xl text-center">
          <p className="text-xs tracking-widest uppercase text-[#c9a84c] mb-3">
            Nos métiers
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#f0d080]">
            Nos services de couverture
          </h1>

          <p className="text-[#b8b09a] max-w-2xl mx-auto">
            Ardoise, zinc, bac acier, aluminium ou bardage, on maîtrise tous les matériaux
            pour répondre à chaque projet.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-screen-xl grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-2xl overflow-hidden bg-night-700 border border-[#c9a84c22] hover:border-[#c9a84c66] transition"
            >
              {/* IMAGE */}
              {service.image && (
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.label}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>
              )}

              {/* CONTENT */}
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
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-night-900 border-t border-[#c9a84c22]">
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
              href="tel:0297000000"
              className="border border-[#c9a84c33] text-[#f0d080] px-5 py-3 rounded-lg hover:border-[#c9a84c] transition"
            >
              06 04 10 70 18
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}