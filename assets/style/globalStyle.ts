import { createGlobalStyle } from './themed-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    box-sizing: border-box;
    font-family: -apple-system, Poppins, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1em;
    
    #__next {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  }
  
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }
  
  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
    padding: 0;
  }
  
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
`;
