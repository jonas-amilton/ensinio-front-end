import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body,
  input,
  button {
    font: 14px Inter, sans-serif;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  @media(max-width: 700px) {
    :root {
      font-size: 80%;
    }
  }

  @media(max-width: 500px) {
    :root {
      font-size: 70%;
    }
  }
`;

export default GlobalStyle;
