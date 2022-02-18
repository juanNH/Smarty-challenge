import { Film } from "../types/types";

export const GetFilmsIds = (films: Film[]) => {
  const filmsIds: string[] = [];
  for (let film of films) {
    filmsIds.push(film.id);
  }

  return filmsIds;
};
