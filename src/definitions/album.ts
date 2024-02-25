import { photo } from "./photo";
import { label } from "./label";

export type album = {
  id: number;
  title: string;
  description: string;
  slug: string;
  featuredPhoto: string;
  photos: photo[];
  labels: label[];
};
