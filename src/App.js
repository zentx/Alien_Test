
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles  />
      <div>
        
      </div>
      </>
    </ThemeProvider>
  )
}

export default App;
