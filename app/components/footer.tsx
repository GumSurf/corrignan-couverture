import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">

          {/* Logo + infos contact */}
          <div className="mb-6 md:mb-0 max-w-xs">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3 12L12 3L21 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                  <path d="M5 10V20H19V10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 20V14H15V20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Corrignan Couverture
              </span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Couvreur à Lanester — ardoise, zinc, bac acier, aluminium, bardage. Intervention sur tout le bassin lorientais et le Morbihan.
            </p>
            <a
              href="tel:0297000000"
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white transition"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.17 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              02 97 XX XX XX
            </a>
          </div>

          {/* Colonnes liens */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Services</h2>
              <ul className="text-gray-600 dark:text-gray-400 space-y-3 text-sm">
                <li><Link href="/services/ardoise" className="hover:underline">Ardoise</Link></li>
                <li><Link href="/services/zinc" className="hover:underline">Zinc</Link></li>
                <li><Link href="/services/bac-acier" className="hover:underline">Bac acier</Link></li>
                <li><Link href="/services/aluminium" className="hover:underline">Aluminium</Link></li>
                <li><Link href="/services/bardage" className="hover:underline">Bardage</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Navigation</h2>
              <ul className="text-gray-600 dark:text-gray-400 space-y-3 text-sm">
                <li><Link href="/" className="hover:underline">Accueil</Link></li>
                <li><Link href="/realisations" className="hover:underline">Réalisations</Link></li>
                <li><Link href="/a-propos" className="hover:underline">À propos</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Infos légales</h2>
              <ul className="text-gray-600 dark:text-gray-400 space-y-3 text-sm">
                <li><Link href="/mentions-legales" className="hover:underline">Mentions légales</Link></li>
                <li><Link href="/politique-de-confidentialite" className="hover:underline">Politique de confidentialité</Link></li>
                <li>
                  <span className="block text-gray-400 dark:text-gray-500 mt-4">Lanester, Morbihan</span>
                  <span className="block text-gray-400 dark:text-gray-500">SIRET : XXX XXX XXX XXXXX</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:underline">Corrignan Couverture</Link>. Tous droits réservés.
          </span>

          {/* Réseaux sociaux */}
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}