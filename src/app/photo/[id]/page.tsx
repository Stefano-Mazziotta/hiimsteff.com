import { albums } from "@/placeholder-data";
import Image from "next/image";

export default function PhotoPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const photo = albums[0].photos.find((photo) => photo.id == id);
  if (!photo) {
    return <p>not found</p>;
  }

  const { description, path } = photo;

  return (
    <section className="px-4">
      <Image
        src={path}
        alt={description}
        width={800}
        height={600}
        className="w-full"
      ></Image>
    </section>
  );
}
