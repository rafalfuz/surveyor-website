import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./theme/GlobalStyles";
import { theme } from "./theme/mainTheme";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./views/Home/Home";
import { About } from "./views/About/About";
import { Offer } from "./views/Offer/Offer";
import { Realizations } from "./views/Realizations/Realizations";
import { ProjectView } from "./views/Realizations/ProjectView";
import { realizationsDatas } from "./views/Realizations/realizationsDatas";
import { References } from "./views/Referents/References";

const DefaultView = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Offer />
      <Realizations />

      <References />
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
          {realizationsDatas.map((item) => (
            <Route
              key={item.id}
              exact
              path={item.path}
              element={
                <ProjectView
                  title={item.title}
                  description={item.description}
                  client={item.client}
                  localization={item.localization}
                  projectViewBackgroundPhoto={item.projectViewBackgroundPhoto}
                  imagesArray={item.imagesArray}
                />
              }
            />
          ))}
        </Routes>
      </ThemeProvider>
    </>
  );
};
