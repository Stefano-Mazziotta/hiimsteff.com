import SinglePhoto from "@/components/single-photo";
import albumsMock from "@/mocks/albums.json";
import { Album } from "@/types/album";

export default function AlbumPhotoPage({
  params,
}: {
  params: { slug: string; id: string };
}) {
  const { slug, id } = params;

  const albums: Album[] = albumsMock;
  const album = albums.find((album) => album.slug === slug) || null;
  if (!album) {
    return;
  }

  const albumDescription = album.description || "24 images";

  const photo = album.photos.find((photo) => photo.id === id);

  if (!photo) {
    return;
  }

  return (
    <section className="px-4">
      <SinglePhoto photo={photo} slug={slug} />
    </section>
  );
}
