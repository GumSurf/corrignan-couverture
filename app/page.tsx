import React from "react";
import Description from "./components/description";
import Hero from "./components/hero";
import Cta from "./components/cta";
import Heading from "./components/heading";
import PromoSection from "./components/promoSection";
import CtaImage from "./components/ctaImage";
import FAQ from "./components/faq";
import TestimonialsSwiper from "./components/testimonialsSwiper";
import EmblaCarousel from "./components/EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel'
import './css/sandbox.css'
import './css/embla.css'

export default function Home() {
  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDES = [
  "/images/chantiers/ardoise/ardoise1.jpg",
  "/images/chantiers/ardoise/ardoise2.jpg",
  "/images/chantiers/bacAcier/bac_acier2.jpg",
  "/images/chantiers/ardoise/ardoise5.jpg",
  "/images/chantiers/bacAcier/bac_acier5.jpg",
]

  return (
    <div className="bg-night-800 min-h-screen">

        <Hero />

        <Heading />

        <PromoSection />

        <EmblaCarousel options={OPTIONS} slides={SLIDES} />

        <CtaImage />

        <TestimonialsSwiper />

        <Description />

        <FAQ />

        <Cta />

    </div>
  );
}
