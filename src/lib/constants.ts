export const siteConfig = {
  name: "ORBIT",
  title: "ORBIT - Your Personal AI Companion",
  description: "Like JARVIS, but it actually works. ORBIT is an AI assistant with memory, voice, and multi-LLM support.",
  tagline: "Like JARVIS, but it actually works",
  author: {
    name: "Priyanshu Prajapati",
    role: "Full Stack + AI Developer",
    github: "https://github.com/priyanshuprajapati987",
    linkedin: "https://www.linkedin.com/in/priyanshu-prajapati-a2a9942b4",
    leetcode: "https://leetcode.com/u/priyanshu260923/",
  },
  links: {
    github: "https://github.com/priyanshuprajapati987",
    docs: "/docs",
  },
};

export const features = [
  {
    title: "Long-Term Memory",
    description: "Qdrant vector DB + Mem0 for persistent context across sessions. ORBIT remembers everything.",
    icon: "Brain",
    gradient: "from-red-500 to-orange-500",
  },
  {
    title: "Voice Pipeline",
    description: "Real-time voice interaction. Talk to ORBIT naturally, just like JARVIS.",
    icon: "Mic",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Multi-LLM Support",
    description: "GPT-4, Claude, Gemini, and Local LLMs. Choose the best model for each task.",
    icon: "Layers",
    gradient: "from-red-500 to-pink-500",
  },
  {
    title: "170+ API Routes",
    description: "Comprehensive API covering every feature. Full control at your fingertips.",
    icon: "Route",
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    title: "Self-Hosted",
    description: "Run on your own infrastructure. Your data, your rules, your AI.",
    icon: "Server",
    gradient: "from-red-500 to-purple-500",
  },
  {
    title: "Lightning Fast",
    description: "Optimized for speed. Millisecond response times for real-time interactions.",
    icon: "Zap",
    gradient: "from-yellow-500 to-red-500",
  },
];

export const techStack = {
  languages: ["Python", "JavaScript", "TypeScript"],
  frontend: ["React", "Next.js", "Tailwind CSS"],
  backend: ["Node.js", "FastAPI", "Flask"],
  ai: ["OpenAI", "Anthropic", "Google AI", "Mem0"],
  databases: ["Qdrant", "Redis", "PostgreSQL"],
  tools: ["Docker", "Git", "Linux"],
};

export const stats = [
  { label: "API Routes", value: "170+" },
  { label: "AI Models", value: "4+" },
  { label: "Response Time", value: "<100ms" },
  { label: "Uptime", value: "99.9%" },
];
