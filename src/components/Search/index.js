import * as C from "./styles";
import { Button } from "../../appStyles";
export const Search = () => {
  return (
    <C.Container>
      <C.Banner color={"#0095ff"} style={{ backgroundColor: "#860689 " }}>
        <div className="title">
          <h1>Tenho um problema</h1>
          <h3>Preciso de um profissional</h3>
        </div>

        <div className="form">
          <input placeholder="Ex: Encanador" />
          <p>Icone</p>
        </div>
        <h4>Digite a área do profissional que você procura</h4>
        <div className="info">
          <h2>Crie uma anúncio e receba diversos orçamentos</h2>
        </div>
        <div>
          <Button color={"#0095ff"}>Anunciar</Button>
        </div>
      </C.Banner>
      <C.Banner color={"#fe9402"}>
        <div className="title">
          <h1>Quero mais clientes</h1>
          <h3>Vizualize as vagas na sua área</h3>
        </div>

        <div className="form">
          <input placeholder="Ex: Encanador" />
          <p>Icone</p>
        </div>
        <h4>Digite a sua área de trabalho</h4>
        <div className="info">
          <h2>Crie uma anúncio e receba solicitações de orçamentos</h2>
        </div>
        <div>
          <Button color={"#fe9402"}>Anunciar</Button>
        </div>
      </C.Banner>
    </C.Container>
  );
};
