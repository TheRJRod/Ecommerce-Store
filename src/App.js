import Navbar from "./Navbar";
import Hero from "./Hero";
import { useState, useEffect } from "react";

function App() {

  const [product, setProduct] = useState([]);
  useEffect(() => {
    // Fetching API
    const fakeStore = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const jsonData = await response.json();
      setProduct(jsonData);
    }
  
    fakeStore();
  }, [])

  
  return <div>
      <Navbar />
      <Hero />
      <div className="grid grid-cols-4 m-auto justify-center gap-10	px-72 pt-20  	 ">
        {product.map((value) => {
          return (
            <>
            <div className=" mx-auto w-full h-96 flex flex-col border-2 rounded-lg	 p-10 ">
            <img className="w-48 h-48 self-center	" src={`${value.image}`} alt={`${value.title}`} />
            <h5 className="py-5 text-left">{value.title}</h5>
        
        </div>
            </>
          )
        })}
        
      </div>
      
  </div>
}


export default App;