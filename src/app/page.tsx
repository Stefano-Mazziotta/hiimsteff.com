import HorizontalScroll from "@/ui/horizontal-scroll";
import { photos } from "@/placeholder-data";

export default function Home() {
  return (
    <section>
      <HorizontalScroll photos={photos} />
    </section>
  );
}
