import React from "react";
import Logo from "./assets/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-[#f8f5f0] py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-20 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-120">
          {/* Left section: logo */}
          <div className="">
            <img
              src={Logo} // put your logo here
              alt="Logo"
              className="h-34 w-70"
            />
          </div>

          {/* Right section: text */}
          <div className="">
          <p className="text-2xl font-didact ">
            Your support helps us bring timely<br></br> diagnosis, compassionate care &<br></br>
            treatment to those who need it most.
          </p>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="mt-8 flex justify-center space-x-20 text-gray-700 text-sm font-didact">
          <a href="#" className="hover:text-gray-900">
            Home
          </a>
          <a href="#" className="hover:text-gray-900">
            Our Team
          </a>
          <a href="#" className="hover:text-gray-900">
            Our Impact
          </a>
          <a href="#" className="hover:text-gray-900">
            Our Work in Action
          </a>
          <a href="#" className="hover:text-gray-900">
            Flagship Initiatives
          </a>
          <a href="#" className="hover:text-gray-900">
            Support
          </a>
          <a href="#" className="hover:text-gray-900">
            Contact Us
          </a>
        </div>
        
        <div className="text-gray-700 font-didact text-center py-8">
          <p>&copy; Copyright. Asian Cancer Foundations. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
