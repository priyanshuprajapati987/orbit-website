"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "What is ORBIT?",
    answer: "ORBIT is an AI assistant platform with 25 specialized agents, 20 tools, 147 blueprints, and 6 LLM providers. It's like having a whole AI team that handles coding, research, analysis, and more.",
  },
  {
    question: "How does the AI memory system work?",
    answer: "ORBIT uses a three-layer memory system: LIVE Context for real-time tracking, CHUNKS TF-IDF for semantic search, and SUMMARY for compressed knowledge. Context persists across sessions with <50ms recall time and 90.3% ground truth accuracy.",
  },
  {
    question: "Which LLM providers are supported?",
    answer: "ORBIT supports 6 providers: Ollama (local), Groq (fast inference), Gemini (Google), Cloudflare (edge), OpenRouter (multi-model), and Portkey (enterprise). RouteLLM automatically selects the best provider for each task.",
  },
  {
    question: "Can I use ORBIT for free?",
    answer: "Yes! ORBIT has a free Explorer plan with 5 agents, 10 tools, and 20 blueprints. For full access to all 25 agents, 147 blueprints, and premium features, check out our Pro plan.",
  },
  {
    question: "How do blueprints work?",
    answer: "Blueprints are pre-built templates and workflows for common tasks. With 147 blueprints, you can deploy solutions in seconds - from CI/CD pipelines to data processing workflows. Just select a blueprint and customize it.",
  },
  {
    question: "Is ORBIT secure?",
    answer: "Yes! ORBIT runs on self-hosted infrastructure with Docker. Your data stays on your machine. We also support on-premise deployment for enterprise customers who need full control.",
  },
  {
    question: "How do I get started?",
    answer: "Sign up for free on our website, explore the documentation, and start using ORBIT's agents and tools. Our getting-started guide will walk you through everything in 5 minutes.",
  },
  {
    question: "Can I integrate ORBIT with my existing tools?",
    answer: "Absolutely! ORBIT has 20 built-in tools including API calls, file operations, database queries, and system interactions. You can also create custom blueprints for any workflow.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/20 to-black" />

      <div className="relative z-10 mx-auto max-w-3xl">
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
            <HelpCircle className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-zinc-300">FAQ</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Got{" "}
            <span className="gradient-text">Questions?</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
            Everything you need to know about ORBIT
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div
                className={`glass-card rounded-xl overflow-hidden transition-all ${
                  openIndex === index ? "border-red-500/30" : ""
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-sm font-semibold text-white pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-zinc-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 text-sm text-zinc-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-zinc-500 text-sm mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass hover:bg-white/5 transition-all text-sm text-white"
          >
            <MessageCircle className="w-4 h-4" />
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
