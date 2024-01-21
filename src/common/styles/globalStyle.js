import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'DM Sans', sans-serif;
    background: ${({ theme: { colors } }) => colors.white100}
  }
  
  p,
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
  }

  button {
    padding: 0;
  }

  a {
    text-decoration: none;
    color:${({ theme: { colors } }) => colors.black}
  }

  ul,
  ol {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;
