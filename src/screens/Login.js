/* eslint-disable react/react-in-jsx-scope */
import { isLoggedInVar } from "../apollo";
import styled from "styled-components";
import { colorModeVar } from "../apollo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
// Styled Component 적용

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const WhiteBox = styled.div`
  background-color: white;
  border: 1px solid rgb(219, 219, 219);
  width: 100%;
`;

const TopBox = styled(WhiteBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 35px 40px 25px 40px;
  margin-bottom: 10px;
  form {
    margin-top: 35px;
    width: 100%;
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 7px;
  background-color: #fafafa;
  border: 0.5px solid rgb(219, 219, 219);
  border-radius: 3px;
  margin-top: 5px;
  &::placeholder {
    font-size: 12px;
  }
`;

const Button = styled.input`
  border: none;
  width: 100%;
  margin-top: 12px;
  background-color: ${(props) => props.theme.lightBlue};
  color: white;
  padding: 8px 0px;
  text-align: center;
  font-weight: 550;
`;

const BottomBox = styled(WhiteBox)`
  padding: 20px 0px;
  text-align: center;
  a {
    font-weight: 600;
    color: #0095f6;
  }
`;

const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;

const Separator = styled.div`
  margin: 20px 0px 30px 0px;
  display: flex;
  justify-items: center;
  align-items: center;
  width: 100%;
  div {
    width: 100%;
    height: 1px;
    background-color: rgb(219, 219, 219);
  }
  span {
    margin: 0px 10px;
    font-weight: 600px;
    color: #8e8e8e;
  }
`;

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 5px;
    font-weight: 600;
    font-size: 13px;
  }
  margin-bottom: 20px;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <TopBox>
          <div>
            <FontAwesomeIcon icon={faInstagram} size="4x" color="orange" />
          </div>
          <form>
            <Input type="text" placeholder="User name" />
            <Input type="password" placeholder="Password" />
            <Button type="submit" value="Log in" />
          </form>
          <Separator>
            <div></div>
            <span> OR </span>
            <div></div>
          </Separator>
          <FacebookLogin>
            <FontAwesomeIcon icon={faFacebookSquare} />
            <span>Log in with Facebook</span>
          </FacebookLogin>
          <span>Forgot password?</span>
        </TopBox>
        <BottomBox>
          <span>Don't have an account?</span> <a href="#">Sign up</a>
        </BottomBox>
      </Wrapper>
    </Container>
  );
};
export default Login;
