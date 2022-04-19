import {
  StyledLandingHeader,
  StyledProject,
  StyledSobre,
  StyledContatos,
} from "./styles";
import { Link } from "react-scroll";

const HeaderLandingPage = () => {
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
      <StyledContatos title="section 3" id="section3"></StyledContatos>
    </>
  );
};
export { HeaderLandingPage };
