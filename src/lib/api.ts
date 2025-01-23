import { albums } from "@/placeholder-data";
import { album } from "@/typess/album";

export function getAlbum(slug: string): album | null {
  return albums.find((album) => album.slug === slug) || null;
}
