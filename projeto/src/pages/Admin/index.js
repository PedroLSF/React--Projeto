import React, { useEffect, useState } from 'react'
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { findAllProducts, deleteProduct } from '../../services/productService'
import { Link } from 'react-router-dom'

const Admin = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllProducts();
    }, [])

    const getAllProducts = async () => {
        const response = await findAllProducts();
        setProducts(response.data)
    }

    const removeProduct = async (id) => {
        const answer = window.confirm('Confirmar Ação?')
        if(answer){
            await deleteProduct(id)
            getAllProducts();
        }
    }

    return (
        <section className='my-12 max-w-screen-xl mx-auto px-6'>
            <div className='flex justify-end space-y-2'>
                <button onClick={() => navigate('/admin/add-product')} className='text-white px-2 mt-3 p-1 border transition duration-700 hover:bg-amber-100 hover:text-black'>Adiciona Produto</button>
            </div>

            <div className='flex flex-col my-8'>
                <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
                        <div className='overflow-hidden sm:rounded-lg shadow-md'>
                            <table className='min-w-full'>
                                <thead className='bg-white'>
                                    <tr>
                                        <th scope='col' className='text-xs font-medium text-black px-6 py-3 text-left uppercase tracking-wider'>
                                            Imagem
                                        </th>
                                        <th scope='col' className='text-xs font-medium text-black px-6 py-3 text-left uppercase tracking-wider'>
                                            Nome
                                        </th>
                                        <th scope='col' className='text-xs font-medium text-black px-6 py-3 text-left uppercase tracking-wider'>
                                            Descrição
                                        </th>
                                        <th scope='col' className='text-xs font-medium text-black px-6 py-3 text-left uppercase tracking-wider'>
                                            Preço
                                        </th>
                                        <th scope='col' className='relative px-6 py-3'>
                                            <span className='text-xs font-medium text-black px-6 py-3 text-left uppercase tracking-wider'>Ações</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(product => (
                                        <tr key={product._id} className='bg-white border-b'>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                                            <img src = {product.imagem} alt = {product.pizzas} className='rounded-full h-32'/>
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                                            {product.pizzas}
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                                        A small river named Duden flows by their place and supplies <br /> it
                                        with the necessary regelialia.
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                                            {product.valor}
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap flex flex-col mt-8 h-24 items-center justify-center'>
                                            <div className='flex items-center justify-center space-x-3'>
                                                <Link to = {`/admin/edit-product/${product._id}`}><FaEdit className='cursor-pointer'/></Link>
                                                <MdDelete onClick={() => removeProduct(product._id)} className='cursor-pointer'/>
                                            </div>
                                        </td>
                                    </tr>
                                    ))}
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Admin