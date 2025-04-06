
import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  name: string;
  role: string;
  type: string;
}

const Testimonial = ({ content, name, role, type }: TestimonialProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 card-hover">
      <Quote className="h-10 w-10 text-learnmate-purple opacity-20 mb-4" />
      <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"{content}"</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-learnmate-purple to-learnmate-blue flex items-center justify-center text-white font-medium">
          {name.charAt(0)}
        </div>
        <div className="ml-3">
          <h4 className="font-semibold text-gray-900 dark:text-white">{name}</h4>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">{role}</span>
            <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
            <span className="text-sm text-learnmate-purple">{type}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      content: "LearnMate+ has completely transformed how my visually impaired students engage with course material. The text-to-speech feature with natural-sounding voices has made complex concepts accessible to everyone.",
      name: "Emma Johnson",
      role: "Special Education Teacher",
      type: "Visual Accessibility"
    },
    {
      content: "As someone with dyslexia, I've always struggled with dense academic texts. The language simplification tool breaks down complex terminology without losing the core meaning, making my college courses finally manageable.",
      name: "Michael T.",
      role: "University Student",
      type: "Cognitive Support"
    },
    {
      content: "The real-time captioning feature has been a game-changer for my deaf students. They can now participate fully in video lectures and discussions without feeling left behind. The accuracy is impressive.",
      name: "Dr. Sarah Ahmed",
      role: "Accessibility Coordinator",
      type: "Hearing Accessibility"
    },
    {
      content: "My son has ADHD and the personalized learning paths have helped him stay focused and engaged. The system adapts when he needs more breaks or different types of content, which has improved his grades significantly.",
      name: "Robert Chen",
      role: "Parent",
      type: "Attention Support"
    },
    {
      content: "The sign language visuals have made my online courses truly inclusive. As an educator, I can now ensure all my content is accessible to deaf students without needing specialized assistance for every lecture.",
      name: "Prof. David Miller",
      role: "Online Course Instructor",
      type: "Inclusive Teaching"
    },
    {
      content: "I'm on the autism spectrum and often struggle with sensory overload in traditional learning environments. LearnMate+ allows me to customize how information is presented, making learning a much less overwhelming experience.",
      name: "Alex K.",
      role: "High School Student",
      type: "Sensory Adaptation"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
            Success <span className="text-learnmate-green">Stories</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Hear from students, parents, and educators who have experienced the transformative power of accessible education with LearnMate+.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
