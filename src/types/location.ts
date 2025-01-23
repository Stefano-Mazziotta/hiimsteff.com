import { Country } from "./country";

export interface Location {
  id: number;
  name: string;
  coordinates: string;
  country: Country;
}
