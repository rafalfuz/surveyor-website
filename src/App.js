import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./theme/GlobalStyles";
import { theme } from "./theme/mainTheme";
import {Navbar} from "./components/Navbar/Navbar"
import styled from "styled-components";
import pct from "./assets/Photos/surveying1.jpg"


const StyledPage = styled.main`
background-image: url(${pct});
height: 100vh;
`

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Navbar/>
        <StyledPage />
        <StyledPage />
      </ThemeProvider>
    </>
  );
};
