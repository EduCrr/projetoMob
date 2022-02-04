import styled from "styled-components";

export const Container = styled.div`
  max-width: 840px;
  margin: auto;
  margin-top: -4.5rem;
  display: flex;
  justify-content: space-around;
  @media (max-width: 810px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Banner = styled.div`
  width: 350px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background: antiquewhite;
  text-align: center;
  padding: 50px 20px;
  border-radius: 5px;
  h1,
  h2 {
    color: ${(props) => props.color};
  }
  .title {
    margin-bottom: 40px;
  }
  h3 {
    color: white;
  }
  .form {
    background: white;
    border-radius: 30px;
    display: flex;
    outline: 0;
    justify-content: space-between;
    align-items: center;
    input {
      border: 0;
      flex: 1;
      margin-left: 20px;
      border-radius: 30px;
      height: 40px;
    }
    img {
      display: flex;
      height: 20px;
      margin-right: 20px;
      cursor: pointer;
    }
    input:focus {
      outline: none;
    }
  }
  &:nth-child(2) {
    background: #ff008d;
    background: -webkit-repeating-linear-gradient(
      to top right,
      #ff008d 0%,
      #fa008a 21%
    );
    background: -moz-repeating-linear-gradient(
      to top right,
      #ff008d 0%,
      #fa008a 21%
    );
    background: repeating-linear-gradient(
      to top right,
      #ff008d 0%,
      #fa008a 21%
    );
  }
  h4 {
    margin-bottom: 40px !important;
    margin-top: 5px !important;
    color: white;
    font-size: 15px;
  }
  .info {
    margin-bottom: 30px;
  }
  .bt span {
    position: absolute;
    left: 60%;
    top: 0%;
    z-index: 99;
    width: 30px;
    display: flex;
    justify-content: center;
    margin-top: -10px;
    background: white;
    color: #860689;
    border-radius: 30px;
    padding: 5px 20px;
  }
  @media (max-width: 810px) {
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: auto;
  }
  @media (max-width: 375px) {
    h1,
    h2 {
      font-size: 20px !important;
    }
    h3 {
      font-size: 17px !important;
    }
  }
`;
