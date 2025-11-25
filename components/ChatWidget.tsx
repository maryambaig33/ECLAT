import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { createGemologistChat, sendMessageStream } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Chat, GenerateContentResponse } from '@google/genai';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'init', role: 'model', text: "Bonjour. I am Pierre, your personal jewelry consultant at Éclat. How may I assist you in finding the perfect piece today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    // Initialize chat if not exists
    let currentSession = chatSession;
    if (!currentSession) {
      try {
        currentSession = createGemologistChat();
        setChatSession(currentSession);
      } catch (error) {
        console.error("Failed to initialize chat", error);
        return;
      }
    }

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const result = await sendMessageStream(currentSession, userMsg.text);
      
      const botMsgId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, { id: botMsgId, role: 'model', text: '', isStreaming: true }]);

      let fullText = '';
      for await (const chunk of result) {
         const c = chunk as GenerateContentResponse;
         const chunkText = c.text || '';
         fullText += chunkText;
         
         setMessages(prev => prev.map(msg => 
            msg.id === botMsgId ? { ...msg, text: fullText } : msg
         ));
      }
      
      setMessages(prev => prev.map(msg => 
        msg.id === botMsgId ? { ...msg, isStreaming: false } : msg
      ));

    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'model', 
        text: "I apologize, but I am momentarily distracted. Could you please repeat that?" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-96 h-[500px] rounded-lg shadow-2xl border border-stone-200 flex flex-col mb-4 pointer-events-auto transform transition-all duration-300 origin-bottom-right animate-in fade-in slide-in-from-bottom-10">
          
          {/* Header */}
          <div className="bg-stone-900 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center">
                <Sparkles size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-serif font-medium">Pierre</h3>
                <p className="text-[10px] text-stone-300 uppercase tracking-wider">Gemologist Consultant</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-2xl p-3 text-sm leading-relaxed shadow-sm
                    ${msg.role === 'user' 
                      ? 'bg-stone-800 text-white rounded-br-none' 
                      : 'bg-white text-stone-800 border border-stone-100 rounded-bl-none'
                    }`}
                >
                  {msg.text}
                  {msg.isStreaming && <span className="inline-block w-1.5 h-4 ml-1 bg-gold-500 animate-pulse align-middle"></span>}
                </div>
              </div>
            ))}
            {isLoading && !messages[messages.length - 1].isStreaming && (
               <div className="flex justify-start">
                 <div className="bg-white border border-stone-100 rounded-2xl rounded-bl-none p-3 shadow-sm">
                   <Loader2 size={16} className="animate-spin text-gold-500" />
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-stone-100 rounded-b-lg">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about clarity, cuts, or styles..."
                className="w-full pl-4 pr-12 py-3 bg-stone-50 border border-stone-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 text-sm transition-all"
              />
              <button 
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="absolute right-2 top-2 p-1.5 bg-stone-900 text-white rounded-full hover:bg-gold-600 disabled:opacity-50 disabled:hover:bg-stone-900 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto bg-stone-900 hover:bg-gold-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 group"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-medium text-sm">Ask an Expert</span>}
      </button>
    </div>
  );
};