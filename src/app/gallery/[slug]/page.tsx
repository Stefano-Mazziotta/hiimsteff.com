import albumsMock from "@/mocks/albums.json";
import { Album } from "@/types/album";
import GalleryBanner from "@/ui/gallery/gallery-banner";
import GalleryGrid from "@/ui/gallery/gallery-grid";

export default function AlbumPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { slug } = params;
  // get album by slug to backend
  const albums: Album[] = albumsMock;
  const album = albums.find((album) => album.slug === slug);

  if (!album) {
    return;
  }

  const { photos, description } = album;

  return (
    <section className="relative px-4">
      <GalleryBanner slug={slug} description={description} />
      <GalleryGrid slug={slug} photos={photos} />
    </section>
  );
}
