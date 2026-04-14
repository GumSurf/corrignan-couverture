"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
  { label: "Services", href: "/services" },
  { label: "Galerie", href: "/galerie" },
  { label: "Zone d'intervention", href: "/zone-intervention" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <div className="bg-night-800 border-b border-[#c9a84c33] sticky top-0 z-50">
      {/* ─── Topbar ─── */}
      <div className="hidden sm:flex justify-center gap-8 px-4 py-1.5 text-xs bg-[#0f0f0f] text-gold-500">
        <span className="opacity-75">Lorient · Lanester · Auray · Vannes · Morbihan</span>
        <span className="font-semibold tracking-wide text-[#f0d080]">06 04 10 70 18</span>
        <span className="opacity-75">Devis gratuit sous 48h</span>
      </div>

      {/* ─── Nav principale ─── */}
      <header className="bg-night-800 border-b border-[#c9a84c33] sticky top-0 z-50">
        <nav className="px-4 lg:px-6">
          <div className="flex items-center justify-between mx-auto max-w-screen-xl h-[76px]">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-3.5 shrink-0">
              <div className="relative w-[62px] h-[62px] rounded-full border border-[#c9a84c66] bg-black overflow-hidden shrink-0">
                <Image
                  src="/images/logo/logo.jpg"
                  alt="Logo Corrignan Couverture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <span className="block text-[15px] font-semibold text-[#f0d080] leading-tight tracking-wide">
                  Corrignan Couverture
                </span>
                <span className="block text-[11px] text-[#7aaec8] opacity-85 mt-0.5">
                  Rénovation · Morbihan
                </span>
              </div>
            </Link>

            {/* ── Menu desktop ── */}
            <ul className="hidden lg:flex items-center h-[76px]">

              <li>
                <Link
                  href="/"
                  className="flex items-center h-[76px] px-4 text-sm font-medium text-[#f0d080] border-b-2 border-slate-400"
                >
                  Accueil
                </Link>
              </li>

              {/* Dropdown Services */}
              <li
                ref={dropdownRef}
                className="relative h-[76px] flex items-center"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="flex items-center gap-1.5 h-[76px] px-4 text-sm text-night-200 hover:text-[#f0d080] transition-colors"
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
                    absolute top-[76px] left-0 w-56 bg-night-700
                    border border-[#c9a84c33] rounded-xl shadow-2xl py-1.5 z-50
                    transition-all duration-150 origin-top
                    ${servicesOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
                  `}
                >
                  <p className="px-4 pt-2.5 pb-1 text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                    Toiture
                  </p>
                  {services.toiture.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2 text-sm text-night-200 hover:bg-[#252318] hover:text-[#f0d080] transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}

                  <div className="my-1.5 border-t border-[#c9a84c1a]" />

                  <p className="px-4 pt-1 pb-1 text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                    Façade
                  </p>
                  {services.facade.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2 text-sm text-night-200 hover:bg-[#252318] hover:text-[#f0d080] transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}

                  <div className="my-1.5 border-t border-[#c9a84c1a]" />

                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm font-medium text-slate-400 hover:text-[#7ac0e0] hover:bg-[#252318] transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    Voir tous les services →
                  </Link>
                </div>
              </li>

              {navLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center h-[76px] px-4 text-sm text-night-200 hover:text-[#f0d080] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* ── CTA desktop ── */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:0604107018"
                className="flex items-center gap-2 text-sm text-night-200 hover:text-[#f0d080] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.17 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                06 04 10 70 18
              </a>
              <Link
                href="/contact"
                className="bg-gradient-to-br from-gold-600 to-[#e0b84a] hover:opacity-90 text-[#120d00] text-sm font-medium rounded-lg px-4 py-2.5 transition-opacity"
              >
                Devis gratuit
              </Link>
            </div>

            {/* ── Burger mobile ── */}
            <button
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10 border border-[#c9a84c44] rounded-lg gap-[5px]"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className={`block w-[18px] h-[1.5px] bg-gold-500 rounded-full transition-transform duration-200 ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
              <span className={`block w-[18px] h-[1.5px] bg-gold-500 rounded-full transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-[18px] h-[1.5px] bg-gold-500 rounded-full transition-transform duration-200 ${menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
            </button>

          </div>
        </nav>

        {/* ─── Drawer mobile ─── */}
        <div
          className={`
            lg:hidden overflow-y-auto bg-night-800
            border-t border-[#c9a84c22]
            transition-all duration-300 ease-in-out
            ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
          style={{ maxHeight: menuOpen ? "100dvh" : 0, overflow: menuOpen ? "auto" : "hidden" }}
        >
          <div className="px-0 pb-6">

            <Link
              href="/"
              className="flex items-center px-5 py-3.5 text-[15px] text-[#f0d080] border-b border-[#c9a84c22]"
              onClick={() => setMenuOpen(false)}
            >
              Accueil
            </Link>

            {/* Services accordéon mobile */}
            <div className="border-b border-[#c9a84c22]">
              <button
                className="flex items-center justify-between w-full px-5 py-3.5 text-[15px] text-[#b8b09a]"
                onClick={() => setMobileServicesOpen((o) => !o)}
                aria-expanded={mobileServicesOpen}
              >
                Services
                <svg
                  className={`w-4 h-4 opacity-40 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`overflow-hidden transition-all duration-200 ${mobileServicesOpen ? "max-h-96" : "max-h-0"}`}>
                <p className="px-5 pt-2 pb-1 text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                  Toiture
                </p>
                {services.toiture.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex items-center gap-2 pl-8 pr-5 py-2.5 text-sm text-[#b8b09a] border-t border-[#c9a84c11]"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="w-1 h-1 rounded-full bg-[#c9a84c66] shrink-0" />
                    {s.label}
                  </Link>
                ))}

                <p className="px-5 pt-3 pb-1 text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                  Façade
                </p>
                {services.facade.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex items-center gap-2 pl-8 pr-5 py-2.5 text-sm text-[#b8b09a] border-t border-[#c9a84c11]"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="w-1 h-1 rounded-full bg-[#c9a84c66] shrink-0" />
                    {s.label}
                  </Link>
                ))}

                <Link
                  href="/services"
                  className="flex items-center px-5 py-3 text-sm font-medium text-slate-400 border-t border-[#c9a84c22] mb-1"
                  onClick={() => setMenuOpen(false)}
                >
                  Voir tous les services →
                </Link>
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center px-5 py-3.5 text-[15px] text-[#b8b09a] border-b border-[#c9a84c22]"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* CTA mobile */}
            <div className="px-4 pt-5 flex flex-col gap-3">
              <a
                href="tel:0604107018"
                className="flex items-center justify-center gap-2.5 py-3 border border-[#c9a84c44] rounded-xl text-[15px] font-medium text-gold-500"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.17 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                06 04 10 70 18
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center py-3 bg-gradient-to-br from-[#b8882a] to-[#e0b84a] text-[#120d00] rounded-xl text-[15px] font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Devis gratuit
              </Link>
            </div>

            <p className="text-center text-xs text-gold-500 opacity-50 mt-5">
              Intervention sur tout le bassin lorientais et le Morbihan
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}