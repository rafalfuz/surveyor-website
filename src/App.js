import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./theme/GlobalStyles";
import { theme } from "./theme/mainTheme";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./views/Home/Home";
import { About } from "./views/About/About";
import { Offer } from "./views/Offer/Offer";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Home />
        <About />
        <Offer />
      </ThemeProvider>
    </>
  );
};
