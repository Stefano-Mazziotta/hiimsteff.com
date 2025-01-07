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

  const albumDescription = album.description || "24 images";

  const photo = album.photos.find((photo) => (photo.id = id));

  if (!photo) {
    return;
  }

  const { description, path, location, camera, film, labels } = photo;

  return (
    <section className="flex flex-col items-center justify-center px-4">
      <div>
        <Image src={path} alt={description} width={800} height={500}></Image>
        <article className="flex flex-col justify-center text-gray-400">
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

          <div className="mt-2 flex items-start justify-start gap-1">
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
          </div>
        </article>
      </div>
    </section>
  );
}
