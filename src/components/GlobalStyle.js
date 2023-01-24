import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    color: white;
  }
  body {
    background-color: #212529;
    margin: 0 auto;
  }
`;
export default GlobalStyle;
