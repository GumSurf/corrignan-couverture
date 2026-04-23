"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="bg-night-800 border-t border-[#c9a84c22] px-4 py-14"
    >

      <div className="mx-auto max-w-7xl">

        <div className="md:flex md:justify-between gap-10">

          {/* Logo + infos */}
          <div className="mb-10 md:mb-0 max-w-xs">

            <Link href="/" className="flex items-center gap-3 mb-5">

              {/* LOGO remplacé */}
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#c9a84c33] bg-black shrink-0 relative">
                <Image
                  src="/images/logo/logo.jpg"
                  alt="Corrignan Couverture"
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </div>

              <span className="text-lg font-semibold text-[#f0d080]">
                Corrignan Couverture
              </span>

            </Link>

            <p className="text-sm text-night-200 leading-relaxed">
              Couvreur à Lanester, ardoise, zinc, bac acier, aluminium, bardage.
              Intervention sur tout le bassin lorientais et le Morbihan.
            </p>

            <a
              href="tel:0604107018"
              className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-[#f0d080] hover:text-white transition"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f0d080" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.17 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              06 04 10 70 18
            </a>

          </div>

          {/* colonnes */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">

            {/* Services */}
            <div>
              <h2 className="mb-5 text-sm font-semibold text-white uppercase tracking-wider">
                Services
              </h2>
              <ul className="space-y-3 text-sm text-night-200">
                <li><Link href="/services/ardoise" className="hover:text-[#f0d080] transition">Ardoise</Link></li>
                <li><Link href="/services/zinc" className="hover:text-[#f0d080] transition">Zinc</Link></li>
                <li><Link href="/services/bac-acier" className="hover:text-[#f0d080] transition">Bac acier</Link></li>
                <li><Link href="/services/aluminium" className="hover:text-[#f0d080] transition">Aluminium</Link></li>
                <li><Link href="/services/bardage" className="hover:text-[#f0d080] transition">Bardage</Link></li>
              </ul>
            </div>

            {/* Navigation */}
            <div>
              <h2 className="mb-5 text-sm font-semibold text-white uppercase tracking-wider">
                Navigation
              </h2>
              <ul className="space-y-3 text-sm text-night-200">
                <li><Link href="/" className="hover:text-[#f0d080] transition">Accueil</Link></li>
                <li><Link href="/galerie" className="hover:text-[#f0d080] transition">Galerie</Link></li>
                <li><Link href="/a-propos" className="hover:text-[#f0d080] transition">À propos</Link></li>
                <li><Link href="/contact" className="hover:text-[#f0d080] transition">Contact</Link></li>
              </ul>
            </div>

            {/* Légal */}
            <div>
              <h2 className="mb-5 text-sm font-semibold text-white uppercase tracking-wider">
                Infos légales
              </h2>
              <ul className="space-y-3 text-sm text-night-200">
                <li><Link href="/mentions-legales" className="hover:text-[#f0d080] transition">Mentions légales</Link></li>
                <li><Link href="/politique-confidentialite" className="hover:text-[#f0d080] transition">Confidentialité</Link></li>

                <li className="pt-4 text-[#a8a29e] text-xs leading-relaxed">
                  Lanester, Morbihan<br />
                  SIRET : 98939491100014
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* séparation */}
        <div className="my-10 border-t border-[#c9a84c22]" />

        {/* bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          <span className="text-sm text-[#b8b09a]">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#f0d080]">Corrignan Couverture</span>. Tous droits réservés.
          </span>

          <div className="flex items-center gap-6">

            {/* Crédit */}
            <a
              href="https://www.gabrielchriste.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#a8a29e] hover:text-[#f0d080] transition"
            >
              Site créé par Gabriel Christe
            </a>

            {/* socials */}
            <div className="flex items-center gap-4">

              <a href="https://www.facebook.com/profile.php?id=61561956222453" aria-label="Facebook" className="text-[#b8b09a] hover:text-[#f0d080] transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

            </div>

          </div>

        </div>

      </div>
    </motion.footer>
  );
}