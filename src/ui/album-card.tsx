import { album } from "@/definitions/album";
import Link from "next/link";
import Image from "next/image";
import { getBase64 } from "@/lib/get-base64";
import getURL from "@/lib/get-url";

export default async function AlbumCard({ album }: { album: album }) {
  const { slug, title, thumbnail } = album;

  const imgURL = getURL(thumbnail.url);
  const myBlurDataUrl = await getBase64(imgURL);

  return (
    <Link
      href={`album/${slug}`}
      className="group relative isolate flex flex-col justify-end h-100 min-h-60 w-full "
    >
      <Image
        src={imgURL}
        alt={thumbnail.description}
        width={600}
        height={400}
        className="absolute inset-0 h-full w-full object-cover"
        blurDataURL={myBlurDataUrl}
        placeholder="blur"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 md:transition-opacity md:group-hover:opacity-70"></div>
      <h2 className="w-fit z-10 inline-block py-1 px-2 mt-3 text-xl font-semibold text-cyan-50 bg-cyan-800 bg-opacity-60 md:transition-all md:group-hover:bg-opacity-100 text-shadow">
        {title}
      </h2>
    </Link>
  );
}
