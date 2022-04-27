import {
  StyledLandingHeader,
  StyledProject,
  StyledSobre,
  StyledContatos,
} from "./styles";
import { Link } from "react-scroll";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import ModalContato from "../ModalContato/ModalContato";
import { useState } from "react";
const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);
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
            <div className="container-dialogo">
              <h1>Olá, somos Tiago e Cauê.</h1>
              <h2>Frontend devs</h2>
              <h2>Com foco em react</h2>
              <h2></h2>
            </div>
            <div className="container-contatos">
              <img
                src={linkedin}
                alt="linkedin"
                className="linkedin"
                onClick={() => setShowModal(!showModal)}
              />
              <a
                href="https://github.com/tiagokp97/poke-quizz"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="github" className="github" />
              </a>
              {showModal && <ModalContato setShowModal={setShowModal} />}
            </div>
          </div>
        </aside>
      </StyledContatos>
    </>
  );
};
export { LandingPage };
