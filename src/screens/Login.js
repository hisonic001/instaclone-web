import { isLoggedInVar } from "../apollo";
import styled, { css } from "styled-components";
import { colorModeVar } from "../apollo";
// Styled Component 적용

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const LogInBtn = styled.button`
  color: #2c2c2c;
  background-color: black;
`;

const Login = () => {
  return (
    <div>
      <Title>Login</Title>
      <button onClick={() => colorModeVar("dark")}>To Dark</button>
      <button onClick={() => colorModeVar("light")}>To Light</button>
      <LogInBtn onClick={() => isLoggedInVar(true)}>Log in Now!</LogInBtn>
    </div>
  );
};
export default Login;
