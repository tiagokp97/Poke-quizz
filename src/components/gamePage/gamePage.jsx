import { Buttons } from "../buttons/buttons";
import { useState } from "react";

import { GamePageStyles } from "./styles";

import { MobileMenu } from "../MobileMenu/MobileMenu";
const GamePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <GamePageStyles>
      <Buttons text="Menu" handleClick={handleClick} />;
      {showMenu && <MobileMenu />}
    </GamePageStyles>
  );
};
export { GamePage };
