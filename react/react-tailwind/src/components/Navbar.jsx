import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  const popupMenu = () => {
    return setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="w-full py-2 text-sm flex bg-black text-white items-center justify-between sm:justify-center gap-2">
        <span className="xs:w-full text-center">Signup and get 10% off</span>
        <FaAngleDown className="cursor-pointer" onClick={popupMenu} />
      </div>
      {isOpen ? (
        <>
          <div className="absolute top-0 w-full sm:flex-row flex-col justify-around items-center h-screen sm:h-1/2 flex bg-white">
            <button
              onClick={popupMenu}
              className="absolute top-8 right-8 cursor-pointer"
            >
              X
            </button>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
          </div>
        </>
      ) : null}
      <nav className="w-full bg-blue-600 text-white px-8 py-4 flex justify-between items-center shadow">
        <div className="text-2xl font-bold">Logo</div>
        <ul className="flex space-x-8">
          <Link to={"/"} className="hover:text-blue-200 cursor-pointer">
            Home
          </Link>
          <Link to={"/about"} className="hover:text-blue-200 cursor-pointer">
            About
          </Link>
          <Link to={"/services"} className="hover:text-blue-200 cursor-pointer">
            Services
          </Link>
          <Link to={"/contact"} className="hover:text-blue-200 cursor-pointer">
            Contact
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
