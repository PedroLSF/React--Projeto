import React from 'react'
import { useNavigate } from 'react-router-dom';

const Contato = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/')
  }

  return (
    <div className='flex items-center justify-center mt-32 space-x-10'>
        <form onSubmit ={handleSubmit} className='group mb-40 flex flex-col space-y-20'>
            <div className='space-x-16'>
              <input type="text" placeholder="Your Name" className='placeholder:italic placeholder:text-slate-400 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
              <input type="text" placeholder="Your Email" className='placeholder:italic placeholder:text-slate-400 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
            </div>
            <input type="text" placeholder="Subject" className='placeholder:italic placeholder:text-slate-400 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
            <textarea type="text" placeholder="Message" className='placeholder:italic placeholder:text-slate-400 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
            <button className='text-white mt-3 p-1 border transition duration-700 hover:bg-amber-100 hover:text-black'>Send</button>
        </form>
    </div>
  )
}

export default Contato