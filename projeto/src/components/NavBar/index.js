import React, { useContext } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const {userLogged} = useContext(AuthContext);
  return (
    <header className='bg-zinc-900 z-50 w-full sm:w-full'>
        <nav className='flex items-center max-w-screen-xl mx-auto px-6 py-3 h-24'>
            <div className='flex flex-grow items-center'>
            <Link to = '/'><img src = {logo} alt = "Logo" className = 'cursor-pointer h-24 w-24'/></Link>
                <h1 className='text-center text-3xl font-semibold text-white'>Leckere Pizzaria</h1>
            </div>

            <div className='flex items-center justify-end space-x-6'>
                <Link to = '/'><button className='px-6 text-white hover:text-amber-100 hover:scale-105 transition duration-300'>Home</button></Link>
                <Link to = '/menu'><button className='text-amber-100 px-6 hover:text-amber-100 hover:scale-105 transition duration-300'>Menu</button></Link>
                <Link to = '/chef'><button className='px-6 text-white hover:text-amber-100 hover:scale-105 transition duration-300'>Chefs</button></Link>
                <Link to = '/contato'><button className='px-6 text-white hover:text-amber-100 hover:scale-105 transition duration-300'>Contact</button></Link>
                <Link to = '/login'><button className='px-6 text-white hover:text-amber-100 hover:scale-105 transition duration-300'>Login</button></Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar