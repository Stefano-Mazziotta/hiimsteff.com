import { getBase64 } from "@/lib/get-base64";
import getURL from "@/lib/get-url";
import { Album } from "@/types/album";
import Image from "next/image";
import Link from "next/link";

export default async function AlbumCard({ album }: { album: Album }) {
  const { slug, title, featuredPhoto } = album;

  const imgURL = getURL(featuredPhoto);
  const myBlurDataUrl = await getBase64(imgURL);

  return (
    <Link
      href={`/gallery/${slug}`}
      className="h-100 group relative isolate z-10 flex min-h-60 w-full flex-col justify-end"
    >
      <Image
        src={featuredPhoto}
        alt={title}
        width={1280}
        height={720}
        className="absolute inset-0 h-full w-full object-cover"
        blurDataURL={myBlurDataUrl}
        placeholder="blur"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 md:transition-opacity md:group-hover:opacity-70"></div>
      <h2 className="z-10 mb-2 ml-2 inline-block w-fit bg-black bg-opacity-100 px-2 py-1 text-base font-semibold text-white md:bg-opacity-60 md:transition-all md:group-hover:bg-opacity-100">
        {title}
      </h2>
    </Link>
  );
}
