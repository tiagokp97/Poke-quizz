import { MobileNav } from "./styles";
import { Buttons } from "../buttons/buttons";
import { useState } from "react";

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <Buttons text="Menu" handleClick={handleClick} />
      {showMenu && <MobileNav />}
    </>
  );
};

export { MobileMenu };
