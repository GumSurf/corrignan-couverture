import Link from "next/link";

export default function CtaImage() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          className="w-full rounded-xl object-cover h-72 md:h-full"
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop"
          alt="Couvreur en intervention sur un toit dans le bassin lorientais"
        />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Une toiture qui tient dans le temps, posée par des gens du coin.
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            Chez Corrignan Couverture, on travaille en direct — pas de sous-traitance, pas d'intermédiaire.
            Du premier coup de téléphone jusqu'à la fin du chantier, c'est la même équipe qui s'occupe
            de vous. On connaît le climat breton, on choisit les matériaux en conséquence.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center text-white bg-slate-800 hover:bg-slate-700 transition font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-700 dark:hover:bg-slate-600"
          >
            Nous contacter
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}