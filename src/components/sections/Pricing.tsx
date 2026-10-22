"use client";

import { motion } from "framer-motion";
import { Check, Zap, Crown, Rocket } from "lucide-react";

const plans = [
  {
    name: "Explorer",
    price: "Free",
    period: "",
    description: "Perfect for trying ORBIT",
    icon: Zap,
    gradient: "from-zinc-500 to-zinc-600",
    features: [
      "5 AI Agents",
      "10 Tools",
      "20 Blueprints",
      "2 LLM Providers",
      "Community Support",
      "Basic Memory",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For power users & developers",
    icon: Crown,
    gradient: "from-red-500 to-orange-500",
    features: [
      "25 AI Agents",
      "20 Tools",
      "147 Blueprints",
      "6 LLM Providers",
      "Priority Support",
      "Smart Memory",
      "Custom Blueprints",
      "API Access",
    ],
    cta: "Get Pro Access",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For teams & organizations",
    icon: Rocket,
    gradient: "from-purple-500 to-pink-500",
    features: [
      "Everything in Pro",
      "Unlimited Agents",
      "Custom Training",
      "Dedicated Support",
      "SLA Guarantee",
      "On-Premise Deploy",
      "White Label",
      "Team Management",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
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
            <Crown className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-zinc-300">Simple Pricing</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Choose Your{" "}
            <span className="gradient-text">Plan</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
            Start free, upgrade when you need more power
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold z-10">
                    MOST POPULAR
                  </div>
                )}
                <div className={`glass-card rounded-2xl p-8 h-full ${plan.popular ? "border-red-500/30" : ""}`}>
                  {/* Header */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-zinc-400 mb-4">{plan.description}</p>
                  
                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-black text-white">{plan.price}</span>
                    {plan.period && <span className="text-zinc-500">{plan.period}</span>}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-zinc-300">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a href="#preorder">
                    <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                      plan.popular
                        ? "btn-primary text-white"
                        : "bg-zinc-800 text-white hover:bg-zinc-700"
                    }`}>
                      {plan.cta}
                    </button>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-zinc-500 mt-8"
        >
          All plans include 99.9% uptime. Cancel anytime. No hidden fees.
        </motion.p>
      </div>
    </section>
  );
}
