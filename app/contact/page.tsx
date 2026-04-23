import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "../components/contactForm";
import OtherServiceCard from "../components/otherServiceCard";

export const metadata: Metadata = {
  title: "Contact, Damien Corrignan, couvreur indépendant à Lanester",
  description: "Contactez Damien Corrignan, couvreur indépendant à Lanester, pour votre projet de couverture. Lorient, Ploemeur, Locmiquélic, L'Armor Plage, Morbihan.",
  keywords: "contact Damien Corrignan, devis couverture Morbihan, couvreur Lanester, contact Corrignan Couverture, couvreur Lorient, couvreur Ploemeur",
  openGraph: {
    title: "Contact, Damien Corrignan, Corrignan Couverture",
    description: "Contactez-moi pour votre projet de couverture.",
    type: "website",
  },
};

const horaires = [
  { jour: "Lundi", heures: "8h00 - 18h00" },
  { jour: "Mardi", heures: "8h00 - 18h00" },
  { jour: "Mercredi", heures: "8h00 - 18h00" },
  { jour: "Jeudi", heures: "8h00 - 18h00" },
  { jour: "Vendredi", heures: "8h00 - 18h00" },
  { jour: "Samedi", heures: "Fermé" },
  { jour: "Dimanche", heures: "Fermé" },
];

const coordonnees = [
  {
    titre: "Téléphone",
    valeur: "06 04 10 70 18",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#f0d080]">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.17 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    lien: "tel:06 04 10 70 18",
  },
  {
    titre: "Email",
    valeur: "corrignan.couv56@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#f0d080]">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    lien: "mailto:corrignan.couv56@gmail.com",
  },
  {
    titre: "Zone d'intervention",
    valeur: "Lorient, Lanester, Locmiquélic,\nHennebont, L'Armor Plage, Morbihan",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#f0d080]">
        <path d="M3 7V5a2 2 0 012-2h2l2-2h4l2 2h2a2 2 0 012 2v2l-2 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V9L3 7z" />
        <path d="M9 11v6" />
        <path d="M15 11v6" />
      </svg>
    ),
    lien: null,
  },
  {
    titre: "Informations légales",
    valeur: "SIRET : 989 394 911 00014\nAssurance décennale",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#f0d080]">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14,2 14,8 20,8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    lien: null,
  },
];

const services = {
  ardoise: {
    label: "Ardoise",
    article: "l'ardoise",
    tagline: "La couverture traditionnelle du Morbihan",
    description:
      "L'ardoise est le matériau de couverture le plus répandu en Bretagne, et pour cause : elle résiste parfaitement aux vents marins, aux pluies bretonnes et au gel. Chez Corrignan Couverture, on pose aussi bien de l'ardoise naturelle d'Espagne ou d'Angers que de l'ardoise artificielle (fibrociment), selon votre budget et le style de votre maison.",
    image: "/images/chantiers/ardoise/ardoise_hero.jpg",
    imageAlt: "Toiture en ardoise posée par Corrignan Couverture dans le Morbihan",
  },

  zinc: {
    label: "Zinc",
    article: "le zinc",
    tagline: "Noblesse et longévité pour toitures complexes",
    description:
      "Le zinc est un matériau noble qui séduit autant pour ses qualités techniques que pour son esthétique. Idéal sur les toitures à faible pente, les noues, les lucarnes, les gouttières et les façades, il vieillit avec élégance et développe une patine naturelle au fil des années. Sa résistance à la corrosion en fait un excellent choix en zone côtière.",
    image: "/images/chantiers/zinc/zinc_hero.jpg",
    imageAlt: "Couverture en zinc posée par Corrignan Couverture",
  },

  "bac-acier": {
    label: "Bac acier",
    article: "le bac acier",
    tagline: "Rapidité, solidité et économie",
    description:
      "Le bac acier est la solution idéale pour les grandes surfaces, les bâtiments agricoles, les hangars et les extensions. Léger, facile et rapide à poser, il est disponible dans une large gamme de couleurs et de profils. C'est aussi un excellent choix pour les toitures à faible pente où l'ardoise ou le zinc seraient inadaptés.",
    image: "/images/chantiers/bacAcier/bac_acier_hero.jpg",
    imageAlt: "Toiture bac acier posée par Corrignan Couverture dans le Morbihan",
  },

  aluminium: {
    label: "Aluminium",
    article: "l'aluminium",
    tagline: "Légèreté, longévité et zéro entretien",
    description:
      "L'aluminium est un matériau haut de gamme, particulièrement apprécié pour les toitures plates, les terrasses, les toits-terrasses et les bardages en zone côtière. Inoxydable, léger et totalement recyclable, il ne demande aucun entretien sur toute sa durée de vie. Un investissement rentable sur le long terme.",
    image: "/images/chantiers/aluminium/aluminium_hero.jpg",
    imageAlt: "Pose aluminium par Corrignan Couverture",
  },

  bardage: {
    label: "Bardage",
    article: "le bardage",
    tagline: "Protéger et habiller vos façades",
    description:
      "Le bardage est une solution double fonction : il améliore l'isolation thermique de votre bâtiment par l'extérieur tout en lui donnant un aspect neuf et moderne. Corrignan Couverture pose du bardage en zinc, aluminium ou bac acier, selon vos préférences et la nature de votre projet. Rénovation ou construction neuve, on s'adapte.",
    image: "/images/chantiers/bardage/bardage_hero.jpg",
    imageAlt: "Bardage extérieur posé par Corrignan Couverture",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-night-800">

      {/* ── Hero ── */}
      <section className="py-16 px-4 bg-night-900 border-b border-[#c9a84c22]">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-[#f0d080] text-xs font-medium tracking-widest uppercase mb-3">
            Nous contacter
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Parlons de votre <span className="text-[#f0d080]">projet</span>
          </h1>

          <p className="text-[#b8b09a] max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre couverture.
          </p>
        </div>
      </section>

      {/* ── Contact principal ── */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-7xl lg:px-6">

          <div className="grid gap-12 lg:grid-cols-2 items-start">

            {/* Formulaire */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Envoyez-nous un message
              </h2>
              <p className="text-[#b8b09a] mb-8 leading-relaxed">
                Décrivez votre projet, posez vos questions ou demandez un devis.
                Nous vous répondrons sous 7 jours.
              </p>

              <ContactForm />
            </div>

            {/* Coordonnées */}
            <div className="space-y-8">

              <div className="lg:h-28">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Nos coordonnées
                </h2>
                <p className="text-[#b8b09a] mb-8 leading-relaxed">
                  Situés à Lanester, nous intervenons dans tout le bassin lorientais et le Morbihan.
                </p>
              </div>

              {/* Infos de contact */}
              <div className="grid gap-6 sm:grid-cols-2">
                {coordonnees.map((coord, index) => (
                  <div key={index} className="bg-night-700 rounded-2xl p-6 border border-[#c9a84c33]">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">{coord.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{coord.titre}</h3>
                        {coord.lien ? (
                          <a
                            href={coord.lien}
                            className="text-[#b8b09a] hover:text-[#f0d080] transition whitespace-pre-line"
                          >
                            {coord.valeur}
                          </a>
                        ) : (
                          <p className="text-[#b8b09a] whitespace-pre-line">{coord.valeur}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Horaires */}
              <div className="bg-night-700 rounded-2xl p-6 border border-[#c9a84c33]">
                <h3 className="text-lg font-semibold text-white mb-4">Horaires d'ouverture</h3>
                <div className="space-y-2">
                  {horaires.map((horaire, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-[#b8b09a]">{horaire.jour}</span>
                      <span className="text-white font-medium">{horaire.heures}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── Carte ── */}
      <section className="py-16 px-4 bg-night-700">
        <div className="mx-auto max-w-7xl">

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Notre zone d'intervention
            </h2>
            <p className="text-[#b8b09a] max-w-2xl mx-auto">
              Nous intervenons dans tout le bassin lorientais et le Morbihan
            </p>
          </div>

          {/* Carte Google Maps */}
          <div className="bg-night-800 rounded-2xl p-4 border border-[#c9a84c33] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2726.141564810399!2d-3.3366753!3d47.773575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48105f4fd1c5e4a3%3A0x52b06de23ba55e69!2sCorrignan%20couverture!5e0!3m2!1sfr!2sfr!4v1713010000000!5m2!1sfr!2sfr"
              width="100%"
              height="420"
              style={{ display: "block", border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Corrignan Couverture - Lanester"
            />
            <div className="mt-4 text-center">
              <p className="text-night-200 text-sm">
                📍 Notre adresse : 28 Rue de Kergreis, 56600 Lanester
              </p>

              <a
                href="https://www.google.com/maps?q=Corrignan+Couverture+Lanester"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 text-[#f0d080] hover:text-white transition text-sm font-medium"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15,3 21,3 21,9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Ouvrir dans Google Maps
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── Services rapides ── */}
      <section className="bg-night-800 py-12 px-4 lg:py-16 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white">Nos services</h2>
            <p className="mt-1 text-sm text-[#b8b09a]">
              Ardoise, zinc, bac acier, aluminium, bardage, on maîtrise tous les matériaux.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(services).map(([slug, s]) => (
              <OtherServiceCard
                key={slug}
                slug={slug}
                label={s.label}
                tagline={s.tagline}
                image={s.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="py-16 px-4 bg-night-900">
        <div className="mx-auto max-w-screen-sm text-center">

          <h2 className="mb-4 text-3xl md:text-4xl font-extrabold text-white">
            Prêt à commencer votre projet ?
          </h2>

          <p className="mb-8 text-[#b8b09a] leading-relaxed">
            Appelez-nous directement ou remplissez le formulaire ci-dessus.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:0604107018"
              className="inline-flex items-center gap-2 bg-gradient-to-br from-[#b8882a] to-[#e0b84a] text-[#120d00] font-medium rounded-lg text-sm px-6 py-3 hover:opacity-90 transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.17 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              06 04 10 70 18
            </a>

            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-medium text-[#f0d080] hover:text-white transition px-5 py-3 rounded-lg border border-[#c9a84c33] bg-[#0f0f0f]"
            >
              Retour à l'accueil
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}