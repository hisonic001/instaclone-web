import styled from "styled-components";
import AuthLayout from "../components/auth/AuthLayout";
import { TopBox } from "../components/auth/FormBox";
import { BottomBox } from "../components/auth/FormBox";
import { Link } from "react-router-dom";
import routes from "./routes";
import Input from "../components/auth/Input";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../components/auth/Button";
import Separator from "../components/auth/Separator";
import PageTitle from "../components/common/PageTitle";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Greeting = styled.h3`
  color: #8e8e8e;
  margin-top: 20px;
  font-weight: 600;
  font-size: 15px;
  text-align: center;
`;
const FBButton = styled(Button)`
  margin-top: 20px;
  background-color: rgb(0, 149, 246);
  color: white;
`;

const SignUp = () => {
  return (
    // 전체적 레이아웃
    <AuthLayout>
      {/* helmet 씌워주기 */}
      <PageTitle title="Sign up" />
      <TopBox>
        <HeaderContainer>
          {/* fontawesome에서 icon 가져오기 */}
          <FontAwesomeIcon icon={faInstagram} size="4x" color="orange" />
          <Greeting>친구들의 사진과 동영상을 보려면 가입하세요.</Greeting>
          <FBButton type="submit" value="Login with Facebook" />
        </HeaderContainer>
        <Separator />
        <Input type="text" placeholder="Mobile Number or Email Address" />
        <Input type="text" placeholder="Full Name" />
        <Input type="text" placeholder="User Name" />
        <Input type="password" placeholder="Password" />
        <Button type="submit" value="Sign in" />
      </TopBox>

      <BottomBox>
        <span>"Have an account?"</span>
        {/* link로 routing 해주기 */}
        <Link to={routes.login}>Log in</Link>
      </BottomBox>
    </AuthLayout>
  );
};

export default SignUp;
