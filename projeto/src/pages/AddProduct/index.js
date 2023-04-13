import React, { useState } from 'react'
import { addProductAPI } from '../../services/productService';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [productForm, setProductForm] = useState({
        pizzas: "",
        imagem: "",
        valor: 0,
    })

    const navigate = useNavigate();

    const handleChangeValues = (event) => {
        setProductForm({
            ...productForm,
            [event.target.name]: event.target.value,
        });
        console.log(productForm)
    }

    const handleSubmit = async (evento) => {
        evento.preventDefault();
        const product = {
            ...productForm,
            valor: parseFloat(productForm.valor)
        }
        const response = await addProductAPI(product);
        if(response.data){
            alert(`Produto ${response.data.pizzas} cadastrado com sucesso`);
            navigate('/admin');
        }
    }

    return (
        <section className='my-12 max-w-screen-xl mx-auto px-6 flex flex-col justify-center items-center mt-24'>
            <div className='flex flex-col space-y-4'>
                <h1 className='text-2xl text-white contato'>Cadastro de Produtos</h1>
            </div>
            <form onSubmit={handleSubmit} className='gap-10 mt-6 w-72'>
                <div className='flex flex-col space-y-2'>
                    <label htmlFor='pizzas' className='text-white'>Nome</label>
                    <input onChange={handleChangeValues} type='text' id='pizzas' name='pizzas' required className='placeholder:italic placeholder:text-slate-400 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
                
                    <label htmlFor='imagem' className='text-white'>Imagem</label>
                    <input onChange={handleChangeValues} type= 'text' name='imagem' id='imagem' required className='placeholder:italic placeholder:text-slate-400 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
                
                    <label htmlFor='valor' className='text-white'>Preço</label>
                    <input onChange={handleChangeValues} type='text' id='valor' name='valor' required className='placeholder:italic placeholder:text-slate-400 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
                
                    <div className='mt-8 flex justify-center items-center'>
                        <button className='text-white px-2 mt-3 p-1 border transition duration-700 hover:bg-amber-100 hover:text-black'>Adicionar</button>
                    </div>
                </div>

                {/* <div className='flex flex-col space-y-4'>
                <label htmlFor='preco' className='text-white'>Preço</label>
                    <input type='text' id='preco' name='preco' required className='placeholder:italic placeholder:text-slate-400 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/> 
                </div> */}
            </form>
        </section>
    )
}

export default AddProduct