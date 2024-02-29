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

  const { description, location, camera, film, labels } = photo;

  return (
    <Modal>
      <article className="h-full flex flex-col items-start overflow-y-scroll pb-5 gap-5 md:overflow-y-auto">
        <div className="flex max-h-[620px] max-w-full">
          <Image
            src={photo.path}
            width={1920}
            height={1080}
            alt={photo.description}
            className="object-contain" // Use object-cover for landscape images and object-contain for portrait images
          />
        </div>
        <div className="flex flex-col gap-2 bg-black w-full border-t border-b border-cyan-800">
          <h2 className="text-lg">{description}</h2>
          <p className="">
            {`🗺️ ${location.name}, ${location.country.name}. (${location.coordinates})`}
          </p>
          <p className="">📷{camera.name}</p>
          <p className="">🎞️{film.name}</p>
          {labels.map((label, index) => {
            return (
              <p className="text-gray-400" key={index}>
                #{label.name}
              </p>
            );
          })}
        </div>
      </article>
    </Modal>
  );
}
