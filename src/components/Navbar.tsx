import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Find the section currently in view
      let current = "";
      for (const link of NAV_LINKS) {
        const section = document.querySelector(link.href);
        if (section) {
          const rect = (section as HTMLElement).getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = link.href;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
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
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-white/80 hover:text-white transition-colors duration-300 group",
                    activeSection === link.href && "text-white font-semibold"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-zappcorp-purple to-zappcorp-blue transition-all duration-300",
                      activeSection === link.href ? "w-full" : "w-0",
                      "group-hover:w-full group-focus:w-full"
                    )}
                  ></span>
                </a>
              ))}
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
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "block py-2 px-3 text-white/80 hover:text-white",
                  activeSection === link.href && "text-white font-semibold"
                )}
                onClick={toggleMobileMenu}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              {/* <Button className="w-full bg-gradient-to-r from-zappcorp-purple to-zappcorp-blue hover:opacity-90 transition-opacity duration-300">
                Get Started
              </Button> */}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;