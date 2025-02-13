import { Camera } from "./camera";
import { Film } from "./film";
import { Label } from "./label";
import { Location } from "./location";

export interface Photo {
  id: string;
  path: string;
  description: string;
  width: number;
  height: number;
  camera?: Camera;
  film?: Film;
  labels: Label[];
  location: Location;
}
