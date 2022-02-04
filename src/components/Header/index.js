import * as C from "./styles";
import * as S from "../../appStyles";
export const Header = () => {
  return (
    <C.Container>
      <div className="logo">LOGO</div>
      <div className="btns">
        <p>Como Funciona?</p>
        <S.Button color={"#860689"}>Anunciar</S.Button>
      </div>
    </C.Container>
  );
};
