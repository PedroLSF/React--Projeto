import React from 'react';
import calabresa from '../../assets/calabresa.png';
import marguerita from '../../assets/marguerita.png';
import { Link } from 'react-router-dom';

const Pizza = (props) => {
  return (
    <div className="flex justify-center space-x-32">
      <div>
        <span className="bg-amber-50 border border-amber-50 rounded-full text-black text-sm px-4 py-1 inline-block mb-4">
          {props.categoriaTab}
        </span>
        <img className="w-64 mx-auto rounded-full" src={calabresa} alt="" />
        <div className="flex flex-col items-center my-3 space-y-2">
          <h1 className="text-white text-lg">Pepperoni</h1>
          <p className="text-white text-sm text-center">
            A small river named Duden flows by their place and supplies <br /> it
            with the necessary regelialia.
          </p>
          <h2 className="text-amber-100 text-sm text-center font-bold">$2.9</h2>
          <Link to = '/escolhida/1'><button className="text-white mt-3 p-1 border transition duration-700 hover:bg-amber-100 hover:text-black">
            Order Now
          </button></Link>
        </div>
      </div>

      <div>
        <span className="bg-amber-50 border rounded-full border-amber-50 text-black text-sm px-4 py-1 inline-block mb-4">
          {props.categoriaTab}
        </span>
        <img className="w-64 mx-auto rounded-full" src={marguerita} alt="" />
        <div className="flex flex-col items-center my-3 space-y-2">
          <h1 className="text-white text-lg">Margueritte</h1>
          <p className="text-white text-sm text-center">
            A small river named Duden flows by their place and supplies <br /> it
            with the necessary regelialia.
          </p>
          <h2 className="text-amber-100 text-sm text-center font-bold">$2.9</h2>
          <Link to = '/escolhida/2'><button className="text-white mt-3 p-1 border transition duration-700 hover:bg-amber-100 hover:text-black">
            Order Now
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Pizza;