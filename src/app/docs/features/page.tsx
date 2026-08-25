import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { Brain, Mic, Layers, Route, Server, Zap } from "lucide-react";

const features = [
  {
    title: "Long-Term Memory",
    description:
      "ORBIT remembers everything across sessions using Qdrant vector DB + Mem0. Your AI companion builds context over time, learning your preferences and patterns.",
    icon: Brain,
    gradient: "from-red-500 to-orange-500",
    details: [
      "Vector-based semantic search",
      "Persistent context across sessions",
      "Automatic memory condensation",
      "Privacy-first architecture",
    ],
  },
  {
    title: "Voice Pipeline",
    description:
      "Real-time voice interaction powered by advanced speech processing. Talk to ORBIT naturally, just like JARVIS.",
    icon: Mic,
    gradient: "from-orange-500 to-red-500",
    details: [
      "Real-time speech-to-text",
      "Natural voice synthesis",
      "Multi-language support",
      "Low-latency processing",
    ],
  },
  {
    title: "Multi-LLM Support",
    description:
      "Route tasks to the best AI model for the job. GPT-4 for complex reasoning, Claude for analysis, Gemini for multimodal tasks.",
    icon: Layers,
    gradient: "from-red-500 to-pink-500",
    details: [
      "GPT-4 integration",
      "Claude support",
      "Gemini multimodal",
      "Local LLM compatibility",
    ],
  },
  {
    title: "170+ API Routes",
    description:
      "Comprehensive API covering every feature. Full control at your fingertips with RESTful endpoints.",
    icon: Route,
    gradient: "from-orange-500 to-yellow-500",
    details: [
      "RESTful design",
      "Full CRUD operations",
      "Webhook support",
      "Rate limiting",
    ],
  },
  {
    title: "Self-Hosted",
    description:
      "Run on your own infrastructure. Your data, your rules, your AI. Complete control over your environment.",
    icon: Server,
    gradient: "from-red-500 to-purple-500",
    details: [
      "Docker support",
      "Kubernetes ready",
      "Custom deployment",
      "Full data ownership",
    ],
  },
  {
    title: "Lightning Fast",
    description:
      "Optimized for speed. Millisecond response times for real-time interactions and seamless user experience.",
    icon: Zap,
    gradient: "from-yellow-500 to-red-500",
    details: [
      "Sub-100ms responses",
      "Async processing",
      "Caching layer",
      "Load balancing",
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
              Powerful Features
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Everything you need for a production-ready AI assistant
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
        </div>
      </main>
      <Footer />
    </>
  );
}
