import React, { useState } from "react";
import { GlobalStyle } from "./Utils/GlobalStyle";
// @ts-ignore
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Utils/theme";
import { Home } from "./Pages/Home";
import { Header } from "./Components/Header/Header";
function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <>
          <Header changeTheme={changeTheme} />
          <Home />
        </>
      </ThemeProvider>
    </>
  );
}

export default App;
