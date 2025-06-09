import React, { useState, useRef } from "react";
import logo from '../assets/logo.jpg';
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // Desktop dropdown states
  const [aboutOpen, setAboutOpen] = useState(false);
  const [membershipOpen, setMembershipOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  // Dropdown close timeout refs
  const aboutTimeout = useRef();
  const membershipTimeout = useRef();
  const resourcesTimeout = useRef();
  // Mobile dropdown states
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [membershipDropdown, setMembershipDropdown] = useState(false);
  const [resourcesDropdown, setResourcesDropdown] = useState(false);

  return (
    <header className="bg-blue-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="HEFMA Logo" className="h-10 w-auto object-contain" />
          <span className="font-bold text-2xl text-white ml-2">HEFMA</span>
        </div>
        {/* Desktop Nav */}
        <nav className="space-x-6 hidden md:flex items-center">
          <Link to="/" className="text-white hover:text-green-300">Home</Link>
          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearTimeout(aboutTimeout.current);
              setAboutOpen(true);
            }}
            onMouseLeave={() => {
              aboutTimeout.current = setTimeout(() => setAboutOpen(false), 250);
            }}
            onFocus={() => setAboutOpen(true)}
            onBlur={() => setAboutOpen(false)}
          >
            <button
              className="text-white hover:text-green-300 focus:outline-none"
              aria-haspopup="true"
              aria-expanded={aboutOpen}
            >
              About <span className="ml-1">▼</span>
            </button>
            {aboutOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white rounded shadow-lg z-50">
                <Link to="/about" className="block px-4 py-2 text-blue-900 hover:bg-blue-100">About Us</Link>
                <Link to="/governance" className="block px-4 py-2 text-blue-900 hover:bg-blue-100">Governance & Leadership</Link>
                <Link to="/advocacy" className="block px-4 py-2 text-blue-900 hover:bg-blue-100">Advocacy & Sustainability</Link>
                <Link to="/community" className="block px-4 py-2 text-blue-900 hover:bg-blue-100">Community Engagement</Link>
              </div>
            )}
          </div>
          {/* Membership Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearTimeout(membershipTimeout.current);
              setMembershipOpen(true);
            }}
            onMouseLeave={() => {
              membershipTimeout.current = setTimeout(() => setMembershipOpen(false), 250);
            }}
            onFocus={() => setMembershipOpen(true)}
            onBlur={() => setMembershipOpen(false)}
          >
            <button
              className="text-white hover:text-green-300 focus:outline-none"
              aria-haspopup="true"
              aria-expanded={membershipOpen}
            >
              Membership <span className="ml-1">▼</span>
            </button>
            {membershipOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded shadow-lg z-50">
                <Link to="/membership" className="block px-4 py-2 text-blue-900 hover:bg-blue-100">Membership</Link>
                <Link to="/memberportal" className="block px-4 py-2 text-blue-900 hover:bg-blue-100">Member Portal</Link>
              </div>
            )}
          </div>
          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearTimeout(resourcesTimeout.current);
              setResourcesOpen(true);
            }}
            onMouseLeave={() => {
              resourcesTimeout.current = setTimeout(() => setResourcesOpen(false), 250);
            }}
            onFocus={() => setResourcesOpen(true)}
            onBlur={() => setResourcesOpen(false)}
          >
            <button
              className="text-white hover:text-green-300 focus:outline-none"
              aria-haspopup="true"
              aria-expanded={resourcesOpen}
            >
              Resources <span className="ml-1">▼</span>
            </button>
            {resourcesOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white rounded shadow-lg z-50">
                <Link to="/events" className="block px-4 py-2 text-blue-900 hover:bg-blue-100">Events & Programs</Link>
                <Link to="/publications" className="block px-4 py-2 text-blue-900 hover:bg-blue-100">Knowledge Hub</Link>
                <Link to="/blog" className="block px-4 py-2 text-blue-900 hover:bg-blue-100">News & Insights</Link>
                <Link to="/partners" className="block px-4 py-2 text-blue-900 hover:bg-blue-100">Partners & Sponsors</Link>
              </div>
            )}
          </div>
          <Link to="/contact" className="text-white hover:text-green-300">Contact</Link>
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
        <nav className="md:hidden bg-blue-900 shadow px-4 pb-4 animate-fade-in z-40">
          {/* Mobile Dropdown States */}
          {(() => {
            // Hooks must be at the top, so we use a workaround for code insertion
            // We'll add these hooks at the top of the component in a follow-up edit
            return null;
          })()}
          <ul className="flex flex-col space-y-3">
            <li><Link to="/" className="block py-2 text-white hover:text-green-300" onClick={() => setMenuOpen(false)}>Home</Link></li>
            {/* About Dropdown */}
            <li>
              <button onClick={() => setAboutDropdown(!aboutDropdown)} className="w-full text-left py-2 text-white hover:text-green-300 flex items-center justify-between">
                About <span>{aboutDropdown ? '▲' : '▼'}</span>
              </button>
              {aboutDropdown && (
                <ul className="ml-4 mt-1 space-y-1">
                  <li><Link to="/about" className="block py-2 text-blue-200 hover:text-green-300" onClick={() => setMenuOpen(false)}>About Us</Link></li>
                  <li><Link to="/governance" className="block py-2 text-blue-200 hover:text-green-300" onClick={() => setMenuOpen(false)}>Governance & Leadership</Link></li>
                  <li><Link to="/advocacy" className="block py-2 text-blue-200 hover:text-green-300" onClick={() => setMenuOpen(false)}>Advocacy & Sustainability</Link></li>
                  <li><Link to="/community" className="block py-2 text-blue-200 hover:text-green-300" onClick={() => setMenuOpen(false)}>Community Engagement</Link></li>
                </ul>
              )}
            </li>
            {/* Membership Dropdown */}
            <li>
              <button onClick={() => setMembershipDropdown(!membershipDropdown)} className="w-full text-left py-2 text-white hover:text-green-300 flex items-center justify-between">
                Membership <span>{membershipDropdown ? '▲' : '▼'}</span>
              </button>
              {membershipDropdown && (
                <ul className="ml-4 mt-1 space-y-1">
                  <li><Link to="/membership" className="block py-2 text-blue-200 hover:text-green-300" onClick={() => setMenuOpen(false)}>Membership</Link></li>
                  <li><Link to="/memberportal" className="block py-2 text-blue-200 hover:text-green-300" onClick={() => setMenuOpen(false)}>Member Portal</Link></li>
                </ul>
              )}
            </li>
            {/* Resources Dropdown */}
            <li>
              <button onClick={() => setResourcesDropdown(!resourcesDropdown)} className="w-full text-left py-2 text-white hover:text-green-300 flex items-center justify-between">
                Resources <span>{resourcesDropdown ? '▲' : '▼'}</span>
              </button>
              {resourcesDropdown && (
                <ul className="ml-4 mt-1 space-y-1">
                  <li><Link to="/events" className="block py-2 text-blue-200 hover:text-green-300" onClick={() => setMenuOpen(false)}>Events & Programs</Link></li>
                  <li><Link to="/publications" className="block py-2 text-blue-200 hover:text-green-300" onClick={() => setMenuOpen(false)}>Knowledge Hub</Link></li>
                  <li><Link to="/blog" className="block py-2 text-blue-200 hover:text-green-300" onClick={() => setMenuOpen(false)}>News & Insights</Link></li>
                  <li><Link to="/partners" className="block py-2 text-blue-200 hover:text-green-300" onClick={() => setMenuOpen(false)}>Partners & Sponsors</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/contact" className="block py-2 text-white hover:text-green-300" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
