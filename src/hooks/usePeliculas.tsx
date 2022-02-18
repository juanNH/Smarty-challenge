import { stringify } from "querystring";
import { useEffect, useState } from "react";
import { getPeliculas } from "../apis/apis";
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

export const usePeliculas = () => {
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [peliculas, setPeliculas] = useState<Films>([]);
  const [randomLoading, setRandomLoading] = useState<Boolean>(false);
  // const films = useMemo<any>(() => peliculas, [peliculas]);
  const peliculasPromise = async () => {
    const peliculasResponse = await getPeliculas();
    setPeliculas(peliculasResponse);
    setLoading(false);
  };
  const sortPeliculas = () => {
    setPeliculas(peliculas.sort(func));
    setRandomLoading(!randomLoading);
  };

  const randomRate = (ids: RandomRateProps) => {
    const peliculasIterate = peliculas.map((pelicula) => {
      if (ids.ids.includes(pelicula.id)) {
        return {
          ...pelicula,
          rate: Math.floor(Math.random() * 10) + 1,
        };
      } else {
        return pelicula;
      }
    });
    setPeliculas(peliculasIterate);
  };

  const duplicateFilm = ({ author, ids, name, rate }: DuplicateFilmProps) => {
    let id = ids.substring(0, 3).concat(Date.now().toString());
    setPeliculas([
      ...peliculas,
      {
        id,
        name,
        rate,
        author,
      },
    ]);
  };
  const func = () => {
    return 0.5 - Math.random();
  };
  useEffect(() => {
    peliculasPromise();
  }, []);

  return {
    isLoading,
    peliculas,
    randomLoading,
    sortPeliculas,
    randomRate,
    duplicateFilm,
  };
};
