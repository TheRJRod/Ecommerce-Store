function Navbar() {
  return(
    <nav className='flex justify-around place-items-center py-10'>
      <img className='max-h-20' src={require('./r2logo.png')} alt='Company logo' />
      <ul className="flex gap-x-8 font-display text-2xl ">
        <li className='hover:border-b-gray-700 border-transparent border-2'>Home</li>
        <li className='hover:border-b-gray-700 border-transparent border-2'>About Us</li>
        <li className='hover:border-b-gray-700 border-transparent border-2'>Products</li>
        <li className='hover:border-b-gray-700 border-transparent border-2'>Contact</li>
      </ul>
  </nav>
  ) 
}

export default Navbar;