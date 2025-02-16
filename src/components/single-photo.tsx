import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Photo } from "@/types/photo";
import {
  ArrowLeftIcon,
  CameraIcon,
  FilmIcon,
  MapPinIcon,
  TagIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SinglePhoto({
  photo,
  slug,
}: {
  photo: Photo;
  slug: string;
}) {
  const { description, path, location, camera, film, labels } = photo;

  return (
    <section className="w-full lg:w-1/2 flex flex-col mx-auto justify-center items-center gap-5">
      
      <div className="w-full flex flex-col gap-2">
        <Link
          href={`/gallery/${slug}`}
          className="z-10 md:transition-transform md:hover:translate-x-[-3px]"
        >
          <ArrowLeftIcon className="h-6 w-6" />
        </Link>
        <Image
          src={path || "/placeholder.svg"}
          alt={description}
          width={800}
          height={500}
          className="h-auto w-full shadow-lg p-2 bg-white"
        />
        <h2 className="italic p-2 text-cyan-300">{description}</h2>
      </div>
      <div className="w-full space-y-4">
        <Card className="">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5" />
              Location
            </CardTitle>
          </CardHeader>
          <CardContent>{`${location.name}, ${location.country.name}.`}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CameraIcon className="h-5 w-5" />
              Camera
            </CardTitle>
          </CardHeader>
          <CardContent>{camera?.name}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FilmIcon className="h-5 w-5" />
              Film
            </CardTitle>
          </CardHeader>
          <CardContent>{film?.name}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TagIcon className="h-5 w-5" />
              Labels
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {labels.map((label, index) => (
                <span
                  key={index}
                  className="bg-secondary px-2 py-1 text-sm text-secondary-foreground"
                >
                  {label.name}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
