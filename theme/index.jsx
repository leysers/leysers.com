import { createGlobalStyle } from 'styled-components';

const theme = {
  colors: {
    primary: '#4F78E0',
    primary2: '#678BE4',
    background: '#F7F8FE',
    fontColor: '#3C424F'
  }
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: ${theme.colors.fontColor};
    height: 100vh;
    width: 100%;
    background-color: ${theme.colors.background};
  }
  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    :hover {
      color: ${theme.colors.primary2};
    }
  }
`;
export { GlobalStyle, theme };
