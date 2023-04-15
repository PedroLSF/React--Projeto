import React, { useEffect, useState } from 'react'
import calabresa from '../../assets/calabresa.png';
import marguerita from '../../assets/marguerita.png';
import coca from '../../assets/coke.png'
import sprite from '../../assets/sprite.png'
import axios from 'axios'

const Cart = () => {
  const [productsCart, setProductsCart] = useState([]);

  useEffect(() => {
    const storageCart = JSON.parse(localStorage.getItem('productCart'));
    setProductsCart(storageCart);

  }, [])

  const storageCart = JSON.parse(localStorage.getItem('productCart'));

  const [address, setAddress] = useState({
    rua: '',
    numero: '',
    complemento: '',
    cep: ''
  })

  const findAddress = async() => {
    const response = await axios.get(`https://viacep.com.br/ws/${address.cep}/json`)
    setAddress({
      ...address,
      rua: `${response.data.logradouro}, ${response.data.bairro}, ${response.data.localidade}`
    })
  }

  const handleChangeValues = (event) => {
    setAddress({
        ...address,
        [event.target.name]: event.target.value,
    });
    }

  if(storageCart[0].nome === "Pepperoni"){
    return (
      <main className='h-screen'>
        <div className='max-w-screen-xl py-20 mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
            <div className='col-span-1'>
              <div className='flex flex-col mt-20'>
                <h2 className='text-2xl poppins pb-4 text-white'>
                  Adicione seu Endereço
                </h2>
                <form className='my-4'>
                  <div className='flex flex-col space-y-3'>
                    <input type="text" name="cep" placeholder="cep" id="cep" value={address.cep} onChange={handleChangeValues} className='placeholder:italic placeholder:text-slate-400 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
                    <input type="text" name="rua" placeholder="rua" id="rua" onFocus={findAddress} value={address.rua} onChange={handleChangeValues} className='placeholder:italic placeholder:text-slate-400 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
                    <input type="text" name="numero" placeholder="numero" id="numero" value={address.numero} onChange={handleChangeValues} className='placeholder:italic placeholder:text-slate-400 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
                    <input type="text" name="complemento" placeholder="complemento" id="complemento" value={address.complemento} onChange={handleChangeValues} className='placeholder:italic placeholder:text-slate-400 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
                  </div>
                </form> 
              </div>
            </div>
            <div className='cols-span-1'>
            <div className='glass p-6 box-border rounded-lg'>
              <div className='flex flex-col space-y-3'>
                  <div>
                    <div>

                    <img className='w-64 mx-auto rounded-full' src = {calabresa} alt=''/>
                    </div>
                    <div className='flex flex-col space-y-3 flex-grow justify-center items-center'>
                      <h5 className='contato text-white'>{storageCart[0].nome}</h5>
                      <h5 className='contato text-white'>{storageCart[0].descricao}</h5>
                      <h5 className='contato text-white'>R${storageCart[0].valor}</h5>
                      <button className="text-white mt-3 p-1 border transition duration-700 hover:bg-amber-100 hover:text-black">
                        Order Now
                      </button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </main>
    )
  }
  else if(storageCart[0].nome === "Margueritte"){
    return (
      <main className='h-screen'>
        <div className='max-w-screen-xl py-20 mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
            <div className='col-span-1'>
              <div className='flex flex-col mt-20'>
                <h2 className='text-2xl poppins pb-4 text-white'>
                  Adicione seu Endereço
                </h2>
                <form className='my-4'>
                  <div className='flex flex-col space-y-3'>
                    <input type="text" name="cep" placeholder="cep" id="cep" value={address.cep} onChange={handleChangeValues} className='placeholder:italic placeholder:text-slate-400 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
                    <input type="text" name="rua" placeholder="rua" id="rua" onFocus={findAddress} value={address.rua} onChange={handleChangeValues} className='placeholder:italic placeholder:text-slate-400 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
                    <input type="text" name="numero" placeholder="numero" id="numero" value={address.numero} onChange={handleChangeValues} className='placeholder:italic placeholder:text-slate-400 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
                    <input type="text" name="complemento" placeholder="complemento" id="complemento" value={address.complemento} onChange={handleChangeValues} className='placeholder:italic placeholder:text-slate-400 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
                  </div>
                </form> 
              </div>
            </div>
            <div className='cols-span-1'>
            <div className='glass p-6 box-border rounded-lg'>
              <div className='flex flex-col space-y-3'>
                  <div>
                    <div>

                    <img className='w-64 mx-auto rounded-full' src = {marguerita} alt=''/>
                    </div>
                    <div className='flex flex-col space-y-3 flex-grow justify-center items-center'>
                      <h5 className='contato text-white'>{storageCart[0].nome}</h5>
                      <h5 className='contato text-white'>{storageCart[0].descricao}</h5>
                      <h5 className='contato text-white'>R${storageCart[0].valor}</h5>
                      <button className="text-white mt-3 p-1 border transition duration-700 hover:bg-amber-100 hover:text-black">
                        Order Now
                      </button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </main>
    )
  }
  else if(storageCart[0].nome === "Coke"){
    return (
      <main className='h-screen'>
        <div className='max-w-screen-xl py-20 mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
            <div className='col-span-1'>
              <div className='flex flex-col mt-20'>
                <h2 className='text-2xl poppins pb-4 text-white'>
                  Adicione seu Endereço
                </h2>
                <form className='my-4'>
                  <div className='flex flex-col space-y-3'>
                    <input type="text" name="cep" placeholder="cep" id="cep" value={address.cep} onChange={handleChangeValues} className='placeholder:italic placeholder:text-slate-400 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
                    <input type="text" name="rua" placeholder="rua" id="rua" onFocus={findAddress} value={address.rua} onChange={handleChangeValues} className='placeholder:italic placeholder:text-slate-400 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
                    <input type="text" name="numero" placeholder="numero" id="numero" value={address.numero} onChange={handleChangeValues} className='placeholder:italic placeholder:text-slate-400 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
                    <input type="text" name="complemento" placeholder="complemento" id="complemento" value={address.complemento} onChange={handleChangeValues} className='placeholder:italic placeholder:text-slate-400 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
                  </div>
                </form> 
              </div>
            </div>
            <div className='cols-span-1'>
            <div className='glass p-6 box-border rounded-lg'>
              <div className='flex flex-col space-y-3'>
                  <div>
                    <div>

                    <img className='w-64 mx-auto rounded-full' src = {coca} alt=''/>
                    </div>
                    <div className='flex flex-col space-y-3 flex-grow justify-center items-center'>
                      <h5 className='contato text-white'>{storageCart[0].nome}</h5>
                      <h5 className='contato text-white'>{storageCart[0].descricao}</h5>
                      <h5 className='contato text-white'>R${storageCart[0].valor}</h5>
                      <button className="text-white mt-3 p-1 border transition duration-700 hover:bg-amber-100 hover:text-black">
                        Order Now
                      </button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </main>
    )
  }
  else if(storageCart[0].nome === "Sprite"){
    return (
      <main className='h-screen'>
        <div className='max-w-screen-xl py-20 mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
            <div className='col-span-1'>
              <div className='flex flex-col mt-20'>
                <h2 className='text-2xl poppins pb-4 text-white'>
                  Adicione seu Endereço
                </h2>
                <form className='my-4'>
                  <div className='flex flex-col space-y-3'>
                    <input type="text" name="cep" placeholder="cep" id="cep" value={address.cep} onChange={handleChangeValues} className='placeholder:italic placeholder:text-slate-400 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
                    <input type="text" name="rua" placeholder="rua" id="rua" onFocus={findAddress} value={address.rua} onChange={handleChangeValues} className='placeholder:italic placeholder:text-slate-400 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
                    <input type="text" name="numero" placeholder="numero" id="numero" value={address.numero} onChange={handleChangeValues} className='placeholder:italic placeholder:text-slate-400 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
                    <input type="text" name="complemento" placeholder="complemento" id="complemento" value={address.complemento} onChange={handleChangeValues} className='placeholder:italic placeholder:text-slate-400 focus:border-amber-100 p focus:outline-0 text-white border-pink-100'/>
                  </div>
                </form> 
              </div>
            </div>
            <div className='cols-span-1'>
            <div className='glass p-6 box-border rounded-lg'>
              <div className='flex flex-col space-y-3'>
                  <div>
                    <div>

                    <img className='w-64 mx-auto rounded-full' src = {sprite} alt=''/>
                    </div>
                    <div className='flex flex-col space-y-3 flex-grow justify-center items-center'>
                      <h5 className='contato text-white'>{storageCart[0].nome}</h5>
                      <h5 className='contato text-white'>{storageCart[0].descricao}</h5>
                      <h5 className='contato text-white'>R${storageCart[0].valor}</h5>
                      <button className="text-white mt-3 p-1 border transition duration-700 hover:bg-amber-100 hover:text-black">
                        Order Now
                      </button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Cart