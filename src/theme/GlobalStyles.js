import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    font-size: 1.6rem;
    font-family: 'Fraunces', serif;
    font-family: 'Montserrat', sans-serif;
    
    
  }
`;
