import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot } from 'lucide-react';
import { sendMessageToGemini, initializeChat } from '../services/geminiService';

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([
    { text: "Hello! I'm HeyoBot. Ask me about investing in Saudi Real Estate or our studio services.", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Gemini when component mounts
    initializeChat();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg = inputValue;
    setMessages(prev => [...prev, { text: userMsg, isUser: true }]);
    setInputValue("");
    setIsLoading(true);

    const response = await sendMessageToGemini(userMsg);
    
    setMessages(prev => [...prev, { text: response, isUser: false }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-brand-black p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center">
                <Bot size={18} className="text-black" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">HeyoBot Assistant</h3>
                <p className="text-gray-400 text-xs">Powered by Google Gemini</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 bg-gray-50 space-y-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  msg.isUser 
                    ? 'bg-brand-purple text-white rounded-tr-none' 
                    : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about ROI in Riyadh..."
              className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="p-2 bg-brand-black text-white rounded-full hover:bg-gray-800 disabled:opacity-50 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'} transition-all duration-300 bg-brand-purple hover:bg-brand-black text-white p-4 rounded-full shadow-lg hover:shadow-xl flex items-center gap-2`}
      >
        <MessageSquare size={24} />
        <span className="font-bold hidden sm:inline">Ask AI</span>
      </button>
    </div>
  );
};

export default GeminiChat;