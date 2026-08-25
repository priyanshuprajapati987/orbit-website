"use client";

import { motion } from "framer-motion";
import { Monitor, Users, Cpu, Play, Maximize2, Minimize2, X } from "lucide-react";

const demos = [
  {
    title: "25 AI Agents",
    description: "Specialized agents for coding, research, analysis, and more",
    icon: Users,
    gradient: "from-red-500 to-orange-500",
    code: `> orbit agents --list
🤖 Coder Agent ........... Active
🔍 Researcher Agent ...... Active
📊 Analyst Agent ......... Active
🧠 Memory Agent ......... Active
📋 Planner Agent ........ Active
⚡ Executor Agent ....... Active
... and 19 more agents`,
  },
  {
    title: "6 LLM Providers",
    description: "Ollama, Groq, Gemini, Cloudflare, OpenRouter, Portkey",
    icon: Cpu,
    gradient: "from-orange-500 to-red-500",
    code: `> orbit providers --status
✅ Ollama ......... Connected
✅ Groq ........... Connected
✅ Gemini ......... Connected
✅ Cloudflare ..... Connected
✅ OpenRouter ..... Connected
✅ Portkey ........ Connected`,
  },
  {
    title: "Smart Memory",
    description: "LIVE + CHUNKS TF-IDF + SUMMARY with instant recall",
    icon: Monitor,
    gradient: "from-red-500 to-pink-500",
    code: `> orbit memory --stats
📊 LIVE Context: Active
📝 CHUNKS TF-IDF: 147 entries
📋 SUMMARY: 52 summaries
🔍 Recall Time: <50ms
💾 Storage: Optimized`,
  },
];

export default function Demo() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            <span className="text-sm text-zinc-300">System Output</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            See <span className="gradient-text">ORBIT</span> Running
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
            Real system stats from the deployed ORBIT instance
          </p>
        </motion.div>

        {/* Demo Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {demos.map((demo, index) => {
            const Icon = demo.icon;
            return (
              <motion.div
                key={demo.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group"
              >
                <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/80 border-b border-zinc-800">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <span className="text-xs text-zinc-500 ml-2">orbit-cli</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Minimize2 className="w-3.5 h-3.5 text-zinc-500" />
                      <Maximize2 className="w-3.5 h-3.5 text-zinc-500" />
                      <X className="w-3.5 h-3.5 text-zinc-500" />
                    </div>
                  </div>

                  {/* Terminal Content */}
                  <div className="flex-1 p-6 bg-black/50 font-mono text-sm">
                    <pre className="text-zinc-300 whitespace-pre-wrap">
                      {demo.code}
                    </pre>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 border-t border-zinc-800/50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${demo.gradient}`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {demo.title}
                      </h3>
                    </div>
                    <p className="text-sm text-zinc-400">
                      {demo.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Main Stats Window */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
                  <Cpu className="w-4 h-4 text-zinc-400" />
                  <span className="text-sm text-zinc-400">orbit-dashboard</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-zinc-500">
                <Minimize2 className="w-4 h-4" />
                <Maximize2 className="w-4 h-4" />
                <X className="w-4 h-4" />
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-8 bg-black/50 relative overflow-hidden">
              {/* Background Grid */}
              <div className="absolute inset-0 bg-grid opacity-20" />

              <div className="relative">
                {/* Title */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    ORBIT System Dashboard
                  </h3>
                  <p className="text-zinc-400">Real-time system status</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[
                    { label: "Agents", value: "25", color: "text-red-400" },
                    { label: "Tools", value: "20", color: "text-orange-400" },
                    { label: "Blueprints", value: "147", color: "text-pink-400" },
                    { label: "Providers", value: "6", color: "text-purple-400" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-4 rounded-xl bg-zinc-800/30 text-center">
                      <div className={`text-3xl font-black ${stat.color} mb-1`}>{stat.value}</div>
                      <div className="text-xs text-zinc-500 uppercase">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Status Bar */}
                <div className="flex items-center justify-center gap-4 p-4 rounded-xl bg-zinc-800/30">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-zinc-400">System Online</span>
                  </div>
                  <span className="text-zinc-600">|</span>
                  <span className="text-sm text-zinc-400">Ground Truth: 90.3%</span>
                  <span className="text-zinc-600">|</span>
                  <span className="text-sm text-zinc-400">RouteLLM Active</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
