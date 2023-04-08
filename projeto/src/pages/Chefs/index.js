import React from 'react'
import chef1 from '../../assets/chef1.jfif';
import chef2 from '../../assets/chef2.jfif';

const Chefs = () => {
  return (
    <div className="flex justify-center space-x-32 mt-24">
      <div className='border border-orange-400 hover:border-amber-100 p-5'>
        
        <img className="w-48 mx-auto rounded-full border border-orange-400 hover:border-amber-100" src={chef1} alt="" />
        <div className="flex flex-col items-center my-3 space-y-2">
          <h1 className="text-white text-lg">TOM SMITH</h1>
          <p className="text-slate-400 text-sm text-center">
          Far far away, behind the <br/>word mountains, far from<br/> the countries Vokalia and<br/> Consonantia, there live the<br/> blind texts.
          </p>
        </div>
      </div>

      <div className='border border-orange-400 hover:border-amber-100 p-5'>
        <img className="w-48 mx-auto rounded-full border border-orange-400 hover:border-amber-100" src={chef2} alt="" />
        <div className="flex flex-col items-center my-3 space-y-2">
          <h1 className="text-white text-lg">IVONE SMITH</h1>
          <p className="text-slate-400 text-sm text-center">
          Far far away, behind the <br/>word mountains, far from<br/> the countries Vokalia and<br/> Consonantia, there live the<br/> blind texts.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Chefs