import styled from 'styled-components';

interface Props {
  text: string;
  action: () => void;
}

const Box = styled.div`
padding: "10px";
`;


const ButtonComponent = ({ text, action }: Props) => {

  return (
    <Box>
      <button className="btn btn-primary" onClick={action}>
        {text}
      </button>
    </Box>
  );
};

export default ButtonComponent;
