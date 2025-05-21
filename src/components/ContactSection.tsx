
import React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, MapPin, Phone, Mail, Send } from 'lucide-react';

const socialSvgs: Record<string, JSX.Element> = {
  twitter: (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-zappcorp-purple" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 5.924a8.94 8.94 0 0 1-2.357.646A4.11 4.11 0 0 0 21.448 4.1a8.224 8.224 0 0 1-2.605.996A4.106 4.106 0 0 0 11.034 9.03a11.65 11.65 0 0 1-8.457-4.287a4.106 4.106 0 0 0 1.27 5.482A4.073 4.073 0 0 1 2 9.097v.052a4.106 4.106 0 0 0 3.292 4.025a4.09 4.09 0 0 1-1.852.07a4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 19.13a11.616 11.616 0 0 0 6.29 1.845c7.547 0 11.675-6.155 11.675-11.49c0-.175-.004-.349-.012-.522A8.18 8.18 0 0 0 22 5.924z" fill="currentColor"/>
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-zappcorp-purple" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788c1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" fill="currentColor"/>
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-zappcorp-purple" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07c1.366.062 2.633.334 3.608 1.308c.974.974 1.246 2.241 1.308 3.608c.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608c-.974.974-2.241 1.246-3.608 1.308c-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308c-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608c.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072c-1.676.077-3.17.73-4.343 1.903C1.537 3.148.884 4.642.807 6.318C.748 7.598.735 8.007.735 12s.013 4.402.072 5.682c.077 1.676.73 3.17 1.903 4.343c1.173 1.173 2.667 1.826 4.343 1.903c1.28.059 1.689.072 5.682.072s4.402-.013 5.682-.072c1.676-.077 3.17-.73 4.343-1.903c1.173-1.173 1.826-2.667 1.903-4.343c.059-1.28.072-1.689.072-5.682s-.013-4.402-.072-5.682c-.077-1.676-.73-3.17-1.903-4.343C20.17.803 18.676.15 17 .073C15.72.014 15.311 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12A6.162 6.162 0 0 0 12 18.162A6.162 6.162 0 0 0 18.162 12A6.162 6.162 0 0 0 12 5.838zm0 10.162A3.999 3.999 0 1 1 12 8.001a3.999 3.999 0 0 1 0 7.999zm6.406-11.845a1.44 1.44 0 1 1-2.88 0a1.44 1.44 0 0 1 2.88 0z" fill="currentColor"/>
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-zappcorp-purple" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037c-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.369-1.849c3.602 0 4.267 2.368 4.267 5.455v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124a2.062 2.062 0 0 1 0 4.124zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z" fill="currentColor"/>
    </svg>
  ),
};

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
    setTimeout(() => setOpen(false), 2000);
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

    <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-b from-zappcorp-darker to-zappcorp-dark">
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
                      value={email}
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
                      {socialSvgs[social]}
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
