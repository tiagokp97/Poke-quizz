import { useState } from "react";

import { GamePageStyles } from "./styles";

import { MobileMenu } from "../../components/MobileMenu/MobileMenu";
import { Buttons } from "../../components/buttons/buttons";
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
