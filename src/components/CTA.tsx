
import React from 'react';
import { ArrowRight, AccessibilityIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-learnmate-purple to-learnmate-blue opacity-90"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMS4zNiAwLTIuNS0xLjEyLTIuNS0yLjVTMzQuNjQgMTMgMzYgMTNjMS4zNiAwIDIuNSAxLjEyIDIuNSAyLjVTMzcuMzYgMTggMzYgMTh6TTE4IDM2Yy0xLjM2IDAtMi41LTEuMTItMi41LTIuNVMxNi42NCAzMSAxOCAzMWMxLjM2IDAgMi41IDEuMTIgMi41IDIuNVMxOS4zNiAzNiAxOCAzNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNMTggMThjMS4zNiAwIDIuNSAxLjEyIDIuNSAyLjVTMTkuMzYgMjMgMTggMjNjLTEuMzYgMC0yLjUtMS4xMi0yLjUtMi41UzE2LjY0IDE4IDE4IDE4em0xOCAxOGMxLjM2IDAgMi41IDEuMTIgMi41IDIuNVM1NS4zNiA0MSA1NCA0MWMtMS4zNiAwLTIuNS0xLjEyLTIuNS0yLjVTNTIuNjQgMzYgNTQgMzZ6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center mb-4 px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <AccessibilityIcon className="h-4 w-4 mr-2" />
            Join the Inclusive Education Movement
          </div>
          
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white leading-tight">
            Make Education Accessible for <span className="relative inline-block">
              <span className="relative z-10">Everyone</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-learnmate-teal/30 -z-10 rounded"></span>
            </span>
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your journey with LearnMate+ today and experience the power of AI-driven personalized learning that adapts to every student's unique needs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/sign-up" 
              className="btn-primary bg-white text-learnmate-purple hover:bg-white/90 px-8 py-3 rounded-lg shadow-lg shadow-purple-800/20"
            >
              Get Started for Free
            </Link>
            
            <Link 
              to="/demo" 
              className="flex items-center text-white gap-2 hover:gap-3 transition-all"
            >
              Try the Demo <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
