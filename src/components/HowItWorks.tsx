
import React from 'react';
import { ClipboardList, Lightbulb, BarChart, Settings } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <ClipboardList className="h-8 w-8 text-learnmate-purple" />,
      title: 'Assessment',
      description: 'Our AI evaluates each student's learning profile, identifying strengths, needs, and preferred learning styles through interactive assessments.'
    },
    {
      icon: <Settings className="h-8 w-8 text-learnmate-blue" />,
      title: 'Personalization',
      description: 'Based on the assessment, LearnMate+ creates a customized learning plan with appropriate accessibility tools and content adaptations.'
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-learnmate-teal" />,
      title: 'Adaptive Learning',
      description: 'As students engage with content, our AI continuously adjusts difficulty, presentation, and support features to optimize comprehension.'
    },
    {
      icon: <BarChart className="h-8 w-8 text-learnmate-green" />,
      title: 'Progress Tracking',
      description: 'Detailed analytics provide insights into learning patterns, growth areas, and achievement milestones in accessible formats.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium">
            <Settings className="h-4 w-4 mr-2" />
            Personalized Learning Process
          </div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
            How <span className="text-learnmate-blue">LearnMate+</span> Works
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our platform uses advanced AI to create truly personalized learning experiences that adapt to each student's unique needs and abilities.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-learnmate-purple via-learnmate-blue to-learnmate-green hidden md:block"></div>
          
          {/* Steps */}
          {steps.map((step, index) => (
            <div key={index} className="relative mb-12 md:mb-24 last:mb-0">
              <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                {/* Step number bubble */}
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 flex items-center justify-center w-14 h-14 rounded-full bg-white dark:bg-gray-800 border-4 border-learnmate-purple mb-6 md:mb-0 shadow-lg">
                  {step.icon}
                </div>
                
                {/* Content card */}
                <div className={`md:w-5/12 bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg card-hover ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-gray-900 dark:text-white">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
