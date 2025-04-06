
import React, { useState, useRef } from 'react';
import { Volume2, Mic, Book, Brain, Eye, HeadphonesIcon, Loader2 } from 'lucide-react';

// Mock response generator to simulate AI responses
const generateContent = (concept: string, mode: string) => {
  // In a real app, this would call an API
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      if (!concept) {
        resolve("Please enter a concept to get personalized content.");
        return;
      }
      
      let response = "";
      switch(mode) {
        case "visual":
          response = `<h3>Visual Learning: ${concept}</h3>
            <p>This visual explanation uses diagrams and color coding to help you understand ${concept}.</p>
            <div class="demo-visual-aid">
              <div class="visual-diagram"></div>
              <div class="visual-labels">
                <span>Key components</span>
                <span>Relationships</span>
                <span>Processes</span>
              </div>
            </div>
            <p>The visual representation above shows how ${concept} works through spatial relationships and color-coded elements.</p>`;
          break;
          
        case "audio":
          response = `<h3>Audio Learning: ${concept}</h3>
            <p>This audio-focused explanation uses clear descriptions and analogies to help understand ${concept}.</p>
            <div class="demo-audio-aid">
              <div class="audio-wave"></div>
              <button class="play-button">Listen to Explanation</button>
            </div>
            <p>The audio explanation describes ${concept} using everyday sounds and rhythmic patterns to enhance comprehension.</p>`;
          break;
          
        case "cognitive":
          response = `<h3>Cognitive Support: ${concept}</h3>
            <p>This simplified explanation breaks down ${concept} into easily digestible parts:</p>
            <div class="demo-cognitive-aid">
              <div class="step">
                <span class="step-number">1</span>
                <span class="step-text">First, we understand the basic definition</span>
              </div>
              <div class="step">
                <span class="step-number">2</span>
                <span class="step-text">Next, we explore key components</span>
              </div>
              <div class="step">
                <span class="step-number">3</span>
                <span class="step-text">Finally, we see practical examples</span>
              </div>
            </div>
            <p>This structured approach helps organize information about ${concept} for easier processing.</p>`;
          break;
          
        default:
          response = `<h3>Learning about: ${concept}</h3>
            <p>Please select a learning mode to get personalized content.</p>`;
      }
      
      resolve(response);
    }, 1500); // Simulating API delay
  });
};

const Demo = () => {
  const [concept, setConcept] = useState("");
  const [mode, setMode] = useState("visual");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const content = await generateContent(concept, mode);
    setOutput(content);
    setLoading(false);
    
    // Auto-scroll to results
    setTimeout(() => {
      outputRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  
  // Handle voice input using Web Speech API
  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Voice recognition is not supported by your browser. Please try Chrome or Edge.");
      return;
    }
    
    // @ts-ignore - TypeScript doesn't know about webkitSpeechRecognition
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    
    setIsListening(true);
    
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setConcept(transcript);
      setIsListening(false);
    };
    
    recognition.onerror = () => {
      setIsListening(false);
    };
    
    recognition.onend = () => {
      setIsListening(false);
    };
    
    recognition.start();
  };
  
  // Read output using Text-to-Speech
  const readOutput = () => {
    if ('speechSynthesis' in window) {
      // Strip HTML tags for speech
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = output;
      const textContent = tempDiv.textContent || tempDiv.innerText;
      
      const utterance = new SpeechSynthesisUtterance(textContent);
      window.speechSynthesis.cancel(); // Stop any ongoing speech
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-speech is not supported by your browser.");
    }
  };

  return (
    <section id="demo" className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-sm font-medium">
              <Mic className="h-4 w-4 mr-2" />
              Interactive Demo
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
              Try <span className="text-learnmate-teal">LearnMate+</span> For Yourself
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Experience how our AI adapts educational content to different learning needs. Enter a concept below to see it presented in your preferred learning mode.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="learningMode" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Select Learning Mode:
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button
                    type="button"
                    onClick={() => setMode("visual")}
                    className={`flex items-center justify-center p-4 rounded-lg border ${
                      mode === "visual" 
                        ? "bg-learnmate-purple/10 border-learnmate-purple text-learnmate-purple" 
                        : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                    } transition-colors focus-ring`}
                  >
                    <Eye className={`h-5 w-5 mr-2 ${mode === "visual" ? "text-learnmate-purple" : ""}`} />
                    Visual Learning
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => setMode("audio")}
                    className={`flex items-center justify-center p-4 rounded-lg border ${
                      mode === "audio" 
                        ? "bg-learnmate-blue/10 border-learnmate-blue text-learnmate-blue" 
                        : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                    } transition-colors focus-ring`}
                  >
                    <HeadphonesIcon className={`h-5 w-5 mr-2 ${mode === "audio" ? "text-learnmate-blue" : ""}`} />
                    Audio Learning
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => setMode("cognitive")}
                    className={`flex items-center justify-center p-4 rounded-lg border ${
                      mode === "cognitive" 
                        ? "bg-learnmate-teal/10 border-learnmate-teal text-learnmate-teal" 
                        : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                    } transition-colors focus-ring`}
                  >
                    <Brain className={`h-5 w-5 mr-2 ${mode === "cognitive" ? "text-learnmate-teal" : ""}`} />
                    Cognitive Support
                  </button>
                </div>
              </div>
              
              <div>
                <label htmlFor="concept" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Enter a Concept or Question:
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="concept"
                    value={concept}
                    onChange={(e) => setConcept(e.target.value)}
                    placeholder="e.g., What is photosynthesis?"
                    className="input-field flex-grow rounded-r-none"
                    aria-label="Enter learning concept"
                  />
                  <button
                    type="button"
                    onClick={handleVoiceInput}
                    className={`p-2 bg-gray-100 dark:bg-gray-700 border border-l-0 border-input rounded-r-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors focus-ring ${isListening ? 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400' : ''}`}
                    aria-label="Use voice input"
                  >
                    {isListening ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <Mic className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-4 btn-primary bg-gradient-to-r from-learnmate-purple to-learnmate-blue text-white rounded-lg shadow-md hover:opacity-95 focus-ring flex justify-center items-center"
                disabled={loading}
                aria-label="Generate personalized content"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Book className="h-5 w-5 mr-2" />
                    Generate Personalized Content
                  </>
                )}
              </button>
            </form>
            
            {output && (
              <div 
                ref={outputRef} 
                className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6 animate-fade-in"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Your Personalized Content
                  </h3>
                  <button
                    onClick={readOutput}
                    className="flex items-center text-sm text-learnmate-purple hover:text-learnmate-purple/80 focus-ring"
                    aria-label="Listen to this content"
                  >
                    <Volume2 className="h-4 w-4 mr-1" />
                    Listen
                  </button>
                </div>
                
                <div 
                  className="prose dark:prose-invert max-w-none bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg"
                  dangerouslySetInnerHTML={{ __html: output }}
                >
                </div>
                
                <div className="mt-6 flex justify-center">
                  <button
                    type="button"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-learnmate-purple dark:hover:text-learnmate-purple transition-colors focus-ring"
                    onClick={() => {
                      outputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      setTimeout(() => window.scrollBy(0, -100), 200);
                    }}
                  >
                    Try Another Concept
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Demo-specific styled elements that would normally be in CSS file */}
      <style jsx>{`
        .demo-visual-aid {
          background: linear-gradient(135deg, #f0f9ff, #e8f5fe);
          border-radius: 8px;
          padding: 1rem;
          margin: 1rem 0;
          height: 200px;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        
        .visual-diagram {
          flex: 1;
          background: radial-gradient(circle at 50% 50%, rgba(138, 92, 246, 0.15) 0%, rgba(14, 165, 233, 0.1) 50%, rgba(255, 255, 255, 0) 100%);
          border-radius: 6px;
          position: relative;
        }
        
        .visual-diagram::before,
        .visual-diagram::after {
          content: "";
          position: absolute;
          background: rgba(138, 92, 246, 0.5);
          border-radius: 50%;
        }
        
        .visual-diagram::before {
          width: 60px;
          height: 60px;
          left: 30%;
          top: 40%;
        }
        
        .visual-diagram::after {
          width: 40px;
          height: 40px;
          right: 30%;
          top: 30%;
          background: rgba(14, 165, 233, 0.5);
        }
        
        .visual-labels {
          display: flex;
          justify-content: space-around;
          margin-top: 10px;
        }
        
        .visual-labels span {
          font-size: 0.8rem;
          color: #64748b;
          padding: 4px 8px;
          background: white;
          border-radius: 4px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        
        .demo-audio-aid {
          background: linear-gradient(135deg, #f5f3ff, #ede9fe);
          border-radius: 8px;
          padding: 1rem;
          margin: 1rem 0;
          height: 120px;
          display: flex;
          flex-direction: column;
          position: relative;
          justify-content: center;
          align-items: center;
        }
        
        .audio-wave {
          height: 40px;
          width: 80%;
          margin-bottom: 1rem;
          background: linear-gradient(90deg, 
            rgba(0,0,0,0) 0%, 
            rgba(139, 92, 246, 0.3) 20%, 
            rgba(139, 92, 246, 0.6) 50%,
            rgba(139, 92, 246, 0.3) 80%,
            rgba(0,0,0,0) 100%
          );
          mask-image: url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,30 Q10,10 20,30 T40,30 T60,30 T80,30 T100,30 T120,30 T140,30 T160,30 T180,30 T200,30' fill='none' stroke='black' stroke-width='2'/%3E%3C/svg%3E");
          mask-size: 100% 100%;
        }
        
        .play-button {
          background: #8b5cf6;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          font-size: 0.9rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        .play-button:hover {
          background: #7c3aed;
        }
        
        .play-button::before {
          content: "▶";
          font-size: 0.8rem;
        }
        
        .demo-cognitive-aid {
          background: linear-gradient(135deg, #ecfdf5, #d1fae5);
          border-radius: 8px;
          padding: 1rem;
          margin: 1rem 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .step {
          display: flex;
          align-items: center;
          padding: 8px;
          background: white;
          border-radius: 4px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          transition: transform 0.2s;
        }
        
        .step:hover {
          transform: translateX(5px);
        }
        
        .step-number {
          background: #06b6d4;
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: bold;
          margin-right: 12px;
        }
        
        .step-text {
          color: #374151;
          font-size: 0.95rem;
        }
        
        /* Dark mode adjustments */
        .dark .demo-visual-aid {
          background: linear-gradient(135deg, #1e293b, #0f172a);
        }
        
        .dark .visual-labels span {
          background: #334155;
          color: #e2e8f0;
        }
        
        .dark .demo-audio-aid {
          background: linear-gradient(135deg, #312e81, #1e1b4b);
        }
        
        .dark .demo-cognitive-aid {
          background: linear-gradient(135deg, #064e3b, #042f2e);
        }
        
        .dark .step {
          background: #1e293b;
        }
        
        .dark .step-text {
          color: #e2e8f0;
        }
      `}</style>
    </section>
  );
};

export default Demo;
