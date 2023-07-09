import { useEffect,useState } from "react";
import Dropdown from "./Components/Dropdown";
// displaying 5 from category on click
function Category ({value}) {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    // Fetching API
    const fakeStore = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/category/${value}?limit=4`); 
      const jsonData = await response.json();
      setCategory(jsonData);
    }
  
    fakeStore();
  }, [category])

  // Optional chaining with "?"
  return <div className="flex gap-x-5 px-[300px] pb-[150px]">
  {category.map((cat) => {
    return (
      
      <div key={cat.id} className=" cursor-pointer transform transition-all mx-auto w-full h-96 flex flex-col border-2 border-blue-500 rounded-lg	 p-10 hover:scale-110 ">
      <img className="w-48 h-48 self-center	" src={`${cat.image}`} alt={`${cat.title}`} />
      <h5 className="py-5 text-left">{cat.title}</h5>
      <p className="font-bold	">${cat.price}</p>
  </div>
      
    )
  })}
</div>
}


export default Category;