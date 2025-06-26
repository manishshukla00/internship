import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
