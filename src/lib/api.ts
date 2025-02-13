import albumsMock from "@/mocks/albums.json";
import { Album } from "@/types/album";

export function getAlbum(slug: string): Album | null {
  const albums: Album[] = albumsMock;
  return albums.find((album) => album.slug === slug) || null;
}
