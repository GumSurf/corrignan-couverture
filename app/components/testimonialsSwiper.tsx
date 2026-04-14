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
    text: "Devis clair, pas de surprise sur la facture finale. L'équipe est propre sur le chantier, ils ont tout laissé rangé derrière eux. C'est rare, ça mérite d'être dit.",
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
              Lorient · Auray · Vannes · Bassin lorientais
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

          {/* pagination (optionnel styling si tu l’utilises) */}
          <div className="swiper-pagination mt-8 !relative"></div>

        </div>

      </div>
    </section>
  )
}