import { StyledHeader } from "./styles";

import logo from "../../assets/logo.png";

import { Buttons } from "../buttons/buttons";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <StyledHeader>
      <img src={logo} alt="logo" />
      <div className="desktopMenu">
        <MobileMenu />
      </div>
      <Buttons className="buttonMenu" text="Menu" handleClick={handleClick} />;
      {showMenu && <MobileMenu handleClick={handleClick} />}
    </StyledHeader>
  );
};
export { Header };
