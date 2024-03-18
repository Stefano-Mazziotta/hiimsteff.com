import { photo } from "@/definitions/photo";
import { NavigateBeforeIcon, NavigateNextIcon } from "../../icons";
import { LightboxHeader } from "./lightbox-header";
import Image from "next/image";
import { LightboxFooter } from "./lightbox-footer";
import { LightboxMain } from "./lightbox-main";

type LightboxProps = {
  photo: photo;
};

export function Lightbox({ photo }: LightboxProps) {
  return (
    <section className="z-20 flex flex-col justify-start gap-2 lg:max-w-4xl">
      <LightboxHeader />
      <LightboxMain photo={photo} />
      <LightboxFooter photo={photo} />
    </section>
  );
}
