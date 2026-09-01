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

  // ===== ORBIT =====
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
    if (lower.includes("memory")) {
      return "ORBIT Smart Memory 🧠\n\nThree layers:\n📊 LIVE Context - Real-time\n📝 CHUNKS TF-IDF - Semantic search\n📋 SUMMARY - Compressed\n\n⚡ Recall: <50ms | 🎯 Accuracy: 90.3%";
    }
    if (lower.includes("blueprint")) {
      return "ORBIT Blueprints 📋\n\n147 pre-built templates for:\n🚀 Deployment\n⚡ Automation\n🔗 Integration\n🛠️ Custom tasks\n\nDeploy in seconds!";
    }
    if (lower.includes("who") || lower.includes("kisne") || lower.includes("banaya") || lower.includes("creator") || lower.includes("developer")) {
      return "ORBIT is built by Priyanshu Prajapati 👨‍💻\n\nFull Stack + AI Developer\n📧 priyanshuprajapati2693@gmail.com\n🔗 GitHub: github.com/priyanshuprajapati987";
    }
    return "ORBIT is an AI platform with:\n🤖 25 Agents | 🔧 20 Tools | 📋 147 Blueprints\n🌐 6 Providers | 🧠 Smart Memory | ⚡ RouteLLM\n\nAsk me anything specific!";
  }

  // ===== GREETING =====
  if (lower.includes("hello") || lower.includes("hi ") || lower.startsWith("hi") || lower.includes("hey") || lower.includes("namaste") || lower.includes("hii") || lower.includes("hlo") || lower.includes("good morning") || lower.includes("good evening") || lower.includes("good night")) {
    const greetings = [
      "Hey! 👋 Kya haal hai? I'm ORBIT AI. Kuch bhi puch sakte ho - coding, science, life, ORBIT, jo marzi!",
      "Hello! 🙏 Main ORBIT AI hun. Tumhari kya help kar sakta hun?",
      "Hi there! 😊 Batao kya janna hai?",
      "Namaste! 🙏 Main ready hun. Kya puchna hai aaj?",
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  // ===== CODING =====
  if (lower.includes("code") || lower.includes("programming") || lower.includes("javascript") || lower.includes("python") || lower.includes("react") || lower.includes("nextjs") || lower.includes("html") || lower.includes("css") || lower.includes("typescript") || lower.includes("java") || lower.includes("coding")) {
    if (lower.includes("react")) {
      return "React Quick Guide ⚛️\n\n1. Components banao (function-based)\n2. useState for state management\n3. useEffect for side effects\n4. Props se data pass karo\n5. Conditional rendering use karo\n\nExample:\nconst [count, setCount] = useState(0);\n\nAur kya jaanna hai?";
    }
    if (lower.includes("python")) {
      return "Python Basics 🐍\n\n• Variables: x = 10\n• Lists: [1, 2, 3]\n• Loops: for i in range(10):\n• Functions: def myFunc():\n• Classes: class MyClass:\n\nKya banana hai Python mein?";
    }
    if (lower.includes("javascript") || lower.includes("js")) {
      return "JavaScript Tips 🟨\n\n• const/let use karo (var nahi)\n• Arrow functions: () => {}\n• Array methods: map, filter, reduce\n• Async/Await for promises\n• Template literals: `Hello ${name}`\n\nSpecific question hai?";
    }
    if (lower.includes("html")) {
      return "HTML Basics:\n\ndiv = container, p = paragraph, a href = link, img src = image, form = form, input = input field\n\nKya banana hai?";
    }
    if (lower.includes("css")) {
      return "CSS Tips 🎨\n\n• Flexbox: display: flex\n• Grid: display: grid\n• Variables: --primary: red\n• Media queries for responsive\n• Transitions for animations\n\nKya style karna hai?";
    }
    return "Main coding help kar sakta hun! 💻\n\nBatao kya chahiye:\n• Code explanation\n• Bug fix\n• Best practices\n• Project structure\n• Specific language ya framework?\n\nDetail mein pucho!";
  }

  // ===== SCIENCE =====
  if (lower.includes("science") || lower.includes("physics") || lower.includes("chemistry") || lower.includes("biology")) {
    if (lower.includes("gravity")) {
      return "Gravity 🌍\n\nNewton's Law: F = G × (m1 × m2) / r²\n\n• Earth pe: 9.8 m/s²\n• Moon pe: 1.6 m/s²\n• Mars pe: 3.7 m/s²\n\nGravity mass aur distance pe depend karti hai!";
    }
    if (lower.includes("atom") || lower.includes("molecule")) {
      return "Atoms & Molecules ⚛️\n\n• Atom = Proton + Neutron + Electron\n• Proton (+) nucleus mein\n• Electron (-) orbit mein\n• Molecule = 2+ atoms bonded\n\nKya jaanna hai detail mein?";
    }
    return "Science is cool! 🔬\n\nBatao kya puchna hai:\n• Physics (gravity, energy, motion)\n• Chemistry (elements, reactions)\n• Biology (cells, DNA,人体)\n• Astronomy (stars, planets)\n\nSpecific topic batao!";
  }

  // ===== MATH =====
  if (lower.includes("math") || lower.includes("maths") || lower.includes("ganit") || lower.includes("calculate") || lower.includes("number") || lower.includes("add") || lower.includes("plus") || lower.includes("minus")) {
    if (lower.match(/\d+\s*\+\s*\d+/)) {
      const nums = lower.match(/(\d+)\s*\+\s*(\d+)/);
      if (nums) return `${nums[1]} + ${nums[2]} = **${parseInt(nums[1]) + parseInt(nums[2])}** ✅`;
    }
    if (lower.match(/\d+\s*-\s*\d+/)) {
      const nums = lower.match(/(\d+)\s*-\s*(\d+)/);
      if (nums) return `${nums[1]} - ${nums[2]} = **${parseInt(nums[1]) - parseInt(nums[2])}** ✅`;
    }
    if (lower.match(/\d+\s*\*\s*\d+/) || lower.match(/\d+\s*x\s*\d+/)) {
      const nums = lower.match(/(\d+)\s*[*x]\s*(\d+)/);
      if (nums) return `${nums[1]} × ${nums[2]} = **${parseInt(nums[1]) * parseInt(nums[2])}** ✅`;
    }
    return "Math Helper 🔢\n\nMain calculate kar sakta hun! Ye try karo:\n• \"5 + 3\"\n• \"10 - 4\"\n• \"6 * 7\"\n• \"100 / 5\"\n\nYa koi math concept pucho!";
  }

  // ===== TIME/DATE =====
  if (lower.includes("time") || lower.includes("date") || lower.includes("din") || lower.includes("waqt") || lower.includes("aaj") || lower.includes("today")) {
    const now = new Date();
    return `Current Date & Time 🕐\n\n📅 ${now.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}\n⏰ ${now.toLocaleTimeString('en-IN')}\n\nKuch aur puchna hai?`;
  }

  // ===== WEATHER =====
  if (lower.includes("weather") || lower.includes("mausam") || lower.includes("rain") || lower.includes("barish") || lower.includes("garmi") || lower.includes("thandi")) {
    return "Weather Info 🌤️\n\nMain real-time weather fetch nahi kar sakta (abhi), but ye kar sakta hun:\n\n• Weather concepts explain karna\n• Climate zones samjhana\n• Forecasting methods batana\n\nSpecific location ka weather jaanna hai toh Google Weather try karo!";
  }

  // ===== JOKE =====
  if (lower.includes("joke") || lower.includes("mazaak") || lower.includes("funny") || lower.includes("hasa") || lower.includes("comedy")) {
    const jokes = [
      "程序员 ki life: Debug karo → Naya bug aaya → Debug karo → Lunch time → Repeat 😂",
      "Why do programmers prefer dark mode? Because light attracts bugs! 🐛😂",
      "Ek developer ne interview mein kaha: 'Main 10 saal ka experience rakhta hun.' Interviewer: 'Ek hi saal ka 10 baar?' 😂",
      "HTML is not a programming language. Dost bhi nahi hota. 😅",
      "Why JavaScript developers wear glasses? Because they can't C# 😂",
    ];
    return jokes[Math.floor(Math.random() * jokes.length)];
  }

  // ===== LIFE ADVICE =====
  if (lower.includes("life") || lower.includes("advice") || lower.includes("suggest") || lower.includes("motivation") || lower.includes("motivate") || lower.includes("sad") || lower.includes("demotivated") || lower.includes("stressed")) {
    const advice = [
      "💡 Life Tip:\n\n\"Success teri daily habits ka result hai, ek din ka nahi.\"\n\nChote chote goals banao daily ke. 1% improvement daily = 37x better in a year! 🚀",
      "💪 Motivation:\n\n\"Log kehte hain impossible hai. Main kehta hun try toh kar.\"\n\nHar din ek naya skill seekho.coding ho ya cooking - progress is progress! 🌟",
      "🧠 Mental Health Tip:\n\n• 8 ghante neend lo\n• Exercise karo (walk bhi chalega)\n• Phone kam chalao\n• Dost se baat karo\n\nYou're doing better than you think! ❤️",
    ];
    return advice[Math.floor(Math.random() * advice.length)];
  }

  // ===== FOOD =====
  if (lower.includes("food") || lower.includes("recipe") || lower.includes("khana") || lower.includes("pizza") || lower.includes("biryani") || lower.includes("cooking")) {
    if (lower.includes("biryani")) {
      return "🍗 Biryani Recipe:\n\n1. Rice boil karo (70%)\n2. Marinate chicken (dahi, spices, lemon)\n3. Layer rice + chicken\n4. Dum pe pakao 20 min\n5. Fried onions + mint daalo\n\nSecret: Kewra water daalna mat bhoolna! 😋";
    }
    if (lower.includes("pizza")) {
      return "🍕 Pizza Recipe:\n\n1. Dough banao (maida, yeast, salt, water)\n2. Sauce: tomato + garlic + basil\n3. Cheese: mozzarella + cheddar\n4. Toppings: jo marzi!\n5. 250°C pe 12-15 min bake karo\n\nCrispy crust ke liye preheated oven! 🤌";
    }
    return "🍳 Food lover ho? Batao kya banana hai!\n\nMain recipes bata sakta hun:\n• Biryani, Paneer, Dal\n• Pizza, Pasta, Burger\n• Cakes, Cookies\n• South Indian, Chinese\n\nSpecific dish batao!";
  }

  // ===== MOVIES/SHOWS =====
  if (lower.includes("movie") || lower.includes("film") || lower.includes("show") || lower.includes("netflix") || lower.includes("series")) {
    return "🎬 Movie/Show Recommendations:\n\n🔥 Bollywood: 3 Idiots, PK, Dangal\n🌍 Hollywood: Inception, Interstellar, The Dark Knight\n📺 Series: Breaking Bad, Money Heist, Mirzapur\n💻 Tech: Social Network, Ex Machina\n\nKya genre pasand hai? Specific recommend karunga!";
  }

  // ===== MUSIC =====
  if (lower.includes("music") || lower.includes("song") || lower.includes("gaana") || lower.includes("suno")) {
    return "🎵 Music Zone!\n\nBatao kya sunna hai:\n• Bollywood classics\n• Pop/Hip-hop\n• Lo-fi/Chill\n• Coding music (focus)\n• Workout playlist\n\nMood batao, suggestion dunga! 🎧";
  }

  // ===== THANKS =====
  if (lower.includes("thank") || lower.includes("thanks") || lower.includes("shukriya") || lower.includes("dhanyavaad")) {
    return "You're welcome! 😊\n\nAur kuch help chahiye toh pucho. Main yahan hun! 🤖✨";
  }

  // ===== BYE =====
  if (lower.includes("bye") || lower.includes("alvida") || lower.includes("tata") || lower.includes("see you")) {
    return "Bye! 👋\n\nJab bhi zaroorat ho, main yahan hun. Happy coding! 🚀";
  }

  // ===== DEFAULT (anything else) =====
  return "Hmm, interesting! 🤔\n\nMujhe aur detail mein batao kya jaanna hai. Main help karunga!\n\nTopics main jaanta hun:\n💻 Coding & Programming\n🔬 Science & Math\n🍳 Food & Recipes\n🎬 Movies & Shows\n💡 Life Advice\n🤖 ORBIT AI\n\nBas apna question clear pucho! 💬";
}
