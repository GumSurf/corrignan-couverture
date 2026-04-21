import { notFound } from "next/navigation";
import type { Metadata } from "next";

import TestimonialsSwiper from "../../components/testimonialsSwiper";
import FAQ, { type FaqItem } from "../../components/faq";

import HeroService from "../../components/services/heroService";
import ServiceIntro from "../../components/services/serviceIntro";
import ServiceImageText from "../../components/services/serviceImageText";
import ServiceBeforeAfter from "../../components/services/serviceBeforeAfter";
import ServiceCTA from "../../components/services/serviceCTA";

import { services, type ServiceKey } from "../../data/services";

// ─── PARAMS ─────────────────────────────────────

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

// ─── METADATA ───────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const service = services[slug as ServiceKey];
  if (!service) return {};

  return {
    title: `${service.label}, Corrignan Couverture, couvreur à Lanester`,
    description: `Corrignan Couverture pose ${service.article} sur Lorient, Lanester, Locmiquélic et tout le bassin lorientais. Devis gratuit`,
  };
}

// ─── PAGE ───────────────────────────────────────

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services[slug as ServiceKey];
  if (!service) return notFound();

  return (
    <main className="bg-night-800">
      <HeroService service={service} />

      <ServiceIntro service={service} />

      <ServiceImageText data={service.description2} />

      {service.beforeAfter && <ServiceBeforeAfter items={[service.beforeAfter]} />}

      <TestimonialsSwiper />

      <FAQ faqs={service.faqs} />

      <ServiceCTA article={service.article} />
    </main>
  );
}