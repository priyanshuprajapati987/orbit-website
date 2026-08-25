import Link from "next/link";
import { BookOpen, Zap, Code2, Layers } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Card from "@/components/ui/Card";

const docSections = [
  {
    title: "Getting Started",
    description: "Install and set up ORBIT in minutes",
    href: "/docs/getting-started",
    icon: Zap,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Features",
    description: "Explore all ORBIT capabilities",
    href: "/docs/features",
    icon: Layers,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "API Reference",
    description: "170+ routes documentation",
    href: "/docs/api",
    icon: Code2,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Architecture",
    description: "System design and components",
    href: "/docs/architecture",
    icon: BookOpen,
    gradient: "from-orange-500 to-red-500",
  },
];

export default function DocsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Documentation
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Everything you need to know about ORBIT
            </p>
          </div>

          {/* Doc Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {docSections.map((section) => {
              const Icon = section.icon;
              return (
                <Link key={section.href} href={section.href}>
                  <Card hover className="h-full">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${section.gradient} mb-4`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-xl font-semibold text-white mb-2">
                      {section.title}
                    </h2>
                    <p className="text-sm text-zinc-400">{section.description}</p>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
