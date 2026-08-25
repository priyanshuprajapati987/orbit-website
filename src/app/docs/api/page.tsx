import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

const apiCategories = [
  {
    name: "Agents",
    routes: 25,
    description: "Agent management and orchestration",
    endpoints: [
      { method: "GET", path: "/api/agents", description: "List all agents" },
      { method: "POST", path: "/api/agents/spawn", description: "Spawn new agent" },
      { method: "GET", path: "/api/agents/:id/status", description: "Agent status" },
    ],
  },
  {
    name: "Tools",
    routes: 20,
    description: "Tool execution and management",
    endpoints: [
      { method: "GET", path: "/api/tools", description: "List all tools" },
      { method: "POST", path: "/api/tools/execute", description: "Execute tool" },
      { method: "GET", path: "/api/tools/:id/logs", description: "Tool logs" },
    ],
  },
  {
    name: "Memory",
    routes: 30,
    description: "LIVE + CHUNKS TF-IDF + SUMMARY memory system",
    endpoints: [
      { method: "POST", path: "/api/memory/store", description: "Store memory" },
      { method: "GET", path: "/api/memory/recall", description: "Recall context" },
      { method: "DELETE", path: "/api/memory/:id", description: "Delete memory" },
    ],
  },
  {
    name: "Providers",
    routes: 35,
    description: "LLM provider management and routing",
    endpoints: [
      { method: "GET", path: "/api/providers", description: "List providers" },
      { method: "POST", path: "/api/providers/route", description: "Route to provider" },
      { method: "GET", path: "/api/providers/:id/stats", description: "Provider stats" },
    ],
  },
  {
    name: "Blueprints",
    routes: 25,
    description: "Blueprint templates and workflows",
    endpoints: [
      { method: "GET", path: "/api/blueprints", description: "List blueprints" },
      { method: "POST", path: "/api/blueprints/deploy", description: "Deploy blueprint" },
      { method: "GET", path: "/api/blueprints/:id", description: "Blueprint details" },
    ],
  },
  {
    name: "System",
    routes: 35,
    description: "System health, audit, and configuration",
    endpoints: [
      { method: "GET", path: "/api/health", description: "Health check" },
      { method: "GET", path: "/api/audit", description: "System audit" },
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
              25 agents, 20 tools, 147 blueprints - all accessible via API
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
              <p className="text-xs text-zinc-500 mt-2">Covering all 25 agents, 20 tools, and 147 blueprints</p>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
