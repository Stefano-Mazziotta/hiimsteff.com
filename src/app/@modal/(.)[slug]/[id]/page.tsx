import { albums } from "@/placeholder-data";
import { Modal } from "./modal";
import { getAlbum } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

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
      <article className="flex flex-col gap-2">
        <div className="flex max-h-[620px]  lg:max-h-[787px]">
          {/* 787px */}
          <Image
            src={path}
            width={1920}
            height={1080}
            alt={description}
            className="w-full border-2 border-white object-contain"
          />
        </div>
        <footer className="flex justify-between text-sm text-gray-400">
          <p className=" ">
            {location.name}, {location.country.name}.
          </p>
          <p className="text-gray-400">1/24</p>
        </footer>
      </article>
    </Modal>
  );
}
