
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { default_theme, normal_bar } from './theme';
import { Burger, Menu, Background, Sidebar } from './components';


function App() {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={normal_bar}>
    <>
    <GlobalStyles />
      <div id="App">
            <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"}  />
            <div id="page-wrap">
              <Background />
            </div>
      </div>
    </>
    </ThemeProvider>
  );
}

export default App;
