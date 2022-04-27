import { Container } from "./styles";

import qeep from "../../assets/qeep.png";
import { Buttons } from "../buttons/buttons";

const Game = () => {
  return (
    <Container>
      {/* <img src={qeep} alt={"Quem é esse pokemon?"} /> */}
      <h1> Quem é esse pokemon?</h1>

      <div className="pokemonImg">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
          alt="pikachu"
        />
      </div>
      <div className="inputBox">
        É o{" "}
        <div>
          <input type="text" placeholder="Ex: Charmander" />
        </div>{" "}
        <span>►</span>
      </div>
    </Container>
  );
};
export { Game };
