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

const DefaultView = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Offer />
      <Realizations />
    </>
  );
};

export const App = () => {

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route exact path="/" element={<DefaultView />} />
          <Route exact path="/stadium" element={<ProjectView title='Siedziba główna ROXY' imagesArray={images}/>} />
        </Routes>
      </ThemeProvider>
    </>
  );
};
