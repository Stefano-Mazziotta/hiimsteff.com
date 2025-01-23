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
    <article className="flex w-full flex-col items-start pb-3">
      <Link
        href="/"
        className="z-10 md:transition-transform md:hover:translate-x-[-3px]"
      >
        <ArrowLeftIcon />
      </Link>
      <h2 className="animate-gradient bg-[linear-gradient(to_right,theme(colors.purple.400),theme(colors.purple.100),theme(colors.pink.300),theme(colors.orange.400),theme(colors.pink.300),theme(colors.purple.100),theme(colors.purple.400))] bg-[length:200%_auto] bg-clip-text text-6xl font-bold uppercase text-transparent md:text-9xl">
        {slug}
      </h2>

      <p className="text-base text-gray-500 md:text-xl">{description}</p>
    </article>
  );
}
