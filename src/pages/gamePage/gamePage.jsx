import { GamePageStyles } from "./styles";
import professor from "../../assets/professor.png";

import { Header } from "../../components/header/header";

const GamePage = () => {
  return (
    <GamePageStyles>
      <Header />
      <img className="professor" src={professor} alt="professor" />
    </GamePageStyles>
  );
};
export { GamePage };
