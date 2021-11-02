/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import Button from "../components/auth/Button";
import Separator from "../components/auth/Separator";
import Input from "../components/auth/Input";
import { BottomBox, TopBox } from "../components/auth/FormBox";
// Styled Component 적용

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
    <AuthLayout>
      <TopBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="4x" color="orange" />
        </div>
        <form>
          <Input type="text" placeholder="User name" />
          <Input type="password" placeholder="Password" />
          <Button type="submit" value="Log in" />
        </form>
        <Separator />
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Log in with Facebook</span>
        </FacebookLogin>
        <span>Forgot password?</span>
      </TopBox>
      <BottomBox>
        <span>Don't have an account?</span>
        <Link to="/sign-up">Sign up</Link>
      </BottomBox>
    </AuthLayout>
  );
};
export default Login;
