import { Animate } from "react-simple-animate";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./theme/GlobalStyles";
import { theme } from "./theme/mainTheme";
import { Navbar } from "./components/Navbar/Navbar";
import styled from "styled-components";
import wallpaperDesc from "./assets/Photos/surveyorWorksDesc.jpg";
import secondWallpapper from "./assets/Photos/valeria-fursa-zSrksQgp4W0-unsplash.jpg";
import wallpaperMobile from "./assets/Photos/surveyorWorksMobile.jpg";
import TextTransition, { presets } from "react-text-transition";
import { useState, useEffect } from "react";

const StyledPage = styled.main`
  background-image: ${({ wallpaper }) => `url(${wallpaper})`};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: violet;
  font-size: 20px;
  @media screen and (max-width: 960px) {
    background-image: url(${wallpaperMobile});
    background-size: cover;
  }
`;

export const App = () => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);
  const [wallpaper, setWallpaper] = useState(wallpaperDesc);

  useEffect(() => {
    setTimeout(() => {
      setNumber(setText("NewSurveyor"));
    }, 1000);
  }, [setWallpaper]);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Navbar />
        <StyledPage wallpaper={wallpaper}></StyledPage>
      </ThemeProvider>
    </>
  );
};
