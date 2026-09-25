# 🪐 ORBIT — Your Personal AI Companion

> 25 AI Agents. 20 Tools. 147 Blueprints. 6 LLM Providers. Like JARVIS, but it actually works.

🌐 **Live:** https://comfy-dasik-e7cdcb.netlify.app

Official landing page + documentation site for **ORBIT AI** — built for production, deployed on Netlify.

---

## ✨ Features

| Section | Description |
|---------|-------------|
| 🏠 Hero | Animated landing with particles, orbital rings & parallax |
| ⚡ Features | 6 feature cards with real ORBIT stats |
| 🛠️ TechStack | Tech categories + audit stats |
| 💻 Demo | Interactive terminal with "Run Demo" |
| ⭐ Testimonials | Developer reviews with star ratings |
| ❓ FAQ | 8-item accordion |
| 🎯 CTA Banner | Early-access conversion banner |
| 🛒 Pre-Order | Netlify Forms native submission → `/preorder-success` |
| 📧 Contact | Contact form + social links |
| 🤖 AI Chat | Floating widget, answers anything (OpenRouter + smart fallback) |
| 📚 Docs | 5 documentation pages (`/docs`, `/getting-started`, `/features`, `/api`, `/architecture`) |

### ORBIT Stats (Aug 2026 Audit)

- 🤖 **25** specialized agents
- 🔧 **20** tools (RouteLLM + ToolGate, 76 actions)
- 📋 **147** blueprints
- 🧩 **99** components
- ✅ **1,805** tests
- 🌐 **6** providers (Ollama, Groq, Gemini, Cloudflare, OpenRouter, Portkey)
- 🧠 Smart Memory: LIVE + CHUNKS TF-IDF + SUMMARY
- 🎯 **90.3%** ground-truth accuracy

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16.3.2 (App Router, Turbopack)
- **UI:** React 19, Tailwind CSS 4, Framer Motion 13
- **Icons:** Lucide React (+ custom SVG brand icons)
- **Markdown:** react-markdown, react-syntax-highlighter
- **Forms:** Netlify Forms (native HTML submission)
- **AI:** OpenRouter API (`meta-llama/llama-3.1-8b-instruct:free`) with local smart-fallback
- **Deploy:** Netlify (`@netlify/plugin-nextjs` v5, Node.js 20)
- **Language:** TypeScript 5

---

## 🚀 Getting Started

### Prerequisites

- Node.js **20+** (required — Netlify build uses Node 20)
- npm

### Install & Run

```bash
# Clone
git clone https://github.com/priyanshuprajapati987/orbit-website.git
cd orbit-website

# Install
npm install

# Dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other Commands

```bash
npm run build   # Production build
npm start       # Serve production build
npm run lint    # ESLint
```

---

## 🔑 Environment Variables

Create a `.env.local` file in the project root:

```bash
# Optional — enables full AI chat via OpenRouter (free tier).
# Without it, the chat widget uses built-in smart fallback responses.
OPENROUTER_API_KEY=your_key_here
```

- Get a free key: https://openrouter.ai/keys
- For Netlify deploys, add the same variable in **Site settings → Environment variables**.

`.env.local` is gitignored and never committed.

---

## 📁 Project Structure

```
orbit-website/
├── public/                     # Static assets + Netlify Forms detection files
│   ├── contact.html            # Static copy for Netlify Forms (contact)
│   ├── preorder.html           # Static copy for Netlify Forms (pre-order)
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── api/chat/route.ts   # AI chat endpoint (OpenRouter + fallback)
│   │   ├── docs/               # Documentation pages (5 routes)
│   │   ├── preorder-success/   # Pre-order confirmation page
│   │   ├── layout.tsx          # Root layout + SEO metadata + JSON-LD
│   │   ├── page.tsx            # Landing page (9 sections)
│   │   └── globals.css         # Theme + 500+ lines of custom effects
│   ├── components/
│   │   ├── ai/AIChat.tsx       # Floating AI chat widget
│   │   ├── layout/             # Navbar, Footer
│   │   ├── sections/           # Hero, Features, TechStack, Demo, ...
│   │   └── ui/                 # Button, Card, Badge, Icons
│   └── lib/
│       ├── constants.ts        # Site config, features, stats
│       └── utils.ts            # cn() utility
├── netlify.toml                # Build config, headers, redirects
├── next.config.ts              # Standalone output, package optimization
└── package.json
```

---

## 🌍 Deployment (Netlify)

The site auto-deploys from the `master` branch:

1. Push to GitHub → Netlify builds automatically
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Plugin: `@netlify/plugin-nextjs` v5

> ⚠️ **Netlify Forms v5 note:** form detection needs static HTML copies — that's why
> `public/contact.html` and `public/preorder.html` exist. Don't delete them.

---

## 🔍 SEO

- Full meta tags (title template, description, keywords)
- Open Graph + Twitter cards
- JSON-LD structured data (`SoftwareApplication`)
- `robots.txt` + `sitemap.xml`

---

## 👨‍💻 Author

**Priyanshu Prajapati** — Full Stack + AI Developer

- 📧 priyanshuprajapati2693@gmail.com
- 🐙 GitHub: [@priyanshuprajapati987](https://github.com/priyanshuprajapati987)
- 💼 LinkedIn: [priyanshu-prajapati-546b66360](https://www.linkedin.com/in/priyanshu-prajapati-546b66360)
- 🧩 LeetCode: [PriyanshuPrajapati2609](https://leetcode.com/u/PriyanshuPrajapati2609)
- 🐦 X: [@priyanshu260923](https://x.com/priyanshu260923)

---

## 📄 License

MIT — free to use, modify and distribute.
