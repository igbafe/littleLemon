import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Menu from './components/Menu';
import Nav from './components/Nav'
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Main />
        <Menu />
        <Footer />
      </Router>
    </>
  );
}

export default App;
