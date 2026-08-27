"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Monitor, Users, Cpu, Play, Maximize2, Minimize2, X, Terminal, Zap, Loader2 } from "lucide-react";

const terminalLines = [
  { text: "$ orbit --version", delay: 0, type: "command" },
  { text: "ORBIT v2.0.0 - Production Build", delay: 500, type: "output" },
  { text: "", delay: 300, type: "output" },
  { text: "$ orbit status", delay: 800, type: "command" },
  { text: "✓ System Online", delay: 1200, type: "success" },
  { text: "✓ 25 AI Agents Active", delay: 1400, type: "success" },
  { text: "✓ 20 Tools Ready", delay: 1600, type: "success" },
  { text: "✓ 147 Blueprints Loaded", delay: 1800, type: "success" },
  { text: "✓ 6 LLM Providers Connected", delay: 2000, type: "success" },
  { text: "✓ RouteLLM + ToolGate Active", delay: 2200, type: "success" },
  { text: "✓ Smart Memory Online", delay: 2400, type: "success" },
  { text: "", delay: 200, type: "output" },
  { text: "$ orbit providers --status", delay: 2800, type: "command" },
  { text: "┌─────────────┬────────────┐", delay: 3200, type: "output" },
  { text: "│ Provider    │ Status     │", delay: 3300, type: "output" },
  { text: "├─────────────┼────────────┤", delay: 3400, type: "output" },
  { text: "│ Ollama      │ Connected  │", delay: 3500, type: "success" },
  { text: "│ Groq        │ Connected  │", delay: 3600, type: "success" },
  { text: "│ Gemini      │ Connected  │", delay: 3700, type: "success" },
  { text: "│ Cloudflare  │ Connected  │", delay: 3800, type: "success" },
  { text: "│ OpenRouter  │ Connected  │", delay: 3900, type: "success" },
  { text: "│ Portkey     │ Connected  │", delay: 4000, type: "success" },
  { text: "└─────────────┴────────────┘", delay: 4100, type: "output" },
  { text: "", delay: 200, type: "output" },
  { text: "$ orbit agents --list | head -6", delay: 4500, type: "command" },
  { text: "🤖 Coder Agent ............. Active", delay: 4900, type: "output" },
  { text: "🔍 Researcher Agent ........ Active", delay: 5100, type: "output" },
  { text: "📊 Analyst Agent ........... Active", delay: 5300, type: "output" },
  { text: "🧠 Memory Agent ............ Active", delay: 5500, type: "output" },
  { text: "📋 Planner Agent ........... Active", delay: 5700, type: "output" },
  { text: "⚡ Executor Agent .......... Active", delay: 5900, type: "output" },
  { text: "   ... and 19 more agents", delay: 6100, type: "muted" },
  { text: "", delay: 200, type: "output" },
  { text: "$ orbit memory --stats", delay: 6500, type: "command" },
  { text: "📊 LIVE Context: Active", delay: 6900, type: "output" },
  { text: "📝 CHUNKS TF-IDF: 147 entries", delay: 7100, type: "output" },
  { text: "📋 SUMMARY: 52 summaries", delay: 7300, type: "output" },
  { text: "🔍 Recall Time: <50ms", delay: 7500, type: "success" },
  { text: "💾 Storage: Optimized", delay: 7700, type: "success" },
  { text: "", delay: 200, type: "output" },
  { text: "$ _", delay: 8100, type: "cursor" },
];

export default function Demo() {
  const [visibleLines, setVisibleLines] = useState<typeof terminalLines>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState<"agents" | "providers" | "memory">("agents");
  const terminalRef = useRef<HTMLDivElement>(null);

  const startDemo = () => {
    setVisibleLines([]);
    setIsRunning(true);
    
    terminalLines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
        if (index === terminalLines.length - 1) {
          setIsRunning(false);
        }
      }, line.delay);
    });
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [visibleLines]);

  const demos = [
    {
      id: "agents",
      title: "25 AI Agents",
      description: "Specialized agents for coding, research, analysis, and more",
      icon: Users,
      gradient: "from-red-500 to-orange-500",
      stats: [
        { label: "Active", value: "25" },
        { label: "Tasks Done", value: "10K+" },
        { label: "Accuracy", value: "90.3%" },
      ],
    },
    {
      id: "providers",
      title: "6 LLM Providers",
      description: "Ollama, Groq, Gemini, Cloudflare, OpenRouter, Portkey",
      icon: Cpu,
      gradient: "from-orange-500 to-red-500",
      stats: [
        { label: "Connected", value: "6" },
        { label: "Models", value: "50+" },
        { label: "Uptime", value: "99.9%" },
      ],
    },
    {
      id: "memory",
      title: "Smart Memory",
      description: "LIVE + CHUNKS TF-IDF + SUMMARY with instant recall",
      icon: Monitor,
      gradient: "from-red-500 to-pink-500",
      stats: [
        { label: "Entries", value: "147" },
        { label: "Recall", value: "<50ms" },
        { label: "Summaries", value: "52" },
      ],
    },
  ];

  return (
    <section id="demo" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <Play className="w-4 h-4 text-red-400" />
            <span className="text-sm text-zinc-300">Interactive Demo</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            See <span className="gradient-text">ORBIT</span> Running
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
            Real system stats from the deployed ORBIT instance
          </p>
        </motion.div>

        {/* Interactive Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          {demos.map((demo) => {
            const Icon = demo.icon;
            return (
              <button
                key={demo.id}
                onClick={() => setActiveTab(demo.id as "agents" | "providers" | "memory")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeTab === demo.id
                    ? "bg-gradient-to-r from-red-500 to-orange-500 text-white"
                    : "bg-zinc-800/50 text-zinc-400 hover:text-white hover:bg-zinc-800"
                }`}
              >
                <Icon className="w-4 h-4" />
                {demo.title}
              </button>
            );
          })}
        </div>

        {/* Main Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-card rounded-2xl overflow-hidden">
            {/* Window Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-zinc-900/80 border-b border-zinc-800">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-500 hover:brightness-110 transition" />
                  <div className="w-4 h-4 rounded-full bg-yellow-500 hover:brightness-110 transition" />
                  <div className="w-4 h-4 rounded-full bg-green-500 hover:brightness-110 transition" />
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-zinc-800/50">
                  <Terminal className="w-4 h-4 text-zinc-400" />
                  <span className="text-sm text-zinc-400">orbit-cli</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-zinc-500">
                <Minimize2 className="w-4 h-4" />
                <Maximize2 className="w-4 h-4" />
                <X className="w-4 h-4" />
              </div>
            </div>

            {/* Terminal Content */}
            <div
              ref={terminalRef}
              className="h-[400px] overflow-y-auto p-6 bg-black/50 font-mono text-sm"
            >
              {visibleLines.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <Terminal className="w-12 h-12 text-zinc-600 mb-4" />
                  <p className="text-zinc-500 mb-4">Click &quot;Run Demo&quot; to see ORBIT in action</p>
                  <button
                    onClick={startDemo}
                    disabled={isRunning}
                    className="btn-primary px-6 py-3 rounded-xl text-white font-semibold flex items-center gap-2 disabled:opacity-50"
                  >
                    {isRunning ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Running...
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4" />
                        Run Demo
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <div className="space-y-1">
                  {visibleLines.map((line, index) => (
                    <div
                      key={index}
                      className={`${
                        line.type === "command"
                          ? "text-green-400"
                          : line.type === "success"
                          ? "text-green-300"
                          : line.type === "muted"
                          ? "text-zinc-500"
                          : line.type === "cursor"
                          ? "text-white animate-pulse"
                          : "text-zinc-300"
                      }`}
                    >
                      {line.text}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Stats Footer */}
            <div className="p-6 border-t border-zinc-800/50 bg-zinc-900/30">
              <div className="grid grid-cols-3 gap-4">
                {demos
                  .find((d) => d.id === activeTab)
                  ?.stats.map((stat) => (
                    <div key={stat.label} className="text-center p-4 rounded-xl bg-zinc-800/30">
                      <div className="text-2xl font-black gradient-text mb-1">{stat.value}</div>
                      <div className="text-xs text-zinc-500 uppercase">{stat.label}</div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Run Again Button */}
        {visibleLines.length > 0 && !isRunning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-6"
          >
            <button
              onClick={startDemo}
              className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-2 mx-auto"
            >
              <Play className="w-4 h-4" />
              Run again
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
