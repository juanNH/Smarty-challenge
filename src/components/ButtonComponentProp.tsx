import { Author } from "../types/types";
import styled from 'styled-components';
interface Props {
  text: string;
  action: (props: any) => void;
  ids: any;
  name?: string;
  rate?: number;
  author?: Author;
}
const Box = styled.div`
  padding: "10px";
  `;

const ButtonComponentProp = ({
  text,
  action,
  ids,
  name,
  rate,
  author,
}: Props) => {
  return (
    <Box className="Container-button">
      <button
        className="btn btn-primary"
        onClick={() => action({ ids, name, rate, author })}
      >
        {text}
      </button>
    </Box>
  );
};

export default ButtonComponentProp;
