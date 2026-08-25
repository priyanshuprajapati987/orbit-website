"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Terminal, Play, Maximize2, Minimize2, X } from "lucide-react";

const demos = [
  {
    title: "Voice Interaction",
    description: "Talk to ORBIT naturally with real-time voice processing",
    icon: Terminal,
    gradient: "from-red-500 to-orange-500",
    code: `> orbit --voice
🎤 Listening...
"You: What's the weather today?"
🤖 "It's 28°C and sunny in Panchmahal!"`,
  },
  {
    title: "Memory System",
    description: "Persistent context across sessions with Qdrant + Mem0",
    icon: Monitor,
    gradient: "from-orange-500 to-red-500",
    code: `> orbit --memory
🧠 Memory Store: 1,247 entries
📊 Context Window: Active
🔗 Session Link: Connected`,
  },
  {
    title: "Multi-Model Routing",
    description: "Intelligent routing between GPT-4, Claude, and Gemini",
    icon: Smartphone,
    gradient: "from-red-500 to-pink-500",
    code: `> orbit --models
✅ GPT-4: Ready
✅ Claude: Ready
✅ Gemini: Ready
🎯 Auto-routing: Enabled`,
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
            <span className="text-sm text-zinc-300">Live Preview</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            See <span className="gradient-text">ORBIT</span> in Action
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
            Experience the power of your personal AI companion
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
                      <span className="text-xs text-zinc-500 ml-2">orbit-terminal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Minimize2 className="w-3.5 h-3.5 text-zinc-500" />
                      <Maximize2 className="w-3.5 h-3.5 text-zinc-500" />
                      <X className="w-3.5 h-3-5 text-zinc-500" />
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

        {/* Main Demo Window */}
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
                  <Terminal className="w-4 h-4 text-zinc-400" />
                  <span className="text-sm text-zinc-400">orbit-dashboard</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-zinc-500">
                <Minimize2 className="w-4 h-4" />
                <Maximize2 className="w-4 h-4" />
                <X className="w-4 h-4" />
              </div>
            </div>

            {/* Demo Content */}
            <div className="aspect-video bg-gradient-to-br from-zinc-900 to-black p-8 flex items-center justify-center relative overflow-hidden">
              {/* Background Grid */}
              <div className="absolute inset-0 bg-grid opacity-20" />

              {/* Center Content */}
              <div className="relative text-center">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-32 h-32 mx-auto mb-8 rounded-full border-2 border-red-500/30 flex items-center justify-center"
                >
                  <div className="w-24 h-24 rounded-full border border-orange-500/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center glow-red-intense">
                      <Terminal className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  Interactive Dashboard
                </h3>
                <p className="text-zinc-400 mb-6 max-w-md mx-auto">
                  Add your screenshots to /public/images/screenshots/ to showcase your app
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-sm text-red-400">Coming Soon</span>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 left-10 p-3 glass rounded-xl"
              >
                <Monitor className="w-6 h-6 text-cyan-400" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-10 right-10 p-3 glass rounded-xl"
              >
                <Smartphone className="w-6 h-6 text-purple-400" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
