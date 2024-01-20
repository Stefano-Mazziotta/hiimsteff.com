import { albums } from "@/placeholder-data";
import AlbumCard from "./album-card";

export default function AlbumsGrid() {
  return (
    <main className="min-h-[calc(100vh-130px)] flex flex-col md:grid md:grid-cols-3 gap-3">
      {albums.map((album, index) => {
        return <AlbumCard key={index} album={album} />;
      })}
    </main>
  );
}
