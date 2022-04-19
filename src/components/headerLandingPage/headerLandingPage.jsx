import { StyledLandingHeader, StyledProject, StyledSobre } from "./styles";
import { Link, animateScroll as scroll } from "react-scroll";

const HeaderLandingPage = () => {
  return (
    <>
      <StyledProject title="section 1" id="section1">
        <StyledLandingHeader>
          {/* <p className="sobre">Sobre</p> */}
          <Link
            className="sobre"
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Sobre
          </Link>
          <Link
            className="contatos"
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Contatos
          </Link>
          <p>Projeto</p>
        </StyledLandingHeader>
      </StyledProject>

      <StyledSobre title="section 2" id="section2"></StyledSobre>
    </>
  );
};
export { HeaderLandingPage };
