import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaXmark } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/services", link: "Services" },
    { path: "/contact", link: "Contact" },
  ];
  return (
    <header className=" bg-black text-white fixed top-0 left-0 right-0">
      <nav className=" px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className=" text-xl font-bold text-white">
          Design<span className=" text-yellow-500">KA</span>
        </a>
        {/* //nav Items for desktop */}
        <ul className="hidden md:flex gap-12 text-lg">
          {navItems.map((value) => {
            const { path, link } = value;
            return (
              <li key={path} className=" text-white">
                <NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    } to={path}>{link}</NavLink>
              </li>
            );
          })}
        </ul>
        {/* menu icon */}
        <div className=" hidden text-white lg:flex gap-4 items-center">
          <a href="/" className=" hover:text-orange-500">
            <FaFacebook />
          </a>
          <a href="/" className=" hover:text-orange-500">
            <FaDribbble />
          </a>
          <a href="/" className=" hover:text-orange-500">
            <FaTwitter />
          </a>

          <buton className=" bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in-out cursor-pointer">
            Log in
          </buton>
        </div>

          {/* mobile menu btn for mobile device */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className=" cursor-pointer">
              {isMenuOpen ? <FaXmark className=" w-5 h-5"/> :<FaBars className=" w-5 h-5"/>}
              </button>
          </div>

      </nav>

          {/* menu Items for mobile device */}
          <div>
          <ul className={`md:hidden text-lg block space-y-4 px-4 py-2 mt-[86px] bg-white ${isMenuOpen ? 'fixed top-0 left-0 w-full transition-all duration-150 ease-in-out ':' hidden'}`} >
          {navItems.map((value) => {
            const { path, link } = value;
            return (
              <li key={path} className=" text-black">
                <NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    } onClick={toggleMenu} to={path}>{link}</NavLink>
              </li>
            );
          })}
        </ul>
          </div>

    </header>
  );
}

export default Navbar;
