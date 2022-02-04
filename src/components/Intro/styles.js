import styled from "styled-components";

export const Container = styled.div`
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  background-position: center !important;
  background-size: cover !important;
  color: white;
  object-fit: cover;
  width: 100%;
  background: linear-gradient(rgb(134 6 137 /80%), rgb(134 6 137 / 80%)),
    url("https://images.unsplash.com/photo-1496404690491-28c5b1ecde19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=777&q=80");
  .text {
    height: inherit;
    max-width: 1200px;
    display: flex;
    margin: auto;
    align-items: center;
    font-weight: 700;
    justify-content: center;
    font-size: 30px;
    span {
      color: white;
    }
    p {
      animation: moveInRight 1s ease-out;
      color: #ffc800 !important;
    }
    @keyframes moveInRight {
      0% {
        opacity: 0;
        transform: translateX(10rem);
      }
      80% {
        transform: translateX(-1rem);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
  @media (max-width: 660px) {
    .text {
      font-size: 25px !important;
      text-align: center;
      p {
        line-height: 33px !important;
      }
    }
  }
`;
