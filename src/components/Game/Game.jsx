import { Container } from "./styles";

import qeep from "../../assets/qeep.png";

const Game = () => {
  return (
    <Container>
      <div className="qeepBox">
        {/* <img src={qeep} alt={"Quem é esse pokemon?"} /> */}
        <h1> Quem é esse pokemon?</h1>
      </div>
      <div className="pokemonImg">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
          alt="pikachu"
        />
      </div>
    </Container>
  );
};
export { Game };
