function FeaturedHome({value}) {
  return <div >
    <div className="flex  justify-center items-center gap-x-20  border-2 rounded-md  w-fit mx-auto mt-64 ">
    <div className="flex flex-col  items-start gap-y-5	bg-blue-500  py-32 px-14">
      <h3 className="font-display text-6xl text-white">Deals you cannot miss</h3>
      <p className="font-bold text-xl">From fashion trends, to the latest gear.. we got you covered.</p>
      <button className="transform transition-all text-left 	bg-black text-white px-3 py-2 text-xl hover:scale-110">Shop Now</button>
    </div>
    <img className="hidden h-96 pr-14 md:flex" src= {`${value[0]?.image}`} alt={`${value[0]?.title}`}/>
    </div>
  </div>
}


export default FeaturedHome;