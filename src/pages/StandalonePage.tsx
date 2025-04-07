
import React from 'react';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';
import { Download } from 'lucide-react';

const StandalonePage = () => {
  const downloadStandalonePage = () => {
    try {
      const htmlContent = `<!DOCTYPE html>
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
      
      .testimonials {
        padding: 4rem 0;
        background-color: #fafafa;
      }
      
      .testimonial-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
      }
      
      .testimonial-card {
        background: white;
        padding: 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px rgba(0,0,0,0.05);
      }
      
      .how-it-works {
        padding: 4rem 0;
        background: white;
      }
      
      .steps {
        position: relative;
        max-width: 800px;
        margin: 3rem auto 0;
      }
      
      .step {
        display: flex;
        margin-bottom: 2rem;
        position: relative;
      }
      
      .step-icon {
        width: 3rem;
        height: 3rem;
        border-radius: 9999px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--purple);
        color: white;
        margin-right: 1.5rem;
        flex-shrink: 0;
      }
      
      .step-content {
        flex: 1;
      }
      
      @media (max-width: 768px) {
        .hero h1 {
          font-size: 2.5rem;
        }
        
        .features-grid, .footer-grid, .testimonial-grid {
          grid-template-columns: 1fr;
        }
        
        .footer-bottom {
          flex-direction: column;
          gap: 1rem;
          text-align: center;
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
          <ul style="display: flex; list-style: none; gap: 1.5rem;">
            <li><a href="#" style="color: #333; text-decoration: none;">Home</a></li>
            <li><a href="#features" style="color: #333; text-decoration: none;">Features</a></li>
            <li><a href="#how-it-works" style="color: #333; text-decoration: none;">How it Works</a></li>
            <li><a href="#testimonials" style="color: #333; text-decoration: none;">Testimonials</a></li>
            <li><a href="#contact" style="color: #333; text-decoration: none;">Contact</a></li>
          </ul>
        </nav>
        <div>
          <button class="btn btn-primary">Login</button>
        </div>
      </div>
    </header>
    
    <main>
      <section class="hero">
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
      
      <section id="features" class="features">
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
            
            <!-- Sign Language Visuals -->
            <div class="feature-card">
              <div class="feature-icon" style="background-color: var(--green);">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>
              </div>
              <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Sign Language Visuals</h3>
              <p style="color: #666;">AI-powered sign language interpretation for educational content, bridging communication gaps for deaf students.</p>
            </div>
            
            <!-- Cognitive Support -->
            <div class="feature-card">
              <div class="feature-icon" style="background-color: var(--yellow);">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a8 8 0 1 0 0 16 8 8 0 1 0 0-16z"></path><path d="M12 16v.01"></path><path d="M12 12v-4"></path></svg>
              </div>
              <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Cognitive Support</h3>
              <p style="color: #666;">Personalized learning paths that adapt to cognitive differences, with simplified explanations and visual aids when needed.</p>
            </div>
            
            <!-- Language Simplification -->
            <div class="feature-card">
              <div class="feature-icon" style="background-color: var(--red);">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v4h18m0-4v4"></path><path d="M7 20h10"></path><path d="M9 16V4h6v12"></path></svg>
              </div>
              <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Language Simplification</h3>
              <p style="color: #666;">Automatically adjust content complexity for neurodiverse learners, making abstract concepts more accessible and understandable.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="how-it-works" class="how-it-works">
        <div class="container">
          <div style="text-align: center; max-width: 48rem; margin: 0 auto;">
            <div style="display: inline-flex; align-items: center; padding: 0.25rem 0.75rem; background-color: #e6f0ff; border-radius: 9999px; margin-bottom: 1rem; color: var(--blue);">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem;"><path d="M12 20V10"></path><path d="m18 14-6-6-6 6"></path><path d="M12 4v2"></path></svg>
              Personalized Learning Process
            </div>
            
            <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">
              How <span style="color: var(--blue);">LearnMate+</span> Works
            </h2>
            
            <p style="color: #666; font-size: 1.125rem;">
              Our platform uses advanced AI to create truly personalized learning experiences that adapt to each student's unique needs and abilities.
            </p>
          </div>
          
          <div class="steps">
            <div class="step">
              <div class="step-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>
              </div>
              <div class="step-content">
                <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">1. Assessment</h3>
                <p style="color: #666;">Our AI evaluates each student's learning profile, identifying strengths, needs, and preferred learning styles through interactive assessments.</p>
              </div>
            </div>
            
            <div class="step">
              <div class="step-icon" style="background-color: var(--blue);">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 5-10 7L2 5"></path><path d="M4 22h16a2 2 0 0 0 2-2V6l-10 7L2 6v14a2 2 0 0 0 2 2z"></path></svg>
              </div>
              <div class="step-content">
                <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">2. Personalization</h3>
                <p style="color: #666;">Based on the assessment, LearnMate+ creates a customized learning plan with appropriate accessibility tools and content adaptations.</p>
              </div>
            </div>
            
            <div class="step">
              <div class="step-icon" style="background-color: var(--teal);">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
              </div>
              <div class="step-content">
                <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">3. Adaptive Learning</h3>
                <p style="color: #666;">As students engage with content, our AI continuously adjusts difficulty, presentation, and support features to optimize comprehension.</p>
              </div>
            </div>
            
            <div class="step">
              <div class="step-icon" style="background-color: var(--green);">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
              </div>
              <div class="step-content">
                <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">4. Progress Tracking</h3>
                <p style="color: #666;">Detailed analytics provide insights into learning patterns, growth areas, and achievement milestones in accessible formats.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="testimonials" class="testimonials">
        <div class="container">
          <div style="text-align: center; max-width: 48rem; margin: 0 auto;">
            <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">
              Success <span style="color: var(--green);">Stories</span>
            </h2>
            <p style="color: #666; font-size: 1.125rem;">
              Hear from students, parents, and educators who have experienced the transformative power of accessible education with LearnMate+.
            </p>
          </div>
          
          <div class="testimonial-grid">
            <div class="testimonial-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--purple); opacity: 0.2; margin-bottom: 1rem;"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>
              <p style="color: #666; margin-bottom: 1rem; font-style: italic;">"LearnMate+ has completely transformed how my visually impaired students engage with course material. The text-to-speech feature with natural-sounding voices has made complex concepts accessible to everyone."</p>
              <div style="display: flex; align-items: center;">
                <div style="width: 2.5rem; height: 2.5rem; border-radius: 9999px; background-color: var(--purple); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; margin-right: 0.75rem;">EJ</div>
                <div>
                  <h4 style="font-weight: 600; margin-bottom: 0.25rem;">Emma Johnson</h4>
                  <p style="color: #777; font-size: 0.875rem;">Special Education Teacher</p>
                </div>
              </div>
            </div>
            
            <div class="testimonial-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--purple); opacity: 0.2; margin-bottom: 1rem;"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>
              <p style="color: #666; margin-bottom: 1rem; font-style: italic;">"As someone with dyslexia, I've always struggled with dense academic texts. The language simplification tool breaks down complex terminology without losing the core meaning, making my college courses finally manageable."</p>
              <div style="display: flex; align-items: center;">
                <div style="width: 2.5rem; height: 2.5rem; border-radius: 9999px; background-color: var(--blue); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; margin-right: 0.75rem;">MT</div>
                <div>
                  <h4 style="font-weight: 600; margin-bottom: 0.25rem;">Michael T.</h4>
                  <p style="color: #777; font-size: 0.875rem;">University Student</p>
                </div>
              </div>
            </div>
            
            <div class="testimonial-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--purple); opacity: 0.2; margin-bottom: 1rem;"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>
              <p style="color: #666; margin-bottom: 1rem; font-style: italic;">"The real-time captioning feature has been a game-changer for my deaf students. They can now participate fully in video lectures and discussions without feeling left behind. The accuracy is impressive."</p>
              <div style="display: flex; align-items: center;">
                <div style="width: 2.5rem; height: 2.5rem; border-radius: 9999px; background-color: var(--teal); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; margin-right: 0.75rem;">SA</div>
                <div>
                  <h4 style="font-weight: 600; margin-bottom: 0.25rem;">Dr. Sarah Ahmed</h4>
                  <p style="color: #777; font-size: 0.875rem;">Accessibility Coordinator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="contact" class="py-16" style="background-color: #fff;">
        <div class="container">
          <div style="text-align: center; max-width: 48rem; margin: 0 auto;">
            <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">
              Get in <span style="color: var(--purple);">Touch</span>
            </h2>
            <p style="color: #666; font-size: 1.125rem; margin-bottom: 2rem;">
              Have questions about LearnMate+? Our team is here to help you make education accessible for all students.
            </p>
          </div>
          
          <div style="max-width: 32rem; margin: 0 auto; background-color: #fff; padding: 2rem; border-radius: 0.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <form>
              <div style="margin-bottom: 1.5rem;">
                <label for="name" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Name</label>
                <input type="text" id="name" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 0.25rem;" placeholder="Your name">
              </div>
              
              <div style="margin-bottom: 1.5rem;">
                <label for="email" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Email</label>
                <input type="email" id="email" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 0.25rem;" placeholder="Your email">
              </div>
              
              <div style="margin-bottom: 1.5rem;">
                <label for="message" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Message</label>
                <textarea id="message" rows="4" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 0.25rem;" placeholder="Your message"></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary" style="width: 100%;">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      
      <section class="cta">
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
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem; color: var(--purple);"><circle cx="17" cy="17" r="3"></circle><path d="M10 18a7.89 7.89 0 0 1 1-4"></path><path d="M15 6a7.89 7.89 0 0 0-1 4 7.89 7.89 0 0 0 1 4"></path><circle cx="7" cy="10" r="3"></circle></svg>
            <span>Committed to inclusive education for all</span>
          </div>
        </div>
      </div>
    </footer>
  </body>
</html>`;
      
      // Create a download link
      const element = document.createElement('a');
      const file = new Blob([htmlContent], {type: 'text/html'});
      element.href = URL.createObjectURL(file);
      element.download = "learnmate-plus.html";
      document.body.appendChild(element);
      element.click();
      
      // Clean up
      document.body.removeChild(element);
      toast.success("Complete website downloaded as a single HTML file!");
    } catch (error) {
      toast.error("Download failed. Please try again.");
      console.error("Download error:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-purple-50 p-6">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-3xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-learnmate-purple via-learnmate-blue to-learnmate-teal">
          LearnMate+ Complete Website
        </h1>
        
        <p className="text-gray-600 mb-8">
          Click the button below to download the entire LearnMate+ website as a single HTML file. 
          This standalone file includes all content, styles, and basic interactivity.
        </p>
        
        <Button
          onClick={downloadStandalonePage}
          className="bg-learnmate-purple hover:bg-learnmate-purple/90 flex items-center gap-2 mx-auto"
        >
          <Download className="h-4 w-4" />
          Download Complete Website
        </Button>
        
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            The downloaded file contains a complete, standalone version of the LearnMate+ landing page with all sections included.
            No external dependencies required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StandalonePage;
