import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-night-800 px-3 sm:px-10 pt-10"
    >
      {/* Glow décoratif (or doux) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#c9a84c22] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#7ac0e022] blur-[120px] rounded-full" />
      </div>

      <main className="relative flex flex-col items-center max-w-7xl mx-auto w-full">

        {/* Badge */}
        <div className="mt-10 mb-6 flex items-center space-x-2 border border-[#c9a84c44] text-[#f0d080] text-xs rounded-full px-4 pr-2 py-1.5 bg-[#0f0f0f]">
          <span>Couvreur local · Morbihan depuis 20 ans</span>
          <span className="flex items-center justify-center size-6 p-1 rounded-full bg-[#c9a84c22]">
            <svg width="14" height="11" viewBox="0 0 16 13" fill="none">
              <path
                d="M1 6.5h14M9.5 1 15 6.5 9.5 12"
                stroke="#f0d080"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        {/* Titre */}
        <h1 className="text-center text-white font-bold text-3xl sm:text-4xl md:text-5xl max-w-2xl leading-tight">
          Votre toiture entre les mains d'un{" "}
          <span className="text-[#f0d080]">couvreur du Morbihan</span>
        </h1>

        {/* Sous-titre */}
        <p className="mt-4 text-center text-[#b8b09a] max-w-lg text-sm sm:text-base leading-relaxed">
          Ardoise, zinc, bac acier, aluminium, bardage, Corrignan Couverture intervient sur Lanester,
          Lorient, Auray et tout le bassin lorientais. Devis gratuit sous 48h.
        </p>

        {/* Services */}
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

        {/* CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/contact"
            className="bg-gradient-to-br from-[#b8882a] to-[#e0b84a] text-[#120d00] px-6 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 hover:opacity-90 transition"
          >
            Demander un devis gratuit
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715"
                stroke="#120d00"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <a
            href="tel:0297000000"
            className="flex items-center gap-2 text-sm font-medium text-[#f0d080] hover:text-white transition px-4 py-2.5 rounded-lg border border-[#c9a84c33] bg-[#0f0f0f]"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f0d080" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.17 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            06 04 10 70 18
          </a>
        </div>

        {/* Image hero */}
        <div className="mt-14 max-w-5xl w-full">
          <img
            className="rounded-[40px] w-full h-72 object-cover border border-[#c9a84c22] shadow-2xl"
            src="https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=1200&auto=format&fit=crop"
            alt="Chantier de couverture en ardoise, Corrignan Couverture Lanester"
          />
        </div>

      </main>
    </section>
  );
}