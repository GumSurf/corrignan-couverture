import Link from "next/link";

export default function Cta() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
            Un projet de toiture ? On en parle.
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            Devis gratuit sous 48h, sans engagement. On se déplace sur Lorient, Lanester, Auray et tout le bassin lorientais.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="text-white bg-slate-800 hover:bg-slate-700 transition font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-slate-700 dark:hover:bg-slate-600"
            >
              Demander un devis gratuit
            </Link>
            <a
              href="tel:0297000000"
              className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white transition px-5 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.17 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              02 97 XX XX XX
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}