import { MobileNav } from "./styles";

const MobileMenu = ({ handleClick }) => {
  return (
    <>
      <MobileNav>
        <div>Quem é esse Pokémon</div>
        <div>Repo</div>
        <div>Feedback</div>
        <div>Landing Page</div>
        <button className="sairMenu" onClick={handleClick}>
          Sair
        </button>
      </MobileNav>
    </>
  );
};

export { MobileMenu };
