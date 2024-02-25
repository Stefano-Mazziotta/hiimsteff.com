import { album } from "@/definitions/album";
import { Label } from "../label";
import Link from "next/link";
import { ArrowLeftIcon } from "../icons";

export default function GalleryBanner({
  slug,
  description,
}: {
  slug: string;
  description: string;
}) {
  return (
    <article className="w-full pb-3 flex flex-col items-start">
      <Link
        href="/"
        className="z-10 md:transition-transform md:hover:translate-x-[-3px]"
      >
        <ArrowLeftIcon />
      </Link>
      <h2 className="text-6xl uppercase font-bold md:text-9xl bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.purple.400),theme(colors.purple.100),theme(colors.pink.300),theme(colors.orange.400),theme(colors.pink.300),theme(colors.purple.100),theme(colors.purple.400))] bg-[length:200%_auto] animate-gradient">
        {slug}
      </h2>

      <p className="text-base md:text-xl text-gray-500">{description}</p>
    </article>
  );
}
