import styled from "styled-components";

export const Container = styled.div`
  margin: 1.5rem auto;
  max-width: 900px;
  h1 {
    text-align: center;
  }
  .target {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    h2 {
      margin: 0px 25px;
    }
  }
  .items {
    margin: 2rem auto;
    width: 100%;
    text-align: center;
    overflow: hidden;
    .single-item {
      max-width: 220px;
    }
    h2 {
      margin-top: 10px;
    }
    img {
      margin: auto;
    }
  }
  .mural {
    display: flex;
    justify-content: center;
    h1,
    button {
      margin: 0px 20px;
    }
    button {
      background-color: #fe9402;
      color: white;
      border-radius: 30px;
      padding: 8px 50px;
      border: 0;
      outline: 0;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
    }
  }
  .active {
    color: #0095ff;
    border-bottom: 2px solid #0095ff;
  }
`;
