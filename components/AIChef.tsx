import React, { useState, useEffect, useRef } from 'react';
import { X, Send, ChefHat, Loader2, Sparkles } from 'lucide-react';
import { sendMessageToChef } from '../services/geminiService';
import { ChatMessage } from '../types';

interface AIChefProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AIChef: React.FC<AIChefProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Greetings! I am Chef Ming. Are you craving something spicy, sweet, or perhaps looking for a vegetarian recommendation?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Prepare history for API
      const historyForApi = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const responseText = await sendMessageToChef(historyForApi, userMsg.text);

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error("Chat error", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-lotus-black w-full max-w-lg h-[600px] max-h-[90vh] rounded-xl shadow-2xl flex flex-col border border-lotus-gold/30 overflow-hidden relative">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-lotus-red to-red-900 p-4 flex justify-between items-center shadow-md">
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-2 rounded-full">
              <ChefHat className="text-white" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-white font-serif tracking-wide">Chef Ming AI</h3>
              <div className="flex items-center gap-1 text-xs text-red-200">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Online
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-white/80 hover:text-white hover:rotate-90 transition-transform duration-200"
          >
            <X size={24} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-hide bg-gray-900/50">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-lotus-gold text-lotus-black rounded-tr-none' 
                    : 'bg-gray-800 text-gray-100 rounded-tl-none border border-gray-700'
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                <span className="text-[10px] opacity-50 block mt-2 text-right">
                  {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </span>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-800 rounded-2xl rounded-tl-none p-4 border border-gray-700 flex items-center gap-2">
                <Loader2 size={16} className="animate-spin text-lotus-gold" />
                <span className="text-xs text-gray-400 italic">Chef is thinking...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-lotus-black border-t border-gray-800">
          <div className="flex items-center gap-2 bg-gray-900 p-2 rounded-full border border-gray-700 focus-within:border-lotus-gold transition-colors">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask for a recommendation..."
              className="flex-grow bg-transparent text-white px-4 py-2 focus:outline-none text-sm"
              disabled={isLoading}
            />
            <button 
              onClick={handleSend}
              disabled={!inputValue.trim() || isLoading}
              className={`p-3 rounded-full transition-all ${
                inputValue.trim() 
                  ? 'bg-lotus-gold text-lotus-black hover:scale-105 shadow-lg' 
                  : 'bg-gray-800 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Send size={18} />
            </button>
          </div>
          <div className="text-center mt-2">
            <span className="text-[10px] text-gray-500 flex items-center justify-center gap-1">
              <Sparkles size={10} /> Powered by Gemini
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
