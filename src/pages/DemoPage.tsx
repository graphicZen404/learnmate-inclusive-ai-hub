
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchDemo from '../components/SearchDemo';

const DemoPage = () => {
  // Update document title
  useEffect(() => {
    document.title = "Interactive Demo | LearnMate+";
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">
                LearnMate+ <span className="text-learnmate-teal">Interactive Demo</span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                Experience how our AI adapts to different learning needs. Use the search box below or try voice input to discover personalized learning resources.
              </p>
            </div>
            
            <SearchDemo />
            
            <div className="mt-16 max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-heading font-semibold mb-4 text-gray-900">
                How It Works
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold text-learnmate-purple">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Search or Speak</h3>
                  <p className="text-sm text-gray-600">Type your query or use voice input to tell us what you want to learn.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold text-learnmate-blue">2</span>
                  </div>
                  <h3 className="font-medium mb-2">AI Processing</h3>
                  <p className="text-sm text-gray-600">Our AI analyzes your request and finds the best learning resources.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold text-learnmate-teal">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Personalized Results</h3>
                  <p className="text-sm text-gray-600">Get tailored learning materials that match your needs and preferences.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DemoPage;
