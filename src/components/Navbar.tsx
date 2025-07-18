import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { title: 'Services', href: '/#features' },
  { title: 'About', href: '/#about' },
  { title: 'Contact', href: '/#contact' },
];

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

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-2 bg-slate-900/50 backdrop-blur-lg shadow-xl' : 'py-4 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <a href="https://unison-w.netlify.app/" className="flex-shrink-0">
            <img
              src="/unison.png"
              alt="Unison Logo"
              className={`transition-all duration-300 rounded-full transform hover:scale-110 ${
                scrolled ? 'h-12 w-12' : 'h-16 w-16'
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-white rounded-full hover:bg-white/10 transition-colors"
              >
                {link.title}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-lg md:hidden"
          >
            <div className="flex justify-end p-5">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                <X className="w-7 h-7" />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={toggleMenu}
                  className="text-3xl font-semibold text-white hover:text-yellow-300 transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};