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

  const { description, path, location, camera, film, labels } = photo;

  return (
    <Modal>
      <article className="flex flex-col items-start justify-center gap-1">
        <div className="flex max-h-[620px]">
          <Image
            src={path}
            width={1920}
            height={1080}
            alt={description}
            className="object-contain"
          />
        </div>
        <section className="flex flex-col justify-center text-gray-400">
          <div>
            <h3>
              <span className="text-2xl">📷</span> {camera.name}
            </h3>
            <h3>
              <span className="text-2xl">🎞️</span> {film.name}
            </h3>
            <h3>
              <span className="text-2xl">🗺️</span>{" "}
              {`${location.name}, ${location.country.name}. (${location.coordinates})`}
            </h3>
          </div>

          <article className="mt-2 flex gap-1">
            {labels.map((label, index) => {
              return (
                <p
                  className="me-2 rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                  key={index}
                >
                  #{label.name}
                </p>
              );
            })}
          </article>
        </section>
      </article>
    </Modal>
  );
}
