import React, { useState } from 'react'
import Pedido from '../Pedido';


export const ListaPedido = () => {
    const [categoriaTab, setCategoriaTab] = useState('Pizza');
  return (
    <section className='my-12 max-w-screen-xl mx-auto px-3'>
        <div className='flex items-center justify-center space-x-6'>
            <button className= {categoriaTab === 'Pizza' ? "active-menu-tab menu-tab" : "menu-tab"} onClick={() => setCategoriaTab('Pizza')}>Pizza</button>
            <button className= {categoriaTab === 'Bebidas' ? "active-menu-tab menu-tab" : "menu-tab"}  onClick={() => setCategoriaTab('Bebidas')}>Bebidas</button>
        </div>

        <div className='grid mt-12'>
            <Pedido categoriaTab = {categoriaTab}/>
        </div>
    </section>
  )
}

export default ListaPedido;
