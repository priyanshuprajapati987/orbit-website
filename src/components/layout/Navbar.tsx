"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Docs", href: "/docs" },
    { label: "Features", href: "/docs/features" },
    { label: "API", href: "/docs/api" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-zinc-800/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-orange-500 group-hover:shadow-lg group-hover:shadow-red-500/25 transition-all duration-300">
                <span className="text-lg font-black text-white">O</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-white">ORBIT</span>
              <span className="text-[10px] block text-zinc-500 -mt-1">AI ASSISTANT</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors duration-200 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors duration-200"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="/#preorder">
              <button className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white border border-red-500/30 hover:bg-red-500/10 transition-all duration-200 flex items-center gap-2">
                Pre-Order
              </button>
            </a>
            <button className="btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold text-white flex items-center gap-2">
              Coming Soon
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center rounded-xl p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50 md:hidden transition-all duration-200"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-2 bg-black/95 backdrop-blur-xl border-t border-zinc-800/50">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2 space-y-2">
            <a href="/#preorder" className="block">
              <button className="w-full px-4 py-3 rounded-xl text-sm font-semibold text-white border border-red-500/30 hover:bg-red-500/10 transition-all duration-200">
                Pre-Order
              </button>
            </a>
            <button className="btn-primary w-full px-4 py-3 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2">
              Coming Soon
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
