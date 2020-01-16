import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    background-color: lightgray;
  }
/*
  div { outline: 1px dotted pink }
  p   { outline: 1px solid green }
  a   { outline: 2px solid yellow }
  li  { outline: 1px dashed cyan }
  img { outline: 1px solid purple} */
`;

export { GlobalStyle };
