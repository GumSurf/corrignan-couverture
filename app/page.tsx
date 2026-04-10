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
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div className="bg-gray-50 min-h-screen">

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
