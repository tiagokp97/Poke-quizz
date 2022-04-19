import { StyledButtons } from "./styles";

const Buttons = ({ text, handleClick }) => {
  return <StyledButtons onClick={handleClick}>{text}</StyledButtons>;
};
export { Buttons };
