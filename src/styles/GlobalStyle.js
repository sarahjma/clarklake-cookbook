import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Oswald', sans-serif;
    background-color: #f4f4f5;
  }
  img {
    max-width: 100%;
  }
`;

export default GlobalStyle;
