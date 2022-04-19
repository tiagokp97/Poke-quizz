import { Buttons } from "../../components/buttons/buttons";
import { useState } from "react";

import { GamePageStyles } from "./styles";

import { MobileMenu } from "../../components/MobileMenu/MobileMenu";
import logo from "../../assets/logo.png";
const GamePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <GamePageStyles>
      <Buttons className="buttonMenu" text="Menu" handleClick={handleClick} />;
      <img src={logo} alt="logo" />
      <MobileMenu />
      {showMenu && <MobileMenu />}
    </GamePageStyles>
  );
};
export { GamePage };
