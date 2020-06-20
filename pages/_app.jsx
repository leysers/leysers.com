import App from 'next/app';
import { ThemeProvider } from 'styled-components';

import 'normalize.css';
import { GlobalStyle, theme } from '../theme';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
