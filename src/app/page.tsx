import HorizontalScroll from "@/ui/horizontal-scroll";
import { photos } from "@/placeholder-data";

export default function Home() {
  return (
    <section>
      <HorizontalScroll photos={photos.slice(0, 4)} direction="left" />
      <HorizontalScroll photos={photos.slice(5, 9)} direction="right" />
      {/* <HorizontalScroll photos={photos} direction="left"/> */}
    </section>
  );
}
