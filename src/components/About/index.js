import * as C from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useRef } from "react";
import Fade from "react-reveal/Fade";
export const About = () => {
  const sliderRef = useRef();

  const goNext = () => {
    sliderRef.current.slickNext();
  };
  const goPrev = () => {
    sliderRef.current.slickPrev();
  };

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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
        <Fade bottom>
          <Slider {...settings} ref={sliderRef}>
            {list.map((item, k) => (
              <div className="single-item" key={k}>
                <img src={item.icone} alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </Slider>
        </Fade>
        <div className="arrows">
          <div onClick={goPrev}>
            <img src="/assets/left.png" />
          </div>
          <div onClick={goNext}>
            <img src="/assets/right.png" />
          </div>
        </div>
      </div>
      <div className="mural">
        <h1 style={{ color: "#860689" }}>Veja nosso</h1>
        <Fade top cascade>
          <button>mural de serviços</button>
        </Fade>
      </div>
    </C.Container>
  );
};
