import React, { useState } from "react";
import Logo from "./assets/Logo.png";
import { Link } from "react-router-dom";
import DonateButton from "./DonateButton";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#f8f5f0] border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-14 w-auto" />
          </Link>

          {/* Desktop Links – hidden below 1024px (lg), spacing EXACTLY like your original */}
          <div className="hidden lg:flex items-center space-x-12 text-black text-sm font-visby">
            <Link to="/" className="hover:text-gray-600 transition">
              Home
            </Link>
            <Link to="/ourteam" className="hover:text-gray-600 transition">
              Our Team
            </Link>
            <Link to="/ourimpact" className="hover:text-gray-600 transition">
              Our Impact
            </Link>
            <Link to="/workinaction" className="hover:text-gray-600 transition">
              Our Work in Action
            </Link>
            <Link to="/flagshipninit" className="hover:text-gray-600 transition">
              Flagship Initiatives
            </Link>
            <Link to="/support" className="hover:text-gray-600 transition">
              Support
            </Link>
            <Link to="/contactus" className="hover:text-gray-600 transition">
              Contact Us
            </Link>

            {/* Donate button – same spacing as original */}
            <div className="ml-8">
              <DonateButton />
            </div>
          </div>

          {/* Mobile Hamburger + Donate – appears below 1024px */}
          <div className="flex items-center space-x-3 lg:hidden">
            <DonateButton />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#f8f5f0] border-t border-gray-200">
          <div className="px-6 py-4 space-y-3 text-center font-visby text-sm">
            <Link to="/" onClick={() => setMenuOpen(false)} className="block py-3 text-black hover:text-gray-600 transition">
              Home
            </Link>
            <Link to="/ourteam" onClick={() => setMenuOpen(false)} className="block py-3 text-black hover:text-gray-600 transition">
              Our Team
            </Link>
            <Link to="/ourimpact" onClick={() => setMenuOpen(false)} className="block py-3 text-black hover:text-gray-600 transition">
              Our Impact
            </Link>
            <Link to="/workinaction" onClick={() => setMenuOpen(false)} className="block py-3 text-black hover:text-gray-600 transition">
              Our Work in Action
            </Link>
            <Link to="/flagshipninit" onClick={() => setMenuOpen(false)} className="block py-3 text-black hover:text-gray-600 transition">
              Flagship Initiatives
            </Link>
            <Link to="/support" onClick={() => setMenuOpen(false)} className="block py-3 text-black hover:text-gray-600 transition">
              Support
            </Link>
            <Link to="/contactus" onClick={() => setMenuOpen(false)} className="block py-3 text-black hover:text-gray-600 transition">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;