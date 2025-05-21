
import React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactSection = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(true);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    console.log('Form submitted');
  };

  return (
    <>
    <ToastPrimitive.Provider swipeDirection="right">
        <ToastPrimitive.Root
          open={open}
          onOpenChange={setOpen}
          className="fixed top-6 right-6 z-50 bg-zappcorp-dark text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 border border-zappcorp-purple"
        >
          <Send className="text-zappcorp-purple" size={20} />
          <span>Your message has been sent!</span>
        </ToastPrimitive.Root>
        <ToastPrimitive.Viewport className="fixed top-0 right-0 flex flex-col p-6 gap-2 w-96 max-w-full z-50" />
      </ToastPrimitive.Provider>

    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-zappcorp-darker to-zappcorp-dark">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 circuit-bg opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-zappcorp-purple/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-zappcorp-blue/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-zappcorp-purple to-zappcorp-blue mx-auto"></div>
          <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? Let's start a conversation about how we can help.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div>
            <div className="glass-card rounded-lg p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <MessageCircle className="mr-2 text-zappcorp-purple" size={20} />
                Send us a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">Name</label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="w-full bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-zappcorp-purple"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">Email</label>
                    <Input
                      id="email"
                      type="email"
                      value="email"
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="w-full bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-zappcorp-purple"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-1">Subject</label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    className="w-full bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-zappcorp-purple"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Tell us what you need..."
                    rows={4}
                    className="w-full bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-zappcorp-purple resize-none"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-gradient-to-r from-zappcorp-purple to-zappcorp-blue hover:opacity-90">
                  <Send size={16} className="mr-2" /> Send Message
                </Button>
              </form>
            </div>
          </div>
          
          {/* Contact info and map */}
          <div className="space-y-6">
            <div className="glass-card rounded-lg overflow-hidden">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
                  alt="ZappCorp location"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zappcorp-dark/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-xl font-semibold text-white mb-1">ZappCorp Headquarters</h4>
                  <p className="text-white/70">Innovation Hub, ZappCorp Tower, Victoria Island</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-zappcorp-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-white/90">1234 Innovation Drive</p>
                    <p className="text-white/70">Victoria Island, Lagos</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="text-zappcorp-blue mr-3 flex-shrink-0" size={20} />
                  <a href="tel:+11234567890" className="text-white/90 hover:text-white">+1 (123) 456-7890</a>
                </div>
                
                <div className="flex items-center">
                  <Mail className="text-zappcorp-teal mr-3 flex-shrink-0" size={20} />
                  <a href="mailto:info@zappcorp.tech" className="text-white/90 hover:text-white">info@zappcorp.tech</a>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="text-white font-medium mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                    <a 
                      key={social} 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
                    >
                      <span className="sr-only">{social}</span>
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-zappcorp-purple to-zappcorp-blue"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactSection;
