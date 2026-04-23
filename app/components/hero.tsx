'use client';

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-night-800 px-3 sm:px-10 pt-10"
    >
      {/* décor simplifié (moins de GPU cost) */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#c9a84c22] blur-[100px] rounded-full" />
      </div>

      <main className="relative flex flex-col items-center max-w-7xl mx-auto w-full">

        {/* Badge (sans motion = meilleur TBT) */}
        <div className="mt-10 mb-6 flex items-center space-x-2 border border-[#c9a84c44] text-[#f0d080] text-xs rounded-full px-4 pr-2 py-1.5 bg-[#0f0f0f]">
          <span>Couvreur · Morbihan depuis 1999</span>
        </div>

        {/* H1 = LCP important */}
        <h1
          className="text-center text-white font-bold text-3xl sm:text-4xl md:text-5xl max-w-2xl leading-tight"
        >
          Votre toiture entre les mains de{" "}
          <span className="text-[#f0d080]">Damien Corrignan</span>, couvreur du Morbihan
        </h1>

        {/* texte sans animation */}
        <p className="mt-4 text-center text-[#b8b09a] max-w-lg text-sm sm:text-base leading-relaxed">
          Ardoise, zinc, bac acier, aluminium, bardage, Corrignan Couverture intervient sur Lanester,
          Lorient, Ploemeur, Hennebont, Quéven, Locmiquélic, Larmor Plage et tout le bassin lorientais. Devis gratuit.
        </p>

        {/* services statiques (DOM + JS réduit) */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {["Ardoise", "Zinc", "Bac acier", "Aluminium", "Bardage"].map((s) => (
            <span
              key={s}
              className="text-xs px-3 py-1.5 rounded-full bg-[#0f0f0f] border border-[#c9a84c22] text-[#b8b09a] font-medium"
            >
              {s}
            </span>
          ))}
        </div>

        {/* CTA (pas de motion = + rapide) */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/contact"
            className="bg-gradient-to-br from-[#b8882a] to-[#e0b84a] text-[#120d00] px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition"
          >
            Demander un devis gratuit
          </Link>

          <a
            href="tel:0604107018"
            className="flex items-center gap-2 text-sm font-medium text-[#f0d080] hover:text-white transition px-4 py-2.5 rounded-lg border border-[#c9a84c33] bg-[#0f0f0f]"
          >
            06 04 10 70 18
          </a>
        </div>

        {/* IMAGE LCP OPTIMISÉE */}
        <div className="mt-14 max-w-5xl w-full relative h-72 rounded-[40px] overflow-hidden border border-[#c9a84c22] shadow-2xl">
          <Image
            src="/images/hero/hero.jpg"
            alt="Chantier de couverture en ardoise, Corrignan Couverture Lanester"
            fill
            priority
            sizes="100vw"
            quality={70}
            className="object-cover"
          />
        </div>

      </main>
    </section>
  );
}