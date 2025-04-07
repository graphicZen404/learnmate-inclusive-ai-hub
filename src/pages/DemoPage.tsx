
import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Search, Mic, Volume2, Book, Brain, Eye, HeadphonesIcon, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { toast } from '../hooks/use-toast';

const DemoPage = () => {
  // State for search functionality
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  
  // State for learning mode demo
  const [concept, setConcept] = useState('');
  const [mode, setMode] = useState('visual');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Voice recognition state
  const [isListening, setIsListening] = useState(false);
  
  // Refs for scrolling
  const searchResultsRef = useRef<HTMLDivElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const demoSectionRef = useRef<HTMLDivElement>(null);
  
  // Update document title
  useEffect(() => {
    document.title = "Interactive Demo | LearnMate+";
  }, []);
  
  // Generate search results (mock)
  const generateSearchResults = (searchQuery: string) => {
    return new Promise<string[]>((resolve) => {
      setTimeout(() => {
        if (!searchQuery.trim()) {
          resolve([]);
          return;
        }
        
        const demoResults = [
          `Visual learning resources about "${searchQuery}"`,
          `Audio explanations for "${searchQuery}"`,
          `Simplified breakdown of "${searchQuery}" for cognitive support`,
          `Interactive exercises related to "${searchQuery}"`,
          `Real-world examples of "${searchQuery}"`
        ];
        
        resolve(demoResults);
      }, 1200); // Simulate API delay
    });
  };
  
  // Generate learning content (mock)
  const generateContent = (concept: string, mode: string) => {
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
  
  // Handle search form submission
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    
    try {
      const results = await generateSearchResults(query);
      setSearchResults(results);
      
      // Auto-scroll to results
      setTimeout(() => {
        searchResultsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (error) {
      toast({
        title: "Search failed",
        description: "We couldn't process your search. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSearching(false);
    }
  };
  
  // Handle learning demo form submission
  const handleLearningSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const content = await generateContent(concept, mode);
      setOutput(content);
      
      // Auto-scroll to results
      setTimeout(() => {
        outputRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (error) {
      toast({
        title: "Content generation failed",
        description: "We couldn't generate learning content. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  
  // Handle voice input using Web Speech API
  const handleVoiceInput = (inputType: 'search' | 'learning') => {
    if (!('webkitSpeechRecognition' in window)) {
      toast({
        title: "Voice input not supported",
        description: "Your browser doesn't support voice recognition. Please try Chrome or Edge.",
        variant: "destructive"
      });
      return;
    }
    
    // @ts-ignore - TypeScript doesn't know about webkitSpeechRecognition
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    
    setIsListening(true);
    
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      
      if (inputType === 'search') {
        setQuery(transcript);
        // Auto-submit the search form
        setTimeout(() => {
          handleSearch(new Event('submit') as any);
        }, 500);
      } else {
        setConcept(transcript);
      }
      
      setIsListening(false);
    };
    
    recognition.onerror = () => {
      setIsListening(false);
      toast({
        title: "Voice recognition error",
        description: "We couldn't process your voice. Please try again or type your query.",
        variant: "destructive"
      });
    };
    
    recognition.onend = () => {
      setIsListening(false);
    };
    
    recognition.start();
  };
  
  // Read text using Text-to-Speech
  const readText = (text: string) => {
    if ('speechSynthesis' in window) {
      // Strip HTML tags for speech
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = text;
      const textContent = tempDiv.textContent || tempDiv.innerText;
      
      const utterance = new SpeechSynthesisUtterance(textContent);
      window.speechSynthesis.cancel(); // Stop any ongoing speech
      window.speechSynthesis.speak(utterance);
      
      toast({
        title: "Text-to-Speech",
        description: "Reading the content aloud...",
        duration: 3000,
      });
    } else {
      toast({
        title: "Text-to-Speech not supported",
        description: "Your browser doesn't support text-to-speech functionality.",
        variant: "destructive"
      });
    }
  };
  
  // Scroll to demo section
  const scrollToDemo = () => {
    demoSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">
                LearnMate+ <span className="text-learnmate-teal">Interactive Demo</span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                Experience how our AI adapts to different learning needs. Try out both of our features below!
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  onClick={scrollToDemo}
                  className="btn-primary inline-flex items-center justify-center gap-2 text-white bg-learnmate-purple hover:bg-learnmate-purple/90 px-6 py-3 rounded-lg shadow-lg shadow-purple-500/20"
                >
                  <Search className="h-5 w-5" />
                  Try Search Demo
                </Button>
                
                <Button 
                  onClick={() => {
                    scrollToDemo();
                    setTimeout(() => {
                      document.getElementById('learning-demo')?.scrollIntoView({ behavior: 'smooth' });
                    }, 500);
                  }}
                  variant="outline"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Book className="h-5 w-5" />
                  Try Learning Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Demo Section */}
        <section ref={demoSectionRef} className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Search Demo */}
                <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-gray-900">
                      Search for Learning Resources
                    </h2>
                    
                    <p className="text-gray-600 mb-6">
                      Enter any topic or try voice search by clicking the microphone icon.
                    </p>
                    
                    <form onSubmit={handleSearch} className="mb-6">
                      <div className="flex w-full">
                        <div className="relative flex-grow">
                          <Input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="What would you like to learn about?"
                            className="pr-10 rounded-r-none"
                          />
                          <button
                            type="button"
                            onClick={() => handleVoiceInput('search')}
                            disabled={isListening}
                            className={`absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full ${
                              isListening ? 'text-red-500 animate-pulse' : 'text-gray-400 hover:text-gray-600'
                            }`}
                          >
                            <Mic className="h-4 w-4" />
                          </button>
                        </div>
                        <Button 
                          type="submit" 
                          disabled={isSearching || !query.trim()} 
                          className="rounded-l-none bg-learnmate-purple hover:bg-learnmate-purple/90"
                        >
                          {isSearching ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Search className="h-4 w-4 mr-2" />}
                          Search
                        </Button>
                      </div>
                    </form>
                    
                    {isListening && (
                      <div className="mb-6 p-4 bg-purple-50 rounded-lg flex items-center justify-center">
                        <div className="animate-pulse flex items-center">
                          <div className="h-2 w-2 bg-red-500 rounded-full mr-1"></div>
                          <div className="h-2 w-2 bg-red-500 rounded-full mr-1 animation-delay-150"></div>
                          <div className="h-2 w-2 bg-red-500 rounded-full animation-delay-300"></div>
                          <span className="ml-3 text-sm text-gray-600">Listening...</span>
                        </div>
                      </div>
                    )}
                    
                    {searchResults.length > 0 && (
                      <div ref={searchResultsRef} className="mt-6 border-t border-gray-200 pt-6 animate-fade-in">
                        <h3 className="text-lg font-semibold mb-4 text-gray-900">
                          Learning Resources
                        </h3>
                        <ul className="space-y-3">
                          {searchResults.map((result, index) => (
                            <li 
                              key={index}
                              className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <span>{result}</span>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => readText(result)}
                                  className="text-learnmate-purple hover:text-learnmate-purple/80"
                                >
                                  <Volume2 className="h-4 w-4 mr-1" />
                                  <span className="text-xs">Listen</span>
                                </Button>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Learning Mode Demo */}
                <div id="learning-demo" className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-gray-900">
                      Try Different Learning Modes
                    </h2>
                    
                    <p className="text-gray-600 mb-6">
                      See how content adapts to different learning styles.
                    </p>
                    
                    <form onSubmit={handleLearningSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="learningMode" className="block text-sm font-medium text-gray-700 mb-2">
                          Select Learning Mode:
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          <button
                            type="button"
                            onClick={() => setMode("visual")}
                            className={`flex items-center justify-center p-3 rounded-lg border ${
                              mode === "visual" 
                                ? "bg-learnmate-purple/10 border-learnmate-purple text-learnmate-purple" 
                                : "border-gray-200 hover:bg-gray-50"
                            } transition-colors`}
                          >
                            <Eye className={`h-4 w-4 mr-1.5 ${mode === "visual" ? "text-learnmate-purple" : ""}`} />
                            Visual
                          </button>
                          
                          <button
                            type="button"
                            onClick={() => setMode("audio")}
                            className={`flex items-center justify-center p-3 rounded-lg border ${
                              mode === "audio" 
                                ? "bg-learnmate-blue/10 border-learnmate-blue text-learnmate-blue" 
                                : "border-gray-200 hover:bg-gray-50"
                            } transition-colors`}
                          >
                            <HeadphonesIcon className={`h-4 w-4 mr-1.5 ${mode === "audio" ? "text-learnmate-blue" : ""}`} />
                            Audio
                          </button>
                          
                          <button
                            type="button"
                            onClick={() => setMode("cognitive")}
                            className={`flex items-center justify-center p-3 rounded-lg border ${
                              mode === "cognitive" 
                                ? "bg-learnmate-teal/10 border-learnmate-teal text-learnmate-teal" 
                                : "border-gray-200 hover:bg-gray-50"
                            } transition-colors`}
                          >
                            <Brain className={`h-4 w-4 mr-1.5 ${mode === "cognitive" ? "text-learnmate-teal" : ""}`} />
                            Cognitive
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="concept" className="block text-sm font-medium text-gray-700 mb-2">
                          Enter a Concept or Question:
                        </label>
                        <div className="flex">
                          <Input
                            type="text"
                            id="concept"
                            value={concept}
                            onChange={(e) => setConcept(e.target.value)}
                            placeholder="e.g., What is photosynthesis?"
                            className="rounded-r-none"
                          />
                          <button
                            type="button"
                            onClick={() => handleVoiceInput('learning')}
                            className={`p-2 bg-gray-100 border border-l-0 border-input rounded-r-md hover:bg-gray-200 transition-colors ${isListening ? 'bg-red-100 text-red-600' : ''}`}
                          >
                            {isListening ? (
                              <Loader2 className="h-5 w-5 animate-spin" />
                            ) : (
                              <Mic className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </div>
                      
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-learnmate-purple to-learnmate-blue text-white rounded-lg shadow-md hover:opacity-95"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                            Generating...
                          </>
                        ) : (
                          <>
                            <Book className="h-5 w-5 mr-2" />
                            Generate Content
                          </>
                        )}
                      </Button>
                    </form>
                    
                    {output && (
                      <div 
                        ref={outputRef} 
                        className="mt-6 border-t border-gray-200 pt-6 animate-fade-in"
                      >
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-lg font-semibold text-gray-900">
                            Your Personalized Content
                          </h3>
                          <button
                            onClick={() => readText(output)}
                            className="flex items-center text-sm text-learnmate-purple hover:text-learnmate-purple/80"
                          >
                            <Volume2 className="h-4 w-4 mr-1" />
                            Listen
                          </button>
                        </div>
                        
                        <div 
                          className="prose max-w-none bg-gray-50 p-4 rounded-lg"
                          dangerouslySetInnerHTML={{ __html: output }}
                        >
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-heading font-semibold mb-8 text-gray-900">
                How Our Technology Works
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white p-5 rounded-lg shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold text-learnmate-purple">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Input Your Needs</h3>
                  <p className="text-sm text-gray-600">Type your query or use voice input to tell us what you want to learn.</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold text-learnmate-blue">2</span>
                  </div>
                  <h3 className="font-medium mb-2">AI Processing</h3>
                  <p className="text-sm text-gray-600">Our AI analyzes your request and identifies your learning needs.</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold text-learnmate-teal">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Personalized Experience</h3>
                  <p className="text-sm text-gray-600">Receive content tailored to your specific learning style.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* CSS for the demo visualizations */}
      <style>
        {`
        .demo-visual-aid {
          background: linear-gradient(135deg, #f0f9ff, #e8f5fe);
          border-radius: 8px;
          padding: 1rem;
          margin: 1rem 0;
          height: 150px;
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
          width: 40px;
          height: 40px;
          left: 30%;
          top: 40%;
        }
        
        .visual-diagram::after {
          width: 25px;
          height: 25px;
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
          height: 100px;
          display: flex;
          flex-direction: column;
          position: relative;
          justify-content: center;
          align-items: center;
        }
        
        .audio-wave {
          height: 30px;
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
          padding: 6px 14px;
          border-radius: 4px;
          font-size: 0.85rem;
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
          padding: 6px;
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
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: bold;
          margin-right: 10px;
        }
        
        .step-text {
          color: #374151;
          font-size: 0.9rem;
        }
        `}
      </style>
      <Footer />
    </div>
  );
};

export default DemoPage;
