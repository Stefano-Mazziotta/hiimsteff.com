import { Photo } from "@/types/photo";
import Image from "next/image";
import Link from "next/link";

// https://nextjs.org/docs/app/building-your-application/routing/parallel-routes
// https://github.com/vercel/nextgram/tree/main/app

export default function GalleryCard({
  photo,
  slug,
}: {
  photo: Photo;
  slug: string;
}) {
  const url = `${slug}/${photo.id}`;

  return (
    <Link href={url} passHref>
      <div className="relative mb-3 md:before:absolute md:before:inset-0 md:before:bg-black md:before:bg-opacity-40 md:before:transition-opacity md:before:content-[''] md:hover:cursor-zoom-in md:hover:before:bg-opacity-0">
        <Image
          className="w-full border-2 border-white md:border-4"
          src={"photo.path"}
          alt={photo.description}
          width={800}
          height={600}
        />
      </div>
    </Link>
  );
}
