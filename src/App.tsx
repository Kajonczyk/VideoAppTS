import React from "react";
import { GlobalStyle } from "./Utils/GlobalStyle";
// @ts-ignore
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Utils/theme";
import { Home } from "./Pages/Home";
function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <>
          <Home />
        </>
      </ThemeProvider>
    </>
  );
}

export default App;
