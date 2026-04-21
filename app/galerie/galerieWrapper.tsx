import { getChantierImages } from '../components/getChantierImages';
import Galerie from './galerie';

export default function GalerieWrapper() {
  const images = getChantierImages();
  const image = [
    "/images/chantiers/camion1.jpg",
    "/images/chantiers/portail1.jpg",
    "/images/chantiers/velux1.jpg",
    "/images/chantiers/velux2.jpg",
    "/images/chantiers/velux3.jpg",
    "/images/chantiers/velux4.jpg",

    "/images/chantiers/aluminium/aluminium1.jpg",
    "/images/chantiers/aluminium/aluminium2.jpg",
    "/images/chantiers/aluminium/aluminium_apres.jpg",
    "/images/chantiers/aluminium/aluminium_avant.jpg",
    "/images/chantiers/aluminium/aluminium_hero.jpg",
    "/images/chantiers/ardoise/ardoise1.jpg",
    "/images/chantiers/ardoise/ardoise10.jpg",
    "/images/chantiers/ardoise/ardoise12.jpg",
    "/images/chantiers/ardoise/ardoise2.jpg",
    "/images/chantiers/ardoise/ardoise3.jpg",
    "/images/chantiers/ardoise/ardoise5.jpg",
    "/images/chantiers/ardoise/ardoise6.jpg",
    "/images/chantiers/ardoise/ardoise7.jpg",
    "/images/chantiers/ardoise/ardoise_apres.jpeg",
    "/images/chantiers/ardoise/ardoise_avant.jpeg",
    "/images/chantiers/ardoise/ardoise_hero.jpg",
    "/images/chantiers/bacAcier/bac_acier1.jpg",
    "/images/chantiers/bacAcier/bac_acier10.jpg",
    "/images/chantiers/bacAcier/bac_acier2.jpg",
    "/images/chantiers/bacAcier/bac_acier3.jpg",
    "/images/chantiers/bacAcier/bac_acier4.jpg",
    "/images/chantiers/bacAcier/bac_acier5.jpg",
    "/images/chantiers/bacAcier/bac_acier6.jpg",
    "/images/chantiers/bacAcier/bac_acier9.jpg",
    "/images/chantiers/bacAcier/bac_acier_apres.jpeg",
    "/images/chantiers/bacAcier/bac_acier_avant.jpeg",
    "/images/chantiers/bacAcier/bac_acier_hero.jpg",
    "/images/chantiers/bardage/bardage1.jpg",
    "/images/chantiers/bardage/bardage2.jpg",
    "/images/chantiers/bardage/bardage_hero.jpg",
    "/images/chantiers/zinc/zinc1.jpg",
    "/images/chantiers/zinc/zinc_apres.jpeg",
    "/images/chantiers/zinc/zinc_avant.jpeg",
    "/images/chantiers/zinc/zinc_hero.jpg",
  ];
  return <Galerie images={image} />;
}