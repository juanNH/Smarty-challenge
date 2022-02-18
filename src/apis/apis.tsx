import axios from "axios";
import { Films } from "../types/types";

interface Response {
  status: number;
}

export const authors = [
  {
    id: "p",
    name: "Juan",
  },
  {
    id: "i",
    name: "David",
  },
  {
    id: "u",
    name: "Pepe",
  },
  {
    id: "y",
    name: "Toto",
  },
  {
    id: "t",
    name: "Ana",
  },
];

export const sendFilmsApi = async (dataToSend: Films): Promise<Response> => {
  let dataResponse = { status: 0 };

  try {
    if (dataToSend.length) {
      /* const { data } = await axios.post<Response>(
    "www.sendPeliculas.com",
    dataToSend
  ); */
      console.log(dataToSend);
      dataResponse = { status: 1 };
    }
  } catch (err) {
    console.log(err);
  }
  return dataResponse;
};

export const getFilmsApi = async (): Promise<Films> => {
 /*  try {
    const { data } = await axios.get<Films>("www.getPeliculas.com");
    return data
  } catch (err) {
    console.log(err);
  } */

  const data = [
    {
      id: "q", //hashed id
      name: "strinsssssg",
      rate: 5, //0 - 10
      author: {
        id: authors[0].id, //hashed id
        name: authors[0].name,
      },
    },
    {
      id: "w", //hashed id
      name: "strinsg",
      rate: 4, //0 - 10
      author: {
        id: authors[1].id, //hashed id
        name: authors[1].name,
      },
    },
    {
      id: "e", //hashed id
      name: "strinssg",
      rate: 3, //0 - 10
      author: {
        id: authors[2].id, //hashed id
        name: authors[2].name,
      },
    },
    {
      id: "r", //hashed id
      name: "ssstring",
      rate: 2, //0 - 10
      author: {
        id: authors[3].name, //hashed id
        name: authors[3].name,
      },
    },
    {
      id: "t", //hashed id
      name: "sstring",
      rate: 1, //0 - 10
      author: {
        id: authors[4].id, //hashed id
        name: authors[4].name,
      },
    },
    {
      id: "y", //hashed id
      name: "sstring",
      rate: 1, //0 - 10
      author: {
        id: authors[0].id, //hashed id
        name: authors[0].name,
      },
    },
    {
      id: "u", //hashed id
      name: "sstring",
      rate: 1, //0 - 10
      author: {
        id: authors[1].id, //hashed id
        name: authors[1].name,
      },
    },
    {
      id: "i", //hashed id
      name: "sstring",
      rate: 1, //0 - 10
      author: {
        id: authors[2].id, //hashed id
        name: authors[2].name,
      },
    },

    {
      id: "o", //hashed id
      name: "sstring",
      rate: 1, //0 - 10
      author: {
        id: authors[3].id, //hashed id
        name: authors[3].name,
      },
    },
    {
      id: "p", //hashed id
      name: "sstring",
      rate: 1, //0 - 10
      author: {
        id: authors[4].id, //hashed id
        name: authors[4].name,
      },
    },
    {
      id: "a", //hashed id
      name: "sstring",
      rate: 1, //0 - 10
      author: {
        id: authors[0].id, //hashed id
        name: authors[0].name,
      },
    },

    {
      id: "s", //hashed id
      name: "sstring",
      rate: 1, //0 - 10
      author: {
        id: authors[1].id, //hashed id
        name: authors[1].name,
      },
    },
    {
      id: "d", //hashed id
      name: "sstring",
      rate: 1, //0 - 10
      author: {
        id: authors[2].id, //hashed id
        name: authors[2].name,
      },
    },
    {
      id: "f", //hashed id
      name: "sstring",
      rate: 1, //0 - 10
      author: {
        id: authors[3].id, //hashed id
        name: authors[3].name,
      },
    },
    {
      id: "g", //hashed id
      name: "sstring",
      rate: 1, //0 - 10
      author: {
        id: authors[4].id, //hashed id
        name: authors[4].name,
      },
    },
    {
      id: "h", //hashed id
      name: "sstring",
      rate: 1, //0 - 10
      author: {
        id: authors[0].id, //hashed id
        name: authors[0].name,
      },
    },
    {
      id: "j", //hashed id
      name: "sstring",
      rate: 1, //0 - 10
      author: {
        id: authors[1].id, //hashed id
        name: authors[1].name,
      },
    },
    {
      id: "k", //hashed id
      name: "sstring",
      rate: 1, //0 - 10
      author: {
        id: authors[2].id, //hashed id
        name: authors[2].name,
      },
    },
    {
      id: "l", //hashed id
      name: "sstring",
      rate: 1, //0 - 10
      author: {
        id: authors[3].id, //hashed id
        name: authors[3].name,
      },
    },
    {
      id: "z", //hashed id
      name: "sstring",
      rate: 1, //0 - 10
      author: {
        id: authors[4].id, //hashed id
        name: authors[4].name,
      },
    },
    {
      id: "x", //hashed id
      name: "sstring",
      rate: 1, //0 - 10
      author: {
        id: authors[0].id, //hashed id
        name: authors[0].name,
      },
    },
    {
      id: "c", //hashed id
      name: "sstring",
      rate: 1, //0 - 10
      author: {
        id: authors[1].id, //hashed id
        name: authors[1].name,
      },
    },
    {
      id: "v", //hashed id
      name: "sstring",
      rate: 1, //0 - 10
      author: {
        id: authors[2].id, //hashed id
        name: authors[2].name,
      },
    },
    {
      id: "b", //hashed id
      name: "sstring",
      rate: 1, //0 - 10
      author: {
        id: authors[3].id, //hashed id
        name: authors[3].name,
      },
    },
  ];
  return data;
};
