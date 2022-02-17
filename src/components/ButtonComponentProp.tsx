interface Props {
  text: string;
  action: (id: string[]) => void;
  ids: string[];
}

const ButtonComponentProp = ({ text, action, ids }: Props) => {
  return (
    <div style={{ padding: "10px" }}>
      <button className="btn btn-primary" onClick={() => action(ids)}>
        {text}
      </button>
    </div>
  );
};

export default ButtonComponentProp;
