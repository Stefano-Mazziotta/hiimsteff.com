import { Label } from "./label";
import { Photo } from "./photo";

export interface Album {
  id: number;
  labels: Label[];
  title: string;
  description: string;
  slug: string;
  featuredPhoto: string;
  photos: Photo[];
}
