import { useMemo } from "react";
import TdComponent from "../components/TdComponent";
import { usePeliculas } from "../hooks/useFilms";
import { usePaginado } from "../hooks/usePages";
import ButtonComponent from "../components/ButtonComponent";
import ButtonComponentProp from "../components/ButtonComponentProp";
import { authors } from "./../apis/apis";
import { perPage } from "./../constants/Constants";
import { GetFilmsIds } from "../helpers/GetFilmsIds";

const HomePage = () => {
  const {
    isLoading,
    filmsData,
    randomLoading,
    sortPeliculas,
    randomRate,
    duplicateFilm,
    handleSelectValue,
    sendFilms,
    sendDataError,
  } = usePeliculas();
  const { page, nextPage, prevPage } = usePaginado(filmsData.length - perPage);
  const films = useMemo(() => {
    return filmsData.slice(page, page + perPage);
  }, [filmsData, page, randomLoading]);

  const filmsIds = GetFilmsIds(films);

  return (
    <div>
      {sendDataError && <h1>Error</h1>}
      <h1>HomePage</h1>
      <ButtonComponent text="Mix" action={sortPeliculas} />

      <ButtonComponent text="Guardar" action={sendFilms} />

      {films && (
        <ButtonComponentProp
          text="RandomRate"
          action={randomRate}
          ids={filmsIds}
        />
      )}
      <h2>
        Pagina {page / perPage + 1} -- Max paginas{" "}
        {Math.ceil(filmsData.length / perPage)}
      </h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ButtonComponent text="Prev" action={prevPage} />
        <ButtonComponent text="Next" action={nextPage} />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">nombre</th>
            <th scope="col">rate</th>
            <th scope="col">Autor</th>
            <th scope="col">#</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            films.map(({ id, name, rate, author }) => {
              return (
                <TdComponent
                  key={id}
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
