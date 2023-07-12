import Navbar from "./Navbar";
import Hero from "./Hero";
import FeaturedHome from "./FeaturedHome";
import Category from "./Category";
import Dropdown from "./Components/Dropdown";
import CartPopout from "./Components/CartPopout";
import { useState, useEffect } from "react";
import './Components/App.css';

function App() {
  const [product, setProduct] = useState([]);
  const [categoryReturn, setCategoryReturn] = useState(`men's%20clothing`);
  const [addCart, setAddCart] = useState([]);
  const [showPopout, setShowPoput] = useState(false);
  

  useEffect(() => {
    // Fetching API
    const fakeStore = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const jsonData = await response.json();
      setProduct(jsonData);
    }
  
    fakeStore();
    
  }, [])

  // Get Category of dropdown
  function dropCat(cat) {
  setCategoryReturn(cat)
  }

  // Update Cart 
  const handleCartClick = (product) => {
    setAddCart([...addCart, product])
  }



// Show Cart Popout
const handleClickPopout = () => {
    setShowPoput(true)
}

// Hide Cart Popout
const handleHidePopout = () => {
  setShowPoput(false)
}




  
  return ( <div >
    <div className="bg-gradient-to-b from-blue-500	">
      <CartPopout handleHidePopout={handleHidePopout} val={showPopout} value={addCart} />
      <Navbar handleClickPopout={handleClickPopout} value={addCart.length}  />
      <Hero  />
      </div>
     {/* Display Product data on the page */}
      <h2 className="px-72 font-display text-5xl pt-20 ">Our Hottest Items</h2>
      <div className="grid grid-cols-4 m-auto justify-center gap-10	px-72 pt-10  	 ">
        {product.map((value) => {
          return (
            <div key={value.id}>
            <div  className=" transform transition-all mx-auto w-full h-96 flex flex-col gap-y-3 border-2 border-blue-500 rounded-lg p-10 cursor-pointer hover:scale-110	 ">
            <img className="w-36 h-36 self-center	" src={`${value.image}`} alt={`${value.title}`} />
            <h5 className="pt-5 pb-3 text-center truncate">{value.title}</h5>
            <div className="flex flex-col place-items-center gap-y-2	">
            <p className="font-bold	">${value.price}</p>
            <button onClick={() => {
              handleCartClick(value)
            }} className="transform transition-all bg-black text-white rounded-full py-2 px-4 hover:scale-110">Add to cart</button>
            </div>
        </div>
            </div>
          )
        })}
        
      </div>
      <FeaturedHome value={product}/>
      <Dropdown dropCat={dropCat} />
      <Category value={categoryReturn} />  
      </div>
  )
  
}


export default App;