import {ImCross} from "react-icons/im"
import {BsFillArrowLeftCircleFill} from "react-icons/bs"
import { useState } from "react"

function CartPopout({value, val, handleHidePopout}) {

const [cartItems, setCartItems] = useState([])


function removeItem(deleteItem) {
const newList = value.filter((item) => item !== deleteItem );
setCartItems(newList);
}






  return (
    <div className={`transform transition-all ${val ? '' : 'translate-x-full'} absolute top-0 right-0 h-screen w-3/12 bg-white z-20 `}>
      <div className="pt-10">
        <BsFillArrowLeftCircleFill onClick={handleHidePopout} className="text-4xl ml-5 text-gray-500 cursor-pointer hover:text-blue-500"/>
      <h2 className="text-center font-display text-6xl">Cart Items</h2>
        {value.map((item) => {
          if(value.length <= 3) {
          return (
            <div className="flex flex-col items-center relative gap-3 border-2 py-4 bg-white" key={item.id}>
              <ImCross onClick={() => removeItem(item)} className="absolute top-0 left-0 mt-2 ml-2 cursor-pointer " />
              <img className="w-36 h-36" src={`${item.image}`} alt={`${item.title}`} />
              <h3 className="truncate">{item.title}</h3>
            </div> 
          )} 
        })}
        
      </div>
      

    </div>
  )
}


export default CartPopout;