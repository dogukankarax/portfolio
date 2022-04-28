import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-tap-highlight-color: transparent; 
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.15em;
    line-height: 1.5;
  }
  img{
    max-width: 100%;
  }
`;

export default GlobalStyle;
