'use client';

import { useState } from 'react';

export type FaqItem = {
  question: string;
  answer: string;
};

export const defaultFaqs: FaqItem[] = [
  {
    question: "Dans quelle zone intervenez-vous ?",
    answer: "On intervient principalement sur le bassin lorientais : Lorient, Lanester, Hennebont, Auray, Ploemeur, Quéven et les communes alentour. On se déplace aussi sur l'ensemble du Morbihan selon la nature du chantier. N'hésitez pas à nous appeler pour en discuter.",
  },
  {
    question: "Est-ce que vous faites des devis gratuits ?",
    answer: "Oui, le devis est toujours gratuit et sans engagement. On se déplace pour voir le chantier, évaluer l'état de la toiture et vous remettre un devis clair et détaillé sous 48h.",
  },
  {
    question: "Quels types de toitures prenez-vous en charge ?",
    answer: "On travaille sur tous types de couvertures : ardoise naturelle et artificielle, zinc, bac acier, aluminium, et bardage extérieur. Que ce soit pour une rénovation complète, une réparation ponctuelle ou une construction neuve, on a les compétences pour intervenir.",
  },
  {
    question: "Faites-vous appel à des sous-traitants ?",
    answer: "Non. C'est notre propre équipe qui réalise les travaux du début à la fin. Pas de sous-traitance, pas d'intermédiaire : vous savez toujours qui est sur votre chantier et vous avez un interlocuteur unique.",
  },
  {
    question: "Intervenez-vous en urgence pour les fuites ?",
    answer: "Oui, on essaie d'être réactifs en cas de fuite ou de dégât après une tempête. Contactez-nous par téléphone directement, on évalue la situation et on organise une intervention dans les meilleurs délais.",
  },
  {
    question: "Êtes-vous assurés pour les travaux de couverture ?",
    answer: "Oui, Corrignan Couverture est titulaire d'une assurance décennale et d'une responsabilité civile professionnelle. On peut vous fournir les attestations sur simple demande avant le début des travaux.",
  },
];

type Props = {
  faqs?: FaqItem[];
  title?: string;
  subtitle?: string;
};

export default function FAQ({
  faqs = defaultFaqs,
  title = "Vos questions, nos réponses",
  subtitle = "Tout ce que vous voulez savoir avant de nous contacter, et si vous ne trouvez pas, appelez-nous.",
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-night-800 py-20 px-4">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">

            <p className="text-[#f0d080] text-xs font-medium tracking-widest uppercase mb-2">
              FAQ
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {title}
            </h2>

            <div className="mx-auto mt-4 w-20 h-[2px] bg-gradient-to-r from-[#c9a84c] to-[#e0b84a]" />

            <p className="text-[#b8b09a] mt-4 text-sm md:text-base max-w-md mx-auto">
              {subtitle}
            </p>

          </div>

          {/* FAQ items */}
          <div className="space-y-3">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#c9a84c22] rounded-xl bg-[#0f0f0f] px-5 py-4 cursor-pointer transition hover:border-[#c9a84c44]"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >

                {/* question */}
                <div className="flex items-center justify-between gap-4">

                  <h3 className="text-sm md:text-base font-medium text-white">
                    {faq.question}
                  </h3>

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    className={`shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180 text-[#f0d080]" : "text-[#b8b09a]"
                    }`}
                  >
                    <path
                      d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                </div>

                {/* answer */}
                <p
                  className={`text-sm text-[#b8b09a] leading-relaxed transition-all duration-300 overflow-hidden ${
                    openIndex === index
                      ? "opacity-100 max-h-40 pt-3"
                      : "opacity-0 max-h-0"
                  }`}
                >
                  {faq.answer}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}