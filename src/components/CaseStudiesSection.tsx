
import React, { useState } from 'react';
import { ChartBarIcon, FileChartLine } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const caseStudies = [
  {
    id: 1,
    title: 'NexaHealth Platform',
    category: 'Healthcare',
    description: 'A comprehensive healthcare platform that connects patients with providers and streamlines medical record management.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80',
    stats: [
      { label: 'Patient Satisfaction', value: '98%' },
      { label: 'Appointment Booking Time', value: '-75%' },
      { label: 'User Retention', value: '89%' }
    ],
    color: 'from-zappcorp-purple to-zappcorp-blue'
  },
  {
    id: 2,
    title: 'Quantum Analytics',
    category: 'Finance',
    description: 'An AI-powered financial analytics tool that provides real-time insights and predictive models for investment firms.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80',
    stats: [
      { label: 'Prediction Accuracy', value: '94%' },
      { label: 'Processing Time', value: '-82%' },
      { label: 'Client ROI', value: '+36%' }
    ],
    color: 'from-zappcorp-blue to-zappcorp-teal'
  },
  {
    id: 3,
    title: 'EcoTrack Sustainability',
    category: 'Environment',
    description: 'A sustainability monitoring platform that helps companies track and reduce their environmental impact through data-driven insights.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80',
    stats: [
      { label: 'Carbon Reduction', value: '45%' },
      { label: 'Resource Efficiency', value: '+30%' },
      { label: 'Compliance Score', value: '100%' }
    ],
    color: 'from-zappcorp-teal to-green-400'
  }
];

const testimonials = [
  {
    id: 1,
    text: "ZappCorp transformed our outdated infrastructure into a scalable, modern platform. Their team's expertise and commitment to our success exceeded our expectations.",
    author: "Emily Chen",
    position: "CTO, NexaHealth",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80"
  },
  {
    id: 2,
    text: "Working with ZappCorp was a game-changer for our analytics capabilities. Their AI solution has given us insights we never thought possible.",
    author: "Marcus Johnson",
    position: "CEO, Quantum Capital",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80"
  },
  {
    id: 3,
    text: "Working with ZappCorp was a game-changer for our analytics capabilities. Their AI solution has given us insights we never thought possible.",
    author: "Oluwapelumi Kadeba",
    position: "CEO, Codex Codespace",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80"
  }
];

const CaseStudiesSection = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState(caseStudies[0]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section id="case-studies" className="py-10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-zappcorp-dark"></div>
        <div className="absolute inset-0 circuit-bg opacity-10"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-zappcorp-blue/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Case <span className="gradient-text">Studies</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-zappcorp-purple to-zappcorp-blue mx-auto"></div>
          <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto">
            Explore how our solutions have helped clients achieve remarkable results across various industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {caseStudies.map(study => (
            <div 
              key={study.id}
              className={cn(
                "glass-card p-1 rounded-lg cursor-pointer transition-all duration-300",
                activeCaseStudy.id === study.id 
                  ? "ring-2 ring-white/20 transform scale-105"
                  : "hover:ring-1 hover:ring-white/10"
              )}
              onClick={() => setActiveCaseStudy(study)}
            >
              <div className="relative h-44 rounded-t-md overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover"
                />
                <div className={cn(
                  "absolute top-3 left-3 px-3 py-1 rounded-full text-xs text-white bg-gradient-to-r",
                  study.color
                )}>
                  {study.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-white text-lg mb-1">{study.title}</h3>
                <p className="text-white/70 text-sm line-clamp-2">{study.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Case study details */}
        <div className="glass-card rounded-lg overflow-hidden mb-20">
          <div className="grid md:grid-cols-2">
            <div className="p-8">
              <span className={cn(
                "px-3 py-1 rounded-full text-xs text-white bg-gradient-to-r mb-4 inline-block",
                activeCaseStudy.color
              )}>
                {activeCaseStudy.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{activeCaseStudy.title}</h3>
              <p className="text-white/80 mb-6">{activeCaseStudy.description}</p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                {activeCaseStudy.stats.map((stat, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4 text-center">
                    <div className={cn(
                      "text-2xl font-bold mb-1 gradient-text",
                    )}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <Button className={cn(
                "bg-gradient-to-r px-6 text-white",
                activeCaseStudy.color
              )}>
                View Full Case Study
              </Button>
            </div>
            
            <div className="relative h-full min-h-[300px]">
              <img 
                src={activeCaseStudy.image} 
                alt={activeCaseStudy.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-zappcorp-dark to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 flex items-center space-x-3">
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r",
                  activeCaseStudy.color
                )}>
                  <FileChartLine size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Success Metrics</p>
                  <p className="text-white/60 text-sm">Measured Improvement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-12">
            Client <span className="gradient-text">Testimonials</span>
          </h3>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            speed={500}
            loop
            className="max-w-3xl mx-auto glass-card p-8 rounded-lg relative"
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={testimonial.id}>
                <div className="relative mr-10">
                  {/* <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-zappcorp-purple to-zappcorp-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div> */}
                  <blockquote className="text-lg text-white/90 text-center mb-6">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-white">{testimonial.author}</p>
                      <p className="text-sm text-white/60">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        {/* Client logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
          {['Acme Inc.', 'TechGlobal', 'Innovatech', 'FutureWave', 'EcoSystems'].map((name, index) => (
            <div key={index} className="text-white/50 font-bold text-xl">
              {name}
            </div>
          ))}
        </div>

        <div className="h-3 md:w-[900px] w-full mt-16 mx-auto bg-gradient-to-r from-zappcorp-purple to-zappcorp-blue to-zappcorp-teal rounded-full blur-sm"></div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
