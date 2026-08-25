import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { Brain, Users, Wrench, Layout, Cpu, Database, Route, Zap } from "lucide-react";

const features = [
  {
    title: "25 AI Agents",
    description:
      "Specialized agents for different tasks - coding, research, analysis, memory, and more. Each agent is optimized for its domain.",
    icon: Users,
    gradient: "from-red-500 to-orange-500",
    details: [
      "Coder Agent - Code generation & debugging",
      "Researcher Agent - Web search & analysis",
      "Analyst Agent - Data processing",
      "Memory Agent - Context management",
      "Planner Agent - Task orchestration",
      "Executor Agent - Action execution",
    ],
  },
  {
    title: "20 Tools",
    description:
      "Powerful tools for web search, code execution, file operations, API calls, and system interactions.",
    icon: Wrench,
    gradient: "from-orange-500 to-red-500",
    details: [
      "Web Search - Real-time information",
      "Code Execution - Safe sandbox",
      "File Operations - Read/write/manage",
      "API Calls - External integrations",
      "System Tools - OS interactions",
      "Database Queries - Data access",
    ],
  },
  {
    title: "147 Blueprints",
    description:
      "Pre-built templates and workflows for common tasks. Deploy solutions in seconds, not hours.",
    icon: Layout,
    gradient: "from-red-500 to-pink-500",
    details: [
      "Task templates",
      "Workflow patterns",
      "Solution recipes",
      "Best practices",
      "Quick starts",
      "Custom templates",
    ],
  },
  {
    title: "6 LLM Providers",
    description:
      "Ollama, Groq, Gemini, Cloudflare, OpenRouter, Portkey - route to the best model for each task.",
    icon: Cpu,
    gradient: "from-purple-500 to-pink-500",
    details: [
      "Ollama - Local models",
      "Groq - Ultra-fast inference",
      "Gemini - Google's AI",
      "Cloudflare - Edge AI",
      "OpenRouter - Multi-model",
      "Portkey - Enterprise routing",
    ],
  },
  {
    title: "Smart Memory",
    description:
      "LIVE + CHUNKS TF-IDF + SUMMARY memory system. Context persists across sessions with instant recall.",
    icon: Database,
    gradient: "from-cyan-500 to-blue-500",
    details: [
      "LIVE Context - Real-time state",
      "CHUNKS TF-IDF - Semantic search",
      "SUMMARY - Compressed knowledge",
      "Instant recall <50ms",
      "Cross-session persistence",
      "Automatic optimization",
    ],
  },
  {
    title: "RouteLLM + ToolGate",
    description:
      "Intelligent routing with 76 actions. Auto-selects the best provider and tool for maximum performance.",
    icon: Zap,
    gradient: "from-green-500 to-emerald-500",
    details: [
      "10 routing task types",
      "76 ToolGate actions",
      "Auto provider selection",
      "Load balancing",
      "Cost optimization",
      "Performance tracking",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="success" className="mb-4">Features</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Real Capabilities
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              25 agents, 20 tools, 147 blueprints - actually deployed and running
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="h-full">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">
                    {feature.title}
                  </h2>
                  <p className="text-zinc-400 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-zinc-300">
                        <span className="text-red-500">✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>

          {/* Audit Stats */}
          <div className="mt-12">
            <Card>
              <h2 className="text-2xl font-bold text-white mb-6 text-center">System Audit (August 25, 2026)</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Agents", value: "25" },
                  { label: "Tools", value: "20" },
                  { label: "Blueprints", value: "147" },
                  { label: "Components", value: "99" },
                  { label: "Tests", value: "1,805" },
                  { label: "Providers", value: "6" },
                  { label: "Routing Tasks", value: "10" },
                  { label: "Ground Truth", value: "90.3%" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl bg-zinc-800/30">
                    <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                    <div className="text-xs text-zinc-500 uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
