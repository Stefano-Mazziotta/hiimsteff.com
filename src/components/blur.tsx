import Image from "next/image";
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

export default async function ImageBlurPlaceholder({
  src,
  className,
  alt,
}: {
  src: string;
  className?: string;
  alt: string;
}) {
  const buffer = await fs.readFile(`./public${src}`);

  const { base64 } = await getPlaiceholder(buffer);
  return (
    <Image
      className={className}
      src={src.replace("./public", "")}
      fill
      alt={alt}
      placeholder="blur"
      blurDataURL={base64}
    />
  );
}
