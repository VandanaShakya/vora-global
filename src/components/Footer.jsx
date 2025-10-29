

import React from 'react';
import images from '../assets/images';

const Footer = () => {
  return (
    // The main container with the dark background color and padding.
    // The 'relative' class is added for any future absolute positioning needs, though not strictly required here.
    <footer className="bg-[#0D0D21] text-white py-8 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Logo and Navigation Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
          
          {/* Logo */}
         <div className="flex items-center gap-3 text-xl font-bold mb-4 sm:mb-0">
  <img
    src={images.logo}   
    alt="Data Solutions Logo"
    className="w-20 h-15 object-contain"
  />
 
</div>

          {/* Navigation Links */}
          <nav className="flex space-x-6 text-sm font-medium">
            <a href="#" className="text-gray-300 hover:text-white transition duration-300">
              Contact
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-300">
              Terms
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-300">
              Privacy Policy
            </a>
          </nav>
        </div>

        {/* Bottom Section: Copyright Notice */}
        <div className="text-center text-xs text-gray-400 pt-4">
          &copy; 2025 Vora Global. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;