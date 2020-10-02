import React, { useState } from "react";
import { GlobalStyle } from "./Utils/GlobalStyle";
// @ts-ignore
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Utils/theme";
import { Home } from "./Pages/Home";
import { Header } from "./Components/Header/Header";
import { Provider } from "react-redux";
import { store } from "./store/store";
function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <>
          <Header changeTheme={changeTheme} />
          <Home />
        </>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
