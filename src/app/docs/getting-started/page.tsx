import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Badge from "@/components/ui/Badge";

export default function GettingStartedPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <Badge variant="success" className="mb-4">Guide</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Getting Started
            </h1>
            <p className="text-lg text-zinc-400">
              Set up ORBIT with 25 agents, 20 tools, and 6 LLM providers
            </p>
          </div>

          {/* Prerequisites */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Prerequisites</h2>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">•</span>
                Python 3.8+ installed
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">•</span>
                Node.js 18+ installed
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">•</span>
                At least one LLM provider API key (Ollama, Groq, Gemini, Cloudflare, OpenRouter, or Portkey)
              </li>
            </ul>
          </section>

          {/* Installation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Installation</h2>
            <div className="rounded-lg bg-zinc-900 border border-zinc-800 p-6 font-mono text-sm">
              <p className="text-zinc-500 mb-2"># Clone the repository</p>
              <p className="text-green-400 mb-4">
                git clone https://github.com/priyanshuprajapati987/orbit.git
              </p>
              <p className="text-zinc-500 mb-2"># Navigate to project</p>
              <p className="text-green-400 mb-4">cd orbit</p>
              <p className="text-zinc-500 mb-2"># Install dependencies</p>
              <p className="text-green-400 mb-4">pip install -r requirements.txt</p>
              <p className="text-zinc-500 mb-2"># Start ORBIT</p>
              <p className="text-green-400">python main.py</p>
            </div>
          </section>

          {/* Configuration */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Configuration</h2>
            <p className="text-zinc-300 mb-4">
              Create a <code className="bg-zinc-800 px-2 py-1 rounded text-red-400">.env</code> file in the root directory:
            </p>
            <div className="rounded-lg bg-zinc-900 border border-zinc-800 p-6 font-mono text-sm">
              <p className="text-zinc-500 mb-2"># LLM Providers</p>
              <p className="text-green-400 mb-2">OLLAMA_BASE_URL=http://localhost:11434</p>
              <p className="text-green-400 mb-2">GROQ_API_KEY=your_key_here</p>
              <p className="text-green-400 mb-2">GEMINI_API_KEY=your_key_here</p>
              <p className="text-green-400 mb-2">CLOUDFLARE_API_KEY=your_key_here</p>
              <p className="text-green-400 mb-2">OPENROUTER_API_KEY=your_key_here</p>
              <p className="text-green-400 mb-4">PORTKEY_API_KEY=your_key_here</p>
              <p className="text-zinc-500 mb-2"># Memory System</p>
              <p className="text-green-400 mb-2">MEMORY_MODE=LIVE_CHUNKS_SUMMARY</p>
              <p className="text-green-400">RECALL_THRESHOLD=50</p>
            </div>
          </section>

          {/* System Architecture */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">System Architecture</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Agents", value: "25" },
                { label: "Tools", value: "20" },
                { label: "Blueprints", value: "147" },
                { label: "Providers", value: "6" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-zinc-800/30">
                  <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-xs text-zinc-500 uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Start */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Quick Start</h2>
            <div className="rounded-lg bg-zinc-900 border border-zinc-800 p-6 font-mono text-sm">
              <p className="text-zinc-500 mb-2"># Start with specific provider</p>
              <p className="text-green-400 mb-4">python main.py --provider groq</p>
              <p className="text-zinc-500 mb-2"># Start with memory only</p>
              <p className="text-green-400 mb-4">python main.py --memory-only</p>
              <p className="text-zinc-500 mb-2"># List all agents</p>
              <p className="text-green-400 mb-4">python main.py --agents</p>
              <p className="text-zinc-500 mb-2"># Run system audit</p>
              <p className="text-green-400">python main.py --audit</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
