import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import Button from './ui/Button';

interface Message {
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

const exampleQuestions = [
  "How do I sell my license?",
  "What types of licenses do you buy?",
  "How long does the process take?",
  "Is my data secure?",
];

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      text: "Hi there! I'm SoftSell's virtual assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSendMessage = (text: string = inputValue) => {
    if (!text.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      type: 'user',
      text,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      let response = '';
      
      // Simple response logic
      const lowercaseText = text.toLowerCase();
      if (lowercaseText.includes('sell') && lowercaseText.includes('license')) {
        response = "To sell your license, start by clicking the 'Sell My Licenses' button at the top of our page. You'll be guided through our 3-step process: Upload your license details, receive a valuation, and get paid. It's that simple!";
      } else if (lowercaseText.includes('type') || (lowercaseText.includes('what') && lowercaseText.includes('license'))) {
        response = "We purchase a wide range of software licenses including Microsoft, Adobe, Autodesk, VMware, Oracle, and many cloud service providers. If you're unsure about your specific license, just share the details with us and we'll let you know.";
      } else if (lowercaseText.includes('long') || lowercaseText.includes('time') || lowercaseText.includes('take')) {
        response = "The entire process typically takes 2-3 business days from submission to payment. You'll receive a valuation within 24 hours, and once you accept, payment is processed within 1-2 business days.";
      } else if (lowercaseText.includes('secure') || lowercaseText.includes('safe') || lowercaseText.includes('privacy')) {
        response = "Absolutely! Security is our top priority. We use bank-grade encryption for all transactions, and your personal information is protected according to strict data privacy standards. We never share your information with third parties without your consent.";
      } else {
        response = "Thanks for your question. To provide you with the most accurate information, one of our specialists will reach out to you shortly. If you'd like an immediate response, please try one of our example questions or call us at +1 (555) 123-4567.";
      }
      
      const botMessage: Message = {
        type: 'bot',
        text: response,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Bubble */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? 'bg-coral-500 text-white rotate-90 scale-0 opacity-0' : 'bg-blue-600 text-white scale-100 opacity-100'
        }`}
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>
      
      {/* Chat Widget */}
      <div
        className={`fixed bottom-0 right-0 z-50 w-full sm:w-96 transition-all duration-300 transform ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="m-4 bg-white dark:bg-gray-800 rounded-xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700 h-[500px]">
          {/* Chat Header */}
          <div className="bg-blue-600 dark:bg-blue-700 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                <MessageCircle size={18} />
              </div>
              <div>
                <h3 className="font-bold">SoftSell Support</h3>
                <p className="text-xs text-blue-100">We typically reply in a few minutes</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="p-1 rounded-full hover:bg-blue-700 transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-none'
                      : 'bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 rounded-tl-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.type === 'user' ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm border border-gray-100 dark:border-gray-700 rounded-tl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Example Questions */}
          {messages.length <= 2 && (
            <div className="p-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Suggested questions:</p>
              <div className="flex flex-wrap gap-2">
                {exampleQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(question)}
                    className="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-300 py-1 px-2 rounded-full transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Chat Input */}
          <div className="p-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <Button
                onClick={() => handleSendMessage()}
                variant="primary"
                className="rounded-l-none rounded-r-lg px-4 py-2 h-full"
                disabled={!inputValue.trim() || isTyping}
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;