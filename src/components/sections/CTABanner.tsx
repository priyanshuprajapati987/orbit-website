"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Gradient border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500 via-orange-500 to-red-500 p-[1px]">
            <div className="w-full h-full rounded-3xl bg-zinc-900" />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-red-400" />
              <span className="text-sm font-medium text-red-400">Limited Early Access</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Ready to Build with{" "}
              <span className="gradient-text">ORBIT</span>?
            </h2>
            <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are already using ORBIT to ship faster. 
              Early adopters get lifetime discounts and priority support.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#preorder">
                <button className="btn-primary px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-2 text-lg">
                  Get Early Access
                  <ArrowRight className="w-5 h-5" />
                </button>
              </a>
              <a href="/docs">
                <button className="px-8 py-4 rounded-xl text-zinc-300 font-semibold glass hover:bg-white/5 transition-all flex items-center gap-2">
                  Read Documentation
                </button>
              </a>
            </div>

            <p className="text-xs text-zinc-500 mt-6">
              No credit card required • Free tier available • Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
