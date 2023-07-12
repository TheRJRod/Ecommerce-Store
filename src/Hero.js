import { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs'
function Hero() {
const [menAccarrow, setMenAccArrow] = useState("translate-x-0");
const [menCloarrow, setMenCloArrow] = useState("translate-x-0");
const [menShoarrow, setMenShoArrow] = useState("translate-x-0");
const [womenCloarrow, setWomenCloArrow] = useState("translate-x-0");
const [womenShoarrow, setWomenShoArrow] = useState("translate-x-0");
const [scrollTop, setScrollTop] = useState('');



  const scrollClouds = () => {
    if(window.scrollY > 150) {
      setScrollTop('translate-y-3/4')
    } else {
      setScrollTop('')
    }
    
  }


window.addEventListener('scroll', scrollClouds);


  return ( <div>
    
    <div className='gap-y-3 flex-col py-8 flex justify-center place-items-center gap-x-2 lg:flex-row xl:gap-y-0 '>
      <img className={`hidden transform transition-all duration-1000	 max-h-80 pr-8 self-start ${scrollTop} xl:flex `} src={require('../src/Images/image-from-rawpixel-id-6576111-original.png') } alt="Clouds" />
      <div className='flex flex-col max-w-xl  gap-y-2  '>
        <div onMouseEnter={() => {setMenAccArrow("translate-x-10")}} onMouseLeave={() => {setMenAccArrow("translate-x-0")}} className='relative cursor-pointer '>
          <div className='flex absolute gap-4 bottom-0'>
          <p className={`text-3xl  bottom-0  transform -translate-y-0 z-10 font-display  pointer-events-none pl-2 text-white md:text-5xl	xl:text-4xl `}>Men's Accesories </p>
          <BsArrowRight className={` transform transition-all  bottom-0 -translate-y-0 z-10 text-white text-3xl ${menAccarrow} md:text-5xl  xl:text-4xl`}/>
          </div>
      <img  className={`rounded-md  brightness-50`}  src={require('../src/Images/mensTop.jpg')} alt='Mens Accesories' />
      </div>
      <div onMouseEnter={() => {setMenCloArrow("translate-x-10")}} onMouseLeave={() => {setMenCloArrow("translate-x-0")}} className='relative cursor-pointer'>
        <div className='flex absolute gap-4 bottom-0'>
          <p className={`text-3xl  bottom-0  transform -translate-y-0 z-10 font-display pointer-events-none pl-2 text-white	md:text-5xl	xl:text-4xl `}>Men's Clothes</p>
          <BsArrowRight className={` transform transition-all  bottom-0 -translate-y-0 z-10 text-white text-3xl ${menCloarrow} md:text-5xl	xl:text-4xl`}/>
          </div>
      <img className={`rounded-md  brightness-50 	`}  src={require('../src/Images/mensMid.jpg')} alt='Mens Clothes' />
      </div>
      <div onMouseEnter={() => {setMenShoArrow("translate-x-10")}} onMouseLeave={() => {setMenShoArrow("translate-x-0")}} className='relative cursor-pointer'>
        <div className='flex absolute gap-4 bottom-0'>
          <p className={`bottom-0  transform -translate-y-0 z-10 font-display text-3xl pointer-events-none pl-2 text-white	md:text-5xl	xl:text-4xl `}>Men's Shoes</p>
          <BsArrowRight className={`transform transition-all bottom-0 -translate-y-0  z-10 text-white text-3xl ${menShoarrow} md:text-5xl	xl:text-4xl `}/>
          </div>
      <img className={`rounded-md  brightness-50`}  src={require('../src/Images/mensBottom.jpg')} alt='Mens Shoes' />
      </div>
      </div>
      <div className='flex flex-col max-w-xl gap-y-4'>
      <div onMouseEnter={() => {setWomenCloArrow("translate-x-10")}} onMouseLeave={() => {setWomenCloArrow("translate-x-0")}} className='relative cursor-pointer'>
        <div className='flex absolute gap-4 bottom-0'>
          <p className={`bottom-0  transform -translate-y-0 z-10 font-display text-3xl pointer-events-none pl-2 text-white md:text-5xl	xl:text-4xl `}>Women's Clothes</p>
          <BsArrowRight className={`transform transition-all bottom-0 -translate-y-0  z-10 text-white text-3xl ${womenCloarrow} md:text-5xl	xl:text-4xl`}/>
          </div>
      <img  className={`rounded-md  brightness-50 	`}  src={require('../src/Images/womenTop.jpg')} alt='Womens clothes' />
      </div>
      <div onMouseEnter={() => {setWomenShoArrow("translate-x-10")}} onMouseLeave={() => {setWomenShoArrow("translate-x-0")}} className='relative cursor-pointer'>
        <div className='flex absolute gap-4 bottom-0'>
          <p className={`bottom-0  transform -translate-y-0 z-10 font-display text-3xl pointer-events-none pl-2 text-white	md:text-5xl	xl:text-4xl `}>Women's Shoes</p>
          <BsArrowRight className={`transform transition-all  bottom-0 -translate-y-0  z-10 text-white text-3xl ${womenShoarrow} md:text-5xl	xl:text-4xl`}/>
          </div>
      <img   className={`rounded-md  brightness-50 	`}  src={require('../src/Images/womenBottom.jpg')} alt='Womens Shoes' />
      </div>
      </div>
      <img className={`hidden transform transition-all duration-1000 max-h-80 pr-8 -scale-x-100 self-start ${scrollTop} xl:flex`} src={require('../src/Images/image-from-rawpixel-id-6576111-original.png') } alt="Clouds" />
      </div>

  </div>

  )
}


export default Hero;