import React, { useState } from "react";
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="HEFMA Logo" className="h-10 w-auto object-contain" />
          <span className="font-bold text-2xl text-blue-700 ml-2">HEFMA</span>
        </div>
        {/* Desktop Nav */}
        <nav className="space-x-6 hidden md:block">
          <Link to="/" className="hover:text-green-700">Home</Link>
          <Link to="/about" className="hover:text-green-700">About Us</Link>
          <Link to="/membership" className="hover:text-green-700">Membership</Link>
          <Link to="/events" className="hover:text-green-700">Events</Link>
          <Link to="/publications" className="hover:text-green-700">Publications</Link>
          <Link to="/blog" className="hover:text-green-700">Blog</Link>
          <Link to="/contact" className="hover:text-green-700">Contact</Link>
        </nav>
        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`block w-6 h-0.5 bg-green-700 mb-1 transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-green-700 mb-1 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-green-700 transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>
      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow px-4 pb-4 animate-fade-in z-40">
          <ul className="flex flex-col space-y-3">
            <li><Link to="/" className="block py-2 hover:text-green-700" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" className="block py-2 hover:text-green-700" onClick={() => setMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/membership" className="block py-2 hover:text-green-700" onClick={() => setMenuOpen(false)}>Membership</Link></li>
            <li><Link to="/events" className="block py-2 hover:text-green-700" onClick={() => setMenuOpen(false)}>Events</Link></li>
            <li><Link to="/publications" className="block py-2 hover:text-green-700" onClick={() => setMenuOpen(false)}>Publications</Link></li>
            <li><Link to="/blog" className="block py-2 hover:text-green-700" onClick={() => setMenuOpen(false)}>Blog</Link></li>
            <li><Link to="/contact" className="block py-2 hover:text-green-700" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
