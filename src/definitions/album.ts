import { photo } from "./photo";

export type album = {
  title: string;
  description: string;
  slug: string;
  thumbnail: photo;
  photos: photo[];
};
