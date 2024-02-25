import { label } from "./label";
export type photo = {
  id: string;
  description: string;
  width: number;
  height: number;
  path: string;
  film: film;
  camera: camera;
  location: location;
  labels: label[];
};
export type film = {
  id: number;
  name: string;
};

export type camera = {
  id: number;
  name: string;
  productionYear: number;
};

export type location = {
  id: number;
  name: string;
  coordinates: string;
  country: country;
};

export type country = {
  id: number;
  name: string;
};
