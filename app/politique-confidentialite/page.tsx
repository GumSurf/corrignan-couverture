import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité, Corrignan Couverture",
  description: "Politique de confidentialité de Corrignan Couverture. Découvrez comment nous protégeons vos données personnelles et respectons le RGPD.",
  keywords: "politique de confidentialité, RGPD, protection des données, Corrignan Couverture",
  robots: "noindex, nofollow", // Les pages légales n'ont pas besoin d'être indexées
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="bg-night-800 min-h-screen">

      {/* ── Header ── */}
      <section className="py-16 px-4 bg-night-900 border-b border-[#c9a84c22]">
        <div className="mx-auto max-w-screen-xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Politique de <span className="text-[#f0d080]">confidentialité</span>
          </h1>
          <p className="text-[#b8b09a] max-w-2xl mx-auto">
            Comment nous protégeons vos données personnelles et respectons le RGPD
          </p>
        </div>
      </section>

      {/* ── Contenu ── */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-4xl">

          <div className="prose prose-lg prose-invert max-w-none">

            {/* Introduction */}
            <div className="bg-night-700 rounded-2xl p-8 border border-[#c9a84c33] mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Introduction</h2>
              <div className="text-[#b8b09a] space-y-4">
                <p>
                  Chez Corrignan Couverture, la protection de vos données personnelles est une priorité.
                  Cette politique de confidentialité explique comment nous collectons, utilisons,
                  stockons et protégeons vos informations personnelles, en conformité avec le
                  Règlement Général sur la Protection des Données (RGPD).
                </p>
                <p>
                  En utilisant notre site web ou nos services, vous acceptez les pratiques décrites
                  dans cette politique. Nous nous engageons à traiter vos données de manière
                  responsable et transparente.
                </p>
              </div>
            </div>

            {/* Responsable du traitement */}
            <div className="bg-night-700 rounded-2xl p-8 border border-[#c9a84c33] mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Responsable du traitement</h2>
              <div className="text-[#b8b09a] space-y-3">
                <p><strong>Entreprise :</strong> Corrignan Couverture SAS</p>
                <p><strong>Adresse :</strong> 123 Rue de la Couverture, 56600 Lanester, France</p>
                <p><strong>SIRET :</strong> XXX XXX XXX XXXXX</p>
                <p><strong>Email :</strong> Corda.5600@gmail.com</p>
                <p><strong>Téléphone :</strong> 06 04 10 70 18</p>
                <p><strong>Représentant légal :</strong> Jean Corrignan, Directeur Général</p>
              </div>
            </div>

            {/* Données collectées */}
            <div className="bg-night-700 rounded-2xl p-8 border border-[#c9a84c33] mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Données personnelles collectées</h2>
              <div className="text-[#b8b09a] space-y-4">
                <p>
                  Nous collectons uniquement les données nécessaires à la fourniture de nos services
                  et à l'amélioration de votre expérience utilisateur.
                </p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-4">Données collectées via le formulaire de contact :</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Adresse postale (si fournie)</li>
                  <li>Message et détails de votre demande</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-6 mb-4">Données collectées automatiquement :</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Adresse IP (anonymisée)</li>
                  <li>Type de navigateur et version</li>
                  <li>Système d'exploitation</li>
                  <li>Pages visitées et durée de visite</li>
                  <li>Source de trafic (référent)</li>
                </ul>

                <p className="mt-4">
                  <strong>Base légale du traitement :</strong> Consentement de l'utilisateur pour
                  les formulaires de contact, intérêt légitime pour l'amélioration du site.
                </p>
              </div>
            </div>

            {/* Finalités du traitement */}
            <div className="bg-night-700 rounded-2xl p-8 border border-[#c9a84c33] mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Finalités du traitement</h2>
              <div className="text-[#b8b09a] space-y-4">
                <p>Nous utilisons vos données personnelles pour :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Répondre à vos demandes de devis ou d'informations</li>
                  <li>Vous contacter pour discuter de vos besoins en couverture</li>
                  <li>Améliorer notre site web et nos services</li>
                  <li>Respecter nos obligations légales et contractuelles</li>
                  <li>Prévenir les fraudes et assurer la sécurité du site</li>
                </ul>
                <p>
                  Vos données ne sont jamais utilisées à des fins commerciales sans votre consentement explicite.
                </p>
              </div>
            </div>

            {/* Partage des données */}
            <div className="bg-night-700 rounded-2xl p-8 border border-[#c9a84c33] mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Partage des données personnelles</h2>
              <div className="text-[#b8b09a] space-y-4">
                <p>
                  Corrignan Couverture s'engage à ne pas vendre, louer ou partager vos données
                  personnelles avec des tiers, sauf dans les cas suivants :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Avec votre consentement explicite</li>
                  <li>Pour respecter une obligation légale</li>
                  <li>Pour protéger nos droits et intérêts légitimes</li>
                  <li>Avec nos prestataires techniques (hébergeur, maintenance) sous contrat</li>
                </ul>
                <p>
                  Dans ce dernier cas, nos prestataires sont contractuellement tenus de respecter
                  la confidentialité et la sécurité de vos données.
                </p>
              </div>
            </div>

            {/* Durée de conservation */}
            <div className="bg-night-700 rounded-2xl p-8 border border-[#c9a84c33] mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Durée de conservation des données</h2>
              <div className="text-[#b8b09a] space-y-4">
                <p>Nous conservons vos données personnelles selon les durées suivantes :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Données de contact :</strong> 3 ans après le dernier contact</li>
                  <li><strong>Données de devis :</strong> 5 ans (obligation fiscale)</li>
                  <li><strong>Données de navigation :</strong> 13 mois maximum</li>
                </ul>
                <p>
                  Au-delà de ces délais, vos données sont supprimées ou anonymisées.
                </p>
              </div>
            </div>

            {/* Sécurité des données */}
            <div className="bg-night-700 rounded-2xl p-8 border border-[#c9a84c33] mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Sécurité des données</h2>
              <div className="text-[#b8b09a] space-y-4">
                <p>
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées
                  pour protéger vos données personnelles contre la perte, l'accès non autorisé,
                  la modification ou la divulgation.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Chiffrement des données en transit (HTTPS)</li>
                  <li>Accès restreint aux données (principe du moindre privilège)</li>
                  <li>Sauvegardes régulières et sécurisées</li>
                  <li>Formation du personnel à la protection des données</li>
                  <li>Audit régulier de nos pratiques de sécurité</li>
                </ul>
              </div>
            </div>

            {/* Cookies et traceurs */}
            <div className="bg-night-700 rounded-2xl p-8 border border-[#c9a84c33] mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Cookies et traceurs</h2>
              <div className="text-[#b8b09a] space-y-4">
                <p>
                  Notre site web n'utilise pas de cookies de tracking publicitaires ou de cookies
                  tiers pour analyser votre comportement.
                </p>
                <p>
                  Seuls des cookies techniques strictement nécessaires au fonctionnement du site
                  peuvent être utilisés :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Cookies de session pour la navigation</li>
                  <li>Cookies de préférences utilisateur (si applicable)</li>
                </ul>
                <p>
                  Vous pouvez à tout moment désactiver les cookies via les paramètres de votre navigateur.
                </p>
              </div>
            </div>

            {/* Vos droits */}
            <div className="bg-night-700 rounded-2xl p-8 border border-[#c9a84c33] mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Vos droits concernant vos données</h2>
              <div className="text-[#b8b09a] space-y-4">
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Droit d'accès :</strong> Connaître les données que nous détenons sur vous</li>
                  <li><strong>Droit de rectification :</strong> Corriger des données inexactes</li>
                  <li><strong>Droit à l'effacement :</strong> Supprimer vos données (dans certaines conditions)</li>
                  <li><strong>Droit à la limitation :</strong> Limiter le traitement de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
                  <li><strong>Droit d'opposition :</strong> Refuser certains traitements</li>
                </ul>
                <p>
                  Pour exercer ces droits, contactez-nous à : contact@corrignan-couverture.fr
                  ou par courrier à l'adresse de notre siège social.
                </p>
                <p>
                  Vous avez également le droit de déposer une réclamation auprès de la CNIL.
                </p>
              </div>
            </div>

            {/* Transferts hors UE */}
            <div className="bg-night-700 rounded-2xl p-8 border border-[#c9a84c33] mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Transferts de données hors de l'Union Européenne</h2>
              <div className="text-[#b8b09a] space-y-4">
                <p>
                  Nos données sont principalement hébergées en France et dans l'Union Européenne.
                  Dans le cas exceptionnel où des données seraient transférées hors de l'UE,
                  nous nous assurons que le pays destinataire offre un niveau de protection adéquat
                  ou que des garanties appropriées sont mises en place (clauses contractuelles types).
                </p>
              </div>
            </div>

            {/* Modifications */}
            <div className="bg-night-700 rounded-2xl p-8 border border-[#c9a84c33] mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Modifications de cette politique</h2>
              <div className="text-[#b8b09a] space-y-4">
                <p>
                  Cette politique de confidentialité peut être modifiée pour s'adapter aux évolutions
                  légales ou techniques. Nous vous informerons de toute modification importante
                  par email ou via une notification sur notre site.
                </p>
                <p>
                  La version actuelle date du 13 avril 2026.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-night-700 rounded-2xl p-8 border border-[#c9a84c33]">
              <h2 className="text-2xl font-bold text-white mb-6">Contact</h2>
              <div className="text-[#b8b09a] space-y-4">
                <p>
                  Pour toute question concernant cette politique de confidentialité ou l'exercice
                  de vos droits, contactez notre Délégué à la Protection des Données :
                </p>
                <div className="bg-night-600 rounded-lg p-4 mt-4">
                  <p><strong>Email :</strong> Corda.5600@gmail.com</p>
                  <p><strong>Adresse postale :</strong><br />
                  À l'attention du DPO<br />
                  Corrignan Couverture<br />
                  123 Rue de la Couverture<br />
                  56600 Lanester<br />
                  France</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}