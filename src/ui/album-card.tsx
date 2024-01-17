import { album } from "@/definitions/album";
import Link from "next/link";

export default function AlbumCard({ album }: { album: album }) {
  return (
    <Link
      href={`album/${album.slug}`}
      className="relative isolate flex flex-col justify-end overflow-hidden px-2 pb-2 pt-60 w-full"
    >
      <img
        src={album.thumbnail.url}
        alt={album.thumbnail.description}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70"></div>
      <h2 className="z-10 mt-3 text-lg font-bold text-white">{album.title}</h2>
    </Link>
  );
}
