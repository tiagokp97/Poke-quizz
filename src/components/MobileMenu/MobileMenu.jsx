import { MobileNav } from "./styles";
import { Buttons } from "../buttons/buttons";
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <Buttons onClick={handleClick}>
        <GiHamburgerMenu />
      </Buttons>
      {showMenu && <MobileNav></MobileNav>}
    </>
  );
};

export { MobileMenu };
