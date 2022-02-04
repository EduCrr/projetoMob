import { Intro } from "../../components/Intro";
import * as C from "./styles";
import { Search } from "../../components/Search";
import { About } from "../../components/About";
export const Home = () => {
  return (
    <C.Container>
      <Intro />
      <Search />
      <About />
    </C.Container>
  );
};
