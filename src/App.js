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
import logoImg from "./assets/Photos/logoLevelPng.png";

const StyledPage = styled.main`
  background-image: ${({ wallpaper }) => `url(${wallpaper})`};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  @media screen and (max-width: 960px) {
    background-image: url(${wallpaperMobile});
    background-size: cover;
  }
`;
const OneHalf = styled.div`
  background-color: transparent;
  flex-basis: 50%;
  height: 100%;
`;
const SecondHalf = styled.div`
  background-color: rgba(190, 191, 159, 0.5);
  flex-basis: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
const ImgContainer = styled.div`
  width: 80%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  background-image: url(${logoImg});
  background-size: cover;
  background-repeat: no-repeat;
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
        <StyledPage wallpaper={wallpaper}>
          <OneHalf />
          <SecondHalf>
            <ImgContainer>
              <StyledImg></StyledImg>
            </ImgContainer>
          </SecondHalf>
        </StyledPage>
      </ThemeProvider>
    </>
  );
};
