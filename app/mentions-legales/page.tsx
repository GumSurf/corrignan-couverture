import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales, Damien Corrignan, Corrignan Couverture",
  description: "Mentions légales de Damien Corrignan, couvreur indépendant. Informations juridiques, coordonnées, conditions d'utilisation du site web.",
  keywords: "mentions légales, conditions générales, Damien Corrignan, Corrignan Couverture",
  robots: "noindex, nofollow", // Les pages légales n'ont pas besoin d'être indexées
};

export default function MentionsLegalesPage() {
  return (
    <main className="bg-night-800 min-h-screen">

      {/* ── Header ── */}
      <section
        className="py-16 px-4 bg-night-900 border-b border-[#c9a84c22]"
      >
        <div
          className="mx-auto max-w-7xl text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Mentions <span className="text-[#f0d080]">légales</span>
          </h1>
          <p className="text-night-200 max-w-2xl mx-auto">
            Informations juridiques et légales concernant Corrignan Couverture
          </p>
        </div>
      </section>

      {/* ── Contenu ── */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-4xl">

          <div className="prose prose-lg prose-invert max-w-none">

            {/* Éditeur du site */}
            <div className="bg-night-700 rounded-2xl p-8 border border-[#c9a84c33] mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Éditeur du site</h2>
              <div className="text-night-200 space-y-3">
                <p><strong>Nom :</strong> Damien Corrignan</p>
                <p><strong>Entreprise :</strong> Corrignan Couverture</p>
                <p><strong>Statut :</strong> Entrepreneur individuel</p>
                <p><strong>SIRET :</strong> [À renseigner]</p>
                <p><strong>Adresse :</strong><br />
                5 Chem. du Zulio<br />
                56600 Lanester<br />
                France</p>
                <p><strong>Téléphone :</strong> 06 04 10 70 18</p>
                <p><strong>Email :</strong> Corda.5600@gmail.com</p>
                <p><strong>Directeur de la publication :</strong> Jean Corrignan</p>
              </div>
            </div>

            {/* Hébergement */}
            <div className="bg-night-700 rounded-2xl p-8 border border-[#c9a84c33] mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Hébergement</h2>
              <div className="text-[#b8b09a] space-y-3">
                <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                <p><strong>Site web :</strong> <a href="https://vercel.com" className="text-[#f0d080] hover:underline">vercel.com</a></p>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div className="bg-night-700 rounded-2xl p-8 border border-[#c9a84c33] mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Propriété intellectuelle</h2>
              <div className="text-[#b8b09a] space-y-4">
                <p>
                  L'ensemble de ce site web, incluant mais ne se limitant pas aux textes, images, graphismes,
                  logos, icônes, sons, logiciels et plus généralement tous les éléments composant le site,
                  est la propriété exclusive de Corrignan Couverture ou de ses partenaires.
                </p>
                <p>
                  Toute reproduction, distribution, modification, adaptation, retransmission ou publication,
                  même partielle, de ces différents éléments est strictement interdite sans l'accord exprès
                  et préalable par écrit de Corrignan Couverture.
                </p>
                <p>
                  Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une
                  contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
                </p>
              </div>
            </div>

            {/* Données personnelles */}
            <div className="bg-night-700 rounded-2xl p-8 border border-[#c9a84c33] mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Protection des données personnelles</h2>
              <div className="text-[#b8b09a] space-y-4">
                <p>
                  Corrignan Couverture s'engage à protéger la confidentialité des informations personnelles
                  que vous pourriez lui communiquer via ce site web.
                </p>
                <p>
                  Les informations recueillies via les formulaires de contact sont destinées exclusivement
                  à Corrignan Couverture pour répondre à vos demandes. Elles ne seront en aucun cas
                  communiquées à des tiers sans votre consentement préalable.
                </p>
                <p>
                  Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée et au RGPD,
                  vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux
                  données personnelles vous concernant.
                </p>
                <p>
                  Pour exercer ces droits, contactez-nous à l'adresse : contact@corrignan-couverture.fr
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="bg-night-700 rounded-2xl p-8 border border-[#c9a84c33] mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Cookies</h2>
              <div className="text-[#b8b09a] space-y-4">
                <p>
                  Ce site web n'utilise pas de cookies de tracking ou de cookies publicitaires.
                  Seuls des cookies techniques nécessaires au fonctionnement du site peuvent être utilisés.
                </p>
                <p>
                  Vous pouvez à tout moment configurer votre navigateur pour refuser les cookies.
                  Cependant, certaines fonctionnalités du site pourraient ne plus fonctionner correctement.
                </p>
              </div>
            </div>

            {/* Responsabilité */}
            <div className="bg-night-700 rounded-2xl p-8 border border-[#c9a84c33] mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Responsabilité</h2>
              <div className="text-[#b8b09a] space-y-4">
                <p>
                  Corrignan Couverture s'efforce d'assurer au mieux de ses possibilités l'exactitude
                  et la mise à jour des informations diffusées sur ce site. Cependant, des erreurs
                  ou omissions peuvent survenir.
                </p>
                <p>
                  En conséquence, Corrignan Couverture ne peut être tenu responsable :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>De l'exactitude, de la précision ou de l'exhaustivité des informations disponibles sur ce site</li>
                  <li>De tout dommage direct ou indirect résultant de l'utilisation du site</li>
                  <li>De l'impossibilité d'accéder temporairement au site</li>
                  <li>De la présence de virus ou autres éléments nuisibles</li>
                </ul>
              </div>
            </div>

            {/* Liens externes */}
            <div className="bg-night-700 rounded-2xl p-8 border border-[#c9a84c33] mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Liens externes</h2>
              <div className="text-[#b8b09a] space-y-4">
                <p>
                  Ce site peut contenir des liens vers d'autres sites web. Corrignan Couverture
                  n'exerce aucun contrôle sur ces sites externes et décline toute responsabilité
                  quant à leur contenu, leur exactitude ou leur disponibilité.
                </p>
                <p>
                  La présence de liens vers ces sites ne constitue en aucun cas une validation
                  de leur contenu par Corrignan Couverture.
                </p>
              </div>
            </div>

            {/* Droit applicable */}
            <div className="bg-night-700 rounded-2xl p-8 border border-[#c9a84c33] mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Droit applicable et juridiction</h2>
              <div className="text-[#b8b09a] space-y-4">
                <p>
                  Les présentes mentions légales sont soumises au droit français.
                </p>
                <p>
                  En cas de litige, les tribunaux français seront seuls compétents.
                </p>
                <p>
                  Nous encourageons toutefois une résolution amiable de tout différend.
                </p>
              </div>
            </div>

            {/* Mise à jour */}
            <div className="bg-night-700 rounded-2xl p-8 border border-[#c9a84c33]">
              <h2 className="text-2xl font-bold text-white mb-6">Mise à jour des mentions légales</h2>
              <div className="text-[#b8b09a] space-y-4">
                <p>
                  Les présentes mentions légales ont été mises à jour le 13 avril 2026.
                </p>
                <p>
                  Corrignan Couverture se réserve le droit de les modifier à tout moment
                  sans préavis. Nous vous invitons à les consulter régulièrement.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}