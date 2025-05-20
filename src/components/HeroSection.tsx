
import React, { useEffect, useRef } from 'react';
import { CircuitBoard, Grid2x2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!gridRef.current) return;
      
      const { clientX, clientY } = event;
      const { left, top, width, height } = gridRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      gridRef.current.style.transform = `perspective(1000px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
    };
    
    const container = gridRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12" id="hero">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-zappcorp-darker"></div>
        <div className="absolute inset-0 circuit-bg opacity-20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-zappcorp-purple/20 rounded-full filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-zappcorp-blue/20 rounded-full filter blur-3xl animate-pulse-glow" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Building Tomorrow's</span> 
              <br/>
              <span className="text-white">Tech Today</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
              ZappCorp delivers cutting-edge solutions that transform ideas into reality. We're not just building technology — we're crafting the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-gradient-to-r from-zappcorp-purple to-zappcorp-blue text-white px-8 py-6 rounded-md hover:shadow-lg hover:shadow-zappcorp-purple/20 transition-all duration-300">
                Get Started
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 transition-all duration-300">
                Learn More
              </Button>
            </div>
          </div>
          
          <div ref={gridRef} className="relative transition-transform duration-300 ease-out h-64 md:h-96">
            <div className="glass-card p-6 h-full w-full flex flex-col items-center justify-center relative">
              <div className="relative z-10 flex flex-col items-center">
                <Grid2x2 size={48} className="mb-4 text-zappcorp-purple animate-float" />
                <CircuitBoard size={64} className="text-zappcorp-blue animate-float" style={{animationDelay: '1s'}} />
                <div className="mt-6 flex space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-3 h-3 rounded-full bg-zappcorp-teal animate-grid-fade" 
                      style={{ animationDelay: `${i * 0.2}s` }}
                    ></div>
                  ))}
                </div>
              </div>
              
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
          <div className="w-1 h-2 bg-white/70 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
