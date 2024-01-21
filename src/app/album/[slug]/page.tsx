import { albums } from "@/placeholder-data";
import GalleryBanner from "@/ui/gallery/gallery-banner";
import GalleryGrid from "@/ui/gallery/gallery-grid";

export default function AlbumPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const album = albums.find((album) => album.slug === slug) || null;
  const description = album?.description || "24 images";

  return (
    <section className="px-4">
      <GalleryBanner slug={slug} description={description} />
      <GalleryGrid album={album} />
    </section>
  );
}
