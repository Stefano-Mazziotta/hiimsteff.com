import { album } from "@/definitions/album";
import Link from "next/link";
import Image from "next/image";

export default function AlbumCard({ album }: { album: album }) {
  return (
    <Link
      href={`album/${album.slug}`}
      className="group relative isolate flex flex-col justify-end overflow-hidden px-2 pb-2 pt-60 w-full h-max"
    >
      <Image
        src={album.thumbnail.url}
        alt={album.thumbnail.description}
        width={1000}
        height={700}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 md:transition-opacity md:group-hover:opacity-70"></div>
      <h2 className="w-fit z-10 inline-block py-1 px-2 mt-3 text-xs rounded font-semibold text-teal-200 bg-teal-600 last:mr-0 mr-1">
        {album.title}
      </h2>
    </Link>
  );
}
