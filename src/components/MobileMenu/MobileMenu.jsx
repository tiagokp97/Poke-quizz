import { MobileNav } from "./styles";

const MobileMenu = ({ handleClick }) => {
  return (
    <>
      <MobileNav>
        <div>Quem é esse Pokémon</div>
        <div>Quiz Evolução</div>
        <div>Quiz Tipo</div>
        <div>Quiz Berry</div>
        <button className="sairMenu" onClick={handleClick}>
          Sair
        </button>
      </MobileNav>
    </>
  );
};

export { MobileMenu };
