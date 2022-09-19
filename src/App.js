import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./theme/GlobalStyles";
import { theme } from "./theme/mainTheme";
import { Navbar } from "./components/Navbar/Navbar";
import styled from "styled-components";
import wallpaperDesc from "./assets/Photos/surveyorWorksDesc.jpg";
import wallpaperMobile from "./assets/Photos/surveyorWorksMobile.jpg";

const StyledPage = styled.main`
  background-image: url(${wallpaperDesc});
  height: 100vh;
  @media screen and (max-width: 960px) {
    background-image: url(${wallpaperMobile});
    background-size: cover;
  }
`;

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Navbar />
        <StyledPage />
        <StyledPage />
      </ThemeProvider>
    </>
  );
};
