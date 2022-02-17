import { useState } from "react";

export const usePaginado = (cantPeliculas: Number) => {
  const [page, setPage] = useState(0);

  const nextPage = () => {
    if (page < cantPeliculas) setPage(page + 5);
  };
  const prevPage = () => {
    if (page > 0) {
      setPage(page - 5);
    }
  };
  return { page, nextPage, prevPage };
};
