import {
  StyledLandingHeader,
  StyledProject,
  StyledSobre,
  StyledContatos,
} from "./styles";
import { Link } from "react-scroll";
import devTiago from "../../assets/devTiago.jpg";
import devCaue from "../../assets/devCaue.jpg";
import linkedin from "../../assets/linkedin.png";
const LandingPage = () => {
  return (
    <>
      <StyledProject title="section 1" id="section1">
        <StyledLandingHeader>
          <Link
            className="projeto"
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            duration={500}
          >
            Projeto
          </Link>
          <Link
            className="sobre"
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            duration={500}
          >
            Sobre
          </Link>
          <Link
            className="contatos"
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            duration={500}
          >
            contatos
          </Link>
        </StyledLandingHeader>
      </StyledProject>

      <StyledSobre title="section 2" id="section2"></StyledSobre>

      <StyledContatos title="section 3" id="section3">
        <aside>
          <div className="container">
            <img src={devTiago} alt="dev" />

            <div className="container-dialogo">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam, itaque. Quisquam omnis, soluta neque sunt officia
                delectus excepturi dicta labore placeat expedita magni,
                inventore ipsam facere cum, quam blanditiis? Aut.
              </p>
            </div>
            <img src={linkedin} alt="linkedin" className="linkedin" />
          </div>
        </aside>

        <aside>
          <div className="container">
            <img src={devCaue} alt="dev" />
            <img src={linkedin} alt="linkedin" className="linkedin" />
          </div>
        </aside>
      </StyledContatos>
    </>
  );
};
export { LandingPage };
