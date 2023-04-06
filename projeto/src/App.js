import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/NavBar';
import Menu from './pages/Menu';
import Contato from './pages/Contato';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/menu' element = {<Menu/>} />
        <Route path = '/contato' element = {<Contato/>} />
      </Routes>
    </>
  );
}

export default App;
