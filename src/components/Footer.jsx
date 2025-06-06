import React from "react";

const Footer = () => (
  <footer className="bg-gray-100 text-center py-6 mt-12 border-t">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-2 md:mb-0">
          <span className="font-semibold text-green-700">&copy; {new Date().getFullYear()} HEFMA</span> | All rights reserved.
        </div>
        <div className="space-x-4">
          <a href="#" className="hover:text-green-700">Facebook</a>
          <a href="#" className="hover:text-green-700">Instagram</a>
          <a href="#" className="hover:text-green-700">LinkedIn</a>
          <a href="#" className="hover:text-green-700">X</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
