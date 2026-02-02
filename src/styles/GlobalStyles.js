// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #000000;
    --secondary-color: #ffffff;
    --accent-color: #a3a3a3;
    --background-color: #f5f5f5;
    --font-main: 'Space Grotesk', sans-serif;
    --font-secondary: 'Inter', sans-serif;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* Removed the custom cursor temporarily */
    /* cursor: none; */
  }
  
  html, body {
    background-color: var(--background-color);
    color: var(--primary-color);
    font-family: var(--font-main);
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export default GlobalStyles;
