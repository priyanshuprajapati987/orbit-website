"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function PreorderSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950/20 via-black to-emerald-950/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md px-4 text-center"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="mx-auto mb-8"
        >
          <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
            <Check className="w-12 h-12 text-green-400" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-black text-white mb-4"
        >
          You&apos;re In! 🎉
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-zinc-400 mb-8"
        >
          Welcome to the ORBIT early access list. You&apos;ll be among the first to try 25 AI agents, 20 tools, and 147 blueprints.
        </motion.p>

        {/* What&apos;s Next */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card rounded-2xl p-6 mb-8 text-left"
        >
          <h3 className="text-lg font-bold text-white mb-4">What happens next?</h3>
          <div className="space-y-3">
            {[
              "We&apos;ll send you updates on ORBIT development",
              "You&apos;ll get early access before public launch",
              "Lifetime discount locked in for you",
              "Priority support from day one",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-zinc-300" dangerouslySetInnerHTML={{ __html: item }} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <Link href="/">
            <button className="btn-primary w-full px-6 py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2">
              Back to Home
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
          <p className="text-xs text-zinc-500">
            Questions? Email us at priyanshuprajapati2693@gmail.com
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
