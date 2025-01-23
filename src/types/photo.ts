import { Camera } from "./camera";
import { Film } from "./film";

export interface Photo {
  id: string;
  path: string;
  description: string;
  width: number;
  height: number;
  camera?: Camera;
  film?: Film;
  labels: string[];
  location: Location;
}
