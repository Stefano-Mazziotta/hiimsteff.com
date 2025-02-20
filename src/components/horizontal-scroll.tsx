import { Photo } from "@/types/photo";
import Image from "next/image";

export default function HorizontalScroll({
  photos,
  direction,
}: {
  photos: Photo[];
  direction: "left" | "right";
}) {
  console.time();
  console.log("photos", photos);
  console.timeEnd();

  const scrollAnimation = `animate-scroll-${direction}`;
  const gradient =
    "[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-150px),transparent_100%)]";
  return (
    <main
      className={`inline-flex w-full flex-nowrap overflow-hidden ${gradient}`}
    >
      <ul
        className={`flex md:justify-start [&_img]:max-w-none [&_li]:mx-1 ${scrollAnimation}`}
      >
        {photos.map((photo, index) => {
          return (
            <li key={index}>
              <Image
                src={photo.path}
                alt={photo.description}
                width={photo.width}
                height={photo.height}
              />
            </li>
          );
        })}
        {photos.map((photo, index) => {
          return (
            <li key={index}>
              <Image
                src={photo.path}
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
