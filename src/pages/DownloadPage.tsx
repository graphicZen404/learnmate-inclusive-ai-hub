
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Download, Check, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const DownloadPage = () => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  // Update document title
  React.useEffect(() => {
    document.title = "Download LearnMate+ | Standalone Version";
  }, []);

  const generateDownload = () => {
    setDownloading(true);
    toast.info("Preparing your LearnMate+ standalone file...", { duration: 2000 });
    
    try {
      // Create the combined HTML content
      const htmlContent = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>LearnMate+ | Inclusive AI Learning Assistant</title>
    <meta name="description" content="AI-powered personalized learning assistant for students with disabilities that adapts to individual needs, making education accessible for everyone." />
    
    <style>
      /* Base styles */
      :root {
        --purple: #9b87f5;
        --blue: #1EAEDB;
        --teal: #06B6D4;
        --green: #10B981;
        --red: #EF4444;
        --yellow: #F59E0B;
      }
      
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      
      body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.5;
        color: #333;
        background-color: #fff;
      }
      
      h1, h2, h3, h4, h5, h6 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
      }
      
      .container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
      }
      
      .btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
        transition: all 0.2s;
        cursor: pointer;
        border: none;
      }
      
      .btn-primary {
        background-color: var(--purple);
        color: white;
      }
      
      .btn-primary:hover {
        background-color: #8673e0;
      }
      
      .header {
        padding: 1rem 0;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        position: sticky;
        top: 0;
        background: white;
        z-index: 10;
      }
      
      .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .logo {
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 1.5rem;
        color: var(--purple);
      }
      
      .hero {
        padding: 4rem 0;
        background: linear-gradient(to bottom right, #fff, #f0e6ff);
        text-align: center;
      }
      
      .hero h1 {
        font-size: 3.5rem;
        margin-bottom: 1.5rem;
        background: linear-gradient(to right, var(--purple), var(--blue), var(--teal));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      
      .hero p {
        font-size: 1.25rem;
        max-width: 36rem;
        margin: 0 auto 2rem;
        color: #666;
      }
      
      .features {
        padding: 4rem 0;
        background-color: #fafafa;
      }
      
      .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
      }
      
      .feature-card {
        background: white;
        padding: 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        transition: transform 0.3s, box-shadow 0.3s;
      }
      
      .feature-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 15px rgba(0,0,0,0.1);
      }
      
      .feature-icon {
        width: 3rem;
        height: 3rem;
        border-radius: 9999px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
        color: white;
      }
      
      .cta {
        padding: 4rem 0;
        background: linear-gradient(to right, var(--purple), var(--blue));
        color: white;
        text-align: center;
      }
      
      .cta h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }
      
      .cta .btn {
        background: white;
        color: var(--purple);
        margin-top: 2rem;
      }
      
      .footer {
        background-color: #fafafa;
        padding: 3rem 0 1.5rem;
        border-top: 1px solid #eaeaea;
      }
      
      .footer-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 2rem;
        margin-bottom: 2rem;
      }
      
      .footer h3 {
        font-size: 1.25rem;
        margin-bottom: 1rem;
      }
      
      .footer ul {
        list-style: none;
      }
      
      .footer li {
        margin-bottom: 0.5rem;
      }
      
      .footer a {
        color: #666;
        text-decoration: none;
      }
      
      .footer a:hover {
        color: var(--purple);
      }
      
      .footer-bottom {
        padding-top: 1.5rem;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.875rem;
        color: #777;
      }

      nav a {
        margin: 0 10px;
        color: #666;
        text-decoration: none;
        transition: color 0.2s;
      }

      nav a:hover {
        color: var(--purple);
      }
      
      @media (max-width: 768px) {
        .hero h1 {
          font-size: 2.5rem;
        }
        
        .features-grid, .footer-grid {
          grid-template-columns: 1fr;
        }
        
        .footer-bottom {
          flex-direction: column;
          gap: 1rem;
          text-align: center;
        }

        nav {
          display: none;
        }
      }
    </style>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@500;600;700;800&display=swap" rel="stylesheet">
  </head>
  
  <body>
    <header class="header">
      <div class="container header-content">
        <div class="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
          <span style="margin-left: 0.5rem;">LearnMate<span style="color: var(--teal);">+</span></span>
        </div>
        <nav>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div>
          <button class="btn btn-primary">Login</button>
        </div>
      </div>
    </header>
    
    <main>
      <section class="hero" id="home">
        <div class="container">
          <div style="display: inline-block; padding: 0.25rem 0.75rem; background-color: #f0e6ff; border-radius: 9999px; margin-bottom: 1rem;">
            <span style="display: flex; align-items: center; color: var(--purple);">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem;"><circle cx="17" cy="17" r="3"></circle><path d="M10 18a7.89 7.89 0 0 1 1-4"></path><path d="M15 6a7.89 7.89 0 0 0-1 4 7.89 7.89 0 0 0 1 4"></path><circle cx="7" cy="10" r="3"></circle></svg>
              Inclusive Education for Everyone
            </span>
          </div>
          
          <h1>
            Empowering Every Learner,<br>
            <span style="color: #333;">One Click at a Time</span>
          </h1>
          
          <p>
            Our AI-powered platform adapts to individual learning needs, making education accessible for students with visual, hearing, and cognitive disabilities.
          </p>
          
          <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem;">
            <button class="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              Try Demo
            </button>
            
            <button class="btn" style="background: white; border: 1px solid #ddd;">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
              Hear About Us
            </button>
          </div>
        </div>
      </section>
      
      <section class="features" id="features">
        <div class="container">
          <div style="text-align: center; max-width: 48rem; margin: 0 auto;">
            <div style="display: inline-flex; align-items: center; padding: 0.25rem 0.75rem; background-color: #e6f0ff; border-radius: 9999px; margin-bottom: 1rem; color: var(--blue);">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem;"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              Accessibility Features
            </div>
            
            <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">
              Tools That Make Learning <span style="color: var(--purple);">Accessible</span> for All
            </h2>
            
            <p style="color: #666; font-size: 1.125rem;">
              Our AI-powered platform includes a comprehensive suite of accessibility features designed to support students with various disabilities and learning needs.
            </p>
          </div>
          
          <div class="features-grid">
            <!-- Speech-to-Text -->
            <div class="feature-card">
              <div class="feature-icon" style="background-color: var(--purple);">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg>
              </div>
              <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Speech-to-Text</h3>
              <p style="color: #666;">Convert spoken words into text for students with hearing impairments, making lectures and discussions fully accessible.</p>
            </div>
            
            <!-- Text-to-Speech -->
            <div class="feature-card">
              <div class="feature-icon" style="background-color: var(--blue);">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
              </div>
              <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Text-to-Speech</h3>
              <p style="color: #666;">Transform written content into natural-sounding speech to support visually impaired students and those with reading difficulties.</p>
            </div>
            
            <!-- Real-time Captions -->
            <div class="feature-card">
              <div class="feature-icon" style="background-color: var(--teal);">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><path d="M7 12h2"></path><path d="M13 12h4"></path></svg>
              </div>
              <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Real-time Captions</h3>
              <p style="color: #666;">Generate accurate captions for videos and live presentations, ensuring deaf and hard-of-hearing students don't miss important information.</p>
            </div>
            
            <!-- Learning Adaptations -->
            <div class="feature-card">
              <div class="feature-icon" style="background-color: var(--green);">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h-4.257a1.5 1.5 0 1 0 0 3H14"></path><path d="M14 10h-4.257a1.5 1.5 0 1 0 0 3H14"></path><path d="M14 16h-4.257a1.5 1.5 0 1 1 0 3H14"></path><path d="M20 7v14"></path><path d="M17 11l3-4 3 4"></path></svg>
              </div>
              <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Learning Adaptations</h3>
              <p style="color: #666;">AI-driven content adaptations that present material in ways that match each student's learning style and needs.</p>
            </div>
            
            <!-- Dyslexia Support -->
            <div class="feature-card">
              <div class="feature-icon" style="background-color: var(--yellow);">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
              </div>
              <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Dyslexia Support</h3>
              <p style="color: #666;">Special fonts, color overlays, and text-to-speech tools designed specifically to assist students with dyslexia.</p>
            </div>
            
            <!-- Sign Language -->
            <div class="feature-card">
              <div class="feature-icon" style="background-color: var(--red);">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-2"></path><path d="M14.5 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 1 0 0 5Z"></path><path d="M20 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 1 0 0 5Z"></path></svg>
              </div>
              <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Sign Language Integration</h3>
              <p style="color: #666;">AI-powered sign language translation to bridge communication gaps for deaf and hard-of-hearing students.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section style="padding: 6rem 0; background-color: white;" id="about">
        <div class="container">
          <div style="display: flex; flex-wrap: wrap; gap: 2rem; align-items: center;">
            <div style="flex: 1 1 400px;">
              <div style="display: inline-flex; align-items: center; padding: 0.25rem 0.75rem; background-color: #f0f0ff; border-radius: 9999px; margin-bottom: 1rem; color: var(--purple);">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem;"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"></path></svg>
                About Us
              </div>
              
              <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">
                Our Mission to Make Education <span style="color: var(--purple);">Inclusive</span>
              </h2>
              
              <p style="color: #666; margin-bottom: 1.5rem;">
                At LearnMate+, we believe that education should be accessible to everyone, regardless of their physical or cognitive abilities. Our team of educators, accessibility experts, and AI engineers work together to break down barriers in the learning environment.
              </p>
              
              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
                <div>
                  <div style="font-size: 2rem; font-weight: 700; color: var(--purple);">5K+</div>
                  <p style="color: #666; font-size: 0.875rem;">Students Supported</p>
                </div>
                
                <div>
                  <div style="font-size: 2rem; font-weight: 700; color: var(--blue);">250+</div>
                  <p style="color: #666; font-size: 0.875rem;">Educational Institutions</p>
                </div>
                
                <div>
                  <div style="font-size: 2rem; font-weight: 700; color: var(--teal);">97%</div>
                  <p style="color: #666; font-size: 0.875rem;">Satisfaction Rate</p>
                </div>
              </div>
              
              <button class="btn" style="background-color: #f5f5f7; color: #333;">
                Learn Our Story
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
            
            <div style="flex: 1 1 400px; display: flex; justify-content: center;">
              <div style="width: 100%; max-width: 450px; height: 400px; position: relative; background-color: #f0e6ff; border-radius: 1rem; overflow: hidden;">
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" style="color: var(--purple);"><circle cx="17" cy="17" r="3"></circle><path d="M10 18a7.89 7.89 0 0 1 1-4"></path><path d="M15 6a7.89 7.89 0 0 0-1 4 7.89 7.89 0 0 0 1 4"></path><circle cx="7" cy="10" r="3"></circle></svg>
                  <p style="margin-top: 1rem; color: var(--purple); font-weight: 500;">Image placeholder: Team working on inclusive education solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="cta" id="contact">
        <div class="container">
          <h2>Make Education Accessible for Everyone</h2>
          <p style="max-width: 36rem; margin: 0 auto;">Start your journey with LearnMate+ today and experience the power of AI-driven personalized learning that adapts to every student's unique needs.</p>
          <button class="btn">
            Get Started for Free
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
      </section>
    </main>
    
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div style="display: flex; align-items: center; margin-bottom: 1rem;">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--purple);"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              <span style="margin-left: 0.5rem; font-weight: bold; font-size: 1.25rem;">LearnMate<span style="color: var(--teal);">+</span></span>
            </div>
            <p style="color: #666; margin-bottom: 1rem;">Empowering every learner through accessible, AI-driven education tailored to individual needs.</p>
            <div style="display: flex; gap: 1rem;">
              <a href="#" aria-label="Twitter" style="color: #777;">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" aria-label="Facebook" style="color: #777;">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" aria-label="Instagram" style="color: #777;">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Research</a></li>
              <li><a href="#">Accessibility Guides</a></li>
              <li><a href="#">Case Studies</a></li>
            </ul>
          </div>
          
          <div>
            <h3>Company</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Accessibility Statement</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>© ${new Date().getFullYear()} LearnMate+ | Built with accessibility in mind</p>
          <div style="display: flex; align-items: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem; color: var(--purple);"><circle cx="17" cy="17" r="3"></circle><path d="M10 18a7.89 7.89 0 0 1 1-4"></path><path d="M15 6a7.89 7.89 0 0 0-1 4a7.89 7.89 0 0 0 1 4"></path><circle cx="7" cy="10" r="3"></circle></svg>
            <span>Committed to inclusive education for all</span>
          </div>
        </div>
      </div>
    </footer>
  </body>
</html>
      `;
      
      // Create a download link
      const element = document.createElement('a');
      const file = new Blob([htmlContent], {type: 'text/html'});
      element.href = URL.createObjectURL(file);
      element.download = "learnmate-plus-standalone.html";
      document.body.appendChild(element);
      element.click();
      
      // Clean up
      document.body.removeChild(element);
      toast.success("Download complete! You can now use LearnMate+ offline.");
      setDownloaded(true);
    } catch (error) {
      toast.error("Download failed. Please try again.");
      console.error("Download error:", error);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-gray-900">
              Download LearnMate+ 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-learnmate-purple to-learnmate-blue">
                Standalone Version
              </span>
            </h1>
            
            <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 mb-8">
              <div className="flex items-start gap-6 flex-wrap md:flex-nowrap">
                <div className="w-full md:w-1/2">
                  <h2 className="text-xl font-bold mb-4">Get LearnMate+ as a Single HTML File</h2>
                  <p className="text-gray-700 mb-4">
                    Download the standalone version of LearnMate+ to use offline or integrate into your own systems. 
                    The single HTML file contains all necessary code, styles, and functionality in one portable package.
                  </p>
                  <h3 className="font-semibold mb-2">Benefits:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
                    <li>No internet connection required after download</li>
                    <li>Easy to share with colleagues and students</li>
                    <li>Works on all modern browsers</li>
                    <li>No installation or setup required</li>
                    <li>Can be hosted on any web server</li>
                  </ul>
                  
                  <Button
                    onClick={generateDownload}
                    disabled={downloading}
                    size="lg"
                    className={`${
                      downloaded 
                        ? "bg-green-600 hover:bg-green-700" 
                        : "bg-learnmate-purple hover:bg-learnmate-purple/90"
                    } text-white flex items-center gap-2 px-6`}
                  >
                    {downloading ? (
                      <>
                        <div className="h-4 w-4 border-2 border-t-transparent border-white rounded-full animate-spin" />
                        Preparing download...
                      </>
                    ) : downloaded ? (
                      <>
                        <Check className="h-5 w-5" />
                        Download Again
                      </>
                    ) : (
                      <>
                        <Download className="h-5 w-5" />
                        Download HTML File
                      </>
                    )}
                  </Button>
                </div>
                
                <div className="w-full md:w-1/2 mt-6 md:mt-0 bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-500">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m12 16 4-4-4-4"></path>
                      <path d="M8 12h8"></path>
                    </svg>
                    How to Use
                  </h3>
                  <ol className="list-decimal list-inside space-y-3 text-gray-700">
                    <li className="pl-2">
                      <span className="font-medium text-gray-900">Download:</span> Click the download button to get the LearnMate+ HTML file
                    </li>
                    <li className="pl-2">
                      <span className="font-medium text-gray-900">Open:</span> Double-click the downloaded file to open it in your default web browser
                    </li>
                    <li className="pl-2">
                      <span className="font-medium text-gray-900">Use:</span> All functionality is contained within the single file - no internet required
                    </li>
                    <li className="pl-2">
                      <span className="font-medium text-gray-900">Share:</span> Send the HTML file to anyone who needs access to LearnMate+
                    </li>
                  </ol>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-100">
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 mr-3 text-blue-500">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                      <p className="text-sm text-blue-800">
                        For advanced users: You can also host this file on your own web server or integrate it into your website.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex">
                    <a 
                      href="https://github.com/learnmate-plus/docs" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                      Developer documentation 
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DownloadPage;
