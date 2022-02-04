import * as C from "./styles";
import * as S from "../../appStyles";
export const Header = () => {
  return (
    <C.Container>
      <div className="logo">
        <img className="logo" src="/assets/logo.png" />
      </div>
      <div className="btns">
        <p style={{ cursor: "pointer" }}>Como Funciona?</p>
        <S.Button color={"#5e04b3"}>Anunciar</S.Button>
      </div>
    </C.Container>
  );
};
