import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family : Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell;
    padding : 0;
    margin : 0;
  }
  
  html {
    background-color : #fff5f5;
    width : 100%;
    height : 100%;
  }
`;

export default GlobalStyle;