export const siteConfig = {
  name: "ORBIT",
  title: "ORBIT - Your Personal AI Companion",
  description: "Like JARVIS, but it actually works. ORBIT is an AI assistant with 25 agents, 20 tools, and 6 LLM providers.",
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
    title: "25 AI Agents",
    description: "Specialized agents for different tasks - coding, research, analysis, memory, and more. Each agent is optimized for its domain.",
    icon: "Brain",
    gradient: "from-red-500 to-orange-500",
  },
  {
    title: "20 Tools",
    description: "Powerful tools for web search, code execution, file operations, API calls, and system interactions.",
    icon: "Wrench",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "147 Blueprints",
    description: "Pre-built templates and workflows for common tasks. Deploy solutions in seconds, not hours.",
    icon: "Layout",
    gradient: "from-red-500 to-pink-500",
  },
  {
    title: "6 LLM Providers",
    description: "Ollama, Groq, Gemini, Cloudflare, OpenRouter, Portkey - route to the best model for each task.",
    icon: "Layers",
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    title: "Smart Memory",
    description: "LIVE + CHUNKS TF-IDF + SUMMARY memory system. Context persists across sessions with instant recall.",
    icon: "Database",
    gradient: "from-red-500 to-purple-500",
  },
  {
    title: "RouteLLM + ToolGate",
    description: "Intelligent routing with 76 actions. Auto-selects the best provider and tool for maximum performance.",
    icon: "Zap",
    gradient: "from-yellow-500 to-red-500",
  },
];

export const techStack = {
  providers: ["Ollama", "Groq", "Gemini", "Cloudflare", "OpenRouter", "Portkey"],
  agents: ["Coder", "Researcher", "Analyst", "Memory", "Planner", "Executor"],
  tools: ["Web Search", "Code Exec", "File Ops", "API Calls", "System", "DB Query"],
  memory: ["LIVE Context", "CHUNKS TF-IDF", "SUMMARY", "Semantic Search"],
  routing: ["RouteLLM", "ToolGate", "Auto-Select", "Load Balance"],
  infra: ["Self-Hosted", "Docker", "API Layer", "Real-time"],
};

export const stats = [
  { label: "AI Agents", value: "25" },
  { label: "Tools", value: "20" },
  { label: "Blueprints", value: "147" },
  { label: "LLM Providers", value: "6" },
];

export const auditStats = {
  agents: 25,
  tools: 20,
  blueprints: 147,
  components: 99,
  tests: 1805,
  providers: 6,
  routingTasks: 10,
  toolGateActions: 76,
  groundTruth: "90.3%",
};
