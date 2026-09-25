"""
Orbit LinkedIn Poster - Simple Version
Post ko clipboard pe copy karta hai, tum paste karna
"""

import json
import os
import subprocess
import sys
from datetime import datetime

def load_posts():
    """Load posts from posts.json"""
    posts_file = os.path.join(os.path.dirname(__file__), "posts.json")
    with open(posts_file, "r", encoding="utf-8") as f:
        return json.load(f)

def copy_to_clipboard(text):
    """Copy text to clipboard on Windows"""
    process = subprocess.Popen(
        ['clip'],
        stdin=subprocess.PIPE,
        shell=True
    )
    process.communicate(input=text.encode('utf-16le'))

def post_now(post_number=None):
    """Post immediately - copy to clipboard"""
    posts = load_posts()
    
    if post_number:
        # Post specific number
        for post in posts:
            if post["id"] == post_number:
                print(f"\n=== {post['title']} ===")
                print(f"Type: {post['type']}")
                print(f"\nPost content copied to clipboard!")
                print("Open LinkedIn and press Ctrl+V to paste\n")
                copy_to_clipboard(post["content"])
                return
        print(f"Post #{post_number} not found!")
    else:
        # Post all today's posts
        today = datetime.now().strftime("%Y-%m-%d")
        today_posts = [p for p in posts if p.get("scheduled_date") == today and not p.get("posted")]
        
        if not today_posts:
            print("No posts scheduled for today!")
            return
        
        print(f"\n=== {len(today_posts)} posts for today ===\n")
        
        for i, post in enumerate(today_posts, 1):
            print(f"{i}. {post['title']} ({post['scheduled_time']})")
        
        print("\nEnter post number to copy, or 'q' to quit:")
        
        while True:
            choice = input("> ").strip().lower()
            
            if choice == 'q':
                break
            
            try:
                num = int(choice)
                for post in today_posts:
                    if post["id"] == num:
                        print(f"\n=== {post['title']} ===")
                        print("Post content copied to clipboard!")
                        print("Open LinkedIn and press Ctrl+V to paste\n")
                        copy_to_clipboard(post["content"])
                        break
                else:
                    print("Post not found! Try again.")
            except ValueError:
                print("Enter a number or 'q' to quit")

def list_posts():
    """List all posts"""
    posts = load_posts()
    
    print("\n=== ALL LINKEDIN POSTS ===\n")
    print(f"{'ID':<4} {'Date':<12} {'Time':<6} {'Type':<15} {'Title'}")
    print("-" * 60)
    
    for post in posts:
        status = "[POSTED]" if post.get("posted") else "[PENDING]"
        print(f"{post['id']:<4} {post['scheduled_date']:<12} {post['scheduled_time']:<6} {post['type']:<15} {post['title']} {status}")

def mark_posted(post_number):
    """Mark a post as posted"""
    posts = load_posts()
    
    for post in posts:
        if post["id"] == post_number:
            post["posted"] = True
            post["posted_at"] = datetime.now().isoformat()
            
            posts_file = os.path.join(os.path.dirname(__file__), "posts.json")
            with open(posts_file, "w", encoding="utf-8") as f:
                json.dump(posts, f, indent=2, ensure_ascii=False)
            
            print(f"Post #{post_number} marked as posted!")
            return
    
    print(f"Post #{post_number} not found!")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        cmd = sys.argv[1]
        
        if cmd == "list":
            list_posts()
        elif cmd == "posted" and len(sys.argv) > 2:
            mark_posted(int(sys.argv[2]))
        else:
            post_now(int(cmd))
    else:
        print("\n=== Orbit LinkedIn Poster ===\n")
        print("Commands:")
        print("  python poster.py          - Show today's posts")
        print("  python poster.py 1        - Copy post #1 to clipboard")
        print("  python poster.py list     - List all posts")
        print("  python poster.py posted 1 - Mark post #1 as posted")
        print("\n")
        post_now()
