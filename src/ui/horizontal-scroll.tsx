import { photo } from "@/definitions/photo";
import Image from "next/image";

export default function HorizontalScroll({ photos }: { photos: photo[] }) {
  return (
    <main className="w-full inline-flex flex-nowrap">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8">
        {photos.map((photo, index) => {
          return (
            <li key={index}>
              <Image
                src={photo.url}
                alt={photo.description}
                width={photo.width}
                height={photo.height}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
