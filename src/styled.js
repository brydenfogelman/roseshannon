import BentonLight from "./assets/fonts/benton/BentonSans-Light.otf";
import BentonMedium from "./assets/fonts/benton/BentonSans-Medium.otf";
import GilroyMedium from "./assets/fonts/gilroy/Gilroy-Medium.otf";
import { createGlobalStyle, css } from "styled-components";

export const theme = {
  primary: "#000000",
  text: "#7F7F7F",
  light: "#D8D8D8",
  title: "#4A4A4A",
  spacer: "1rem",
  subheader: "#BFBFBF",
  background: "#FFFFFF",
};

export const textMedium = css`
  font-family: BentonSans, sans-serif;
  font-weight: 500;
`;

export const textLight = css`
  font-family: BentonSans, sans-serif;
  font-weight: 300;
`;

export const headerMedium = css`
  font-family: Gilroy, sans-serif;
  font-weight: 500;
`;

export const GlobalStyle = createGlobalStyle`  
  @font-face {
    font-family: "BentonSans";
    src: local("BentonSans"), url(${BentonLight}) format("opentype");
    font-weight: 300;
    font-style: normal;
  }
  
  @font-face {
    font-family: "BentonSans";
    src: local("BentonSans"), url(${BentonMedium}) format("opentype");
    font-weight: 500;
    font-style: normal;
  }
  
  @font-face {
    font-family: "Gilroy";
    src: local("Gilroy"), url(${GilroyMedium}) format("opentype");
    font-weight: 500;
    font-style: normal;
  }

    
  body {
    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.background};
    font-size: 1rem;
    font-family: BentonSans, sans-serif;
    font-weight: 300;
  }
  
  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.primary};
    font-family: Gilroy, sans-serif;
  }
  
  h2 {
    font-size: 1.25rem;
    color: ${(props) => props.theme.primary};
    font-family: Gilroy, sans-serif;
  }
  
  .text-light {
    ${textLight}
  }
  
  .text-medium {
    ${textMedium}
  }
  
  .header-medium {
    ${headerMedium}
  }
`;
