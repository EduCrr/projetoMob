import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  align-items: center;
  margin: 1.5rem auto;
  img.logo {
    height: 45px;
  }
  .btns {
    display: flex;
    p {
      margin-right: 40px;
    }
  }
  @media (max-width: 1024px) {
    padding: 0px 10px;
  }

  @media (max-width: 475px) {
    flex-direction: column;
    .btns {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        margin-right: 0px;
      }
    }
  }
`;
