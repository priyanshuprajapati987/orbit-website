import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ORBIT - Your Personal AI Companion",
  description:
    "Like JARVIS, but it actually works. ORBIT is an AI assistant with memory, voice, and multi-LLM support. 170+ API routes, self-hosted.",
  keywords: [
    "AI",
    "Assistant",
    "ORBIT",
    "JARVIS",
    "Voice AI",
    "Memory",
    "Multi-LLM",
    "GPT-4",
    "Claude",
    "Gemini",
  ],
  authors: [{ name: "Priyanshu Prajapati" }],
  openGraph: {
    title: "ORBIT - Your Personal AI Companion",
    description:
      "Like JARVIS, but it actually works. AI assistant with memory, voice, and multi-LLM support.",
    type: "website",
    locale: "en_US",
    siteName: "ORBIT",
  },
  twitter: {
    card: "summary_large_image",
    title: "ORBIT - Your Personal AI Companion",
    description:
      "Like JARVIS, but it actually works. AI assistant with memory, voice, and multi-LLM support.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}
