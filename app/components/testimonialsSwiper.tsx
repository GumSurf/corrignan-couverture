'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: "Erwann Margana",
    text: "Très professionnel, fiable, ça faisait littéralement 1 an que je me battais avec des couvreurs pour réparer ma toiture, de tous ceux que j'ai vu, j'ai vite compris que Damien c'était pas le même niveau que tous les autres, je recommande Corda Couverture à tous ceux qui cherchent un couvreur pour leur toiture",
  },
  {
    name: "Jean-Michel Doreau",
    text: "Super pro et à l'écoute, travail de qualité et dans les délais convenus au départ. Je recommande vivement cet artisan."
  },
  {
    name: "Tony Le discot",
    text: "Très professionnel, fiable. Travaux effectués en temps et en heure. Je recommande fortement 👍👍👍"
  },
  {
    name: "kimonocesium",
    text: "Personne très sympathique et à l'écoute, très réactif et travail propre. Je recommande cet artisan 👌"
  },
  {
    name: "Yoann Mekri",
    text: "Très professionnel et rapide. Chantier soigné et dans les délais. Je recommande."
  },
  {
    name: "Raphaëlle Salama",
    text: "Réactif, professionnel, à l'écoute. Je recommande vivement."
  },
  {
    name: "Marc BOUGER",
    text: "Je le recommande vivement. Travail soigné et dans les temps."
  },
  {
    name: "R. M.",
    text: "Réactif et très pro, donc RAS."
  }
]

export default function TestimonialsSwiper() {
  useEffect(() => {
    const swiper = new Swiper('.mySwiper', {
      modules: [Navigation, Pagination],
      slidesPerView: 3,
      spaceBetween: 32,
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
        0: { slidesPerView: 1, spaceBetween: 20, centeredSlides: false },
        768: { slidesPerView: 2, spaceBetween: 28, centeredSlides: true },
        1024: { slidesPerView: 3, spaceBetween: 32 },
      },
    })

    return () => swiper.destroy(true, true)
  }, [])

  return (
    <section className="py-24 bg-night-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.h2 className="text-4xl font-bold text-white">
              Ce que disent nos clients
            </motion.h2>
            <motion.p className="mt-2 text-[#b8b09a] text-sm">
              Lorient · Locmiquélic · L&apos;Armor Plage · Bassin lorientais
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-4 h-[2px] bg-gradient-to-r from-[#c9a84c] to-[#e0b84a]"
            />
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Témoignage précédent"
              className="swiper-button-prev group flex h-11 w-11 items-center justify-center rounded-full border border-[#c9a84c33] bg-[#0f0f0f] hover:bg-[#1a1a1a] transition"
            >
              <svg className="h-5 w-5 text-[#f0d080] group-hover:text-white" viewBox="0 0 24 24" fill="none">
                <path d="M20 12H4M10 6L4 12L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Témoignage suivant"
              className="swiper-button-next group flex h-11 w-11 items-center justify-center rounded-full border border-[#c9a84c33] bg-[#0f0f0f] hover:bg-[#1a1a1a] transition"
            >
              <svg className="h-5 w-5 text-[#f0d080] group-hover:text-white" viewBox="0 0 24 24" fill="none">
                <path d="M4 12H20M14 6L20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </motion.button>

          </motion.div>
        </motion.div>

        {/* Swiper */}
        <div className="swiper mySwiper">

          <div className="swiper-wrapper">

            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="swiper-slide rounded-2xl border border-[#c9a84c22] bg-[#0f0f0f] p-6 transition hover:border-[#c9a84c55]"
              >

                {/* étoiles */}
                <div className="mb-5 flex text-[#f0d080]">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="h-5 w-5" viewBox="0 0 18 17" fill="currentColor">
                      <path d="M8.1 1.3l1.8 3.7 4 0.6-2.9 2.8 0.7 4-3.6-1.9-3.6 1.9 0.7-4L2.1 5.6l4-0.6z" />
                    </svg>
                  ))}
                </div>

                <p className="mb-6 text-[#b8b09a] leading-relaxed text-sm">
                  {t.text}
                </p>

                {/* user */}
                <div className="flex items-center gap-3">

                  <div className="h-10 w-10 rounded-full bg-[#c9a84c22] border border-[#c9a84c33] flex items-center justify-center text-[#f0d080] font-semibold text-sm shrink-0">
                    {t.name.charAt(0)}
                  </div>

                  <div>
                    <p className="font-medium text-white text-sm">{t.name}</p>
                    <span className="text-xs text-[#7a7a7a]">{t.location}</span>
                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}