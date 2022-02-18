import { stringify } from "querystring";
import { useEffect, useState } from "react";
import { getPeliculas } from "../apis/apis";
import { Author, Films } from "../types/types";
import { authors } from "./../apis/apis";
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

  const handleSelectValue =(e: any, id: string) => {
    let authorId: string = e.target.value;
    let authorName: string = "";
    const peliculasIterate = peliculas.map((pelicula) => {
      if (pelicula.id === id) {
        for (let i = 0; i < authors.length; i++) {
          if (authors[i].id === authorId) {
            authorName = authors[i].name;
            break;
          }
        }
        return {
          ...pelicula,
          author: {
            name: authorName,
            id: authorId,
          },
        };
      } else {
        return pelicula;
      }
    });
    setPeliculas(peliculasIterate);
  };

  const duplicateFilm = ({ author, ids, name, rate }: DuplicateFilmProps) => {
    let id = ids;
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
    handleSelectValue,
  };
};
