import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-blue-600 text-white px-8 py-4 flex justify-between items-center shadow">
      <div className="text-2xl font-bold">Logo</div>
      <ul className="flex space-x-8">
        <li className="hover:text-blue-200 cursor-pointer">Home</li>
        <li className="hover:text-blue-200 cursor-pointer">About</li>
        <li className="hover:text-blue-200 cursor-pointer">Services</li>
        <li className="hover:text-blue-200 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
