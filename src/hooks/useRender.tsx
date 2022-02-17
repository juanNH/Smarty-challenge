import { useEffect, useState } from "react";
import { Films } from "../types/types";

export const useRender = (peliculas: Films) => {
  const [films, setPeliculas] = useState<Films>([]);

  useEffect(() => {}, [films]);

  return { films };
};
