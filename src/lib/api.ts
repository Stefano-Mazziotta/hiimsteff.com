import { album } from "@/definitions/album";
import { albums } from "@/placeholder-data";

export function getAlbum(slug: string): album | null {
  return albums.find((album) => album.slug === slug) || null;
}
