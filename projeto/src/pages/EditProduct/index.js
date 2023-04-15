import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { findProductById, updateProductById } from '../../services/productService';

const EditProduct = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [productForm, setProductForm] = useState({
        pizzas: "",
        imagem: "",
        valor: 0,
    })

    useEffect(() => {
        getProductById();
    }, [])

    const getProductById = async () => {
        const response = await findProductById(id);
        setProductForm(response.data);
    }

    const handleChangeValues = (event) => {
        setProductForm({
            ...productForm,
            [event.target.name]: event.target.value,
        });
        console.log(productForm)
    }

    const handleSubmit = async (evento) => {
        evento.preventDefault();
        const response = await updateProductById(id, productForm);

        if(response){
            alert('Produto editado com sucesso')
            navigate('/admin')
        }
    }

    return (
        <section className='my-12 max-w-screen-xl mx-auto px-6 flex flex-col justify-center items-center mt-24'>
            <div className='flex flex-col space-y-4'>
                <h1 className='text-2xl text-white contato'>Edição de Produtos</h1>
            </div>
            <form onSubmit={handleSubmit} className='gap-10 mt-6 w-72'>
                <div className='flex flex-col space-y-2'>
                    <label htmlFor='pizzas' className='text-white'>Nome</label>
                    <input onChange={handleChangeValues} type='text' id='pizzas' name='pizzas' value={productForm.pizzas} required className='placeholder:italic placeholder:text-slate-400 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
                
                    <label htmlFor='imagem' className='text-white'>Imagem</label>
                    <input onChange={handleChangeValues} type= 'text' name='imagem' id='imagem' value={productForm.imagem} required className='placeholder:italic placeholder:text-slate-400 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
                
                    <label htmlFor='valor' className='text-white'>Preço</label>
                    <input onChange={handleChangeValues} type='text' id='valor' name='valor' value={productForm.valor} required className='placeholder:italic placeholder:text-slate-400 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
                
                    <div className='mt-8 flex justify-center items-center'>
                        <button type='submit' className='text-white px-2 mt-3 p-1 border transition duration-700 hover:bg-amber-100 hover:text-black'>Editar</button>
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

export default EditProduct