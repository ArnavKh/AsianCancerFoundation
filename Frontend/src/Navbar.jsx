import React, { useState } from "react";
import Logo from "./assets/Logo.png";
import { Link } from "react-router-dom";
import DonateButton from "./DonateButton";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#f8f5f0] border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-14 w-30" />
          </div>
          </Link>

          {/* Desktop Links */}
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

          {/* Desktop Donate Button */}
          <div className="hidden md:flex">
            <DonateButton />
          </div>

          {/* Mobile Hamburger + Donate */}
          <div className="md:hidden flex items-center space-x-2 px-3">
            <DonateButton />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black focus:outline-none"
            >
              {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#f8f5f0] px-4 pb-4 space-y-3 text-center">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-black hover:text-gray-600"
          >
            Home
          </Link>
          <Link
            to="/ourteam"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-black hover:text-gray-600"
          >
            Our Team
          </Link>
          <Link
            to="/ourimpact"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-black hover:text-gray-600"
          >
            Our Impact
          </Link>
          <Link
            to="/workinaction"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-black hover:text-gray-600"
          >
            Our Work in Action
          </Link>
          <Link
            to="/flagshipninit"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-black hover:text-gray-600"
          >
            Flagship Initiatives
          </Link>
          <Link
            to="/support"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-black hover:text-gray-600"
          >
            Support
          </Link>
          <Link
            to="/contactus"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-black hover:text-gray-600"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
