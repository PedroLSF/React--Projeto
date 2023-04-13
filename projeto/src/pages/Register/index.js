import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { registerUser } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [inputValues, setInputValues] = useState({
        nome: '',
        email: '',
        senha: '',
        numero: '',
      });
    
    const navigate = useNavigate();

    const handleChangeValues = (event) => {
    setInputValues({
        ...inputValues,
        [event.target.name]: event.target.value,
    });
    console.log(inputValues)
    }

    const handleSubmit = async (evento) => {
        evento.preventDefault();
        console.log(inputValues);
        const response = await registerUser(inputValues);
        if(response.data){
            alert(`Usuario ${response.data.nome} cadastrado com sucesso`);
            navigate('/login')
        }
    }

    return (
        <main className='h-screen w-full'>
            <div className='flex pt-20 flex-col items-center h-screen'>
                <img src = {logo} alt= "" className='w-32'/>
                <h1 className='text-2xl text-white contato'>Cadastro de Usuário</h1>
                <form onSubmit={handleSubmit} className='w-96 m-6 p-4 rounded-lg shadow-lg'>
                    <div className='flex flex-col space-y-6'>
                        <input onChange={handleChangeValues} type = "text" name = "nome" placeholder='Digite seu Nome' className='w-full px-4 py-3 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
                        <input onChange={handleChangeValues} type = "mail" name = "email" placeholder='Digite seu E-mail' className='w-full px-4 py-3 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
                        <input onChange={handleChangeValues} type = "password" name = "senha" placeholder='Digite sua Senha' className='w-full px-4 py-3 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
                        <input onChange={handleChangeValues} type = "text" name = "numero" placeholder='Digite seu Numero' className='w-full px-4 py-3 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
                        <button type="submit" className='text-white mt-3 p-1 border transition duration-700 hover:bg-amber-100 hover:text-black w-full'>Cadastrar</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Register