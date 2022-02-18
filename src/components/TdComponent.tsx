import { Author } from "../types/types";
import ButtonComponentProp from "./ButtonComponentProp";

interface Props {
  id: string;
  name: string;
  rate: number;
  author: Author;
  duplicateFilm: (props: any) => void;
  authors: Author[];
  handleSelectValue: (props: any, id: string) => void;
}

const TdComponent = ({
  id,
  name,
  rate,
  author,
  duplicateFilm,
  authors,
  handleSelectValue,
}: Props) => {
  return (
    <tr style={{ alignItems: "center" }}>
      <td>{name}</td>
      <td>{rate}</td>
      <select
        className="form-select"
        aria-label="Default select example"
        value={author.id}
        onChange={(e) => handleSelectValue(e, id)}
      >
        {authors.map(({ name, id }, index) => {
          return (
            <option key={index} value={id}>
              {name}
            </option>
          );
        })}
      </select>
      <td>
        <ButtonComponentProp
          text="Clonar"
          ids={id}
          name={name}
          rate={rate}
          author={author}
          action={duplicateFilm}
        />
      </td>
    </tr>
  );
};

export default TdComponent;
