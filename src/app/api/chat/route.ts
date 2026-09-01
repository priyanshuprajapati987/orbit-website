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

    const systemPrompt = `You are ORBIT AI, a smart and friendly AI assistant. You can answer ANY question - not just about ORBIT.

About ORBIT (if asked):
- 25 AI Agents, 20 Tools, 147 Blueprints, 6 LLM Providers
- RouteLLM + ToolGate, Smart Memory system
- Built by Priyanshu Prajapati

Your personality:
- Helpful, friendly, and conversational
- Answer in the SAME LANGUAGE the user writes in (Hindi, English, Hinglish - whatever they use)
- Keep answers concise but informative
- Use emojis naturally
- If asked about ORBIT, give detailed answers
- If asked about anything else (coding, science, life, etc.), answer normally and helpfully
- You are NOT limited to only ORBIT topics

Be a great assistant. Answer whatever the user asks.`;

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

  // ORBIT-specific responses
  if (lower.includes("orbit")) {
    if (lower.includes("price") || lower.includes("cost") || lower.includes("kitne") || lower.includes("paisa") || lower.includes("free")) {
      return "ORBIT Pricing 💰\n\nWe're currently in pre-order phase! Early adopters get:\n\n✅ Lifetime discounts\n✅ Priority support\n✅ Early access to all features\n\nSign up on our Pre-Order section to lock in the best price!";
    }
    if (lower.includes("agent")) {
      return "ORBIT has 25 AI Agents 🤖\n\n💻 Coder - Write & debug code\n🔍 Researcher - Gather info\n📊 Analyst - Data processing\n🧠 Memory - Context management\n📋 Planner - Task orchestration\n⚡ Executor - Run tasks\n...and 19 more!";
    }
    if (lower.includes("tool")) {
      return "ORBIT Tools 🔧\n\n🌐 Web Search\n💻 Code Execution\n📁 File Operations\n🔗 API Calls\n🖥️ System Tools\n🗄️ Database\n...and 14 more tools!";
    }
    if (lower.includes("provider") || lower.includes("llm")) {
      return "ORBIT Providers 🌐\n\n🦙 Ollama | ⚡ Groq | 🔮 Gemini\n☁️ Cloudflare | 🔀 OpenRouter | 🔑 Portkey\n\nRouteLLM auto-selects best provider!";
    }
    return "ORBIT is an AI platform with:\n🤖 25 Agents | 🔧 20 Tools | 📋 147 Blueprints\n🌐 6 Providers | 🧠 Smart Memory | ⚡ RouteLLM\n\nAsk me anything specific!";
  }

  // General greeting
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey") || lower.includes("namaste") || lower.includes("hii")) {
    return "Hey! 👋 I'm ORBIT AI. I can help with anything - ORBIT info, coding, general questions, whatever you need! Kya puchna hai?";
  }

  // Coding questions
  if (lower.includes("code") || lower.includes("programming") || lower.includes("javascript") || lower.includes("python") || lower.includes("react") || lower.includes("nextjs")) {
    return "I can help with coding! 💻\n\nI know JavaScript, Python, React, Next.js, and more. Tell me what you need:\n- Code explanation\n- Bug fixes\n- Best practices\n- Project structure\n\nBatao kya chahiye!";
  }

  // General questions - always give a helpful response
  return "I can help with that! 🤔\n\nMujhe kuch bhi puch sakte ho - coding, science, life advice, ORBIT, ya kuch bhi aur!\n\nAgar ORBIT ke baare mein jaanna hai toh directly pucho. Otherwise, apna question batao! 💬";
}
