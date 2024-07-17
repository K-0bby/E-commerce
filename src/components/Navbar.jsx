import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Search, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };


  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { title: "Home", path: "/" },
    { title: "Shop", path: "/Shop" },
    { title: "About Us", path: "/About" },
    { title: "Contact", path: "/Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-6 xl:px-24 transition-all duration-300 ${
      isScrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'
    }`}>
      <nav className="flex justify-between items-center container md:py-2 pt-6 pb-3">
        <Link to="/" className="">
          <h2 className="font-bold text-3xl tracking-[3px] font-cormorant italic">Chic</h2>
          <h6 className="font-montserrat text-xs">En Vogue</h6>
          <div className='bg-[#ff7f50] w-10 h-[2px] mt-2 mb-3 mx-auto'></div>
        </Link>

        {/* Nav items and icons */}
        <div className="flex items-center gap-8">
          <ul className="hidden lg:flex items-center gap-8 font-montserrat">
            {navItems.map(({ title, path }) => (
              <li key={title} className="hover:text-orange-500">
                <NavLink to={path} className={({ isActive }) => (isActive ? "active" : "")}>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex items-center gap-6 font-montserrat">
            <Search className="w-4 h-4 cursor-pointer" onClick={toggleSearch} />

            <Link to="/" className="flex items-center gap-3">
              <User className="w-4 h-4" />
            </Link>
            <Link to="/" className="flex items-center gap-3">
              <ShoppingCart className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile sidebar menu */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-black text-white transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="text-center p-10 flex flex-col gap-4">
          {navItems.map(({ title, path }) => (
            <li key={title} className="hover:text-orange-500 my-3 cursor-pointer">
              <Link to={path} onClick={toggleMenu}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
