import Link from 'next/link';

export default function Description() {
  return (
    <section className="bg-night-800 py-16 px-4">
      <div className="mx-auto max-w-screen-xl lg:px-6">

        <div className="max-w-screen-lg text-[#b8b09a] sm:text-lg">

          <h2 className="mb-4 text-4xl tracking-tight font-bold text-white leading-tight">
            Plus de <span className="text-[#f0d080] font-extrabold">300 chantiers</span> réalisés dans le Morbihan
          </h2>

          <div className="w-20 h-[2px] bg-gradient-to-r from-[#c9a84c] to-[#e0b84a] mb-6" />

          <p className="mb-4 leading-relaxed">
            Depuis notre création, on a posé de l'ardoise à Lorient, refait des toits en zinc à Auray,
            installé du bac acier sur des maisons neuves à Vannes et habillé des façades en bardage aux
            quatre coins du bassin lorientais. Chaque chantier est différent, et c'est ce qui nous plaît.
          </p>

          <p className="mb-6 font-medium text-[#d6cbb3] leading-relaxed">
            On ne cherche pas à être la plus grosse entreprise du coin. On cherche à faire du bon travail,
            à tenir nos délais et à ce que vous soyez contents quand on repart. C'est aussi simple que ça.
          </p>

          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 font-medium text-[#f0d080] hover:text-white transition"
          >
            Voir nos réalisations
            <svg className="w-6 h-6" fill="none" viewBox="0 0 20 20">
              <path
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </Link>

        </div>

      </div>
    </section>
  );
}