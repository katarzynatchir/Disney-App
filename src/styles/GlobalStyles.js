import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --color-primary-light: #bbdefb;
  --color-primary: #42a5f5;
  --color-primary-dark:#039be5;
  --color-white-200: #f5f5f5;
  --color-grey-200: #eeeeee;
  --color-grey-800: #424242;
  --border-radius: 0.5rem;
  --shadow: 0px 0.6rem 2.4rem rgba(0,0,0, 0.26);


  &, &.light-mode {
  --color-text: #333;
  --color-background: #f8f8f8;
  --color-accent: #1e1e1e;
  }

  &.dark-mode {
  --color-text: #f8f8f8;
  --color-background: #1e1e1e;
  --color-accent: #b2b2b2;
  }
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: 0.2s; 
}
body {
  font-family: 'Open Sans', sans-serif;
  color: var(--color-text);
  background-color: var(--color-background);
}
`;

export default GlobalStyles;
