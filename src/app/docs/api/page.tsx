import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

const apiCategories = [
  {
    name: "Chat",
    routes: 25,
    description: "Message handling and conversation management",
    endpoints: [
      { method: "POST", path: "/api/chat/send", description: "Send a message" },
      { method: "GET", path: "/api/chat/history", description: "Get chat history" },
      { method: "DELETE", path: "/api/chat/clear", description: "Clear conversation" },
    ],
  },
  {
    name: "Memory",
    routes: 30,
    description: "Long-term memory and context management",
    endpoints: [
      { method: "POST", path: "/api/memory/store", description: "Store a memory" },
      { method: "GET", path: "/api/memory/search", description: "Search memories" },
      { method: "DELETE", path: "/api/memory/:id", description: "Delete a memory" },
    ],
  },
  {
    name: "Voice",
    routes: 20,
    description: "Voice processing and synthesis",
    endpoints: [
      { method: "POST", path: "/api/voice/transcribe", description: "Transcribe audio" },
      { method: "POST", path: "/api/voice/synthesize", description: "Generate speech" },
      { method: "GET", path: "/api/voice/models", description: "List voice models" },
    ],
  },
  {
    name: "Models",
    routes: 35,
    description: "LLM model management and routing",
    endpoints: [
      { method: "GET", path: "/api/models", description: "List available models" },
      { method: "POST", path: "/api/models/route", description: "Route to best model" },
      { method: "GET", path: "/api/models/:id/stats", description: "Model statistics" },
    ],
  },
  {
    name: "Users",
    routes: 25,
    description: "User management and authentication",
    endpoints: [
      { method: "POST", path: "/api/auth/login", description: "User login" },
      { method: "POST", path: "/api/auth/register", description: "User registration" },
      { method: "GET", path: "/api/users/profile", description: "Get user profile" },
    ],
  },
  {
    name: "System",
    routes: 35,
    description: "System health and configuration",
    endpoints: [
      { method: "GET", path: "/api/health", description: "Health check" },
      { method: "GET", path: "/api/status", description: "System status" },
      { method: "GET", path: "/api/metrics", description: "System metrics" },
    ],
  },
];

const methodColors: Record<string, string> = {
  GET: "bg-green-500/20 text-green-400",
  POST: "bg-blue-500/20 text-blue-400",
  PUT: "bg-yellow-500/20 text-yellow-400",
  DELETE: "bg-red-500/20 text-red-400",
};

export default function ApiPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="success" className="mb-4">API</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              API Reference
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              170+ routes covering every feature
            </p>
          </div>

          {/* API Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {apiCategories.map((category) => (
              <Card key={category.name} className="h-full">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-white">{category.name}</h2>
                  <Badge variant="default">{category.routes} routes</Badge>
                </div>
                <p className="text-sm text-zinc-400 mb-6">{category.description}</p>

                <div className="space-y-3">
                  {category.endpoints.map((endpoint) => (
                    <div
                      key={endpoint.path}
                      className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800/50"
                    >
                      <span
                        className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-mono font-bold ${
                          methodColors[endpoint.method]
                        }`}
                      >
                        {endpoint.method}
                      </span>
                      <code className="text-sm text-zinc-300 font-mono">
                        {endpoint.path}
                      </code>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Total Routes */}
          <div className="mt-12 text-center">
            <Card className="inline-block">
              <p className="text-zinc-400 mb-2">Total Routes</p>
              <p className="text-4xl font-bold gradient-text">170+</p>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
