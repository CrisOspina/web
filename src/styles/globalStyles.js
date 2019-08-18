import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
      
  *, *::before, *::after {
    box-sizing: inherit;
  }
      
  ul, li, h1, h2, h3, p, button {
    margin: 0;
  }

  ul {
    list-style: none;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {  
    height: 100vh;
    /* max-width: 500px; */
    margin: 0 auto;
    /* max-width: 500px; */
    overscroll-behavior: none;
    width: 100%;
  }

  header {
    padding: 1px;
    text-align: center;
    font-family: 'Megrim', cursive;
    text-transform: uppercase;
    margin-top: 0;
  }

  #root {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
    background-image: url("https://image.freepik.com/vector-gratis/resumen-fondo-hexagonal_88211-257.jpg");
  }

  a {
    text-decoration: none !important;
  }

  .container-main {
    padding-top: 3em;
    margin-top: 6em;
    box-shadow: -2px 88px 40px -19px rgba(0,0,0,0.56);
  }
`
