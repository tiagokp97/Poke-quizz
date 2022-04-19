import { Buttons } from "../../components/buttons/buttons";
import { useState } from "react";

import { GamePageStyles } from "./styles";

import { MobileMenu } from "../../components/MobileMenu/MobileMenu";
const GamePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <GamePageStyles>
      <Buttons className="buttonMenu" text="Menu" handleClick={handleClick} />;
      <MobileMenu />
      {showMenu && <MobileMenu />}
    </GamePageStyles>
  );
};
export { GamePage };
