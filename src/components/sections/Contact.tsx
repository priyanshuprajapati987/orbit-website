"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/lib/constants";

const socialLinks = [
  {
    label: "GitHub",
    href: siteConfig.author.github,
    icon: GithubIcon,
    color: "hover:text-white hover:shadow-white/20",
    stats: "Open Source",
  },
  {
    label: "LinkedIn",
    href: siteConfig.author.linkedin,
    icon: LinkedinIcon,
    color: "hover:text-blue-400 hover:shadow-blue-400/20",
    stats: "Connect",
  },
  {
    label: "LeetCode",
    href: siteConfig.author.leetcode,
    icon: LeetcodeIcon,
    color: "hover:text-amber-400 hover:shadow-amber-400/20",
    stats: "500+ Problems",
  },
];

export default function Contact() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/20 to-black" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl">
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
            <Send className="w-4 h-4 text-red-400" />
            <span className="text-sm text-zinc-300">Get In Touch</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Let&apos;s{" "}
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
            Let&apos;s build something amazing together
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-card rounded-3xl overflow-hidden">
            {/* Card Header with Gradient */}
            <div className="relative h-32 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-[length:200%_100%] animate-[gradient-flow_3s_ease_infinite]">
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 bg-grid opacity-20" />
            </div>

            {/* Avatar */}
            <div className="relative px-8 -mt-16 mb-6">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 p-1 mx-auto glow-red-intense">
                <div className="w-full h-full rounded-2xl bg-zinc-900 flex items-center justify-center">
                  <span className="text-4xl font-black gradient-text">
                    {siteConfig.author.name.charAt(0)}
                  </span>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="text-center px-8 pb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                {siteConfig.author.name}
              </h3>
              <p className="text-zinc-400 mb-2">{siteConfig.author.role}</p>
              <div className="flex items-center justify-center gap-2 text-sm text-zinc-500 mb-8">
                <MapPin className="w-4 h-4" />
                <span>Panchmahal, India</span>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className={`group flex flex-col items-center gap-3 p-6 rounded-2xl glass hover:bg-white/5 transition-all duration-300 ${social.color}`}
                    >
                      <div className="p-3 rounded-xl bg-zinc-800 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-zinc-400 group-hover:text-current transition-colors" />
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-white">{social.label}</div>
                        <div className="text-xs text-zinc-500">{social.stats}</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                    </motion.a>
                  );
                })}
              </div>

              {/* Email */}
              <motion.a
                href="mailto:contact@orbit.dev"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>contact@orbit.dev</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
