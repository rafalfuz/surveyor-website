import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./theme/GlobalStyles";
import { theme } from "./theme/mainTheme";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./views/Home/Home";
import { About } from "./views/About/About";
import { Offer } from "./views/Offer/Offer";
import { Realizations } from "./views/Realizations/Realizations";
import { StadiumView } from "./views/Realizations/StadiumView";

const DefaultView = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Offer />
      <Realizations name="realizationSection" />
    </>
  );
};

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route exact path="/" element={<DefaultView />} />
          <Route exact path="/stadium" element={<StadiumView />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};
