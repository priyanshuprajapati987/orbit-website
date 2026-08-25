"use client";

import { motion } from "framer-motion";
import { Brain, Mic, Layers, Route, Server, Zap, ArrowRight } from "lucide-react";
import { features } from "@/lib/constants";

const iconMap = {
  Brain,
  Mic,
  Layers,
  Route,
  Server,
  Zap,
};

export default function Features() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/20 to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-3xl" />

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
            <Zap className="w-4 h-4 text-red-400" />
            <span className="text-sm text-zinc-300">Powerful Features</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Built for{" "}
            <span className="gradient-text">Performance</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
            Everything you need for a production-ready AI assistant
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card rounded-2xl p-8 h-full relative overflow-hidden">
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-orange-500/0 group-hover:from-red-500/5 group-hover:to-orange-500/5 transition-all duration-500" />

                  {/* Icon */}
                  <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-7 w-7 text-white" />
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                  </div>

                  {/* Content */}
                  <h3 className="relative text-xl font-bold text-white mb-3 group-hover:text-glow-sm transition-all">
                    {feature.title}
                  </h3>
                  <p className="relative text-sm text-zinc-400 leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {/* Learn More */}
                  <div className="relative flex items-center gap-2 text-sm text-red-400 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-500/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a href="/docs/features" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
            <span>View all features</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
