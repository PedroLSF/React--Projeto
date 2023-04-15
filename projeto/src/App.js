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
import ProtectedRoute from './routes/ProtectedRoute';
import Register from './pages/Register';
import Admin from './pages/Admin';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import Cart from './pages/Cart';


function App() {
  return (
    <>
      <AuthProvider>
        <Navbar/>
        <Routes>
          <Route path = '/' element = {
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          } />
          <Route path = '/menu' element = {<Menu/>} />
          <Route path = '/contato' element = {<Contato/>} />
          <Route path = '/chef' element = {<Chefs/>} />
          <Route path = '/escolhida/:id' element = {<Escolhida/>} />
          <Route path = '/*' element = {<NotFound/>} />
          <Route path = '/login' element = {<Login/>} />
          <Route path = '/register' element = {<Register/>} />
          <Route path = '/admin' element = {
            <ProtectedRoute>
              <Admin/>
            </ProtectedRoute>
          } />
          <Route path = '/admin/add-product' element = {
            <ProtectedRoute>
              <AddProduct/>
            </ProtectedRoute>
          } />
          <Route path = '/admin/edit-product/:id' element = {
            <ProtectedRoute>
              <EditProduct/>
            </ProtectedRoute>
          } />
          <Route path = '/cart' element = {
            <ProtectedRoute>
              <Cart/>
            </ProtectedRoute>
          } />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
