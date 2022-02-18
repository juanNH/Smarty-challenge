import { useEffect, useMemo } from "react";
import TdComponent from "../components/TdComponent";
import { usePeliculas } from "../hooks/usePeliculas";
import { usePaginado } from "../hooks/usePaginado";
import ButtonComponent from "../components/ButtonComponent";
import ButtonComponentProp from "../components/ButtonComponentProp";
import { authors } from "./../apis/apis";

const HomePage = () => {
  const {
    isLoading,
    peliculas,
    randomLoading,
    sortPeliculas,
    randomRate,
    duplicateFilm,
    handleSelectValue,
    sendFilms,
    sendDataError,
  } = usePeliculas();
  const { page, nextPage, prevPage } = usePaginado(peliculas.length - 5);
  const films = useMemo(() => {
    return peliculas.slice(page, page + 5);
  }, [peliculas, page, randomLoading]);
  useEffect(() => {}, [randomLoading, films]);

  return (
    <div>
      { sendDataError && 
        <h1>Error</h1>
      }
      <h1>HomePage</h1>
      <ButtonComponent text="Mix" action={sortPeliculas} />

      <ButtonComponent text="Guardar" action={sendFilms} />

      {films[0] && films[0].id && (
        <ButtonComponentProp
          text="RandomRate"
          action={randomRate}
          ids={[
            films[0] && films[0].id,
            films[1] && films[1].id,
            films[2] && films[2].id,
            films[3] && films[3].id,
            films[4] && films[4].id,
          ]}
        />
      )}
      <h2>
        Pagina {page / 5 + 1} -- Max paginas {Math.ceil(peliculas.length / 5)}
      </h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ButtonComponent text="Prev" action={prevPage} />
        <ButtonComponent text="Next" action={nextPage} />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">nombre</th>
            <th scope="col">rate</th>
            <th scope="col">Autor</th>
            <th scope="col">#</th>
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
                  duplicateFilm={duplicateFilm}
                  authors={authors}
                  handleSelectValue={handleSelectValue}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
