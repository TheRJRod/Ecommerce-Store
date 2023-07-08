import Navbar from "./Navbar";
import Hero from "./Hero";
import FeaturedHome from "./FeaturedHome";
import Category from "./Category";
import Dropdown from "./Components/Dropdown";
import { useState, useEffect } from "react";

function App() {
  const [product, setProduct] = useState([]);
  const [categoryReturn, setCategoryReturn] = useState(`men's%20clothing`)

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

  
  
  
  return ( <div>
    <div className="bg-gradient-to-b from-blue-500	">
      <Navbar />
      <Hero  />
      </div>
     {/* Display Product data on the page */}
      <h2 className="px-72 font-display text-5xl pt-20 ">Our Hottest Items</h2>
      <div className="grid grid-cols-4 m-auto justify-center gap-10	px-72 pt-10  	 ">
        {product.map((value) => {
          return (
            <>
            <div className=" transform transition-all mx-auto w-full h-96 flex flex-col border-2 border-blue-500 rounded-lg p-10 cursor-pointer hover:scale-110	 ">
            <img className="w-48 h-48 self-center	" src={`${value.image}`} alt={`${value.title}`} />
            <h5 className="py-5 text-left">{value.title}</h5>
            <p className="font-bold	">${value.price}</p>
        </div>
            </>
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