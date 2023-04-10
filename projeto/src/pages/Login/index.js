import React, { useContext, useState } from 'react'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


const Login = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    senha: ''
  });
  const {loginUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChangeValues = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    loginUser(inputValues);
  }

  return (
    <main className='h-screen w-full'>
        <div className='flex flex-col items-center pt-20 h-screen'>
            <img src = {logo} alt="" className='w-32'/>
            <form onSubmit={handleSubmit} className='w-96 m-6 p-4 rounded-lg shadow-lg'>
                <div className='flex flex-col space-y-6'>
                    <input onChange={handleChangeValues} type="mail" placeholder='Digite seu e-mail' name="email" className='w-full px-4 py-3 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
                    <input onChange={handleChangeValues} type="password" placeholder='Digite sua senha' name="senha" className='w-full px-4 py-3 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
                </div>
                <button type="submit" className='text-white mt-3 p-1 border transition duration-700 hover:bg-amber-100 hover:text-black w-full'>Logar</button>
                <p className='text-base text-center my-6 hover:underline text-white'>Precisa de uma conta?</p>
            </form>
        </div>
    </main>
  )
}

export default Login