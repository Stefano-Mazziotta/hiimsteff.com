import type { photo } from "@/definitions/photo";
import { NavigateBeforeIcon, NavigateNextIcon } from "@/ui/icons";
import Image from "next/image";

type LightboxMainProps = {
  photo: photo;
};

export function LightboxMain({ photo }: LightboxMainProps) {
  const { description, path } = photo;
  return (
    <main className="flex">
      <button className="fill-white">
        <NavigateBeforeIcon />
      </button>
      <div className="flex max-h-[620px]  lg:max-h-[787px]">
        <Image
          src={path}
          width={1920}
          height={1080}
          alt={description}
          className="w-full object-contain"
        />
      </div>
      <button className="fill-white">
        <NavigateNextIcon />
      </button>
    </main>
  );
}
