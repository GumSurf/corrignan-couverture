'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "Dans quelle zone intervenez-vous ?",
    answer:
      "On intervient principalement sur le bassin lorientais : Lorient, Lanester, Hennebont, Auray, Ploemeur, Quéven et les communes alentour. On se déplace aussi sur l'ensemble du Morbihan selon la nature du chantier. N'hésitez pas à nous appeler pour en discuter.",
  },
  {
    question: "Est-ce que vous faites des devis gratuits ?",
    answer:
      "Oui, le devis est toujours gratuit et sans engagement. On se déplace pour voir le chantier, évaluer l'état de la toiture et vous remettre un devis clair et détaillé sous 48h.",
  },
  {
    question: "Quels types de toitures prenez-vous en charge ?",
    answer:
      "On travaille sur tous types de couvertures : ardoise naturelle et artificielle, zinc, bac acier, aluminium, et bardage extérieur. Que ce soit pour une rénovation complète, une réparation ponctuelle ou une construction neuve, on a les compétences pour intervenir.",
  },
  {
    question: "Faites-vous appel à des sous-traitants ?",
    answer:
      "Non. C'est notre propre équipe qui réalise les travaux du début à la fin. Pas de sous-traitance, pas d'intermédiaire : vous savez toujours qui est sur votre chantier et vous avez un interlocuteur unique.",
  },
  {
    question: "Intervenez-vous en urgence pour les fuites ?",
    answer:
      "Oui, on essaie d'être réactifs en cas de fuite ou de dégât après une tempête. Contactez-nous par téléphone directement — on évalue la situation et on organise une intervention dans les meilleurs délais.",
  },
  {
    question: "Êtes-vous assurés pour les travaux de couverture ?",
    answer:
      "Oui, Corrignan Couverture est titulaire d'une assurance décennale et d'une responsabilité civile professionnelle. On peut vous fournir les attestations sur simple demande avant le début des travaux.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
        .faq-section * { font-family: 'Poppins', sans-serif; }
      `}</style>

      <div className="faq-section max-w-2xl mx-auto flex flex-col items-center justify-center px-4 md:px-0 py-16">
        <p className="text-slate-500 text-sm font-medium tracking-widest uppercase mb-2">FAQ</p>
        <h2 className="text-3xl font-semibold text-center text-gray-900">
          Vos questions, nos réponses
        </h2>
        <p className="text-sm text-slate-500 mt-2 pb-10 text-center max-w-md">
          Tout ce que vous voulez savoir avant de nous contacter — et si vous ne trouvez pas, appelez-nous.
        </p>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-slate-200 py-4 cursor-pointer w-full"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-base font-medium text-gray-900">
                {faq.question}
              </h3>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`shrink-0 transition-transform duration-300 ease-in-out ${openIndex === index ? "rotate-180" : ""}`}
              >
                <path
                  d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                  stroke="#1D293D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p
              className={`text-sm text-slate-500 transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index
                  ? "opacity-100 max-h-[300px] pt-3"
                  : "opacity-0 max-h-0"
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}