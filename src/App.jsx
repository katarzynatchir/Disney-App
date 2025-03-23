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
        </Main>
      </DarkModeProvider>
    </>
  );
}

export default App;
