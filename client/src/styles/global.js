import { createGlobalStyle } from "styled-components";


//configurações de estilo que valem para toda a aplicação
const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #fff;
  }
`;

export default GlobalStyle;