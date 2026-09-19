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
  metadataBase: new URL("https://comfy-dasik-e7cdcb.netlify.app"),
  title: {
    default: "ORBIT - Your Personal AI Companion | 25 Agents, 20 Tools",
    template: "%s | ORBIT AI",
  },
  description:
    "ORBIT is an AI assistant with 25 specialized agents, 20 tools, 147 blueprints, and 6 LLM providers. Like JARVIS, but it actually works. Built for production.",
  keywords: [
    "AI assistant",
    "AI agents",
    "ORBIT AI",
    "JARVIS",
    "25 AI agents",
    "20 tools",
    "147 blueprints",
    "6 LLM providers",
    "RouteLLM",
    "ToolGate",
    "smart memory",
    "AI companion",
    "personal AI",
    "code assistant",
    "developer tools",
  ],
  authors: [{ name: "Priyanshu Prajapati" }],
  creator: "Priyanshu Prajapati",
  publisher: "ORBIT AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://orbit-ai.dev",
    siteName: "ORBIT AI",
    title: "ORBIT - Your Personal AI Companion",
    description:
      "25 AI agents, 20 tools, 147 blueprints, 6 LLM providers. Your personal AI that actually works.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ORBIT AI - Personal AI Companion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ORBIT - Your Personal AI Companion",
    description:
      "25 AI agents, 20 tools, 147 blueprints, 6 LLM providers. Your personal AI that actually works.",
    images: ["/og-image.png"],
    creator: "@priyanshu260923",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ORBIT AI",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    description:
      "AI assistant with 25 agents, 20 tools, 147 blueprints, and 6 LLM providers",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: "Priyanshu Prajapati",
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}
