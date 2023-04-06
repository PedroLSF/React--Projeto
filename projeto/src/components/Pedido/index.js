import React from 'react'
import Pizza from '../Pizza'
import Bebidas from '../Bebidas'

const Pedido = (props) => {
    if(props.categoriaTab === 'Pizza'){
        return (
            <Pizza categoriaTab = {props.categoriaTab}/>
        )
    }else if(props.categoriaTab === 'Bebidas'){
        return(
            <Bebidas categoriaTab = {props.categoriaTab}/>
        )
    }
}

export default Pedido