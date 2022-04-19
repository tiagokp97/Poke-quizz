import { StyledButtons } from "./styles";

const Buttons = ({ text, handleClick, className }) => {
  return (
    <StyledButtons className={className} onClick={handleClick}>
      {text}
    </StyledButtons>
  );
};
export { Buttons };
