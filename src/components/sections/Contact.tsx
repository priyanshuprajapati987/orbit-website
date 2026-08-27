"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, ExternalLink, Check, Loader2 } from "lucide-react";
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
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Netlify Forms submission
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...formData,
        }).toString(),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
              
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <div className="p-4 rounded-full bg-green-500/10 mb-4">
                    <Check className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-sm text-zinc-400">We&apos;ll get back to you soon.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-sm text-red-400 hover:text-red-300"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out: <input name="bot-field" />
                    </label>
                  </p>
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-zinc-800/50 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-zinc-800/50 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your message..."
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-zinc-800/50 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
                  )}
                  
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full btn-primary px-6 py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Author Card */}
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 p-1">
                  <div className="w-full h-full rounded-2xl bg-zinc-900 flex items-center justify-center">
                    <span className="text-2xl font-black gradient-text">
                      {siteConfig.author.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{siteConfig.author.name}</h3>
                  <p className="text-zinc-400">{siteConfig.author.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
                <MapPin className="w-4 h-4" />
                <span>Panchmahal, India</span>
              </div>
              <a
                href="mailto:priyanshuprajapati2693@gmail.com"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all"
              >
                <Mail className="w-5 h-5" />
                <span>priyanshuprajapati2693@gmail.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-3 gap-4">
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
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className={`group flex flex-col items-center gap-3 p-6 rounded-2xl glass hover:bg-white/5 transition-all duration-300 ${social.color}`}
                  >
                    <div className="p-3 rounded-xl bg-zinc-800 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-zinc-400 group-hover:text-current transition-colors" />
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-white text-sm">{social.label}</div>
                      <div className="text-xs text-zinc-500">{social.stats}</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
