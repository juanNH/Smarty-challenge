import { Author } from "../types/types";
import ButtonComponentProp from "./ButtonComponentProp";

interface Props {
  id: string;
  name: string;
  rate: number;
  author: Author;
  duplicateFilm: (props: any) => void;
}

const TdComponent = ({ id, name, rate, author, duplicateFilm }: Props) => {
  return (
    <tr style={{ alignItems: "center" }}>
      <th>{id}</th>
      <td>{name}</td>
      <td>{rate}</td>
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
