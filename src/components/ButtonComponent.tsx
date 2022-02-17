import React from "react";

interface Props {
  text: string;
  action: () => void;
}

const ButtonComponent = ({ text, action }: Props) => {
  return (
    <div style={{padding:"10px"}}>
      <button className="btn btn-primary" onClick={action}>
        {text}
      </button>
    </div>
  );
};

export default ButtonComponent;
