import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      // Fallback to smart local responses if no API key
      const lastMessage = messages[messages.length - 1]?.content || "";
      const response = getSmartResponse(lastMessage);
      return NextResponse.json({ response });
    }

    const systemPrompt = `You are ORBIT AI, an intelligent assistant for the ORBIT AI platform. ORBIT is a powerful AI system with:
- 25 AI Agents (Coder, Researcher, Analyst, Memory, Planner, Executor, and 19 more)
- 20 Tools (Web Search, Code Execution, File Operations, API Calls, System tools, Database queries)
- 147 Blueprints (pre-built templates and workflows)
- 6 LLM Providers (Ollama, Groq, Gemini, Cloudflare, OpenRouter, Portkey)
- RouteLLM + ToolGate with 76 actions for intelligent routing
- Smart Memory: LIVE Context + CHUNKS TF-IDF + SUMMARY system
- 90.3% ground truth accuracy
- Built with Python, Docker, and modern infrastructure

You are helpful, knowledgeable, and enthusiastic about ORBIT. Answer questions about ORBIT's features, capabilities, pricing, and technical details. Be conversational and friendly. If asked about something unrelated to ORBIT, still help but gently steer back to ORBIT topics.`;

    const apiMessages = [
      { role: "system", content: systemPrompt },
      ...messages.map((msg: { role: string; content: string }) => ({
        role: msg.role,
        content: msg.content,
      })),
    ];

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://orbit-ai.dev",
        "X-Title": "ORBIT AI Assistant",
      },
      body: JSON.stringify({
        model: "meta-llama/llama-3.1-8b-instruct:free",
        messages: apiMessages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const lastMessage = messages[messages.length - 1]?.content || "";
      const fallbackResponse = getSmartResponse(lastMessage);
      return NextResponse.json({ response: fallbackResponse });
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || getSmartResponse(messages[messages.length - 1]?.content || "");

    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error("Chat API error:", error);
    const lastMessage = (await request.json().catch(() => ({ messages: [] }))).messages?.slice(-1)[0]?.content || "";
    return NextResponse.json({ response: getSmartResponse(lastMessage) });
  }
}

function getSmartResponse(message: string): string {
  const lower = message.toLowerCase();

  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey") || lower.includes("namaste")) {
    return "Hello! I'm ORBIT AI 🤖\n\nI'm here to help you with anything about ORBIT - our AI platform with 25 agents, 20 tools, 147 blueprints, and 6 LLM providers.\n\nWhat would you like to know?";
  }

  if (lower.includes("price") || lower.includes("cost") || lower.includes("kitne") || lower.includes("paisa") || lower.includes("free")) {
    return "ORBIT Pricing 💰\n\nWe're currently in pre-order phase! Early adopters get:\n\n✅ Lifetime discounts\n✅ Priority support\n✅ Early access to all features\n✅ Direct access to 25 AI agents\n\nSign up on our Pre-Order section to lock in the best price!";
  }

  if (lower.includes("feature") || lower.includes("kya hai") || lower.includes("what") || lower.includes("about")) {
    return "ORBIT Features 🚀\n\n🤖 25 AI Agents - Specialized for coding, research, analysis, memory, planning\n🔧 20 Tools - Web search, code exec, file ops, APIs, system, DB\n📋 147 Blueprints - Pre-built templates for quick deployment\n🧠 Smart Memory - LIVE + CHUNKS TF-IDF + SUMMARY\n⚡ RouteLLM + ToolGate - 76 actions, intelligent routing\n🌐 6 Providers - Ollama, Groq, Gemini, Cloudflare, OpenRouter, Portkey\n\nWhat feature interests you most?";
  }

  if (lower.includes("agent")) {
    return "ORBIT AI Agents 🤖\n\nWe have 25 specialized agents:\n\n💻 Coder Agent - Write, review, debug code\n🔍 Researcher Agent - Gather & analyze info\n📊 Analyst Agent - Data processing & insights\n🧠 Memory Agent - Context management\n📋 Planner Agent - Task orchestration\n⚡ Executor Agent - Run tasks & workflows\n\n...and 19 more specialized agents for different domains!\n\nEach agent is optimized for its specific task.";
  }

  if (lower.includes("tool")) {
    return "ORBIT Tools 🔧\n\n20 powerful tools:\n\n🌐 Web Search - Real-time info retrieval\n💻 Code Execution - Run scripts & programs\n📁 File Operations - Read, write, manage files\n🔗 API Calls - Connect to external services\n🖥️ System Tools - OS interactions\n🗄️ Database - Query & manage data\n\n...and many more! Each tool works with our agents for maximum productivity.";
  }

  if (lower.includes("provider") || lower.includes("llm") || lower.includes("model")) {
    return "ORBIT LLM Providers 🌐\n\n6 providers for best results:\n\n🦙 Ollama - Local, private models\n⚡ Groq - Ultra-fast inference\n🔮 Gemini - Google's latest models\n☁️ Cloudflare - Edge computing\n🔀 OpenRouter - Multiple models\n🔑 Portkey - Enterprise grade\n\nRouteLLM automatically selects the best provider for each task!";
  }

  if (lower.includes("memory")) {
    return "ORBIT Smart Memory 🧠\n\nThree-layer memory system:\n\n📊 LIVE Context - Real-time tracking\n📝 CHUNKS TF-IDF - Semantic search\n📋 SUMMARY - Compressed knowledge\n\n⚡ Recall time: <50ms\n🎯 Ground truth: 90.3%\n💾 Storage: Optimized\n\nContext persists across sessions!";
  }

  if (lower.includes("blueprint")) {
    return "ORBIT Blueprints 📋\n\n147 pre-built templates:\n\n🚀 Deployment templates\n⚡ Workflow automations\n🔗 Integration patterns\n🛠️ Custom task solutions\n\nEach blueprint is designed for quick deployment - seconds, not hours!";
  }

  if (lower.includes("kaise") || lower.includes("how") || lower.includes("work")) {
    return "How ORBIT Works ⚡\n\n1️⃣ You give a task\n2️⃣ RouteLLM selects best provider\n3️⃣ Agent processes with tools\n4️⃣ Memory provides context\n5️⃣ Result delivered!\n\nSmart routing with 76 actions ensures optimal performance every time.";
  }

  if (lower.includes("contact") || lower.includes("reach") || lower.includes("email")) {
    return "Contact Us 📧\n\n👤 Priyanshu Prajapati\n📧 priyanshuprajapati2693@gmail.com\n🔗 GitHub: github.com/priyanshuprajapati987\n💼 LinkedIn: linkedin.com/in/priyanshu-prajapati\n\nFeel free to reach out for:\n✅ Pre-order inquiries\n✅ Technical questions\n✅ Collaboration opportunities";
  }

  return "I'm ORBIT AI! 🤖\n\nI can help you with:\n\n🚀 ORBIT Features - 25 agents, 20 tools, 147 blueprints\n💰 Pricing & Pre-order info\n🔧 Technical details\n🧠 Memory system\n🌐 LLM Providers\n\nJust ask me anything! I'm here to help.";
}
