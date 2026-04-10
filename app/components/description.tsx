import Link from 'next/link';

export default function Description() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Plus de <span className="font-extrabold">300 chantiers</span> réalisés dans le Morbihan
          </h2>
          <p className="mb-4 font-light">
            Depuis notre création, on a posé de l'ardoise à Lorient, refait des toits en zinc à Auray,
            installé du bac acier sur des maisons neuves à Vannes et habillé des façades en bardage aux
            quatre coins du bassin lorientais. Chaque chantier est différent — et c'est ce qui nous plaît.
          </p>
          <p className="mb-4 font-medium">
            On ne cherche pas à être la plus grosse entreprise du coin. On cherche à faire du bon travail,
            à tenir nos délais et à ce que vous soyez contents quand on repart. C'est aussi simple que ça.
          </p>
          <Link
            href="/realisations"
            className="inline-flex items-center font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 transition"
          >
            Voir nos réalisations
            <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}