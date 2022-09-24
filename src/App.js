import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./theme/GlobalStyles";
import { theme } from "./theme/mainTheme";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./views/Home/Home";
import { About } from "./views/About/About";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Home />
        <About />
      </ThemeProvider>
    </>
  );
};
