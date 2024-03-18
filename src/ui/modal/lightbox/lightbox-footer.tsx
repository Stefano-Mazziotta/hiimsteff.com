import type { photo } from "@/definitions/photo";

type LightboxFooterProps = {
  photo: photo;
};

export function LightboxFooter({ photo }: LightboxFooterProps) {
  const { description, location, camera, film, labels } = photo;
  return (
    <footer className="flex justify-between text-sm text-gray-400">
      <p className=" ">
        {location.name}, {location.country.name}.
      </p>
      <p className="text-gray-400">1/24</p>
    </footer>
  );
}
