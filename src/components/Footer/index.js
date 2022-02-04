import { Link } from "react-router-dom";
import * as C from "./styles";
import Fade from "react-reveal/Fade";
export const Footer = () => {
  return (
    <C.Container>
      <Fade bottom cascade>
        <div className="content">
          <div className="left-side">
            <div className="logo">
              <img className="logo" src="/assets/logofooter.png" />
            </div>
            <div className="text">
              É uma plataforma que tem como propósito unir prestadores de
              serviços e pessoas que tenham interesse em contratar autônomos em
              todo o país.
            </div>
          </div>
          <div className="right-side">
            <nav>
              <ul>
                <div className="left">
                  <li>
                    <Link to="/">Como funciona</Link>
                  </li>
                  <li>
                    <Link to="/">Termos de uso</Link>
                  </li>
                  <li>
                    <Link to="/">Contato</Link>
                  </li>
                  <div className="icons">
                    <li>
                      <a href="">
                        <img src="/assets/instagram.png" />
                      </a>
                      <a href="">
                        <img src="/assets/facebook.png" />
                      </a>
                      <a href="">
                        <img src="/assets/youtube.png" />
                      </a>
                    </li>
                  </div>
                </div>
                <div className="right">
                  <li>
                    <Link to="/">Minha conta</Link>
                  </li>
                  <li>
                    <Link to="/">Mural</Link>
                  </li>
                  <li>
                    <Link to="/">Anunciar</Link>
                  </li>
                </div>
              </ul>
            </nav>
          </div>
        </div>
        <div className="final">© Todos os direitos reservados</div>
      </Fade>
    </C.Container>
  );
};
