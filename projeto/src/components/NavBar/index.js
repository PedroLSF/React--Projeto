import React from 'react'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <header className='bg-zinc-900 z-50 w-full sm:w-full'>
        <nav className='flex items-center max-w-screen-xl mx-auto px-6 py-3 h-24'>
            <div className='flex flex-grow items-center'>
                <img src = {logo} alt = "Logo" className = 'cursor-pointer h-24 w-24'/>
                <h1 className='text-center text-3xl font-semibold text-white'>Leckere Pizzaria</h1>
            </div>

            <div className='flex items-center justify-end space-x-6'>
                <button className='px-6 text-white hover:text-amber-100 hover:scale-105 transition duration-300'>Home</button>
                <button className='text-amber-100 px-6 hover:text-amber-100 hover:scale-105 transition duration-300'>Menu</button>
                <button className='px-6 text-white hover:text-amber-100 hover:scale-105 transition duration-300'>Login</button>
                <button className='px-6 text-white hover:text-amber-100 hover:scale-105 transition duration-300'>Register</button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar