"use client";

import Link from "next/link";
import { Code2, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/lib/constants";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/docs/features" },
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "/docs/api" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Getting Started", href: "/docs/getting-started" },
      { label: "Architecture", href: "/docs/architecture" },
    ],
  },
];

const socialLinks = [
  { label: "GitHub", href: siteConfig.author.github, icon: GithubIcon },
  { label: "LinkedIn", href: siteConfig.author.linkedin, icon: LinkedinIcon },
  { label: "LeetCode", href: siteConfig.author.leetcode, icon: LeetcodeIcon },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-zinc-800/50 bg-black">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-orange-500">
                  <span className="text-lg font-black text-white">O</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl opacity-20 blur" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">ORBIT</span>
                <span className="text-[10px] block text-zinc-500 -mt-1">AI ASSISTANT</span>
              </div>
            </Link>
            <p className="text-sm text-zinc-400 max-w-md mb-6 leading-relaxed">
              Your Personal AI Companion. Like JARVIS, but it actually works. 25 agents, 20 tools, 147 blueprints, and 6 LLM providers.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-zinc-800/50 text-zinc-400 hover:text-white hover:bg-zinc-800 hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 line-glow"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-800/50 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500 flex items-center gap-1">
            &copy; {currentYear} {siteConfig.author.name}. Made with
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            in India
          </p>
          <div className="flex items-center gap-4 text-xs text-zinc-500">
            <span>Built with Next.js</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600" />
            <span>Tailwind CSS</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600" />
            <span>Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
