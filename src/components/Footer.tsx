
import React from 'react';
import { Book, HeadphonesIcon, Captions, AccessibilityIcon, Mail, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-12 pb-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Book className="h-6 w-6 text-learnmate-purple" />
              <span className="ml-2 text-xl font-heading font-bold">
                LearnMate<span className="text-learnmate-teal">+</span>
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Empowering every learner through accessible, AI-driven education tailored to individual needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-learnmate-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-learnmate-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-learnmate-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-learnmate-purple transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-learnmate-purple dark:hover:text-learnmate-purple transition-colors">Blog</Link></li>
              <li><Link to="/research" className="text-gray-600 dark:text-gray-400 hover:text-learnmate-purple dark:hover:text-learnmate-purple transition-colors">Research</Link></li>
              <li><Link to="/guides" className="text-gray-600 dark:text-gray-400 hover:text-learnmate-purple dark:hover:text-learnmate-purple transition-colors">Accessibility Guides</Link></li>
              <li><Link to="/case-studies" className="text-gray-600 dark:text-gray-400 hover:text-learnmate-purple dark:hover:text-learnmate-purple transition-colors">Case Studies</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-learnmate-purple dark:hover:text-learnmate-purple transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-gray-600 dark:text-gray-400 hover:text-learnmate-purple dark:hover:text-learnmate-purple transition-colors">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-600 dark:text-gray-400 hover:text-learnmate-purple dark:hover:text-learnmate-purple transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-learnmate-purple dark:hover:text-learnmate-purple transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-learnmate-purple dark:hover:text-learnmate-purple transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-learnmate-purple dark:hover:text-learnmate-purple transition-colors">Privacy Policy</Link></li>
              <li><Link to="/accessibility" className="text-gray-600 dark:text-gray-400 hover:text-learnmate-purple dark:hover:text-learnmate-purple transition-colors">Accessibility Statement</Link></li>
              <li><Link to="/cookies" className="text-gray-600 dark:text-gray-400 hover:text-learnmate-purple dark:hover:text-learnmate-purple transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} LearnMate+ | Built with accessibility in mind
          </p>
          <div className="flex items-center space-x-2">
            <AccessibilityIcon className="h-5 w-5 text-learnmate-purple" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Committed to inclusive education for all
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
