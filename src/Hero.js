import { useState, useEffect } from 'react';
import { BsArrowRight } from 'react-icons/bs'
function Hero() {
const [menAccarrow, setMenAccArrow] = useState("right-1/3");
const [menCloarrow, setMenCloArrow] = useState("right-60");
const [menShoarrow, setMenShoArrow] = useState("right-64");
const [womenCloarrow, setWomenCloArrow] = useState("right-1/3");
const [womenShoarrow, setWomenShoArrow] = useState("right-1/3");
const [scrollTop, setScrollTop] = useState('');



  const scrollClouds = () => {
    if(window.scrollY > 150) {
      setScrollTop('translate-y-3/4')
    } else {
      setScrollTop('')
    }
    console.log(window.scrollY);
  }


window.addEventListener('scroll', scrollClouds);


  return ( <div>
    
    <div className=' py-8 flex justify-center place-items-center gap-x-2 '>
      <img className={`transform transition-all duration-1000	 max-h-80 pr-8 self-start ${scrollTop} `} src={require('../src/Images/image-from-rawpixel-id-6576111-original.png') } alt="Clouds" />
      <div className='flex flex-col max-w-xl  gap-y-2 '>
        <div onMouseEnter={() => {setMenAccArrow("right-1/4")}} onMouseLeave={() => {setMenAccArrow("right-1/3")}} className='relative cursor-pointer'>
          <p className={`absolute bottom-0  transform -translate-y-0 z-10 font-display text-5xl pointer-events-none pl-2 text-white	 `}>Men's Accesories </p>
          <BsArrowRight className={`transform transition-all absolute bottom-0 -translate-y-0 z-10 text-white text-5xl ${menAccarrow}`}/>
      <img  className={`rounded-md  brightness-50 	`}  src={require('../src/Images/mensTop.jpg')} alt='Mens Accesories' />
      </div>
      <div onMouseEnter={() => {setMenCloArrow("right-1/3")}} onMouseLeave={() => {setMenCloArrow("right-60")}} className='relative cursor-pointer'>
          <p className={`absolute bottom-0  transform -translate-y-0 z-10 font-display text-5xl pointer-events-none pl-2 text-white	 `}>Men's Clothes</p>
          <BsArrowRight className={`transform transition-all absolute bottom-0 -translate-y-0 z-10 text-white text-5xl ${menCloarrow}`}/>
      <img className={`rounded-md  brightness-50 	`}  src={require('../src/Images/mensMid.jpg')} alt='Mens Clothes' />
      </div>
      <div onMouseEnter={() => {setMenShoArrow("right-1/3")}} onMouseLeave={() => {setMenShoArrow("right-60")}} className='relative cursor-pointer'>
          <p className={`absolute bottom-0  transform -translate-y-0 z-10 font-display text-5xl pointer-events-none pl-2 text-white	 `}>Men's Shoes</p>
          <BsArrowRight className={`transform transition-all absolute bottom-0 -translate-y-0 -translate-x-8 z-10 text-white text-5xl ${menShoarrow}`}/>
      <img   className={`rounded-md  brightness-50`}  src={require('../src/Images/mensBottom.jpg')} alt='Mens Shoes' />
      </div>
      </div>
      <div className='flex flex-col max-w-xl gap-y-4'>
      <div onMouseEnter={() => {setWomenCloArrow("right-1/4")}} onMouseLeave={() => {setWomenCloArrow("right-1/3")}} className='relative cursor-pointer'>
          <p className={`absolute bottom-0  transform -translate-y-0 z-10 font-display text-5xl pointer-events-none pl-2 text-white	 `}>Women's Clothes</p>
          <BsArrowRight className={`transform transition-all absolute bottom-0 -translate-y-0  z-10 text-white text-5xl ${womenCloarrow}`}/>
      <img  className={`rounded-md  brightness-50 	`}  src={require('../src/Images/womenTop.jpg')} alt='Womens clothes' />
      </div>
      <div onMouseEnter={() => {setWomenShoArrow("right-1/4")}} onMouseLeave={() => {setWomenShoArrow("right-1/3")}} className='relative cursor-pointer'>
          <p className={`absolute bottom-0  transform -translate-y-0 z-10 font-display text-5xl pointer-events-none pl-2 text-white	 `}>Women's Shoes</p>
          <BsArrowRight className={`transform transition-all absolute bottom-0 -translate-y-0 -translate-x-6  z-10 text-white text-5xl ${womenShoarrow}`}/>
      <img   className={`rounded-md  brightness-50 	`}  src={require('../src/Images/womenBottom.jpg')} alt='Womens Shoes' />
      </div>
      </div>
      <img className={`transform transition-all duration-1000 max-h-80 pr-8 -scale-x-100 self-start ${scrollTop}`} src={require('../src/Images/image-from-rawpixel-id-6576111-original.png') } alt="Clouds" />
      </div>

  </div>

  )
}


export default Hero;