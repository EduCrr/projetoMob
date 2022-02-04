import * as C from "./styles";
import { Button } from "../../appStyles";
import Fade from "react-reveal/Fade";
export const Search = () => {
  return (
    <C.Container>
      <C.Banner color={"#0095ff"} style={{ backgroundColor: "#5e04b3 " }}>
        <Fade bottom cascade>
          <div className="title">
            <h1>Tenho um problema</h1>
            <h3>Preciso de um profissional</h3>
          </div>

          <div className="form">
            <input placeholder="Ex: Encanador" />
            <div>
              <img src="/assets/search.png" />
            </div>
          </div>
          <h4>Digite a área do profissional que você procura</h4>
          <div className="info">
            <h2>Crie uma anúncio e receba diversos orçamentos</h2>
          </div>
          <div className="bt">
            <Button color={"#0095ff"}>
              Anunciar <span>Gratis</span>
            </Button>
          </div>
        </Fade>
      </C.Banner>

      <C.Banner color={"#ffc800"}>
        <Fade bottom cascade>
          <div className="title">
            <h1>Quero mais clientes</h1>
            <h3>Vizualize as vagas na sua área</h3>
          </div>

          <div className="form">
            <input placeholder="Ex: Encanador" />
            <div>
              <img src="/assets/search.png" />
            </div>
          </div>
          <h4>Digite a sua área de trabalho</h4>
          <div className="info">
            <h2>Crie uma anúncio e receba solicitações de orçamentos</h2>
          </div>
          <div className="bt">
            <Button color={"#ffc800"}>
              Anunciar <span>Gratis</span>
            </Button>
          </div>
        </Fade>
      </C.Banner>
    </C.Container>
  );
};
