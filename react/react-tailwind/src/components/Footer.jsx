import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-600 text-white py-4 flex flex-col md:flex-row justify-between items-center px-8">
      <div className="text-lg font-semibold">
        © 2025 MyCompany. All rights reserved.
      </div>
      <div className="flex space-x-6 mt-2 md:mt-0">
        <a href="#" className="hover:text-blue-200">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-blue-200">
          Terms
        </a>
        <a href="#" className="hover:text-blue-200">
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
