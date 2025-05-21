
import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
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
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => {
                const icons: Record<string, JSX.Element> = {
                  twitter: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-zappcorp-purple" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 5.924a8.94 8.94 0 0 1-2.357.646A4.11 4.11 0 0 0 21.448 4.1a8.224 8.224 0 0 1-2.605.996A4.106 4.106 0 0 0 11.034 9.03a11.65 11.65 0 0 1-8.457-4.287a4.106 4.106 0 0 0 1.27 5.482A4.073 4.073 0 0 1 2 9.097v.052a4.106 4.106 0 0 0 3.292 4.025a4.09 4.09 0 0 1-1.852.07a4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 19.13a11.616 11.616 0 0 0 6.29 1.845c7.547 0 11.675-6.155 11.675-11.49c0-.175-.004-.349-.012-.522A8.18 8.18 0 0 0 22 5.924z" fill="currentColor"/>
                    </svg>
                  ),
                  facebook: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-zappcorp-purple" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788c1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" fill="currentColor"/>
                    </svg>
                  ),
                  instagram: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-zappcorp-purple" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07c1.366.062 2.633.334 3.608 1.308c.974.974 1.246 2.241 1.308 3.608c.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608c-.974.974-2.241 1.246-3.608 1.308c-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308c-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608c.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072c-1.676.077-3.17.73-4.343 1.903C1.537 3.148.884 4.642.807 6.318C.748 7.598.735 8.007.735 12s.013 4.402.072 5.682c.077 1.676.73 3.17 1.903 4.343c1.173 1.173 2.667 1.826 4.343 1.903c1.28.059 1.689.072 5.682.072s4.402-.013 5.682-.072c1.676-.077 3.17-.73 4.343-1.903c1.173-1.173 1.826-2.667 1.903-4.343c.059-1.28.072-1.689.072-5.682s-.013-4.402-.072-5.682c-.077-1.676-.73-3.17-1.903-4.343C20.17.803 18.676.15 17 .073C15.72.014 15.311 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12A6.162 6.162 0 0 0 12 18.162A6.162 6.162 0 0 0 18.162 12A6.162 6.162 0 0 0 12 5.838zm0 10.162A3.999 3.999 0 1 1 12 8.001a3.999 3.999 0 0 1 0 7.999zm6.406-11.845a1.44 1.44 0 1 1-2.88 0a1.44 1.44 0 0 1 2.88 0z" fill="currentColor"/>
                    </svg>
                  ),
                  linkedin: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-zappcorp-purple" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037c-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.369-1.849c3.602 0 4.267 2.368 4.267 5.455v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124a2.062 2.062 0 0 1 0 4.124zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z" fill="currentColor"/>
                    </svg>
                  ),
                };
                return (
                  <a
                    key={social}
                    href="#"
                    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
                  >
                    <span className="sr-only">{social}</span>
                    {icons[social]}
                  </a>
                );
              })}
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
