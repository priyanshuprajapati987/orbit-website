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
    "Like JARVIS, but it actually works. 25 agents, 20 tools, 147 blueprints, and 6 LLM providers.",
  keywords: [
    "AI",
    "Assistant",
    "ORBIT",
    "JARVIS",
    "25 Agents",
    "20 Tools",
    "147 Blueprints",
    "6 LLM Providers",
  ],
  authors: [{ name: "Priyanshu Prajapati" }],
  openGraph: {
    title: "ORBIT - Your Personal AI Companion",
    description:
      "Like JARVIS, but it actually works. 25 agents, 20 tools, 147 blueprints, and 6 LLM providers.",
    type: "website",
    locale: "en_US",
    siteName: "ORBIT",
  },
  twitter: {
    card: "summary_large_image",
    title: "ORBIT - Your Personal AI Companion",
    description:
      "Like JARVIS, but it actually works. 25 agents, 20 tools, 147 blueprints, and 6 LLM providers.",
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
