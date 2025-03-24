import Logo from './components/Logo';
import Main from './components/Main';
import NavBar from './components/Navbar';
import Switcher from './components/Switcher';
import GlobalStyles from './styles/GlobalStyles';
import DisneyCharacters from './components/DisneyCharacters';
// import Pagination from './components/Pagination';
import { DarkModeProvider } from './context/DarkModeContext';

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
          {/* <Pagination /> */}
        </Main>
      </DarkModeProvider>
    </>
  );
}

export default App;
