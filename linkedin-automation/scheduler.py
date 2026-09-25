"""
Orbit LinkedIn Scheduler
Auto-post on schedule
"""

import os
import json
import time
import schedule
from datetime import datetime, timedelta
from poster import LinkedInPoster, load_posts

class LinkedInScheduler:
    def __init__(self):
        self.poster = LinkedInPoster()
        self.posts_file = os.path.join(os.path.dirname(__file__), "posts.json")
    
    def load_posts(self):
        """Load posts from JSON file"""
        with open(self.posts_file, "r", encoding="utf-8") as f:
            return json.load(f)
    
    def save_posts(self, posts):
        """Save posts to JSON file"""
        with open(self.posts_file, "w", encoding="utf-8") as f:
            json.dump(posts, f, indent=2, ensure_ascii=False)
    
    def get_today_posts(self):
        """Get posts scheduled for today"""
        posts = self.load_posts()
        today = datetime.now().strftime("%Y-%m-%d")
        return [p for p in posts if p.get("scheduled_date") == today]
    
    def post_scheduled(self):
        """Post all scheduled posts for now"""
        today_posts = self.get_today_posts()
        
        if not today_posts:
            print(f"[{datetime.now()}] No posts scheduled for now")
            return
        
        for post in today_posts:
            current_time = datetime.now().strftime("%H:%M")
            if post.get("scheduled_time") == current_time:
                print(f"[{datetime.now()}] Posting: {post['title']}...")
                result = self.poster.post_text(post["content"])
                
                if result["success"]:
                    # Mark as posted
                    post["posted"] = True
                    post["posted_at"] = datetime.now().isoformat()
                    print(f"[{datetime.now()}] ✅ Posted successfully")
                else:
                    print(f"[{datetime.now()}] ❌ Failed to post")
        
        # Save updated status
        self.save_posts(self.load_posts())
    
    def run_scheduler(self):
        """Run the scheduler"""
        print(f"[{datetime.now()}] 🚀 LinkedIn Scheduler started!")
        print(f"[{datetime.now()}] Checking for posts every minute...")
        
        # Schedule posts at specific times
        schedule.every().day.at("08:00").do(self.post_scheduled)
        schedule.every().day.at("12:00").do(self.post_scheduled)
        schedule.every().day.at("17:00").do(self.post_scheduled)
        
        # Also check every minute for missed posts
        schedule.every(1).minutes.do(self.post_scheduled)
        
        while True:
            schedule.run_pending()
            time.sleep(60)


def create_posts_file():
    """Create initial posts.json with all posts"""
    posts = [
        {
            "id": 1,
            "title": "Launch Announcement",
            "type": "educational",
            "scheduled_date": "2026-09-20",
            "scheduled_time": "08:00",
            "posted": False,
            "content": """I built something I wish existed 2 years ago.

While everyone was fighting over which AI tool is "the best," I realized the real problem:

You don't need another AI tool.

You need ONE system that actually works together.

That's why I built Orbit.

Here's what it does:

→ 25 AI Agents that handle different tasks
→ 20 Built-in tools (no more tab switching)
→ 147 Blueprints for common workflows
→ 6 LLM providers (OpenAI, Anthropic, Google, Meta, Mistral, DeepSeek)
→ One clean interface

The result?

I went from juggling 8 different AI tools to just ONE.

Productivity went up. Context switching went down.

The future isn't "which AI is better."

The future is "which system works best together."

That's Orbit.

What's your biggest AI workflow frustration? Drop it below.

#AI #Productivity #TechStartup #ArtificialIntelligence #BuildInPublic"""
        },
        {
            "id": 2,
            "title": "Story Post",
            "type": "personal",
            "scheduled_date": "2026-09-20",
            "scheduled_time": "12:00",
            "posted": False,
            "content": """Last month, I spent 3 hours just switching between AI tools.

ChatGPT for writing.
Claude for coding.
Midjourney for images.
Notion for notes.

I was productive... but also exhausted.

Then I asked myself:

"What if ONE system could do all of this?"

Not another tool. Not another subscription.

One system that actually talks to itself.

That's when Orbit was born.

25 AI agents. 20 tools. 147 blueprints.

All working together. All in one place.

My workflow went from this:

Tool A → Copy → Tool B → Paste → Tool C → Export

To this:

One command → Done.

The best part?

I can use ANY AI model I want. OpenAI, Claude, Gemini, Llama, Mistral, DeepSeek.

No more "which AI should I use?"

Just "what do I want to accomplish?"

That's the power of having a system, not just tools.

What's your AI workflow like? I'd love to hear how you're using AI today.

#AI #Productivity #Tech #Startup #Innovation"""
        },
        {
            "id": 3,
            "title": "List Post",
            "type": "value",
            "scheduled_date": "2026-09-20",
            "scheduled_time": "17:00",
            "posted": False,
            "content": """5 signs you need a better AI workflow:

1. You have 5+ browser tabs open for different AI tools
2. You're copying context between tools manually
3. You forget which AI is good at what
4. Your "productivity system" is actually a productivity tax
5. You spend more time managing tools than doing actual work

If you checked 3 or more, you're not alone.

The average knowledge worker uses 4-6 AI tools daily.

That's 4-6 logins. 4-6 interfaces. 4-6 contexts.

What if you could collapse that into ONE?

One system. One interface. Zero context switching.

That's what I'm building with Orbit.

25 agents. 20 tools. 147 blueprints.

All talking to each other. All working for you.

Stop managing tools. Start doing work.

What's the most annoying part of your AI workflow?

#AI #ProductivityHack #TechStartup #BuildInPublic #Innovation"""
        },
        {
            "id": 4,
            "title": "Contrarian Post",
            "type": "engagement",
            "scheduled_date": "2026-09-27",
            "scheduled_time": "08:00",
            "posted": False,
            "content": """Unpopular opinion:

Most AI tools are making you LESS productive.

Here's why:

→ They create MORE tabs, not fewer
→ They don't talk to each other
→ You spend time learning new interfaces
→ Context gets lost between tools
→ "AI-powered" often means "AI-distracting"

The solution isn't another AI tool.

The solution is ONE system that does everything.

25 agents. 20 tools. 147 blueprints.

All in one place. All working together.

That's what I'm building with Orbit.

No more tab switching.
No more context loss.
No more tool fatigue.

Just one system that actually works.

Am I wrong? Let me know in the comments.

#AI #Productivity #Tech #Startup #HotTake"""
        },
        {
            "id": 5,
            "title": "Behind the Scenes",
            "type": "build_in_public",
            "scheduled_date": "2026-09-27",
            "scheduled_time": "12:00",
            "posted": False,
            "content": """Building in public update:

This week I added 3 new features to Orbit:

1. Smart Context Memory
   - Agents now remember your preferences
   - No more repeating yourself

2. Multi-Model Fallback
   - If one AI is down, another takes over
   - 99.9% uptime guaranteed

3. Blueprint Sharing
   - Share your workflows with the community
   - 147 blueprints and growing

What's next?

→ Mobile app (Q2)
→ Voice commands (Q3)
→ Team collaboration (Q4)

Building Orbit has been a wild ride.

From "I wish this existed" to "I'm building this."

The feedback has been incredible.

If you want early access, drop a comment.

#BuildInPublic #Startup #AI #Product #Tech"""
        },
        {
            "id": 6,
            "title": "Question Post",
            "type": "engagement",
            "scheduled_date": "2026-09-27",
            "scheduled_time": "17:00",
            "posted": False,
            "content": """Quick question for my network:

What's your #1 AI tool right now?

I'm curious because I'm building something different.

Orbit isn't another AI tool.

It's a system that connects ALL your AI tools.

25 agents. 20 tools. 147 blueprints.

All talking to each other. All working together.

So instead of:
- Tool A for writing
- Tool B for coding
- Tool C for research
- Tool D for images

You get ONE system that does everything.

But I want to know:

What tools are you currently using?
What's working? What's not?
What do you wish existed?

Drop your answers below. I read every comment.

#AI #Productivity #Tech #Community #AskLinkedIn"""
        },
        {
            "id": 7,
            "title": "Testimonial Post",
            "type": "social_proof",
            "scheduled_date": "2026-10-04",
            "scheduled_time": "08:00",
            "posted": False,
            "content": """I was skeptical at first.

Another AI tool? Really?

But Orbit isn't just another tool.

It's a system that finally made sense of my AI workflow.

25 agents. 20 tools. All connected.

I went from spending 2 hours/day on AI tool management to 10 minutes.

That's 1.8 hours of my life back. Every single day.

This is why I'm building Orbit.

Not to add another tool to your stack.

But to REPLACE your entire stack.

One system. Zero context switching.

Want to try it? Link in comments.

#AI #Productivity #Testimonial #Tech #Startup"""
        },
        {
            "id": 8,
            "title": "Data/Stats Post",
            "type": "educational",
            "scheduled_date": "2026-10-04",
            "scheduled_time": "12:00",
            "posted": False,
            "content": """I tracked my AI usage for 30 days.

Here's what I found:

Average daily AI tool switches: 47
Average time spent copying context: 23 minutes
Average number of AI tools open: 6
Average time lost to context switching: 45 minutes

Total time wasted per day: 68 minutes
Total time wasted per month: 34 hours
Total time wasted per year: 414 hours

That's 17 ENTIRE DAYS lost to tool management.

That's when I decided to build Orbit.

One system. 25 agents. 20 tools.

Zero context switching.

What if you could get those 414 hours back?

What would you do with an extra 17 days?

#AI #Productivity #Data #Tech #Startup"""
        },
        {
            "id": 9,
            "title": "Thread-style Post",
            "type": "educational",
            "scheduled_date": "2026-10-04",
            "scheduled_time": "17:00",
            "posted": False,
            "content": """Let me break down the AI landscape in 2026:

1/ The Problem
Everyone has AI tools. Nobody has a system.

2/ The Result
Tool fatigue. Context switching. Lost productivity.

3/ The Solution
One system that connects everything.

4/ What I'm Building
Orbit: 25 agents, 20 tools, 147 blueprints.

5/ How It Works
Agents talk to each other. Tools work together.

6/ The Benefit
Zero context switching. Maximum productivity.

7/ The Future
AI shouldn't be a tool. It should be a system.

8/ Join the Journey
Building in public. Early access available.

That's the vision. That's Orbit.

#AI #Productivity #Tech #Startup #BuildInPublic"""
        },
        {
            "id": 10,
            "title": "CTA Post",
            "type": "conversion",
            "scheduled_date": "2026-10-11",
            "scheduled_time": "08:00",
            "posted": False,
            "content": """If you're tired of:

→ Juggling 5+ AI tools
→ Losing context between sessions
→ Spending more time managing tools than doing work
→ Paying for subscriptions you barely use

I'm building something for you.

Orbit:
- 25 AI agents
- 20 built-in tools
- 147 workflow blueprints
- 6 LLM providers
- One clean interface

No more tab switching.
No more context loss.
No more tool fatigue.

Just one system that actually works.

Early access is limited.

Comment "ORBIT" and I'll send you the details.

#AI #Productivity #Tech #Startup #EarlyAccess"""
        }
    ]
    
    posts_file = os.path.join(os.path.dirname(__file__), "posts.json")
    with open(posts_file, "w", encoding="utf-8") as f:
        json.dump(posts, f, indent=2, ensure_ascii=False)
    
    print(f"✅ Created {len(posts)} posts in posts.json")


if __name__ == "__main__":
    import sys
    
    if len(sys.argv) > 1 and sys.argv[1] == "init":
        create_posts_file()
    else:
        scheduler = LinkedInScheduler()
        scheduler.run_scheduler()
