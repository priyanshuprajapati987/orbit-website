"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Sparkles, Zap, Brain, Mic } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { GithubIcon } from "@/components/ui/Icons";
import { siteConfig, stats } from "@/lib/constants";

function ParticleField() {
  const [particles] = useState(() =>
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-red-500"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 0.6, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function OrbitalRings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Outer ring */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full border border-red-500/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2">
          <div className="w-full h-full rounded-full bg-red-500 glow-red" />
        </div>
      </motion.div>

      {/* Middle ring */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full border border-orange-500/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-full h-full rounded-full bg-orange-500" style={{ boxShadow: "0 0 10px rgba(255, 69, 0, 0.5)" }} />
        </div>
      </motion.div>

      {/* Inner ring */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full border border-red-500/15"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-full h-full rounded-full bg-red-400" style={{ boxShadow: "0 0 8px rgba(255, 0, 0, 0.4)" }} />
        </div>
      </motion.div>

      {/* Center glow */}
      <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/10 blur-3xl animate-pulse-glow" />
    </div>
  );
}

function FloatingIcons() {
  const icons = [
    { Icon: Brain, x: "15%", y: "30%", delay: 0 },
    { Icon: Mic, x: "80%", y: "25%", delay: 0.5 },
    { Icon: Zap, x: "10%", y: "70%", delay: 1 },
    { Icon: Sparkles, x: "85%", y: "65%", delay: 1.5 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
          }}
        >
          <div className="p-3 rounded-xl glass">
            <Icon className="w-6 h-6 text-red-400/50" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dots pt-16">
      {/* Aurora Background */}
      <div className="aurora" />

      {/* Particles */}
      <ParticleField />

      {/* Orbital Rings */}
      <OrbitalRings />

      {/* Floating Icons */}
      <FloatingIcons />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />

      {/* Main Content */}
      <div
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
        style={{ transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)` }}
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Badge variant="success" className="mb-8 px-4 py-2 text-sm glass">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            System Online
          </Badge>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mb-6"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter">
            <span className="text-white text-glow-sm">Meet </span>
            <span className="gradient-text">ORBIT</span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl text-zinc-300 mb-4 max-w-3xl mx-auto font-light"
        >
          {siteConfig.tagline}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg text-zinc-500 mb-10 max-w-2xl mx-auto"
        >
          Your Personal AI Companion with 25 agents, 20 tools, 147 blueprints, and 6 LLM providers.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a href="/#preorder">
            <button className="btn-primary px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-2 text-lg">
              Get Access
              <ArrowRight className="w-5 h-5" />
            </button>
          </a>
          <Button variant="outline" size="lg" className="glass border-zinc-700 hover:border-red-500/50">
            <BookOpen className="w-5 h-5" />
            Documentation
          </Button>
          <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="lg" className="text-zinc-400 hover:text-white">
              <GithubIcon className="w-5 h-5" />
              GitHub
            </Button>
          </a>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              className="glass-card rounded-2xl p-5 sm:p-6"
            >
              <div className="text-3xl sm:text-4xl font-black gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-zinc-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
