import { useEffect,useState } from "react";
import Dropdown from "./Components/Dropdown";
// displaying 5 from category on click
function Category () {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    // Fetching API
    const fakeStore = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/category/electronics`); // left off here working on getting the category to be dynamic
      const jsonData = await response.json();
      setCategory(jsonData);
      console.log(category);
    }
  
    fakeStore();
  }, [])

  // Optional chaining with "?"
  return <div>
    <Dropdown />
    {category[0]?.title}  
  {category.map((cat) => {
    return (
      <>
      <div className=" mx-auto w-full h-96 flex flex-col border-2 rounded-lg	 p-10 ">
      <img className="w-48 h-48 self-center	" src={`${cat.image}`} alt={`${cat.title}`} />
      <h5 className="py-5 text-left">{cat.title}</h5>
      <p className="font-bold	">${cat.price}</p>
  </div>
      </>
    )
  })}
</div>
}


export default Category;