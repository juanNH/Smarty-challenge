import { useEffect, useState, useMemo } from "react";
import { getPeliculas } from "../apis/apis";
import { Films } from "../types/types";

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

  const randomRate = (ids: string[]) => {
    const peliculasIterate = peliculas.map((pelicula) => {
      if (ids.includes(pelicula.id)) {
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
  };
};
