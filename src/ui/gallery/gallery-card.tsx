import { photo } from "@/definitions/photo";
import Image from "next/image";
import Link from "next/link";

// https://nextjs.org/docs/app/building-your-application/routing/parallel-routes
// https://github.com/vercel/nextgram/tree/main/app

export default function GalleryCard({
  photo,
  slug,
}: {
  photo: photo;
  slug: string;
}) {
  const url = `/${slug}/${photo.id}`;

  return (
    <div className="relative mb-3 md:before:content-[''] md:before:absolute md:before:inset-0 md:before:bg-black md:before:transition-opacity md:before:bg-opacity-40 md:hover:before:bg-opacity-0 md:hover:cursor-zoom-in">
      <Image
        className="w-full"
        src={photo.path}
        alt={photo.description}
        width={800}
        height={600}
      />
    </div>
  );
}
