import { useEffect, useState } from "react";
import { getFilmsApi, authors, sendFilmsApi } from "../apis/apis";
import { Author, Films } from "../types/types";
interface RandomRateProps {
  ids: string[];
}
interface DuplicateFilmProps {
  author: Author;
  ids: string;
  name: string;
  rate: number;
}
interface Response {
  status: number;
}
export const usePeliculas = () => {
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [filmsData, setPeliculas] = useState<Films>([]);
  const [originalFilms, setOriginalFilms] = useState<Films>([]);
  const [randomLoading, setRandomLoading] = useState<Boolean>(false);
  const [sendData, setSendData] = useState<Response>({ status: 0 });
  const [sendDataError, setSendDataError] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);
  const peliculasPromise = async () => {
    const peliculasResponse = await getFilmsApi();
    setOriginalFilms(peliculasResponse);
    setPeliculas(peliculasResponse);
    setCounter(peliculasResponse.length);
    setLoading(false);
  };
  const sortPeliculas = () => {
    setPeliculas(filmsData.sort(func));
    setRandomLoading(!randomLoading);
  };

  const randomRate = (ids: RandomRateProps) => {
    const peliculasIterate = filmsData.map((film) => {
      if (ids.ids.includes(film.id)) {
        return {
          ...film,
          rate: Math.floor(Math.random() * 10) + 1,
        };
      } else {
        return film;
      }
    });
    setPeliculas(peliculasIterate);
  };

  const handleSelectValue = (e: any, id: string) => {
    let authorId: string = e.target.value;
    let authorName: string = "";
    const peliculasIterate = filmsData.map((film) => {
      if (film.id === id) {
        for (let author of authors) {
          if (author.id === authorId) {
            authorName = author.name;
            break;
          }
        }
        return {
          ...film,
          author: {
            name: authorName,
            id: authorId,
          },
        };
      } else {
        return film;
      }
    });
    setPeliculas(peliculasIterate);
  };

  const duplicateFilm = ({ author, name, rate }: DuplicateFilmProps) => {
    setCounter(counter + 1);
    console.log(counter);
    setPeliculas([
      ...filmsData,
      {
        id: counter.toString(),
        name,
        rate,
        author,
      },
    ]);
  };

  const sendFilms = async () => {
    let filmsModified = [];
    for (let originalFilm of originalFilms) {
      for (let pelicula of filmsData) {
        if (pelicula.id === originalFilm.id) {
          if (
            pelicula.rate !== originalFilm.rate ||
            pelicula.author.id !== originalFilm.author.id
          ) {
            filmsModified.push(pelicula);
          }
          break;
        }
      }
    }
    const sendFilmsResponse = await sendFilmsApi(filmsModified);
    if (sendFilmsResponse.status === 1) {
      setSendData(sendFilmsResponse);
      setSendDataError(false);
    } else {
      setSendDataError(true);
    }
  };

  const func = () => {
    return 0.5 - Math.random();
  };
  useEffect(() => {
    peliculasPromise();
  }, [sendData]);

  return {
    isLoading,
    filmsData,
    randomLoading,
    sortPeliculas,
    randomRate,
    duplicateFilm,
    handleSelectValue,
    sendFilms,
    sendDataError,
  };
};
