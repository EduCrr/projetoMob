import * as C from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
export const About = () => {
  const [list, setList] = useState([
    {
      icone: "/assets/computer.png",
      title: "Publique",
      description: "Descreva seu problema em poucas palavras. É gratis.",
    },
    {
      icone: "/assets/phone.png",
      title: "Profissionais",
      description:
        "Receba ligações ou mensagens de profissionais e selecione o melhor para você.",
    },
    {
      icone: "/assets/dollar.png",
      title: "Orçamentos",
      description: "Encontre o orçamento que cabe no seu bolso.",
    },
    {
      icone: "/assets/phone.png",
      title: "Profissionais",
      description:
        "Receba ligações ou mensagens de profissionais e selecione o melhor para você.",
    },
  ]);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <C.Container>
      <h1 style={{ color: "#860689" }}>Como funciona</h1>
      <div className="target">
        <h2 className="active">Mural</h2>
        <h2 style={{ color: "#bbb" }}>Prestador de serviço</h2>
      </div>
      <div className="items">
        <Slider {...settings}>
          {list.map((item, k) => (
            <div className="single-item" key={k}>
              <img src={item.icone} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className="mural">
        <h1 style={{ color: "#860689" }}>Veja nosso</h1>
        <button>mural de serviços</button>
      </div>
    </C.Container>
  );
};
