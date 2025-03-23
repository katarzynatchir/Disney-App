import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --color-primary: #128dcf;
  --color-primary-dark: #1c76bf;
  --border-radius: 0.5rem;
  --shadow: 0px 0.6rem 2.4rem rgba(0,0,0, 0.26);
  --backdrop-color: rgba(255,255,255,0.1);

  &, &.light-mode {
  --color-text: #333;
  --color-background: #f8f8f8;
  --color-grey: #1e1e1e;
  }

  &.dark-mode {
  --color-text: #f8f8f8;
  --color-background: #1e1e1e;
  --color-grey: #b2b2b2;
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
