import * as React from "react";
import { Link } from "react-router-dom";
import bannerImg from '../images/restauranfood.jpg'

function Header() {
  return (
    <header className=' bg-emerald-700 p-20 gap-4'>
        <section className="flex justify-between" >
            <div className="">
                <h2 className="text-amber-300 text-3xl font-bold pb-5 ">Little lemon</h2>
                <h3 className="text-white text-lg font-bold pb-5 ">Chicago</h3>
                <p className="text-white text-lg font-thin pb-5 max-w-sm">we are a family owned mediterraneran resturant, focused on traditional recipes served with a modern twist</p>
                <Link to="/booking"><button className="bg-amber-300 p-3 rounded-lg font-bold">Rerserve Table</button></Link>
            </div>

            <div>
              <img className="md:absolute md:right-1/4 md:top-1/4 md:h-96 md:w-96 rounded-lg hidden md:block" src={bannerImg} alt= "Restaurant Banner" />
            </div>
        </section>
    </header>
  )
}

export default Header