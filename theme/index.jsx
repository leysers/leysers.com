import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    font-family: 'Inter', sans-serif;
  }
`;

const theme = {
  darkblue: '#21346A',
  lightgray: '#F1F1F6',
  darkgray: '#C9C9C9'
};

export { GlobalStyle, theme };
