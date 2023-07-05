import {AiOutlineCaretUp, AiOutlineCaretDown} from "react-icons/ai"
import { useState, useEffect } from "react";

function Dropdown() {
  const [isOpen , setIsOpen] = useState(false);

  

  return (
    <div className="relative flex flex-col items-center w-[340px] h-[340px] rounded-lg ">
      <button onClick={() => setIsOpen((prev) => !prev)} className="bg-blue-400 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white">Select Category {!isOpen ? (<AiOutlineCaretDown className="h-8" />) : (<AiOutlineCaretUp className="h-8" />) }</button>

      {isOpen && (
        <div className="bg-blue-400 absolute top-20 flex flex-col items-start rounded-lg p-2 w-full">
         <div className=" round-r-lg border-l-transparent ">
          <h3 className="p-4 font-bold hover:bg-blue-300 cursor-pointer">Men's Clothing</h3>
          <h3 className="p-4 font-bold hover:bg-blue-300 cursor-pointer">Women's Clothing</h3>
          <h3 className="p-4 font-bold hover:bg-blue-300 cursor-pointer">Jewelery</h3>
          <h3 className="p-4 font-bold hover:bg-blue-300 cursor-pointer">Electronics</h3>
          </div>
        </div>
      )}
      </div>
  )
}

export default Dropdown;