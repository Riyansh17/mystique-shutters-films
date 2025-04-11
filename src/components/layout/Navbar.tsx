"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Stories', href: '/stories' },
    { title: 'Films', href: '/films' },
    { title: 'Blog', href: '/blog' },
    { title: 'Enquiry', href: '/enquiry' },
  ];

  return (
    <header className={`fixed w-full z-30 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-white font-Alta text-2xl">
          Mystique Shutters
          <br/><samp className='font-alta text-2x1'>F I L M S</samp>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <Link 
              key={link.title} 
              href={link.href}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map(link => (
                <Link 
                  key={link.title} 
                  href={link.href}
                  className="text-white hover:text-gray-300 py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;