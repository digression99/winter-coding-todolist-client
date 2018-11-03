import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family : Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell;
    padding : 0;
    margin : 0;
  }
  
  html, body, #root {
    background-color : #fff5f5;
    width : 100%;
    min-height : 100vh;
  }
`;

export default GlobalStyle;