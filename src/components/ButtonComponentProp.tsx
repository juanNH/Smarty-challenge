import { Author } from "../types/types";

interface Props {
  text: string;
  action: (props: any) => void;
  ids: any;
  name?: string;
  rate?: number;
  author?: Author;
}

const ButtonComponentProp = ({
  text,
  action,
  ids,
  name,
  rate,
  author,
}: Props) => {
  return (
    <div style={{ padding: "10px" }}>
      <button
        className="btn btn-primary"
        onClick={() => action({ ids, name, rate, author })}
      >
        {text}
      </button>
    </div>
  );
};

export default ButtonComponentProp;
