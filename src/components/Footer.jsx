import React from "react";

const Footer = () => (
  <footer className="bg-blue-900 text-gray-100 pt-10 pb-4 mt-12 border-t border-blue-800">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        {/* About HEFMA */}
        <div className="flex-1 mb-6 md:mb-0">
          <h3 className="font-bold text-lg text-green-400 mb-2">About HEFMA</h3>
          <p className="text-gray-200 text-sm">
            The Hospitality Engineers & Facilities Management Association (HEFMA) is dedicated to advancing the profession, supporting members, and promoting excellence in hospitality engineering and facilities management across the region.
          </p>
        </div>
        {/* Quick Links */}
        <div className="flex-1 mb-6 md:mb-0">
          <h3 className="font-bold text-lg text-green-400 mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/about" className="hover:text-green-300">About Us</a></li>
            <li><a href="/membership" className="hover:text-green-300">Membership</a></li>
            <li><a href="/events" className="hover:text-green-300">Events & Programs</a></li>
            <li><a href="/publications" className="hover:text-green-300">Knowledge Hub</a></li>
            <li><a href="/community" className="hover:text-green-300">Community</a></li>
            <li><a href="/partners" className="hover:text-green-300">Partners</a></li>
            <li><a href="/memberportal" className="hover:text-green-300">Member Portal</a></li>
            <li><a href="/contact" className="hover:text-green-300">Contact</a></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div className="flex-1 mb-6 md:mb-0">
          <h3 className="font-bold text-lg text-green-400 mb-2">Contact</h3>
          <ul className="text-sm text-gray-200 space-y-1">
            <li><span className="font-semibold">Address:</span> Nairobi, Kenya</li>
            <li><span className="font-semibold">Email:</span> <a href="mailto:info@hefma.org" className="hover:text-green-300">info@hefma.org</a></li>
            <li><span className="font-semibold">Phone:</span> <a href="tel:+254700000000" className="hover:text-green-300">+254 700 000000</a></li>
          </ul>
          <div className="flex space-x-4 mt-3">
            <a href="https://facebook.com/hefma" className="hover:text-green-400" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.593 0 0 .592 0 1.326v21.348C0 23.408.593 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.408 24 22.674V1.326C24 .592 23.407 0 22.675 0"/></svg>
            </a>
            <a href="https://instagram.com/hefma" className="hover:text-green-400" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608C4.515 2.565 5.783 2.294 7.149 2.232 8.415 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.782.127 4.635.396 3.678 1.354c-.957.957-1.226 2.104-1.283 3.374C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.613.057 1.27.326 2.417 1.283 3.374.957.957 2.104 1.226 3.374 1.283C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.27-.057 2.417-.326 3.374-1.283.957-.957 1.226-2.104 1.283-3.374.058-1.281.07-1.69.07-7.613 0-5.923-.012-6.332-.07-7.613-.057-1.27-.326-2.417-1.283-3.374C19.365.396 18.218.127 16.948.07 15.668.012 15.259 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A3.999 3.999 0 1 1 12 8a3.999 3.999 0 0 1 0 7.999zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>
            </a>
            <a href="https://linkedin.com/company/hefma" className="hover:text-green-400" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.85-3.037-1.853 0-2.135 1.445-2.135 2.939v5.667H9.354V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.37-1.849 3.601 0 4.266 2.368 4.266 5.455v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z"/></svg>
            </a>
            <a href="https://x.com/hefma" className="hover:text-green-400" target="_blank" rel="noopener noreferrer" aria-label="X">
              <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M22.162 0h-20.324c-.999 0-1.838.839-1.838 1.838v20.324c0 .999.839 1.838 1.838 1.838h20.324c.999 0 1.838-.839 1.838-1.838v-20.324c0-.999-.839-1.838-1.838-1.838zm-3.944 17.779h-2.08l-2.86-4.073-2.86 4.073h-2.08l3.947-5.629-3.947-5.62h2.08l2.86 4.073 2.86-4.073h2.08l-3.947 5.62 3.947 5.629z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-800 mt-8 pt-4 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
        <div>
          &copy; {new Date().getFullYear()} <span className="font-semibold text-green-400">HEFMA</span>. All rights reserved.
        </div>
        <div className="mt-2 md:mt-0">
          Designed & developed by HEFMA Web Team.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
