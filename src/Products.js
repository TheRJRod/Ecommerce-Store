import {useState, useEffect} from "react";
import axios from "axios";

function Products() {
const [product, setProduct] = useState([])

 useEffect( () => {
  const getData = async () => {
   await axios.get("https://fakestoreapi.com/products").then((data) => {
      setProduct(data)
      console.log(product);
      })
  } 
  getData();
}, [])




// return (
  
//   <div>
//     {product.map(() => {
//       return (
//         <>
//         <div className="flex flex-col	border-2 rounded-lg	w-fit p-5 justify-center place-items-center">
//         <img className="max-w-xs" src={`${product.image}`} alt={`${product.title}`} />
//         </div>
//         </>
//       )
//     })}

//     <div className="flex flex-col	border-2 rounded-lg	w-fit p-5 justify-center place-items-center">
//     <img className="max-w-xs" src={`${product.data[0].image}`} alt={`${product.data[0].title}`} />
//     <h3 className="py-3">{product.data[0].title}</h3>
//     </div>
//   </div>
// )

}


export default Products;