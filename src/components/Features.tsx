
import React from 'react';
import { Mic, HeadphonesIcon, Captions, AccessibilityIcon, BookOpen, Brain, Languages, Book } from 'lucide-react';

const FeatureCard = ({ icon, color, title, description }: { icon: React.ReactNode, color: string, title: string, description: string }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 card-hover">
      <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <HeadphonesIcon className="h-6 w-6 text-white" />,
      color: 'bg-learnmate-purple',
      title: 'Speech-to-Text',
      description: 'Convert spoken words into text for students with hearing impairments, making lectures and discussions fully accessible.'
    },
    {
      icon: <Mic className="h-6 w-6 text-white" />,
      color: 'bg-learnmate-blue',
      title: 'Text-to-Speech',
      description: 'Transform written content into natural-sounding speech to support visually impaired students and those with reading difficulties.'
    },
    {
      icon: <Captions className="h-6 w-6 text-white" />,
      color: 'bg-learnmate-teal',
      title: 'Real-time Captions',
      description: 'Generate accurate captions for videos and live presentations, ensuring deaf and hard-of-hearing students don't miss important information.'
    },
    {
      icon: <AccessibilityIcon className="h-6 w-6 text-white" />,
      color: 'bg-learnmate-green',
      title: 'Sign Language Visuals',
      description: 'AI-powered sign language interpretation for educational content, bridging communication gaps for deaf students.'
    },
    {
      icon: <Brain className="h-6 w-6 text-white" />,
      color: 'bg-learnmate-yellow',
      title: 'Cognitive Support',
      description: 'Personalized learning paths that adapt to cognitive differences, with simplified explanations and visual aids when needed.'
    },
    {
      icon: <Languages className="h-6 w-6 text-white" />,
      color: 'bg-learnmate-red',
      title: 'Language Simplification',
      description: 'Automatically adjust content complexity for neurodiverse learners, making abstract concepts more accessible and understandable.'
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm font-medium">
            <Book className="h-4 w-4 mr-2" />
            Accessibility Features
          </div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
            Tools That Make Learning <span className="text-learnmate-purple">Accessible</span> for All
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our AI-powered platform includes a comprehensive suite of accessibility features designed to support students with various disabilities and learning needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              color={feature.color}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
