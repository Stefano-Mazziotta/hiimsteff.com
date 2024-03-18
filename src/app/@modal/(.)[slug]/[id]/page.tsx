import { getAlbum } from "@/lib/api";
import { NavigateBeforeIcon, NavigateNextIcon } from "@/ui/icons";
import { Lightbox } from "@/ui/modal/lightbox/lightbox";
import { LightboxHeader } from "@/ui/modal/lightbox/lightbox-header";
import { Modal } from "@/ui/modal/modal";
import Image from "next/image";

export default function LightboxPage({
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
      <Lightbox photo={photo} />
    </Modal>
  );
}
