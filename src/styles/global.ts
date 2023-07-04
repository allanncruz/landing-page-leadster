import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle<{}>`

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  h1, h2{
    margin-bottom: 20px;
  }

  a{
    text-decoration: none;
  }

  body {
    font-size: 16px;
  }
`;

export default GlobalStyle;
