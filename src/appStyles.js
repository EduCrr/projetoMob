import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.color};
  border-radius: 30px;
  border: 0;
  outline: 0;
  padding: 18px 50px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;
