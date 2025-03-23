import Main from './components/Main';
import NavBar from './components/Navbar';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar>
        <div className="switcher">Switcher</div>
      </NavBar>

      <Main>
        <div>CharakterList</div>
        <div>Pagination</div>
      </Main>
    </>
  );
}

export default App;
