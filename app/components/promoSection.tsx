import Link from "next/link";

export default function PromoSection() {
  return (
    <section className="bg-white px-4 py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto grid max-w-screen-xl rounded-lg bg-gray-50 p-4 dark:bg-gray-800 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">

        <div className="lg:col-span-5 lg:mt-0 flex items-center justify-center">
          <img
            className="mb-4 w-full max-w-sm rounded-xl object-cover h-64 md:h-80 md:max-w-full"
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
            alt="Maison avec toiture en ardoise refaite par Corrignan Couverture"
          />
        </div>

        <div className="me-auto place-self-center lg:col-span-7">
          <h2 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Votre devis toiture gratuit <br />
            sous 48h, sans engagement.
          </h2>
          <p className="mb-6 text-gray-500 dark:text-gray-400">
            Fuite, rénovation complète, bardage ou simple entretien — on se déplace pour évaluer
            votre chantier et vous remettre un devis clair, détaillé et gratuit. Aucune mauvaise
            surprise, on intervient dans tout le bassin lorientais.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-800 px-5 py-3 text-center text-base font-medium text-white hover:bg-slate-700 transition dark:hover:bg-slate-600"
          >
            Demander un devis
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}