
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Demo from '../components/Demo';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import DownloadHelper from '../components/DownloadHelper';

const Index = () => {
  // Update document title
  useEffect(() => {
    document.title = "LearnMate+ | Inclusive AI Learning Assistant";
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <div className="container mx-auto px-4 py-4 flex justify-end">
          <DownloadHelper />
        </div>
        <Features />
        <HowItWorks />
        <Demo />
        <Testimonials />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
