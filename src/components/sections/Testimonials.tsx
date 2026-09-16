"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Sharma",
    role: "Full Stack Developer",
    avatar: "AS",
    content: "ORBIT has completely changed how I code. The 25 agents handle everything from debugging to deployment. It's like having a whole team!",
    rating: 5,
    gradient: "from-red-500 to-orange-500",
  },
  {
    name: "Priya Patel",
    role: "AI Researcher",
    avatar: "PP",
    content: "The memory system is insane. It remembers everything across sessions. RouteLLM automatically picks the best provider for each task.",
    rating: 5,
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Rahul Kumar",
    role: "Startup Founder",
    avatar: "RK",
    content: "We reduced our development time by 60% using ORBIT's blueprints. Pre-built templates for everything - deployment, CI/CD, testing.",
    rating: 5,
    gradient: "from-red-500 to-pink-500",
  },
  {
    name: "Sneha Gupta",
    role: "DevOps Engineer",
    avatar: "SG",
    content: "The 6 LLM providers integration is seamless. If one goes down, ORBIT automatically switches to another. Zero downtime!",
    rating: 5,
    gradient: "from-purple-500 to-red-500",
  },
  {
    name: "Vikram Singh",
    role: "Data Scientist",
    avatar: "VS",
    content: "ORBIT's 20 tools handle all my data processing needs. From web scraping to database queries, everything just works.",
    rating: 5,
    gradient: "from-red-500 to-orange-500",
  },
  {
    name: "Neha Desai",
    role: "Product Manager",
    avatar: "ND",
    content: "Finally an AI that actually understands context. The TF-IDF memory system is brilliant - it knows exactly what I need.",
    rating: 5,
    gradient: "from-orange-500 to-red-500",
  },
];

export default function Testimonials() {
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
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm text-zinc-300">Loved by Developers</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            What People{" "}
            <span className="gradient-text">Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
            Join thousands of developers who love ORBIT
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 h-full relative overflow-hidden">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-red-500/20 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center`}>
                    <span className="text-sm font-bold text-white">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{testimonial.name}</div>
                    <div className="text-xs text-zinc-500">{testimonial.role}</div>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-tl from-red-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
