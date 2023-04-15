import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import calabresa from '../../assets/calabresa.png';
import marguerita from '../../assets/marguerita.png';
import coca from '../../assets/coke.png'
import sprite from '../../assets/sprite.png'

const Pedido = () => {
    const params = useParams();
    const navigate = useNavigate();

    const addToCart = () => {
        if(params.id === '1'){
            const productCart = [
                {
                    nome: "Pepperoni",
                    descricao: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
                    valor: 10
                }
              ]
              const storageCart = JSON.parse(localStorage.getItem('productCart'));
              if(storageCart) {
                productCart.push(
                  ...storageCart
                )
                localStorage.setItem('productCart', JSON.stringify(productCart));
              }
              localStorage.setItem('productCart', JSON.stringify(productCart));
              navigate('/cart')
        }
        else if(params.id === '2'){
            const productCart = [
                {
                    nome: "Margueritte",
                    descricao: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
                    valor: 10
                }
              ]
              const storageCart = JSON.parse(localStorage.getItem('productCart'));
              if(storageCart) {
                productCart.push(
                  ...storageCart
                )
                localStorage.setItem('productCart', JSON.stringify(productCart));
              }
              localStorage.setItem('productCart', JSON.stringify(productCart));
              navigate('/cart')
        }
        else if(params.id === '3'){
            const productCart = [
                {
                    nome: "Coke",
                    descricao: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
                    valor: 10
                }
              ]
              const storageCart = JSON.parse(localStorage.getItem('productCart'));
              if(storageCart) {
                productCart.push(
                  ...storageCart
                )
                localStorage.setItem('productCart', JSON.stringify(productCart));
              }
              localStorage.setItem('productCart', JSON.stringify(productCart));
              navigate('/cart')
        }
        else if(params.id === '4'){
            const productCart = [
                {
                    nome: "Sprite",
                    descricao: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
                    valor: 10
                }
              ]
              const storageCart = JSON.parse(localStorage.getItem('productCart'));
              if(storageCart) {
                productCart.push(
                  ...storageCart
                )
                localStorage.setItem('productCart', JSON.stringify(productCart));
              }
              localStorage.setItem('productCart', JSON.stringify(productCart));
              navigate('/cart')
        }
    }

    if(params.id === '1'){
        return (
            <div className='flex flex-col'>
                <h1 className='subtitle text-amber-100 mx-auto mt-20'>Ordered Pizza:</h1>
                <div>
                <img className="w-64 mx-auto rounded-full" src={calabresa} alt="" />
                <div className="flex flex-col items-center my-3 space-y-2">
                <h1 className="text-white text-lg">Pepperoni</h1>
                <p className="text-white text-sm text-center">
                A small river named Duden flows by their place and supplies <br /> it
                with the necessary regelialia.
                </p>
                <h2 className="text-amber-100 text-sm text-center font-bold">$10</h2>
                <button onClick={addToCart} className="text-white mt-3 p-1 border transition duration-700 hover:bg-amber-100 hover:text-black">
                    Order Now
                </button>
                </div>
                </div>
            </div>
        )
    }
    else if(params.id === '2'){
        return (
            <div className='flex flex-col'>
                <h1 className='subtitle text-amber-100 mx-auto mt-20'>Ordered Pizza:</h1>
                <div>
                <img className="w-64 mx-auto rounded-full" src={marguerita} alt="" />
                <div className="flex flex-col items-center my-3 space-y-2">
                <h1 className="text-white text-lg">Margueritte</h1>
                <p className="text-white text-sm text-center">
                A small river named Duden flows by their place and supplies <br /> it
                with the necessary regelialia.
                </p>
                <h2 className="text-amber-100 text-sm text-center font-bold">$10</h2>
                <button onClick={addToCart} className="text-white mt-3 p-1 border transition duration-700 hover:bg-amber-100 hover:text-black">
                    Order Now
                </button>
                </div>
                </div>
            </div>
        )
    }
    else if(params.id === '3'){
        return (
            <div className='flex flex-col'>
                <h1 className='subtitle text-amber-100 mx-auto mt-20'>Ordered Soda:</h1>
                <div>
                <img className="w-64 mx-auto rounded-full" src={coca} alt="" />
                <div className="flex flex-col items-center my-3 space-y-2">
                <h1 className="text-white text-lg">Margueritte</h1>
                <p className="text-white text-sm text-center">
                A small river named Duden flows by their place and supplies <br /> it
                with the necessary regelialia.
                </p>
                <h2 className="text-amber-100 text-sm text-center font-bold">$10</h2>
                <button onClick={addToCart} className="text-white mt-3 p-1 border transition duration-700 hover:bg-amber-100 hover:text-black">
                    Order Now
                </button>
                </div>
                </div>
            </div>
        )
    }
    else if(params.id === '4'){
        return (
            <div className='flex flex-col'>
                <h1 className='subtitle text-amber-100 mx-auto mt-20'>Ordered Soda:</h1>
                <div>
                <img className="w-64 mx-auto rounded-full" src={sprite} alt="" />
                <div className="flex flex-col items-center my-3 space-y-2">
                <h1 className="text-white text-lg">Margueritte</h1>
                <p className="text-white text-sm text-center">
                A small river named Duden flows by their place and supplies <br /> it
                with the necessary regelialia.
                </p>
                <h2 className="text-amber-100 text-sm text-center font-bold">$10</h2>
                <button onClick={addToCart} className="text-white mt-3 p-1 border transition duration-700 hover:bg-amber-100 hover:text-black">
                    Order Now
                </button>
                </div>
                </div>
            </div>
        )
    }
}

export default Pedido