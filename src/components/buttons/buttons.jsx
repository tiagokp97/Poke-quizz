import { Children } from "react";
import { StyledButtons } from "./styles";

const Buttons = ({ Children }) => {
  return <StyledButtons>{Children}</StyledButtons>;
};
export { Buttons };
