import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to close menu
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`transition-all duration-300 sticky top-0 z-50 bg-[#08448E] shadow-md 
        ${scrolled ? 'py-2' : 'py-4'} px-4 md:px-6 flex justify-between items-center`}
    >
      {/* Logo */}
        <div className="flex items-center gap-3">
        <a href="https://unison-w.netlify.app/">
            <img
            src="/unison.png"
            alt="Unison Logo"
            className={`transition-all duration-300 rounded-full 
                ${scrolled ? 'h-10 w-10' : 'h-12 w-12'}`}
            />
        </a>
        </div>


      {/* Mobile menu button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-white focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Navigation Links */}
      <nav
        className={`space-y-4 md:space-y-0 md:space-x-6 text-sm font-medium absolute md:static 
        top-full left-0 w-full md:w-auto bg-[#08448E] md:bg-transparent px-6 md:px-0 py-4 md:py-0 
        transition-all duration-300 text-white ${menuOpen ? 'block' : 'hidden'} md:flex`}
      >
        <a
          href="#features"
          onClick={closeMenu}
          className="hover:underline hover:text-yellow-300 block md:inline"
        >
          Services
        </a>
        <a
          href="#about"
          onClick={closeMenu}
          className="hover:underline hover:text-yellow-300 block md:inline"
        >
          About
        </a>
        <a
          href="#contact"
          onClick={closeMenu}
          className="hover:underline hover:text-yellow-300 block md:inline"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};
