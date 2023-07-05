import { useState } from 'react';

function Hero() {
const [isHover, setisHover] = useState(false);
const [blur, setBlur] = useState("");

const mouseEnterBlur = (e) => {
  setBlur("hover:blur-sm hover:transition ease-in-out")
} 


const handleMouseEnter = (e) => {
  // function shows text when hovered
  setisHover(true)
}

const handleMouseLeave = (e) => {
  // function hides text when hover off element
  setisHover(false)
}


  return ( <div>
    
    <div className='py-8  flex justify-center place-items-center gap-x-2'>
      
      <div className='flex flex-col max-w-xl  gap-y-2'>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='relative'>
          <p className={`absolute top-1/2  transform -translate-y-1/2 z-10 font-display text-5xl pointer-events-none pl-2	 ${isHover ? "" : "hidden"}`}>Men's Accesories</p>
      <img onMouseEnter={mouseEnterBlur}  className={`rounded-md ${blur}`}  src={require('../src/Images/mensTop.jpg')} alt='Mens Accesories' />
      </div>
      <img className='rounded-md'   src={require('../src/Images/mensMid.jpg')} alt='Mens Clothes' />
      <img className='rounded-md'  src={require('../src/Images/mensBottom.jpg')} alt='Mens Shoes' />
      </div>
      <div className='flex flex-col max-w-xl gap-y-4'>
      <img className='rounded-md'  src={require('../src/Images/womenTop.jpg')} alt='Womens Accesories' />
      <img className='rounded-md'   src={require('../src/Images/womenBottom.jpg')} alt='Womens Shoes' />
      </div>
      </div>

  </div>

  )
}


export default Hero;