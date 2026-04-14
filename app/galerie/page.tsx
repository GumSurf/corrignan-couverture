import type { Metadata } from "next";
import Galerie from './galerie';
import GalerieHero from './galerieHero';
import GalerieCta from './galerieCta';

export const metadata: Metadata = {
  title: "Galerie — Corrignan Couverture, couvreur à Lanester",
  description: "Galerie photo des réalisations de Corrignan Couverture au Morbihan : ardoise, zinc, bac acier, aluminium.",
  keywords: "galerie couverture, photos chantier toiture, réalisations couverture Morbihan, couvreur Lanester",
  openGraph: {
    title: "Galerie — Corrignan Couverture",
    description: "Galerie photo des réalisations de Corrignan Couverture au Morbihan.",
    type: "website",
  },
};

export default function RealisationsPage() {
  return (
    <main className="bg-night-800">

      <GalerieHero />

      <Galerie />

      <GalerieCta />

    </main>
  );
}
