import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cn } from '../lib/utils';
import { generateChatResponseStream } from '../services/gemini';
import { generateSystemInstruction } from '../configSchema';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

interface ChatAreaProps {
  config: Record<string, any>;
}

export function ChatArea({ config }: ChatAreaProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isGenerating) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsGenerating(true);

    const modelMessageId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, { id: modelMessageId, role: 'model', text: '' }]);

    try {
      const systemInstruction = generateSystemInstruction(config);
      const history = [...messages, userMessage].map(m => ({ role: m.role, text: m.text }));
      
      const stream = generateChatResponseStream(history, systemInstruction);
      
      for await (const chunk of stream) {
        if (chunk) {
          setMessages(prev => prev.map(m => 
            m.id === modelMessageId ? { ...m, text: m.text + chunk } : m
          ));
        }
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => prev.map(m => 
        m.id === modelMessageId ? { ...m, text: m.text + '\n\n**[SYSTEM ERROR]** Failed to generate response.' } : m
      ));
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[rgba(0,0,0,0.3)] relative">
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-slate-500 space-y-4">
            <Bot className="w-16 h-16 text-cyan-900/50" />
            <p className="font-mono text-sm tracking-widest uppercase">System Online. Awaiting Input.</p>
          </div>
        ) : (
          messages.map(message => (
            <div 
              key={message.id} 
              className={cn(
                "flex gap-4 max-w-4xl mx-auto",
                message.role === 'user' ? "flex-row-reverse" : ""
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded shrink-0 flex items-center justify-center border",
                message.role === 'user' 
                  ? "bg-[rgba(245,158,11,0.1)] border-amber-500/30 text-amber-400" 
                  : "bg-[rgba(6,182,212,0.1)] border-cyan-500/30 text-cyan-400"
              )}>
                {message.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
              </div>
              
              <div className={cn(
                "glass-panel p-4 rounded-lg flex-1",
                message.role === 'user' ? "border-amber-500/20" : "border-cyan-500/20"
              )}>
                {message.role === 'model' ? (
                  <div className="markdown-body">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {message.text}
                    </ReactMarkdown>
                    {isGenerating && message.text === '' && (
                      <Loader2 className="w-5 h-5 animate-spin text-cyan-500" />
                    )}
                  </div>
                ) : (
                  <p className="font-sans text-slate-200 whitespace-pre-wrap">{message.text}</p>
                )}
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 glass-panel border-t border-b-0 border-l-0 border-r-0">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto relative flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter command..."
            className="flex-1 tactical-input p-4 rounded-lg text-sm"
            disabled={isGenerating}
          />
          <button
            type="submit"
            disabled={!input.trim() || isGenerating}
            className="tactical-button px-6 rounded-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
