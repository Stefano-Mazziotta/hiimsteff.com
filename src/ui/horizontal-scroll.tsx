import { photo } from "@/definitions/photo";
import Image from "next/image";

export default function HorizontalScroll({
  photos,
  direction,
}: {
  photos: photo[];
  direction: "left" | "right";
}) {
  console.time();
  console.log("photos", photos);
  console.timeEnd();

  const scrollAnimation = `flex md:justify-start [&_li]:mx-1 [&_img]:max-w-none animate-scroll-${direction}`;
  const gradient =
    "[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-150px),transparent_100%)]";
  return (
    <main
      className={`w-full inline-flex flex-nowrap overflow-hidden ${gradient}`}
    >
      <ul className={`${scrollAnimation}`}>
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
