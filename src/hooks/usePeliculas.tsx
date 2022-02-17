import { useEffect, useState, useMemo } from "react";
import { getPeliculas } from "../apis/apis";
import { Films } from "../types/types";

export const usePeliculas = () => {
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [peliculas, setPeliculas] = useState<Films>([]);
  // const films = useMemo<any>(() => peliculas, [peliculas]);
  const peliculasPromise = async () => {
    const peliculasResponse = await getPeliculas();
    setPeliculas(peliculasResponse);
    setLoading(false);
  };
  const sortPeliculas = () => {
    setPeliculas(peliculas.sort(() => Math.random() - Date.now()));
    console.log(peliculas);
  };
  useEffect(() => {
    peliculasPromise();
  }, []);

  return {
    isLoading,
    peliculas,
    sortPeliculas,
  };
};
