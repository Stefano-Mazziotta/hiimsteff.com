import { albums } from "@/placeholder-data";
import Image from "next/image";

export default function AlbumPhotoPage({
  params,
}: {
  params: { slug: string; id: string };
}) {
  const { slug, id } = params;

  const album = albums.find((album) => album.slug === slug) || null;
  if (!album) {
    return;
  }

  const description = album.description || "24 images";

  const photo = album.photos.find((photo) => (photo.id = id));

  if (!photo) {
    return;
  }

  return (
    <section className="px-4">
      <Image
        src={photo.path}
        alt={photo.description}
        width={800}
        height={500}
      ></Image>
    </section>
  );
}
