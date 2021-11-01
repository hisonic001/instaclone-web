import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  lightBlue: "rgba(0, 149, 246, 0.3)",
  borderColor: "rgb(219,219,219)",
};
export const darkTheme = {
  fontColor: "white",
  bgColor: "#2c2c2c",
};

export const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
     box-sizing:border-box;
  }
  body{
      background-color:#FAFAFA;
      font-size:14px;
      font-family:'Open Sans', sans-serif;
      color:(36,36,36)
  }
  a{
    text-decoration:none;
  }
  `;
