import { album } from "./definitions/album";
import { camera, country, film, photo } from "./definitions/photo";

// https://www.uuidgenerator.net/version4

const cameras: camera[] = [
  {
    id: 1,
    name: "Asahi Pentax K1000",
    productionYear: 1976,
  },
  {
    id: 2,
    name: "Minolta Hi-Matic 7s",
    productionYear: 1960,
  },
];

const films: film[] = [
  { id: 1, name: "Ilford Pan 100" },
  { id: 2, name: "Ilford Delta 100" },
];

const countries: country[] = [
  {
    id: 1,
    name: "Argentina",
  },
];

export const albums: album[] = [
  {
    id: 1,
    labels: [],
    title: "ROSARIO",
    description: "Messi's City",
    slug: "rosario",
    featuredPhoto: "/albums/the-creation/F1160004.JPG",
    photos: [
      {
        id: "2b3f24cc-062a-4480-aaca-8ab3877b284e",
        path: "/albums/rosario/photo24.jpg",
        width: 1999,
        height: 3000,
        description: "Rosario street",
        camera: cameras[0],
        film: films[0],
        labels: [],
        location: {
          id: 1,
          name: "Parque españa",
          coordinates: "-32.938865, -60.636305",
          country: countries[0],
        },
      },
    ],
  },
  {
    id: 2,
    labels: [],
    title: "HISTORY",
    description: "Fragments of time",
    slug: "history",
    featuredPhoto: "/albums/light-city/F2350027.JPG",
    photos: [
      {
        id: "6732983f-3346-4465-a359-5cabeb556c90",
        path: "/albums/eternity/photo1.jpg",
        width: 1043,
        height: 1664,
        description: "cat and dog in grafiti",
        camera: cameras[0],
        film: films[0],
        labels: [],
        location: {
          id: 1,
          name: "Parque españa",
          coordinates: "-32.938865, -60.636305",
          country: countries[0],
        },
      },
    ],
  },
  {
    id: 3,
    title: "PARIS",
    description: "Light City",
    slug: "paris",
    featuredPhoto: "/albums/marble-humans/000028.JPG",
    labels: [],
    photos: [
      {
        id: "6732983f-3346-4465-a359-5cabeb556c90",
        path: "/albums/street/photo1.jpg",
        width: 1043,
        height: 1664,
        description: "cat and dog in grafiti",
        camera: cameras[0],
        film: films[0],
        labels: [],
        location: {
          id: 1,
          name: "Parque españa",
          coordinates: "-32.938865, -60.636305",
          country: countries[0],
        },
      },
    ],
  },
];

export const photos: photo[] = [
  {
    id: "bc09e24d-6d8a-4fc0-9400-e1fc9c36bbd2",
    path: "/albums/F2530010.JPG",
    description: "light's show",
    width: 200,
    height: 100,
    camera: cameras[0],
    film: films[0],
    labels: [],
    location: {
      id: 1,
      name: "Parque españa",
      coordinates: "-32.938865, -60.636305",
      country: countries[0],
    },
  },
];
