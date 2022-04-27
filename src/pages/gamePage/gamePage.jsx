import { GamePageStyles } from "./styles";
import professor from "../../assets/professor.png";

import { Header } from "../../components/header/header";
import { Game } from "../../components/Game/Game";

const GamePage = () => {
  return (
    <GamePageStyles>
      <Header />
      <Game />
      {/* <img className="professor" src={professor} alt="professor" /> */}
    </GamePageStyles>
  );
};
export { GamePage };
