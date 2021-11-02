import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 10px;
  background-color: #fafafa;
  border: 0.5px solid ${(props) => props.theme.borderColor};
  border-radius: 3px;
  margin-top: 5px;
  &::placeholder {
    font-size: 12px;
  }
`;

export default Input;
