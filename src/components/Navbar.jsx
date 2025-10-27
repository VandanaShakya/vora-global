import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import images from '../assets/images';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle the mobile menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    // Fixed Navbar Container
    <nav
      className={
        // fixed top + full width + z-index so it sits above hero
        `fixed top-0 left-0 w-full z-[60] transition-colors duration-300 ease-out ` +
        // change background based on scrolled state
        (scrolled
          ? 'bg-black bg-opacity-95 shadow-lg'
          : 'bg-transparent')
      }
      aria-label="Primary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src={images.logo}
              alt="Data Solutions Logo"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop Links (Hidden on small screens) */}
          <div className="hidden sm:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-yellow-500 text-sm font-medium transition duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button (Hidden on larger screens) */}
          <div className="-mr-2 flex sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700/40 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition duration-300"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content (Conditionally rendered) */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
