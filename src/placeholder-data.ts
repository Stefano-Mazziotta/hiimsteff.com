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
    title: "THE CREATION",
    description: "Messi's City",
    slug: "the-creation",
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
    title: "LIGHT CITY",
    description: "Fragments of the time",
    slug: "eternity",
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
    title: "MARBLE HUMANS",
    description:
      "Humanos en piedra que parecen cobrar vida, reflejando la belleza, la emoción y la perfección anatómica del cuerpo humano.",
    slug: "marble-humans",
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
  {
    id: "fa4fb7e3-4f91-456c-99da-568b964514a8",
    path: "/albums/000012.JPG",
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
  {
    id: "cff85af0-9064-4e13-8009-f3c2ecf74e8b",
    path: "/albums/F2530006.JPG",
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
  {
    id: "8332332a-3f7e-4fab-9971-c62b53e9a389",
    path: "/albums/F2530011.JPG",
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
  {
    id: "c509b292-fb8d-48ee-ac60-859f2ba71c19",
    path: "/albums/F2530013.JPG",
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
  {
    id: "54e80b41-c407-4928-8d80-7f8991c1f267",
    path: "/albums/F2530026.JPG",
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
  {
    id: "1245d35e-495c-40d9-bc5a-a068a97f489f",
    path: "/albums/F2530028.JPG",
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
  {
    id: "c9aeb6a4-c08c-4625-9bce-52a7f94e47d1",
    path: "/albums/F2530030.JPG",
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
  {
    id: "3194779b-6c8c-4023-a2be-9824048c76cf",
    path: "/albums/F2530032.JPG",
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
  {
    id: "dd24994e-0aab-43b1-94e9-2b171944d6bf",
    path: "/albums/F2530033.JPG",
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
