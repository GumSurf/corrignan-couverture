import Link from "next/link";

export default function CtaImage() {
  return (
    <section className="bg-night-800 py-16 px-4">
      <div className="gap-10 items-center mx-auto max-w-screen-xl md:grid md:grid-cols-2 lg:px-6">

        {/* Image */}
        <img
          className="w-full rounded-2xl object-cover h-72 md:h-full border border-[#c9a84c22] shadow-xl"
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop"
          alt="Couvreur en intervention sur un toit dans le bassin lorientais"
        />

        {/* Texte */}
        <div className="mt-6 md:mt-0">

          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white leading-tight">
            Une toiture qui tient dans le temps,{" "}
            <span className="text-[#f0d080]">posée par des gens du coin.</span>
          </h2>

          <p className="mb-6 text-[#b8b09a] md:text-lg leading-relaxed">
            Chez Corrignan Couverture, on travaille en direct, pas de sous-traitance, pas d'intermédiaire.
            Du premier coup de téléphone jusqu'à la fin du chantier, c'est la même équipe qui s'occupe
            de vous. On connaît le climat breton, on choisit les matériaux en conséquence.
          </p>

          {/* accent line */}
          <div className="mb-6 w-20 h-[2px] bg-gradient-to-r from-[#c9a84c] to-[#e0b84a]" />

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-br from-[#b8882a] to-[#e0b84a] text-[#120d00] font-medium rounded-lg text-sm px-5 py-3 hover:opacity-90 transition"
          >
            Nous contacter
            <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
              <path
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3"
                stroke="#120d00"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

        </div>

      </div>
    </section>
  );
}