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

      {showMenu && (
        <MobileNav>
          <div>Quem é esse Pokémon</div>
          <div>Quiz Evolução</div>
          <div>Quiz Tipo</div>
          <div>Quiz Berry</div>
          <button className="sairMenu" onClick={handleClick}>
            Sair
          </button>
        </MobileNav>
      )}
    </>
  );
};

export { MobileMenu };
