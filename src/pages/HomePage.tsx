import { useEffect, useMemo } from "react";
import TdComponent from "../components/TdComponent";
import { usePeliculas } from "../hooks/usePeliculas";
import { useRender } from "../hooks/useRender";

const HomePage = () => {
  const { isLoading, peliculas, randomLoading, sortPeliculas } = usePeliculas();
  //const { films } = useRender(peliculas);
  const films = useMemo(() => peliculas, [peliculas]);
  useEffect(() => {
  }, [randomLoading]);

  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={sortPeliculas}>mezclar</button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">nombre</th>
            <th scope="col">rate</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            films.map(({ id, name, rate, author }, index) => {
              return (
                <TdComponent
                  key={index}
                  id={id}
                  name={name}
                  rate={rate}
                  author={author}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
