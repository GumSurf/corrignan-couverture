'use client'

import { useEffect } from 'react'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: "Michel L.",
    location: "Lorient",
    text: "Corrignan est intervenu rapidement suite à une fuite après la tempête. Travail soigné, équipe sérieuse et devis respecté à l'euro près. Je recommande sans hésiter.",
  },
  {
    name: "Sandrine B.",
    location: "Auray",
    text: "Réfection complète de notre toiture en ardoise. Le résultat est impeccable, la maison est méconnaissable. Très à l'écoute et ponctuel du début à la fin.",
  },
  {
    name: "Jean-Yves K.",
    location: "Lanester",
    text: "On a fait appel à eux pour du bardage sur notre extension. Finition nickel, délai tenu. On sent que c'est des gens du métier qui prennent leur travail au sérieux.",
  },
  {
    name: "Martine et Claude R.",
    location: "Hennebont",
    text: "Devis clair, pas de surprise sur la facture finale. L'équipe est propre sur le chantier — ils ont tout laissé rangé derrière eux. C'est rare, ça mérite d'être dit.",
  },
  {
    name: "Florian M.",
    location: "Vannes",
    text: "Bac acier sur un bâtiment agricole. Très bon rapport qualité-prix, travail rapide et bien fait. N'hésitez pas à les appeler, ils sont de bon conseil.",
  },
]

export default function TestimonialsSwiper() {
  useEffect(() => {
    const swiper = new Swiper('.mySwiper', {
      modules: [Navigation, Pagination],
      slidesPerView: 3,
      spaceBetween: 28,
      centeredSlides: true,
      loop: true,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
          centeredSlides: false,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 28,
          centeredSlides: true,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      },
    })

    return () => swiper.destroy(true, true)
  }, [])

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Ce que disent nos clients</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">Lorient · Auray · Vannes · Bassin lorientais</p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <button className="swiper-button-prev group flex h-12 w-12 items-center justify-center rounded-full border border-slate-800 transition hover:bg-slate-800 dark:border-slate-500 dark:hover:bg-slate-700">
              <svg className="h-5 w-5 text-slate-800 group-hover:text-white dark:text-slate-300" viewBox="0 0 24 24" fill="none">
                <path d="M20 12H4M10 6L4 12L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button className="swiper-button-next group flex h-12 w-12 items-center justify-center rounded-full border border-slate-800 transition hover:bg-slate-800 dark:border-slate-500 dark:hover:bg-slate-700">
              <svg className="h-5 w-5 text-slate-800 group-hover:text-white dark:text-slate-300" viewBox="0 0 24 24" fill="none">
                <path d="M4 12H20M14 6L20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Swiper */}
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="swiper-slide rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 transition hover:border-slate-400 dark:hover:border-slate-500"
              >
                {/* Étoiles */}
                <div className="mb-5 flex text-amber-400">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="h-5 w-5" viewBox="0 0 18 17" fill="currentColor">
                      <path d="M8.1 1.3l1.8 3.7 4 0.6-2.9 2.8 0.7 4-3.6-1.9-3.6 1.9 0.7-4L2.1 5.6l4-0.6z" />
                    </svg>
                  ))}
                </div>

                <p className="mb-6 text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  {t.text}
                </p>

                <div className="flex items-center gap-3">
                  {/* Initiales à la place de la photo */}
                  <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 font-semibold text-sm shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white text-sm">{t.name}</p>
                    <span className="text-xs text-gray-400">{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}