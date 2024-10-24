import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { navLinks } from "../constants";
const Navbar = () => {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.querySelector(".navbarcon").style.backgroundColor = "#171717";
    } else {
      document.querySelector(".navbarcon").style.backgroundColor =
        "rgba(0, 0, 0, 0)";
      document.querySelector(".sm").style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
  }


  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  return (
    
    <div className='  navbarcon flex items-center justify-between mx-auto  px-10   z-40 text-white fixed w-full '>
      {/* Logo */}
      <div className=' flex text-2xl  uppercase font-bold text-white py-4 '  >
      <p>REGANYDEV</p>
      </div>
      

      {/* Desktop Navigation */}

      
      <div className='hidden md:block flex-grow'>

      <ul className='flex items-center justify-center gap-6' >
      {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className=' lg:text-[1.2rem] md:text-[1rem] p-5   cursor-pointer duration-300 hover:text-purple-400'
              >
                {item.label}
              </a>
            </li>
          
        ))}
      </ul>
      </div>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-custom-dark ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-2xl font-bold text-white m-4'>REGANYDEV</h1>

        {/* Mobile Navigation Items */}
        
        {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='p-4 text-2xl    hover:text-[#9b59b6] cursor-pointer'
              >
                {item.label}
              </a>
            </li>
        ))}
      </ul>
    </div>
    
  );
};

export default Navbar;