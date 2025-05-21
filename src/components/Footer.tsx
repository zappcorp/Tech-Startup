
import React from 'react';
import { cn } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="bg-zappcorp-darker relative overflow-hidden pt-16 pb-8">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 circuit-bg opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <a href="#" className="text-2xl font-bold gradient-text mb-4 inline-block">ZappCorp</a>
            <p className="text-white/70 mb-6 max-w-md">
              Transforming businesses through innovative technology solutions. We build tomorrow's tech today.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-zappcorp-purple to-zappcorp-blue"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-semibold mb-4">Company</h5>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'News', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-semibold mb-4">Services</h5>
            <ul className="space-y-3">
              {['Cloud Computing', 'AI Integration', 'Web & Mobile Apps', 'Tech Consulting'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-semibold mb-4">Resources</h5>
            <ul className="space-y-3">
              {['Blog', 'Documentation', 'Support', 'Partners'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className={cn(
          "h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-6"
        )}></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ZappCorp Technologies | Kadeba Oluwapelumi | All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center space-x-4 text-sm">
            <a href="#" className="text-white/50 hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
