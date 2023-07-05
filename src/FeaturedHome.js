function FeaturedHome({value}) {
  return <div className="flex justify-center items-center gap-x-20 pt-20">
    <div className="flex flex-col items-start gap-y-5	">
      <h3 className="font-display text-6xl">Deals you cannot miss</h3>
      <p className="font-bold text-xl">From fashion trends, to decor trends.. we got you covered.</p>
      <button className="text-left	bg-black text-white px-3 py-2 text-xl">Shop Now</button>
    </div>
    <img className="h-96" src= {`${value[0]?.image}`} alt={`${value[0]?.title}`}/>
  </div>
}


export default FeaturedHome;