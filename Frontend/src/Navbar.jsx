import React from "react";
import Logo from "./assets/Logo.png"
import { FaRibbon } from "react-icons/fa";
import { Link } from "react-router-dom";
import DonateButton from "./DonateButton";

const Navbar = () => {
  return (
    <nav className="bg-[#f8f5f0] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="">
            <img
              src={Logo}
              alt="Logo"
              className="h-14 w-30"
            />
          </div>

          <div className="hidden md:flex space-x-12 text-black text-sm font-visby">
              <Link to="/" className="hover:text-gray-600">
                Home
              </Link>
              <Link to="/ourteam" className="hover:text-gray-600">
                Our Team
              </Link>
              <Link to="/ourimpact" className="hover:text-gray-600">
                Our Impact
              </Link>
              <Link to="/workinaction" className="hover:text-gray-600">
                Our Work in Action
              </Link>
              <Link to="/flagshipninit" className="hover:text-gray-600">
                Flagship Initiatives
              </Link>
              <Link to="/support" className="hover:text-gray-600">
                Support
              </Link>
              <Link to="/contactus" className="hover:text-gray-600">
                Contact Us
              </Link>
          </div>

          <div className="hidden md:flex">
            <DonateButton/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
