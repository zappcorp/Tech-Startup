
import React from 'react';
import { BookOpen, Lightbulb, Handshake, Users } from 'lucide-react';

const teamMembers = [
  { 
    id: 1, 
    name: 'Alex Johnson', 
    role: 'CEO & Founder',
    // Using placeholder image
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
  },
  { 
    id: 2, 
    name: 'Sarah Chen', 
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
  },
  { 
    id: 3, 
    name: 'Michael Rodriguez', 
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
  },
  { 
    id: 4, 
    name: 'Priya Sharma', 
    role: 'UX Designer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-zappcorp-darker relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 circuit-bg opacity-10"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-zappcorp-teal/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">About</span> Us
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-zappcorp-purple to-zappcorp-blue mx-auto"></div>
          <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto">
            ZappCorp is a forward-thinking tech company dedicated to creating innovative solutions that power businesses and transform industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden glass-card p-1">
                <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
                  alt="ZappCorp team collaboration"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 glass-card rounded-lg p-1">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80" 
                  alt="Code display" 
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 gradient-text">Our Mission</h3>
            <p className="mb-6 text-white/80">
              At ZappCorp, our mission is to democratize cutting-edge technology, making it accessible to businesses of all sizes. We believe in harnessing the power of innovation to solve complex problems and create impactful solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 glass-card hover:scale-105 transition-transform duration-300">
                <Lightbulb className="mb-2 text-zappcorp-purple" size={28} />
                <h4 className="font-medium text-white">Innovation</h4>
                <p className="text-sm text-white/70">Pushing boundaries with creative solutions</p>
              </div>
              
              <div className="p-4 glass-card hover:scale-105 transition-transform duration-300">
                <Handshake className="mb-2 text-zappcorp-blue" size={28} />
                <h4 className="font-medium text-white">Collaboration</h4>
                <p className="text-sm text-white/70">Working together to achieve greatness</p>
              </div>
              
              <div className="p-4 glass-card hover:scale-105 transition-transform duration-300">
                <BookOpen className="mb-2 text-zappcorp-teal" size={28} />
                <h4 className="font-medium text-white">Learning</h4>
                <p className="text-sm text-white/70">Constantly evolving our knowledge</p>
              </div>
              
              <div className="p-4 glass-card hover:scale-105 transition-transform duration-300">
                <Users className="mb-2 text-zappcorp-purple" size={28} />
                <h4 className="font-medium text-white">Community</h4>
                <p className="text-sm text-white/70">Building connections that matter</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team section */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Meet Our <span className="gradient-text">Team</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <div key={member.id} className="group">
                <div className="relative overflow-hidden rounded-lg aspect-square mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zappcorp-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <p className="text-white font-medium">{member.name}</p>
                      <p className="text-white/70 text-sm">{member.role}</p>
                    </div>
                  </div>
                </div>
                <p className="font-medium text-white">{member.name}</p>
                <p className="text-white/70 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
