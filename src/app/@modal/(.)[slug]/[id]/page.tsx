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
      <article className="h-full flex flex-col items-start">
        <div className="flex max-h-[620px]">
          <Image
            src={photo.path}
            width={1920}
            height={1080}
            alt={photo.description}
            className="object-contain" // Use object-cover for landscape images and object-contain for portrait images
          />
        </div>
        <div className="">
          <p className="">{photo.description}</p>{" "}
          <p className="">{photo.location.coordinates}</p>{" "}
        </div>
      </article>
    </Modal>
  );
}
