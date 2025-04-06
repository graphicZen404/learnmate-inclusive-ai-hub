
import React, { useState, useRef } from 'react';
import { Search, Mic, Loader2, Volume2 } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

const SearchDemo = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const { toast } = useToast();
  const resultsRef = useRef<HTMLDivElement>(null);

  // Simulate search results
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

  // Handle form submission
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const searchResults = await generateSearchResults(query);
      setResults(searchResults);
      
      // Auto-scroll to results
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (error) {
      toast({
        title: "Search failed",
        description: "We couldn't process your search. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle voice input using Web Speech API
  const handleVoiceInput = () => {
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
      setQuery(transcript);
      setIsListening(false);
      
      // Auto-submit the form with the voice input
      setTimeout(() => {
        handleSearch(new Event('submit') as any);
      }, 500);
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

  // Read result using Text-to-Speech
  const readResult = (text: string) => {
    if ('speechSynthesis' in window) {
      // Strip any HTML tags for speech
      const textToRead = text.replace(/<[^>]*>/g, '');
      
      const utterance = new SpeechSynthesisUtterance(textToRead);
      window.speechSynthesis.cancel(); // Stop any ongoing speech
      window.speechSynthesis.speak(utterance);
      
      toast({
        title: "Text-to-Speech",
        description: "Reading the result aloud...",
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

  return (
    <div className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
          Search for Learning Resources
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Enter any topic or concept you want to learn about, or try voice search by clicking the microphone icon.
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
                onClick={handleVoiceInput}
                disabled={isListening}
                className={`absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full ${
                  isListening ? 'text-red-500 animate-pulse' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                }`}
              >
                <Mic className="h-4 w-4" />
              </button>
            </div>
            <Button 
              type="submit" 
              disabled={loading || !query.trim()} 
              className="rounded-l-none bg-learnmate-purple hover:bg-learnmate-purple/90"
            >
              {loading ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Search className="h-4 w-4 mr-2" />}
              Search
            </Button>
          </div>
        </form>
        
        {isListening && (
          <div className="mb-6 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
            <div className="animate-pulse flex items-center">
              <div className="h-2 w-2 bg-red-500 rounded-full mr-1"></div>
              <div className="h-2 w-2 bg-red-500 rounded-full mr-1 animation-delay-150"></div>
              <div className="h-2 w-2 bg-red-500 rounded-full animation-delay-300"></div>
              <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">Listening...</span>
            </div>
          </div>
        )}
        
        {results.length > 0 && (
          <div ref={resultsRef} className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6 animate-in fade-in">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Learning Resources
            </h3>
            <ul className="space-y-4">
              {results.map((result, index) => (
                <li 
                  key={index}
                  className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span>{result}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => readResult(result)}
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
  );
};

export default SearchDemo;
