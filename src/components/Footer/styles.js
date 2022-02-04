import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #5e04b3;
  background: -webkit-repeating-linear-gradient(
    to right,
    #5e04b3 16%,
    #4a04b2 51%
  );
  background: -moz-repeating-linear-gradient(
    to right,
    #5e04b3 16%,
    #4a04b2 51%
  );
  background: repeating-linear-gradient(to right, #5e04b3 16%, #4a04b2 51%);
  color: white;
  height: auto;
  overflow: hidden;
  margin-top: 3rem;
  padding: 20px 0px;
  .content {
    padding: 30px 0px;
    display: flex;
    justify-content: space-between;
    align-items: top;
    max-width: 1200px;
    margin: auto;
    .left-side {
      width: 400px;
      .logo {
        margin-bottom: 10px;
        img.logo {
          height: 40px;
        }
      }
    }
    .right-side {
      width: 400px;
      nav,
      ul {
        display: flex;
        justify-content: space-between;
        width: 400px;
        li {
          list-style-type: none;
          margin: 10px 0px;
        }
        a {
          color: white;
          text-decoration: none;
        }
      }
      .icons {
        margin-top: 30px;
        a {
          img {
            height: 35px;
            margin-right: 10px;
          }
        }
      }
    }
  }
  .final {
    max-width: 1200px;
    margin: auto;
  }
  @media (max-width: 1024px) {
    .content,
    .final {
      padding: 0px 20px;
    }
  }
  @media (max-width: 810px) {
    .content {
      flex-direction: column;
    }
    .left-side,
    .right-side,
    .final {
      width: 100% !important;
    }

    .left {
    }
    nav {
      width: 100% !important;

      ul {
        justify-content: center;
        padding: 0;
        width: 100% !important;
      }
    }
  }
  @media (max-width: 475px) {
    background: #510889 !important;
  }
`;
