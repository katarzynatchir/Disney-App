// import Heading from './components/Heading';
import Logo from './components/Logo';
import Main from './components/Main';
import NavBar from './components/Navbar';
import Switcher from './components/Switcher';
import { DarkModeProvider } from './context/DarkModeContext';
import GlobalStyles from './styles/GlobalStyles';

import DisneyCharacters from './components/DisneyCharacters';

function App() {
  return (
    <>
      <DarkModeProvider>
        <GlobalStyles />
        <NavBar>
          <Logo />
          <Switcher />
        </NavBar>
        <Main>
          <DisneyCharacters />

          <div>Paginacja</div>
          {/* <Heading as="h1">Myszka Mickie</Heading>
        <Heading as="h2">Myszka Mickie</Heading> */}
        </Main>
      </DarkModeProvider>
    </>
  );
}

export default App;
