import React from "react";
import pizza from '../../assets/pizza.png'

const Home = () => {
    return (
        <>
            <section className = "">
                <span className="flex items-center justify-center mt-32">
                    <img src = {pizza} alt="Pizza" className="h-80 w-80"/>
                    <div className="ml-10 justify-start">
                        <h2 className="subtitle italic text-amber-100">Leckere</h2>
                        <h1 className="title text-white">WE COOKED YOUR DESIRE <br/> PIZZA RECIPE</h1>
                        <p className="text-white">A small river named Duden flows by their place and supplies  it with the necessary regelialia.</p>
                        <button className='text-white mt-3 p-1 border transition duration-700 hover:bg-amber-100 hover:text-black'>Menu</button>
                    </div>
                </span>
            </section>
        </>
    )
}

export default Home;