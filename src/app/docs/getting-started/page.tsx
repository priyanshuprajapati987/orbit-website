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
              Set up ORBIT in minutes and start building with AI
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
                API keys for your preferred LLM providers
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
              <p className="text-zinc-500 mb-2"># LLM API Keys</p>
              <p className="text-green-400 mb-2">OPENAI_API_KEY=your_key_here</p>
              <p className="text-green-400 mb-2">ANTHROPIC_API_KEY=your_key_here</p>
              <p className="text-green-400 mb-4">GOOGLE_API_KEY=your_key_here</p>
              <p className="text-zinc-500 mb-2"># Memory</p>
              <p className="text-green-400 mb-2">QDRANT_URL=http://localhost:6333</p>
              <p className="text-green-400">MEM0_API_KEY=your_key_here</p>
            </div>
          </section>

          {/* Quick Start */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Quick Start</h2>
            <div className="rounded-lg bg-zinc-900 border border-zinc-800 p-6 font-mono text-sm">
              <p className="text-zinc-500 mb-2"># Start with voice enabled</p>
              <p className="text-green-400 mb-4">python main.py --voice</p>
              <p className="text-zinc-500 mb-2"># Start with specific LLM</p>
              <p className="text-green-400 mb-4">python main.py --model gpt-4</p>
              <p className="text-zinc-500 mb-2"># Start with memory only</p>
              <p className="text-green-400">python main.py --memory-only</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
