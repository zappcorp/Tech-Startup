
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled ? 'bg-zappcorp-dark/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-bold gradient-text">ZappCorp</a>
          </div>
          
          <div className="hidden md:block">
            <nav className="flex space-x-8">
              <a href="#about" className="text-white/80 hover:text-white transition-colors duration-300">About</a>
              <a href="#services" className="text-white/80 hover:text-white transition-colors duration-300">Services</a>
              <a href="#case-studies" className="text-white/80 hover:text-white transition-colors duration-300">Case Studies</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors duration-300">Contact</a>
            </nav>
          </div>
          
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-zappcorp-purple to-zappcorp-blue hover:opacity-90 transition-opacity duration-300">
              Get Started
            </Button>
          </div>
          
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zappcorp-dark/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <a href="#about" className="block py-2 px-3 text-white/80 hover:text-white" onClick={toggleMobileMenu}>About</a>
            <a href="#services" className="block py-2 px-3 text-white/80 hover:text-white" onClick={toggleMobileMenu}>Services</a>
            <a href="#case-studies" className="block py-2 px-3 text-white/80 hover:text-white" onClick={toggleMobileMenu}>Case Studies</a>
            <a href="#contact" className="block py-2 px-3 text-white/80 hover:text-white" onClick={toggleMobileMenu}>Contact</a>
            <div className="pt-2">
              <Button className="w-full bg-gradient-to-r from-zappcorp-purple to-zappcorp-blue hover:opacity-90 transition-opacity duration-300">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
