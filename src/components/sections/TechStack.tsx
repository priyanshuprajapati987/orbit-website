"use client";

import { motion } from "framer-motion";
import { Cpu, Users, Wrench, Database, Route, Server } from "lucide-react";
import { techStack } from "@/lib/constants";

const categoryLabels: Record<string, string> = {
  providers: "LLM Providers",
  agents: "AI Agents",
  tools: "Tools",
  memory: "Memory System",
  routing: "Routing",
  infra: "Infrastructure",
};

const categoryIcons: Record<string, typeof Cpu> = {
  providers: Cpu,
  agents: Users,
  tools: Wrench,
  memory: Database,
  routing: Route,
  infra: Server,
};

const categoryColors: Record<string, { bg: string; text: string; glow: string }> = {
  providers: { bg: "from-purple-500/20 to-pink-500/20", text: "text-purple-400", glow: "shadow-purple-500/20" },
  agents: { bg: "from-red-500/20 to-orange-500/20", text: "text-red-400", glow: "shadow-red-500/20" },
  tools: { bg: "from-orange-500/20 to-amber-500/20", text: "text-amber-400", glow: "shadow-amber-500/20" },
  memory: { bg: "from-cyan-500/20 to-blue-500/20", text: "text-cyan-400", glow: "shadow-cyan-500/20" },
  routing: { bg: "from-green-500/20 to-emerald-500/20", text: "text-emerald-400", glow: "shadow-emerald-500/20" },
  infra: { bg: "from-zinc-500/20 to-slate-500/20", text: "text-zinc-400", glow: "shadow-zinc-500/20" },
};

export default function TechStack() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/30 to-black" />
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-30" />

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
            <Cpu className="w-4 h-4 text-red-400" />
            <span className="text-sm text-zinc-300">System Architecture</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Powered by{" "}
            <span className="gradient-text">Real Tech</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
            6 LLM providers, 25 agents, 20 tools - built for production
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(techStack).map(([category, items], index) => {
            const Icon = categoryIcons[category];
            const colors = categoryColors[category];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card rounded-2xl p-8 h-full relative overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${colors.bg} group-hover:shadow-lg ${colors.glow} transition-shadow duration-300`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {categoryLabels[category]}
                    </h3>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, i) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                        className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-gradient-to-r ${colors.bg} ${colors.text} border border-transparent hover:border-current/20 hover:shadow-md ${colors.glow} transition-all duration-300 cursor-default`}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>

                  {/* Corner Decoration */}
                  <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-tl ${colors.bg} rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Audit Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">System Audit</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { label: "Agents", value: "25" },
                { label: "Tools", value: "20" },
                { label: "Blueprints", value: "147" },
                { label: "Components", value: "99" },
                { label: "Tests", value: "1,805" },
                { label: "Ground Truth", value: "90.3%" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-zinc-800/30">
                  <div className="text-2xl font-black gradient-text mb-1">{stat.value}</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
