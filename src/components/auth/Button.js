import styled from "styled-components";

const Button = styled.input`
  border: none;
  width: 100%;
  margin-top: 12px;
  background-color: ${(props) => props.theme.lightBlue};
  color: white;
  padding: 8px 0px;
  text-align: center;
  font-weight: 550;
  border-radius: 4px;
`;

export default Button;
