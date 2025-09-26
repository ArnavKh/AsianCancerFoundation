import React from "react";
import Logo from "./assets/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#f8f5f0] py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={Logo}
              alt="Logo"
              className="h-20 w-auto object-contain"
            />
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <p className="text-xl sm:text-2xl font-didact text-gray-800 leading-relaxed">
              Your support helps us bring timely<br />
              diagnosis, compassionate care &<br />
              treatment to those who need it most.
            </p>
          </div>
        </div>

        {/* Navigation links */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-gray-700 text-sm font-didact">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <Link to="/ourteam" className="hover:text-gray-900">Our Team</Link>
          <Link to="/ourimpact" className="hover:text-gray-900">Our Impact</Link>
          <Link to="/workinaction" className="hover:text-gray-900">Our Work in Action</Link>
          <Link to="/flagshipninit" className="hover:text-gray-900">Flagship Initiatives</Link>
          <Link to="/support" className="hover:text-gray-900">Support</Link>
          <Link to="/contactus" className="hover:text-gray-900">Contact Us</Link>
          <Link to="/privacypolicy" className="hover:text-gray-900">Privacy Policy</Link>
        </div>

        {/* Copyright */}
        <div className="text-gray-700 font-didact text-center pt-8">
          <p>&copy; {new Date().getFullYear()} Asian Cancer Foundations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
