
import React, { useState } from 'react';
import { Menu, X, Book, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center">
            <Book className="h-8 w-8 text-learnmate-purple" />
            <span className="ml-2 text-2xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-learnmate-purple to-learnmate-blue">
              LearnMate<span className="text-learnmate-teal">+</span>
            </span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-learnmate-purple transition-colors font-medium">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-learnmate-purple transition-colors font-medium">
            About
          </Link>
          <Link to="/features" className="text-gray-700 hover:text-learnmate-purple transition-colors font-medium">
            Features
          </Link>
          <Link to="/demo" className="text-gray-700 hover:text-learnmate-purple transition-colors font-medium">
            Try Demo
          </Link>
          <Link to="/download" className="text-gray-700 hover:text-learnmate-purple transition-colors font-medium flex items-center">
            <Download className="h-4 w-4 mr-1" /> Download
          </Link>
          <Link to="/standalone" className="text-gray-700 hover:text-learnmate-purple transition-colors font-medium">
            Get Standalone
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-learnmate-purple transition-colors font-medium">
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button 
            className="md:hidden p-2 rounded-full hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-learnmate-purple"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          <Link 
            to="/login" 
            className="hidden md:block bg-learnmate-purple hover:bg-learnmate-purple/90 text-white py-2 px-4 rounded-md shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-learnmate-purple focus-visible:ring-offset-2"
          >
            Login
          </Link>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <Link to="/" className="py-2 text-gray-700 hover:text-learnmate-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="py-2 text-gray-700 hover:text-learnmate-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link to="/features" className="py-2 text-gray-700 hover:text-learnmate-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Features
            </Link>
            <Link to="/demo" className="py-2 text-gray-700 hover:text-learnmate-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Try Demo
            </Link>
            <Link to="/download" className="py-2 text-gray-700 hover:text-learnmate-purple transition-colors flex items-center" onClick={() => setMobileMenuOpen(false)}>
              <Download className="h-4 w-4 mr-2" /> Download
            </Link>
            <Link to="/standalone" className="py-2 text-gray-700 hover:text-learnmate-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Get Standalone
            </Link>
            <Link to="/contact" className="py-2 text-gray-700 hover:text-learnmate-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <Link to="/login" className="bg-learnmate-purple hover:bg-learnmate-purple/90 text-white py-2 px-4 w-full text-center rounded-md shadow-sm transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Login
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
