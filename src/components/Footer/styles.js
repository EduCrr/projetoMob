import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #860689;
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
        margin-bottom: 20px;
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
`;
