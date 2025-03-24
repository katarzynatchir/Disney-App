import GlobalStyles from './styles/GlobalStyles';
import Header from './components/header/Header';
import Logo from './components/header/Logo';
import Switcher from './components/header/Switcher';
import Main from './components/Main';
import DisneyCharacters from './components/characters/DisneyCharacters';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  return (
    <>
      <DarkModeProvider>
        <GlobalStyles />
        <Header>
          <Logo />
          <Switcher />
        </Header>
        <Main>
          <DisneyCharacters />
        </Main>
      </DarkModeProvider>
    </>
  );
}

export default App;
