import React, { StrictMode } from 'react';

import { ThemeProvider } from 'styled-components';

import { TranslationProvider } from './context/TranslationContext';
import Routes from './routes';
import GlobalStyle from './styles/global';
import defaultTheme from './styles/themes';

const App: React.FC = () => (
  <StrictMode>
    <TranslationProvider>
      <ThemeProvider theme={defaultTheme}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </TranslationProvider>
  </StrictMode>
);

export default App;
