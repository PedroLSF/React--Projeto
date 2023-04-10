import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/NavBar';
import Menu from './pages/Menu';
import Contato from './pages/Contato';
import Chefs from './pages/Chefs';
import NotFound from './pages/NotFound';
import Escolhida from './pages/Escolhida';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';


function App() {
  return (
    <>
      <AuthProvider>
        <Navbar/>
        <Routes>
          <Route path = '/' element = {<Home/>} />
          <Route path = '/menu' element = {<Menu/>} />
          <Route path = '/contato' element = {<Contato/>} />
          <Route path = '/chef' element = {<Chefs/>} />
          <Route path = '/escolhida/:id' element = {<Escolhida/>} />
          <Route path = '/*' element = {<NotFound/>} />
          <Route path = '/login' element = {<Login/>} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
