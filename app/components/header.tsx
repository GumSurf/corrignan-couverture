"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const services = {
  toiture: [
    { label: "Ardoise naturelle & fibro", href: "/services/ardoise" },
    { label: "Bac acier", href: "/services/bac-acier" },
    { label: "Zinc", href: "/services/zinc" },
    { label: "Aluminium", href: "/services/aluminium" },
  ],
  facade: [
    { label: "Bardage extérieur", href: "/services/bardage" },
  ],
};

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Ferme le dropdown si clic en dehors
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Bloque le scroll body quand menu mobile ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ─── Topbar ─── */}
      <div className="bg-slate-800 text-white text-xs py-1.5 px-4 hidden sm:flex justify-center gap-6 lg:gap-10">
        <span className="opacity-75">Lorient · Lanester · Auray · Vannes · Morbihan</span>
        <span className="font-semibold tracking-wide">02 97 XX XX XX</span>
        <span className="opacity-75">Devis gratuit sous 48h</span>
      </div>

      {/* ─── Nav principale ─── */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <nav className="px-4 lg:px-6">
          <div className="flex items-center justify-between mx-auto max-w-screen-xl h-16">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 bg-slate-800 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3 12L12 3L21 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                  <path d="M5 10V20H19V10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 20V14H15V20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <span className="block text-[15px] font-semibold text-gray-900 dark:text-white leading-tight">
                  Le Goff Couverture
                </span>
                <span className="block text-[11px] text-gray-500 dark:text-gray-400">
                  Lanester · Bassin lorientais
                </span>
              </div>
            </Link>

            {/* ── Menu desktop ── */}
            <ul className="hidden lg:flex items-center h-16">

              {/* Lien Accueil */}
              <li>
                <Link
                  href="/"
                  className="flex items-center h-16 px-4 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Accueil
                </Link>
              </li>

              {/* Dropdown Services */}
              <li
                ref={dropdownRef}
                className="relative h-16 flex items-center"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="flex items-center gap-1.5 h-16 px-4 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  onClick={() => setServicesOpen((o) => !o)}
                >
                  Services
                  <svg
                    className={`w-3.5 h-3.5 opacity-50 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Panneau dropdown */}
                <div
                  className={`
                    absolute top-16 left-0 w-56 bg-white dark:bg-gray-900
                    border border-gray-200 dark:border-gray-700
                    rounded-xl shadow-lg py-1.5 z-50
                    transition-all duration-150 origin-top
                    ${servicesOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
                  `}
                >
                  {/* Toiture */}
                  <p className="px-4 pt-2.5 pb-1 text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                    Toiture
                  </p>
                  {services.toiture.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}

                  <div className="my-1.5 border-t border-gray-100 dark:border-gray-800" />

                  {/* Façade */}
                  <p className="px-4 pt-1 pb-1 text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                    Façade
                  </p>
                  {services.facade.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}

                  <div className="my-1.5 border-t border-gray-100 dark:border-gray-800" />

                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm font-medium text-slate-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    Voir tous les services →
                  </Link>
                </div>
              </li>

              {/* Autres liens */}
              {navLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center h-16 px-4 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* ── CTA desktop ── */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:0297000000"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.17 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                02 97 XX XX XX
              </a>
              <Link
                href="/contact"
                className="bg-slate-800 hover:bg-slate-700 dark:bg-slate-600 dark:hover:bg-slate-500 text-white text-sm font-medium rounded-lg px-4 py-2 transition-colors"
              >
                Devis gratuit
              </Link>
            </div>

            {/* ── Burger mobile ── */}
            <button
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10 border border-gray-200 dark:border-gray-700 rounded-lg gap-[5px]"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span
                className={`block w-[18px] h-[1.5px] bg-gray-800 dark:bg-white rounded-full transition-transform duration-200 ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`}
              />
              <span
                className={`block w-[18px] h-[1.5px] bg-gray-800 dark:bg-white rounded-full transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-[18px] h-[1.5px] bg-gray-800 dark:bg-white rounded-full transition-transform duration-200 ${menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`}
              />
            </button>

          </div>
        </nav>

        {/* ─── Drawer mobile ─── */}
        <div
          className={`
            lg:hidden overflow-y-auto bg-white dark:bg-gray-900
            border-t border-gray-100 dark:border-gray-800
            transition-all duration-300 ease-in-out
            ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
          `}
          style={{ maxHeight: menuOpen ? "100dvh" : 0 }}
        >
          <div className="px-0 pb-6">

            {/* Lien Accueil */}
            <Link
              href="/"
              className="flex items-center px-5 py-3.5 text-[15px] text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              Accueil
            </Link>

            {/* Services (accordéon mobile) */}
            <div className="border-b border-gray-100 dark:border-gray-800">
              <button
                className="flex items-center justify-between w-full px-5 py-3.5 text-[15px] text-gray-900 dark:text-white"
                onClick={() => setMobileServicesOpen((o) => !o)}
                aria-expanded={mobileServicesOpen}
              >
                Services
                <svg
                  className={`w-4 h-4 opacity-40 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 ${mobileServicesOpen ? "max-h-96" : "max-h-0"}`}
              >
                <p className="px-5 pt-2 pb-1 text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
                  Toiture
                </p>
                {services.toiture.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex items-center gap-2 pl-8 pr-5 py-2.5 text-sm text-gray-600 dark:text-gray-400 border-t border-gray-50 dark:border-gray-800"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600 shrink-0" />
                    {s.label}
                  </Link>
                ))}

                <p className="px-5 pt-3 pb-1 text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
                  Façade
                </p>
                {services.facade.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex items-center gap-2 pl-8 pr-5 py-2.5 text-sm text-gray-600 dark:text-gray-400 border-t border-gray-50 dark:border-gray-800"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600 shrink-0" />
                    {s.label}
                  </Link>
                ))}

                <Link
                  href="/services"
                  className="flex items-center px-5 py-3 text-sm font-medium text-slate-800 dark:text-white border-t border-gray-100 dark:border-gray-800 mb-1"
                  onClick={() => setMenuOpen(false)}
                >
                  Voir tous les services →
                </Link>
              </div>
            </div>

            {/* Autres liens */}
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center px-5 py-3.5 text-[15px] text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* CTA mobile */}
            <div className="px-4 pt-5 flex flex-col gap-3">
              <a
                href="tel:0297000000"
                className="flex items-center justify-center gap-2.5 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-[15px] font-medium text-gray-900 dark:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.17 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                02 97 XX XX XX
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-[15px] font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Devis gratuit
              </Link>
            </div>

            {/* Topbar info sur mobile */}
            <p className="text-center text-xs text-gray-400 mt-5">
              Intervention sur tout le bassin lorientais et le Morbihan
            </p>
          </div>
        </div>
      </header>
    </>
  );
}