import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --color-primary: #128dcf;
  --color-primary-dark: ##1a86e3;
  --color-text: #f2f2f2;
  --color-text-dark: #333;
  --color-background-light: #f2f2f2;
  --color-background-100: #e0e0e0;
  --color-background-700: #1e1e1e;
  --color-background-dark: #111111;
  --shadow: 0px 0.6rem 2.4rem rgba(0,0,0, 0.06)
  --border-radius: 0.5rem;
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Open Sans', sans-serif;
  color: var(--color-text-dark);
  background-color: var(--color-background-light);
}

.nav-bar {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 4.2rem;
  padding: 0 2rem;
  background-color: var(--color-background-light);
  border-bottom: 2px solid var(--color-background-dark);
}


.main {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}`;

export default GlobalStyles;
