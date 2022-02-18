import { useState } from "react";
import { perPage } from "../constants/Constants";
export const usePaginado = (cantPeliculas: Number) => {
  const [page, setPage] = useState(0);

  const nextPage = () => {
    if (page < cantPeliculas) setPage(page + perPage);
  };
  const prevPage = () => {
    if (page > 0) {
      setPage(page - perPage);
    }
  };
  return { page, nextPage, prevPage };
};
