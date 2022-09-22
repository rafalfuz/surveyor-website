import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./theme/GlobalStyles";
import { theme } from "./theme/mainTheme";
import { Navbar } from "./components/Navbar/Navbar";
import { WelcomeSection } from "./views/welcomeSection/welcomeSection";


export const App = () => {

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Navbar />
        <WelcomeSection />

      </ThemeProvider>
    </>
  );
};
