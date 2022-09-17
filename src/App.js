import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./theme/GlobalStyles";
import { theme } from "./theme/mainTheme";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <h1>Lets get the money</h1>
      </ThemeProvider>
    </>
  );
};
