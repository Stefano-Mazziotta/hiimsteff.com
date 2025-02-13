import { Photo } from "@/types/photo";
import GalleryCard from "./gallery-card";

export default function GalleryGrid({
  photos,
  slug,
}: {
  photos: Photo[];
  slug: string;
}) {
  return (
    <main className="columns-1 md:columns-2 lg:columns-3">
      {photos.map((photo) => {
        return <GalleryCard key={photo.id} photo={photo} slug={slug} />;
      })}
    </main>
  );
}
