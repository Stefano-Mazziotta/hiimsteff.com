import { albums } from "@/placeholder-data";
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

  const album = albums.find((album) => album.slug === slug);

  if (!album) {
    return;
  }

  const { photos, description } = album;

  return (
    <section className="px-4 relative">
      <div id="modal-root" className="sticky top-0 left-0 z-50" />
      <GalleryBanner slug={slug} description={description} />
      <GalleryGrid slug={slug} photos={photos} />
    </section>
  );
}
