import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

const Index = () => {
  useEffect(() => {
    document.title = 'ZappCorp - Building Tomorrow\'s Tech Today';
  }, []);

  return (
    <div className="min-h-screen bg-zappcorp-dark">
      <Navbar />
      <main>
        <SectionWrapper><HeroSection /></SectionWrapper>
        <SectionWrapper><AboutSection /></SectionWrapper>
        <SectionWrapper><ServicesSection /></SectionWrapper>
        <SectionWrapper><CaseStudiesSection /></SectionWrapper>
        <SectionWrapper><ContactSection /></SectionWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Index;