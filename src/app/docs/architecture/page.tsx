import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

const components = [
  {
    name: "Core Engine",
    description: "Main AI processing unit handling LLM routing and response generation",
    tech: ["Python", "FastAPI"],
  },
  {
    name: "Memory Layer",
    description: "Persistent context storage using vector databases",
    tech: ["Qdrant", "Mem0"],
  },
  {
    name: "Voice Pipeline",
    description: "Real-time voice processing and synthesis",
    tech: ["Whisper", "TTS"],
  },
  {
    name: "API Gateway",
    description: "Request routing, authentication, and rate limiting",
    tech: ["Node.js", "Express"],
  },
  {
    name: "Frontend",
    description: "Interactive web interface for ORBIT",
    tech: ["React", "Next.js"],
  },
  {
    name: "Data Store",
    description: "Persistent storage for conversations and user data",
    tech: ["PostgreSQL", "Redis"],
  },
];

export default function ArchitecturePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="success" className="mb-4">Architecture</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              System Architecture
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Scalable, modular design for production deployments
            </p>
          </div>

          {/* Architecture Diagram */}
          <Card className="mb-12">
            <h2 className="text-xl font-bold text-white mb-6">High-Level Overview</h2>
            <div className="bg-zinc-800/50 rounded-lg p-8 font-mono text-sm">
              <pre className="text-zinc-300 overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────┐
│                      Client Layer                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │   Web    │  │   API    │  │  Voice   │  │  Mobile  │  │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘  │
└───────┼──────────────┼──────────────┼──────────────┼────────┘
        │              │              │              │
        ▼              ▼              ▼              ▼
┌─────────────────────────────────────────────────────────────┐
│                     API Gateway                            │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Auth │ Rate Limit │ Load Balance │ Request Route   │   │
│  └─────────────────────────────────────────────────────┘   │
└──────────────────────────┬──────────────────────────────────┘
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  Core Engine │  │  Memory      │  │  Voice       │
│  (LLM Route) │  │  (Qdrant)    │  │  Pipeline    │
└──────┬───────┘  └──────┬───────┘  └──────┬───────┘
       │                 │                 │
       ▼                 ▼                 ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  GPT-4       │  │  Mem0        │  │  Whisper     │
│  Claude      │  │  Vectors     │  │  TTS         │
│  Gemini      │  │  Storage     │  │  Audio I/O   │
└──────────────┘  └──────────────┘  └──────────────┘`}
              </pre>
            </div>
          </Card>

          {/* Components */}
          <h2 className="text-2xl font-bold text-white mb-8">Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((component) => (
              <Card key={component.name} hover className="h-full">
                <h3 className="text-lg font-bold text-white mb-2">
                  {component.name}
                </h3>
                <p className="text-sm text-zinc-400 mb-4">{component.description}</p>
                <div className="flex flex-wrap gap-2">
                  {component.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Design Principles */}
          <Card className="mt-12">
            <h2 className="text-xl font-bold text-white mb-6">Design Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Modularity</h3>
                <p className="text-sm text-zinc-400">
                  Each component is independent and can be scaled or replaced without affecting
                  the system.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Security</h3>
                <p className="text-sm text-zinc-400">
                  End-to-end encryption, secure authentication, and data isolation between users.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Performance</h3>
                <p className="text-sm text-zinc-400">
                  Optimized for low latency with caching, async processing, and efficient resource
                  usage.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Scalability</h3>
                <p className="text-sm text-zinc-400">
                  Horizontal scaling support with load balancing and distributed processing.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
