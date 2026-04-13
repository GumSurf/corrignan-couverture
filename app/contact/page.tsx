import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "../components/contactForm";
import OtherServiceCard from "../components/otherServiceCard";

export const metadata: Metadata = {
  title: "Contact, Corrignan Couverture, couvreur à Lanester",
  description: "Contactez Corrignan Couverture pour votre projet de couverture. Devis gratuit sous 48h. Lorient, Lanester, Auray, Vannes, Morbihan.",
  keywords: "contact couvreur, devis couverture Morbihan, couvreur Lanester, contact Corrignan",
  openGraph: {
    title: "Contact, Corrignan Couverture",
    description: "Contactez-nous pour votre projet de couverture. Devis gratuit sous 48h.",
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
    titre: "Adresse",
    valeur: "5 Chem. du Zulio\n56600 Lanester",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#f0d080]">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    lien: "https://maps.google.com/?q=5+Chem.+du+Zulio+Lanester",
  },
  {
    titre: "Téléphone",
    valeur: "06 04 10 70 18",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#f0d080]">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.17 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    lien: "tel:06 04 10 70 18",
  },
  {
    titre: "Email",
    valeur: "Corda.5600@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#f0d080]">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    lien: "mailto:Corda.5600@gmail.com",
  },
  {
    titre: "Zone d'intervention",
    valeur: "Lorient, Lanester, Auray,\nHennebont, Vannes, Morbihan",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#f0d080]">
        <path d="M3 7V5a2 2 0 012-2h2l2-2h4l2 2h2a2 2 0 012 2v2l-2 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V9L3 7z"/>
        <path d="M9 11v6"/>
        <path d="M15 11v6"/>
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
    image: "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Toiture en ardoise posée par Corrignan Couverture dans le Morbihan",
  },

  zinc: {
    label: "Zinc",
    article: "le zinc",
    tagline: "Noblesse et longévité pour toitures complexes",
    description:
      "Le zinc est un matériau noble qui séduit autant pour ses qualités techniques que pour son esthétique. Idéal sur les toitures à faible pente, les noues, les lucarnes, les gouttières et les façades, il vieillit avec élégance et développe une patine naturelle au fil des années. Sa résistance à la corrosion en fait un excellent choix en zone côtière.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Couverture en zinc posée par Corrignan Couverture",
  },

  "bac-acier": {
    label: "Bac acier",
    article: "le bac acier",
    tagline: "Rapidité, solidité et économie",
    description:
      "Le bac acier est la solution idéale pour les grandes surfaces, les bâtiments agricoles, les hangars et les extensions. Léger, facile et rapide à poser, il est disponible dans une large gamme de couleurs et de profils. C'est aussi un excellent choix pour les toitures à faible pente où l'ardoise ou le zinc seraient inadaptés.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Toiture bac acier posée par Corrignan Couverture dans le Morbihan",
  },

  aluminium: {
    label: "Aluminium",
    article: "l'aluminium",
    tagline: "Légèreté, longévité et zéro entretien",
    description:
      "L'aluminium est un matériau haut de gamme, particulièrement apprécié pour les toitures plates, les terrasses, les toits-terrasses et les bardages en zone côtière. Inoxydable, léger et totalement recyclable, il ne demande aucun entretien sur toute sa durée de vie. Un investissement rentable sur le long terme.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Pose aluminium par Corrignan Couverture",
  },

  bardage: {
    label: "Bardage",
    article: "le bardage",
    tagline: "Protéger et habiller vos façades",
    description:
      "Le bardage est une solution double fonction : il améliore l'isolation thermique de votre bâtiment par l'extérieur tout en lui donnant un aspect neuf et moderne. Corrignan Couverture pose du bardage en zinc, aluminium ou bac acier, selon vos préférences et la nature de votre projet. Rénovation ou construction neuve, on s'adapte.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Bardage extérieur posé par Corrignan Couverture",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-night-800">

      {/* ── Hero ── */}
      <section className="py-16 px-4 bg-night-900 border-b border-[#c9a84c22]">
        <div className="mx-auto max-w-screen-xl text-center">
          <p className="text-[#f0d080] text-xs font-medium tracking-widest uppercase mb-3">
            Nous contacter
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Parlons de votre <span className="text-[#f0d080]">projet</span>
          </h1>

          <p className="text-[#b8b09a] max-w-2xl mx-auto">
            Devis gratuit sous 48h, visite de chantier offerte.
            Contactez-nous pour discuter de votre couverture.
          </p>
        </div>
      </section>

      {/* ── Contact principal ── */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-screen-xl lg:px-6">

          <div className="grid gap-12 lg:grid-cols-2">

            {/* Formulaire */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Envoyez-nous un message
              </h2>
              <p className="text-[#b8b09a] mb-8 leading-relaxed">
                Décrivez votre projet, posez vos questions ou demandez un devis.
                Nous vous répondrons dans les 24h.
              </p>

              <ContactForm />
            </div>

            {/* Coordonnées */}
            <div className="space-y-8">

              <div>
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
                <p className="text-[#666] text-sm mt-4">
                  Interventions d'urgence : 24h/24, 7j/7
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── Carte ── */}
      <section className="py-16 px-4 bg-night-700">
        <div className="mx-auto max-w-screen-xl">

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
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
      <polyline points="15,3 21,3 21,9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
    Ouvrir dans Google Maps
  </a>
</div>
          </div>

        </div>
      </section>

      {/* ── Services rapides ── */}
      <section className="bg-night-800 py-12 px-4 lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-xl">
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
              href="tel:0297000000"
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