
import React, { useState } from 'react';
import { Volume2, Volume, Book, Captions, AccessibilityIcon, HeadphonesIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const speakWelcome = () => {
    setIsSpeaking(true);
    
    // Use the SpeechSynthesis API to read the welcome message
    const message = "Welcome to LearnMate Plus! Our AI-powered learning assistant helps make education accessible for all students. Explore how we can personalize learning for your unique needs.";
    const utterance = new SpeechSynthesisUtterance(message);
    
    utterance.onend = () => {
      setIsSpeaking(false);
    };
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    // Speak the welcome message
    window.speechSynthesis.speak(utterance);
  };
  
  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
    <section className="relative bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-900/30 py-16 md:py-24 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-200/40 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm font-medium">
            <AccessibilityIcon className="h-4 w-4 mr-2" />
            Inclusive Education for Everyone
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-learnmate-purple via-learnmate-blue to-learnmate-teal">
            Empowering Every Learner,<br/>
            <span className="text-learnmate-dark dark:text-white">One Click at a Time</span>
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Our AI-powered platform adapts to individual learning needs, making education accessible for students with visual, hearing, and cognitive disabilities.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/demo" 
              className="btn-primary inline-flex items-center justify-center gap-2 text-white bg-learnmate-purple hover:bg-learnmate-purple/90 px-6 py-3 rounded-lg shadow-lg shadow-purple-500/20"
            >
              <Book className="h-5 w-5" />
              Try Demo
            </Link>
            
            <button 
              onClick={isSpeaking ? stopSpeaking : speakWelcome}
              className="btn-outline inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              aria-label={isSpeaking ? "Stop speaking" : "Listen to welcome message"}
            >
              {isSpeaking ? <Volume2 className="h-5 w-5 text-learnmate-purple animate-pulse" /> : <Volume className="h-5 w-5" />}
              {isSpeaking ? "Stop Speaking" : "Hear About Us"}
            </button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <HeadphonesIcon className="h-5 w-5 mr-2 text-learnmate-purple" />
              Speech-to-Text
            </div>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Volume className="h-5 w-5 mr-2 text-learnmate-blue" />
              Text-to-Speech
            </div>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Captions className="h-5 w-5 mr-2 text-learnmate-teal" />
              Real-time Captions
            </div>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <AccessibilityIcon className="h-5 w-5 mr-2 text-learnmate-green" />
              Personalized Learning
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
