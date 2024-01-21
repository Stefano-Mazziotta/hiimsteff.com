import { album } from "@/definitions/album";
import GalleryCard from "./gallery-card";

export default function GalleryGrid({ album }: { album: album | null }) {
  let photos = album?.photos || [];

  return (
    <main className="columns-1 md:columns-2 lg:columns-3">
      {photos.map((photo) => {
        return <GalleryCard key={photo.id} photo={photo} />;
      })}
    </main>
  );
}
