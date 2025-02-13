// get a json file
import albumsMock from "@/mocks/albums.json";
import { Album } from "@/types/album";
import AlbumCard from "./album-card";

export default function AlbumsGrid() {
  const albums: Album[] = albumsMock;

  return (
    <main className="flex min-h-[calc(100vh-130px)] flex-col gap-3 md:grid md:grid-cols-3">
      {albums.map((album, index) => {
        return <AlbumCard key={index} album={album} />;
      })}
    </main>
  );
}
