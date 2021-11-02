import styled from "styled-components";

const StyledSeparator = styled.div`
  margin: 20px 0px 15px 0px;
  display: flex;
  justify-items: center;
  align-items: center;
  width: 100%;
  div {
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.borderColor};
  }
  span {
    margin: 0px 10px;
    font-weight: 600px;
    color: #8e8e8e;
  }
`;

const Separator = () => (
  <StyledSeparator>
    <div></div>
    <span> OR </span>
    <div></div>
  </StyledSeparator>
);

export default Separator;
