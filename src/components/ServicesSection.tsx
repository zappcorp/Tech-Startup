
import React, { useState } from 'react';
import { Cloud, Database, Smartphone, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    id: 1,
    title: 'Cloud Computing',
    description: 'Scalable cloud solutions designed for your growing business needs. Our infrastructure ensures reliability, security, and performance.',
    icon: Cloud,
    color: 'from-zappcorp-purple to-zappcorp-blue',
    features: ['Auto-scaling infrastructure', 'Managed security', 'Multi-region deployment', '24/7 monitoring']
  },
  {
    id: 2,
    title: 'AI Integration',
    description: 'Harness the power of artificial intelligence to optimize operations, gain insights, and create intelligent applications.',
    icon: Database,
    color: 'from-zappcorp-blue to-zappcorp-teal',
    features: ['Custom ML models', 'Predictive analytics', 'Natural language processing', 'Computer vision']
  },
  {
    id: 3,
    title: 'Web & Mobile Apps',
    description: 'Beautiful, responsive applications built with modern technologies and designed with user experience at the forefront.',
    icon: Smartphone,
    color: 'from-zappcorp-teal to-green-400',
    features: ['Cross-platform development', 'Progressive web apps', 'UI/UX design', 'Performance optimization']
  },
  {
    id: 4,
    title: 'Tech Consulting',
    description: 'Strategic technology guidance to help your organization navigate the complex digital landscape and make informed decisions.',
    icon: Layers,
    color: 'from-green-400 to-zappcorp-purple',
    features: ['Technology roadmaps', 'Digital transformation', 'System architecture', 'Tech stack evaluation']
  }
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-gradient-to-b from-zappcorp-dark to-zappcorp-darker">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 circuit-bg opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-zappcorp-purple/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-zappcorp-purple to-zappcorp-blue mx-auto"></div>
          <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto">
            We offer a comprehensive suite of technology solutions to power your business forward in the digital age.
          </p>
        </div>
        
        <div className="grid md:grid-cols-12 gap-8">
          {/* Services sidebar */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="glass-card p-2 rounded-lg">
              {services.map(service => (
                <button 
                  key={service.id}
                  className={cn(
                    "w-full text-left p-4 rounded-md transition-all duration-300 mb-1 last:mb-0",
                    activeService.id === service.id 
                      ? "bg-gradient-to-r from-zappcorp-purple/20 to-zappcorp-blue/20 text-white" 
                      : "hover:bg-white/5 text-white/70"
                  )}
                  onClick={() => setActiveService(service)}
                >
                  <div className="flex items-center">
                    <div className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r", 
                      service.color
                    )}>
                      <service.icon size={20} className="text-white" />
                    </div>
                    <span className="ml-3 font-medium">{service.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Service details */}
          <div className="md:col-span-8 lg:col-span-9">
            <div className="glass-card h-full p-6 md:p-8 rounded-lg">
              <div className="flex items-start mb-6">
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-r",
                  activeService.color
                )}>
                  <activeService.icon size={28} className="text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{activeService.title}</h3>
                  <p className="text-white/80">{activeService.description}</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium text-white mb-4">Key Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeService.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className={cn(
                        "w-2 h-2 rounded-full bg-gradient-to-r",
                        activeService.color
                      )}></div>
                      <span className="ml-2 text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-10">
                <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="font-medium text-white">Implementation Process</h5>
                    <div className="flex space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className={cn(
                          "w-2 h-2 rounded-full",
                          i < 3 ? `bg-gradient-to-r ${activeService.color}` : "bg-white/20"
                        )}></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col items-center">
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r",
                        activeService.color
                      )}>
                        <span className="text-white font-medium">1</span>
                      </div>
                      <span className="mt-2 text-xs text-white/70">Analysis</span>
                    </div>
                    <div className="flex-1 h-px bg-white/10 mx-2"></div>
                    <div className="flex flex-col items-center">
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r",
                        activeService.color
                      )}>
                        <span className="text-white font-medium">2</span>
                      </div>
                      <span className="mt-2 text-xs text-white/70">Design</span>
                    </div>
                    <div className="flex-1 h-px bg-white/10 mx-2"></div>
                    <div className="flex flex-col items-center">
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r",
                        activeService.color
                      )}>
                        <span className="text-white font-medium">3</span>
                      </div>
                      <span className="mt-2 text-xs text-white/70">Development</span>
                    </div>
                    <div className="flex-1 h-px bg-white/10 mx-2"></div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10">
                        <span className="text-white/50 font-medium">4</span>
                      </div>
                      <span className="mt-2 text-xs text-white/50">Launch</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
