import {ImCross} from "react-icons/im"
import {BsFillArrowLeftCircleFill} from "react-icons/bs"


function CartPopout({value, val, handleHidePopout, removeItem}) {

  const addToCart = () => {
    let cart;
    if(value.length <= 3) {
      cart = value.map((item) => {
        return(
        <div className="flex flex-col items-center relative gap-3 border-2 py-4 bg-white" key={item.id}>
              <ImCross onClick={() => removeItem(item)} className="absolute top-0 left-0 mt-2 ml-2 cursor-pointer " />
              <img className="w-36 h-36" src={`${item.image}`} alt={`${item.title}`} />
              
            </div> )
      })
      return cart;
    } else {
      cart = value.slice(0,3).map((item) => {
        return (
          <div className="flex flex-col items-center relative gap-3 border-2 py-4 bg-white" key={item.id}>
              <ImCross onClick={() => removeItem(item)} className="absolute top-0 left-0 mt-2 ml-2 cursor-pointer " />
              <img className="w-36 h-36" src={`${item.image}`} alt={`${item.title}`} />
              
            </div>
        )
      })
      return cart;
    }
  }


  return (
    <div className={`w-1/2 transform transition-all ${val ? '' : 'translate-x-full'} absolute top-0 -right-0 h-screen md:w-3/12 bg-white z-20 overflow-hidden	 `}>
      <div className="pt-10 relative">
        <BsFillArrowLeftCircleFill onClick={handleHidePopout} className="text-4xl ml-5 text-gray-500 cursor-pointer hover:text-blue-500"/>
      <h2 className="text-center font-display text-6xl">Cart Items ({value.length})</h2>
        {addToCart()} 
      </div>
        <div className="bg-blue-500 relative flex justify-center items-center py-4">
        <button className=" transform transition-all bg-black text-white rounded-full py-2 px-4 hover:scale-110">View your cart</button>
        </div>
    </div>
  )
}


export default CartPopout;