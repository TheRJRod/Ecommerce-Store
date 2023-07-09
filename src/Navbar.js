import {FiShoppingBag} from "react-icons/fi"
import { useState } from "react";

function Navbar({value, handleClickPopout}) {
  


  return(
    <nav className='flex justify-around place-items-center py-10'>
      <img className='max-h-20' src={require('./r2logo.png')} alt='Company logo' />
      <ul className="flex gap-x-8  ">
        <li className='hover:border-b-white border-transparent border-2 cursor-pointer text-white font-display text-2xl'>Products</li>
        <li className='hover:border-b-white border-transparent border-2 cursor-pointer text-white font-display text-2xl'>Contact</li>
        <div onClick={handleClickPopout} className="relative flex items-center gap-2 hover:border-b-white border-transparent border-2 cursor-pointer text-white ">
        <li className="font-display text-2xl" >CheckOut  </li>
        <FiShoppingBag className="text-white font-display text-2xl" />
        <div className="absolute -top-2 -right-4 rounded-full bg-black w-6 h-6 text-center">{value}</div>
        </div>
      </ul>
  </nav>
  ) 
}

export default Navbar;