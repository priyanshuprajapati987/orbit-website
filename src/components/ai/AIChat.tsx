"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles, Loader2 } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const ORBIT_RESPONSES = {
  greeting: "Hello! I'm ORBIT AI. Ask me anything about our 25 agents, 20 tools, 147 blueprints, or 6 LLM providers.",
  features: "ORBIT features:\n- 25 AI Agents for specialized tasks\n- 20 Tools for web, code, files, APIs\n- 147 Blueprints for quick deployment\n- 6 LLM Providers: Ollama, Groq, Gemini, Cloudflare, OpenRouter, Portkey\n- RouteLLM + ToolGate with 76 actions\n- Smart Memory: LIVE + CHUNKS TF-IDF + SUMMARY",
  pricing: "ORBIT is currently in pre-order phase. Early adopters get lifetime discounts and priority support. Sign up on our pre-order section!",
  tech: "Our tech stack includes:\n- 6 LLM Providers (Ollama, Groq, Gemini, Cloudflare, OpenRouter, Portkey)\n- RouteLLM for intelligent routing\n- ToolGate with 76 actions\n- Smart Memory system with 90.3% ground truth\n- 1,805 tests ensuring reliability",
  agents: "Our 25 AI Agents include:\n- Coder Agent for development\n- Researcher Agent for information gathering\n- Analyst Agent for data processing\n- Memory Agent for context management\n- Planner Agent for task orchestration\n- Executor Agent for running tasks\n- And 19 more specialized agents!",
  default: "I'm ORBIT AI, your personal AI companion. I can help you with:\n- Information about our 25 AI agents\n- Details on 20 tools and 147 blueprints\n- How our 6 LLM providers work\n- Pre-order and pricing information\n\nWhat would you like to know?",
};

function getAIResponse(message: string): string {
  const lower = message.toLowerCase();
  
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
    return ORBIT_RESPONSES.greeting;
  }
  if (lower.includes("feature") || lower.includes("what can") || lower.includes("capability")) {
    return ORBIT_RESPONSES.features;
  }
  if (lower.includes("price") || lower.includes("cost") || lower.includes("buy") || lower.includes("pre-order")) {
    return ORBIT_RESPONSES.pricing;
  }
  if (lower.includes("tech") || lower.includes("stack") || lower.includes("provider") || lower.includes("llm")) {
    return ORBIT_RESPONSES.tech;
  }
  if (lower.includes("agent") || lower.includes("agent")) {
    return ORBIT_RESPONSES.agents;
  }
  if (lower.includes("tool")) {
    return "ORBIT includes 20 powerful tools:\n- Web Search for information retrieval\n- Code Execution for running scripts\n- File Operations for managing files\n- API Calls for external services\n- System tools for OS interactions\n- Database queries\n- And many more!";
  }
  if (lower.includes("blueprint")) {
    return "ORBIT has 147 pre-built blueprints:\n- Deployment templates\n- Workflow automations\n- Integration patterns\n- Custom task solutions\n\nEach blueprint is designed for quick deployment in seconds!";
  }
  if (lower.includes("memory")) {
    return "Our Smart Memory system:\n- LIVE Context for real-time tracking\n- CHUNKS TF-IDF for semantic search\n- SUMMARY for compressed knowledge\n- Instant recall with <50ms response time";
  }
  
  return ORBIT_RESPONSES.default;
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: ORBIT_RESPONSES.greeting,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));

    const aiResponse: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: getAIResponse(userMessage.content),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, aiResponse]);
    setIsTyping(false);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-2xl shadow-2xl transition-all duration-300 ${
          isOpen
            ? "bg-zinc-800 hover:bg-zinc-700"
            : "bg-gradient-to-r from-red-500 to-orange-500 hover:shadow-red-500/25"
        }`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] h-[520px] rounded-2xl overflow-hidden shadow-2xl border border-zinc-800"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500 to-orange-500 p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/20">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold">ORBIT AI</h3>
                  <p className="text-white/70 text-xs">Ask me anything</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white/70 text-xs">Online</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-[380px] overflow-y-auto p-4 space-y-4 bg-zinc-900/95 backdrop-blur-xl">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] p-3 rounded-2xl text-sm ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-br-md"
                        : "bg-zinc-800 text-zinc-200 rounded-bl-md"
                    }`}
                  >
                    <pre className="whitespace-pre-wrap font-sans">{msg.content}</pre>
                  </div>
                  {msg.role === "user" && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center">
                      <User className="w-4 h-4 text-zinc-300" />
                    </div>
                  )}
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-zinc-800 p-3 rounded-2xl rounded-bl-md">
                    <Loader2 className="w-4 h-4 text-zinc-400 animate-spin" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-zinc-900/95 backdrop-blur-xl border-t border-zinc-800">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about ORBIT..."
                  className="flex-1 px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="p-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white hover:shadow-lg hover:shadow-red-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
