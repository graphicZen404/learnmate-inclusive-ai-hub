
import React from 'react';
import { 
  Book, 
  Heart, 
  Users, 
  Award, 
  GraduationCap, 
  ShieldCheck, 
  Lightbulb,
  Brain,
  Accessibility
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <>
      <Header />
      <main className="pt-6 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-learnmate-purple/90 to-learnmate-blue/90 text-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in">
                Our Mission for <span className="underline decoration-learnmate-teal decoration-4 underline-offset-4">Inclusive Education</span>
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
                LearnMate+ is dedicated to breaking down educational barriers through innovative AI technology, making learning accessible and personalized for every student regardless of ability.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full">
                  <Accessibility className="h-5 w-5 mr-2 text-learnmate-teal" />
                  <span className="font-medium">Accessibility First</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full">
                  <Brain className="h-5 w-5 mr-2 text-learnmate-teal" />
                  <span className="font-medium">AI-Powered Learning</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full">
                  <Heart className="h-5 w-5 mr-2 text-learnmate-teal" />
                  <span className="font-medium">Inclusive Design</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm font-medium">
                    <Book className="h-4 w-4 mr-2" />
                    Our Story
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gray-900 dark:text-white">
                    From Vision to <span className="text-learnmate-purple">Reality</span>
                  </h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p>
                      LearnMate+ began with a simple question: What if education technology prioritized accessibility from the ground up, rather than as an afterthought?
                    </p>
                    <p>
                      Founded in 2023 by a team of educators, technologists, and accessibility experts, we set out to build an AI learning assistant that adapts not just to learning styles, but to the unique needs of students with visual, hearing, and cognitive disabilities.
                    </p>
                    <p>
                      Today, our platform serves thousands of students globally, proving that accessible education isn't just a compliance requirement—it's a pathway to better learning outcomes for everyone.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -top-8 -left-8 w-24 h-24 bg-learnmate-purple/10 rounded-full dark:bg-learnmate-purple/20 z-0"></div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-learnmate-blue/10 rounded-full dark:bg-learnmate-blue/20 z-0"></div>
                  <div className="relative z-10 bg-gray-50 dark:bg-gray-700 p-6 rounded-xl border border-gray-100 dark:border-gray-600 shadow-md">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg text-center shadow-sm">
                        <span className="block text-3xl font-bold text-learnmate-purple mb-1">10k+</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Students Served</span>
                      </div>
                      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg text-center shadow-sm">
                        <span className="block text-3xl font-bold text-learnmate-blue mb-1">500+</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Educational Partners</span>
                      </div>
                      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg text-center shadow-sm">
                        <span className="block text-3xl font-bold text-learnmate-teal mb-1">25+</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Countries Reached</span>
                      </div>
                      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg text-center shadow-sm">
                        <span className="block text-3xl font-bold text-learnmate-green mb-1">95%</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Student Satisfaction</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium">
                <Heart className="h-4 w-4 mr-2" />
                Our Values
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
                Principles That Guide <span className="text-learnmate-blue">Our Work</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                At LearnMate+, our values shape everything we do—from how we design our platform to how we interact with our community of learners.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4">
                  <Accessibility className="h-6 w-6 text-learnmate-red" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900 dark:text-white">Universal Access</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We believe education is a right, not a privilege. Our platform is designed to make learning accessible to everyone, regardless of ability or disability.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-learnmate-purple" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900 dark:text-white">Personalized Learning</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Each student has unique strengths, challenges, and learning styles. We create adaptive experiences that meet learners where they are.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-learnmate-blue" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900 dark:text-white">Privacy & Security</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We prioritize data protection and ethical AI use, ensuring student information is secure and used responsibly to enhance learning.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-learnmate-teal" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900 dark:text-white">Community Collaboration</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We actively collaborate with students, educators, and disability advocates to continuously improve our platform through real-world feedback.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-learnmate-green" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900 dark:text-white">Continuous Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We're committed to staying at the forefront of AI and education technology, constantly evolving our platform to better serve diverse learning needs.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-learnmate-yellow" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900 dark:text-white">Evidence-Based Approach</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our methods are grounded in research on education, cognitive science, and accessibility, ensuring that our technology truly enhances learning outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm font-medium">
                <Users className="h-4 w-4 mr-2" />
                Our Team
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
                Meet the Minds Behind <span className="text-learnmate-green">LearnMate+</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our diverse team brings together expertise in education, accessibility, AI development, and user experience design.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* Team Member 1 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <div className="aspect-square bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-purple-200 to-blue-200 dark:from-purple-900/50 dark:to-blue-900/50 flex items-center justify-center">
                      <Users className="h-24 w-24 text-gray-400 dark:text-gray-500" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex space-x-2 text-white">
                      <a href="#" aria-label="LinkedIn profile" className="hover:text-learnmate-blue transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </a>
                      <a href="#" aria-label="Twitter profile" className="hover:text-learnmate-blue transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white">Dr. Sarah Chen</h3>
                <p className="text-sm text-learnmate-purple font-medium">Founder & CEO</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Former special education teacher with 15+ years of experience in educational technology</p>
              </div>

              {/* Team Member 2 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <div className="aspect-square bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-blue-200 to-teal-200 dark:from-blue-900/50 dark:to-teal-900/50 flex items-center justify-center">
                      <Users className="h-24 w-24 text-gray-400 dark:text-gray-500" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex space-x-2 text-white">
                      <a href="#" aria-label="LinkedIn profile" className="hover:text-learnmate-blue transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </a>
                      <a href="#" aria-label="Twitter profile" className="hover:text-learnmate-blue transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white">Marcus Johnson</h3>
                <p className="text-sm text-learnmate-blue font-medium">CTO</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">AI expert with background in developing assistive technology for people with disabilities</p>
              </div>

              {/* Team Member 3 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <div className="aspect-square bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-teal-200 to-green-200 dark:from-teal-900/50 dark:to-green-900/50 flex items-center justify-center">
                      <Users className="h-24 w-24 text-gray-400 dark:text-gray-500" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex space-x-2 text-white">
                      <a href="#" aria-label="LinkedIn profile" className="hover:text-learnmate-blue transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </a>
                      <a href="#" aria-label="Twitter profile" className="hover:text-learnmate-blue transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white">Dr. Amara Patel</h3>
                <p className="text-sm text-learnmate-teal font-medium">Head of Research</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Cognitive scientist specializing in how different learning disabilities affect information processing</p>
              </div>

              {/* Team Member 4 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <div className="aspect-square bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-green-200 to-yellow-200 dark:from-green-900/50 dark:to-yellow-900/50 flex items-center justify-center">
                      <Users className="h-24 w-24 text-gray-400 dark:text-gray-500" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex space-x-2 text-white">
                      <a href="#" aria-label="LinkedIn profile" className="hover:text-learnmate-blue transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </a>
                      <a href="#" aria-label="Twitter profile" className="hover:text-learnmate-blue transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white">Jamie Rodriguez</h3>
                <p className="text-sm text-learnmate-green font-medium">UX/Accessibility Designer</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Award-winning designer focused on creating beautiful, highly usable interfaces for users of all abilities</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners & Recognition */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 text-sm font-medium">
                <Award className="h-4 w-4 mr-2" />
                Recognition
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
                Partners & <span className="text-learnmate-yellow">Recognition</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We're proud to work with leading organizations and to be recognized for our impact in accessible education.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              {/* Awards */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/20 rounded-full flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="font-heading font-semibold text-gray-900 dark:text-white">2024 EdTech Breakthrough</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Best Accessibility Solution</p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-4">
                    <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-heading font-semibold text-gray-900 dark:text-white">Global Inclusion Award</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Education Technology Category</p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mb-4">
                    <Lightbulb className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-heading font-semibold text-gray-900 dark:text-white">AI for Good</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Finalist, Education Innovation</p>
                </div>
              </div>

              {/* Partners */}
              <h3 className="text-xl font-heading font-semibold text-center mb-8 text-gray-900 dark:text-white">Our Partners</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                <div className="flex items-center justify-center h-20 bg-white dark:bg-gray-800 rounded-lg p-4">
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400 font-medium">Partner 1</span>
                  </div>
                </div>
                <div className="flex items-center justify-center h-20 bg-white dark:bg-gray-800 rounded-lg p-4">
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400 font-medium">Partner 2</span>
                  </div>
                </div>
                <div className="flex items-center justify-center h-20 bg-white dark:bg-gray-800 rounded-lg p-4">
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400 font-medium">Partner 3</span>
                  </div>
                </div>
                <div className="flex items-center justify-center h-20 bg-white dark:bg-gray-800 rounded-lg p-4">
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400 font-medium">Partner 4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us / CTA */}
        <section className="py-16 bg-gradient-to-br from-learnmate-purple to-learnmate-blue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Join Us in Making Education <span className="underline decoration-learnmate-teal decoration-4 underline-offset-4">Accessible to All</span>
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Whether you're an educator, student, parent, or institution, we invite you to experience how LearnMate+ can transform learning experiences.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/demo" className="bg-white text-learnmate-purple hover:bg-gray-100 px-6 py-3 rounded-md font-medium shadow-lg hover:shadow-xl transition">
                  Try the Demo
                </a>
                <a href="/contact" className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
