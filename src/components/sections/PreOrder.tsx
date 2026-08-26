"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Mail, Check, Sparkles, ArrowRight, Shield, Clock, Zap } from "lucide-react";

export default function PreOrder() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="preorder" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card rounded-3xl overflow-hidden">
            {/* Top Gradient Bar */}
            <div className="h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500" />

            <div className="p-8 md:p-12">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6"
              >
                <ShoppingCart className="w-4 h-4 text-red-400" />
                <span className="text-sm font-medium text-red-400">Pre-Order Now</span>
              </motion.div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                Get <span className="gradient-text">ORBIT</span> Early
              </h2>
              <p className="text-lg text-zinc-400 mb-8 max-w-2xl">
                Be among the first to access 25 AI agents, 20 tools, and 147 blueprints. 
                Early adopters get <span className="text-white font-semibold">lifetime discounts</span> and <span className="text-white font-semibold">priority support</span>.
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Zap, label: "Early Access", desc: "First to try new features" },
                  { icon: Shield, label: "Lifetime Discount", desc: "Lock in best price" },
                  { icon: Clock, label: "Priority Support", desc: "Direct access to team" },
                ].map((benefit, i) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={benefit.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-zinc-800/30"
                    >
                      <div className="p-2 rounded-lg bg-red-500/10">
                        <Icon className="w-4 h-4 text-red-400" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{benefit.label}</div>
                        <div className="text-xs text-zinc-500">{benefit.desc}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Form */}
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-zinc-800/50 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary px-8 py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <Sparkles className="w-5 h-5" />
                    Pre-Order
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20"
                >
                  <div className="p-2 rounded-full bg-green-500/20">
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">You&apos;re on the list!</div>
                    <div className="text-xs text-zinc-400">We&apos;ll notify you when ORBIT is ready.</div>
                  </div>
                </motion.div>
              )}

              {/* Trust Badges */}
              <div className="flex items-center gap-4 mt-6 text-xs text-zinc-500">
                <span className="flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  No spam, ever
                </span>
                <span>•</span>
                <span>Cancel anytime</span>
                <span>•</span>
                <span>Be first to access</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
