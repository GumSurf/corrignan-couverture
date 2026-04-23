import { getChantierImages } from '../components/getChantierImages';
import Galerie from './galerie';

export default function GalerieWrapper() {
  const image = getChantierImages();
  return <Galerie images={image} />;
}