import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';
import Footer from './Footer';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex flex-col items-center space-y-0.5" onClick={closeMenu}>
              <span className="flex items-center space-x-3">
                <img src="/GDF_icon.jpeg" alt="Green Dream Foundation Logo" className="h-12 w-12 object-contain" />
                <span className="flex flex-col items-start">
                  <span className="text-xl font-bold text-gray-900">
                    Green Dream Foundation
                    <sup className="align-super text-[10px] ml-0.5">TM</sup>
                  </span>
                  <span className="text-xs text-gray-500 font-medium text-left ml-3">Sustainability | Circularity | Resilience</span>
                </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium">
                Home
              </Link>
              <Link to="/projects" className="text-gray-700 hover:text-primary-600 font-medium">
                Projects
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-primary-600 font-medium">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary-600 font-medium">
                Contact
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700 hover:text-primary-600 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
              <div className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-primary-600 font-medium"
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link
                  to="/projects"
                  className="text-gray-700 hover:text-primary-600 font-medium"
                  onClick={closeMenu}
                >
                  Projects
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-primary-600 font-medium"
                  onClick={closeMenu}
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-primary-600 font-medium"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;