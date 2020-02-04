import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    background-color: lightgray;

    font-family: 'Roboto', sans-serif;
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Open Sans', sans-serif;
    }
  }
/*
  div { outline: 1px dotted pink }
  p   { outline: 1px solid green }
  a   { outline: 2px solid yellow }
  li  { outline: 1px dashed cyan }
  img { outline: 1px solid purple} */
`;

export { GlobalStyle };
