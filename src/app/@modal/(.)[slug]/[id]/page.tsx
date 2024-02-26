import { albums } from "@/placeholder-data";
import { Modal } from "./modal";
import { getAlbum } from "@/lib/api";
import Image from "next/image";

export default function PhotoModal({
  params: { slug, id },
}: {
  params: { slug: string; id: string };
}) {
  const album = getAlbum(slug);
  if (!album) {
    return;
  }

  // get 1920 1080 photo
  const photo = album.photos.find((photo) => photo.id === id);
  if (!photo) return;

  return (
    <Modal>
      <Image
        src={photo.path}
        width={1920}
        height={1080}
        alt={photo.description}
      />
      {/* {id}
      {slug}
      {photo.description} */}
    </Modal>
  );
}
