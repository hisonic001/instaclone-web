import styled from "styled-components";
import { BasicBox } from "../common/shared";

const STopBox = styled(BasicBox)`
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

const SBottomBox = styled(BasicBox)`
  padding: 20px 0px;
  text-align: center;
  a {
    margin-left: 5px;
    font-weight: 600;
    color: #0095f6;
  }
`;

export const TopBox = ({ children }) => <STopBox>{children}</STopBox>;
export const BottomBox = ({ children }) => <SBottomBox>{children}</SBottomBox>;
