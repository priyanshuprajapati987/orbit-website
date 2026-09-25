"""
Orbit LinkedIn Time Reminder
Shows when to post
"""

import os
import json
from datetime import datetime

def get_schedule():
    """Get posting schedule"""
    return {
        "posts": [
            {"time": "08:00", "cmd": "python poster.py 1", "title": "Launch Announcement"},
            {"time": "12:00", "cmd": "python poster.py 2", "title": "Story Post"},
            {"time": "17:00", "cmd": "python poster.py 3", "title": "List Post"}
        ]
    }

def show_reminder():
    """Show current reminder"""
    now = datetime.now()
    current_time = now.strftime("%H:%M")
    schedule = get_schedule()
    
    print("\n=== ORBIT LINKEDIN SCHEDULE ===")
    print(f"Current Time: {current_time}")
    print(f"Date: {now.strftime('%Y-%m-%d')}\n")
    
    for post in schedule["posts"]:
        status = "[NOW]" if post["time"] == current_time else "[LATER]"
        print(f"{post['time']} - {post['title']} {status}")
    
    print("\nCommands:")
    print("  python reminder.py      - Show schedule")
    print("  python reminder.py 8    - Post at 8:00 AM")
    print("  python reminder.py 12   - Post at 12:00 PM")
    print("  python reminder.py 17   - Post at 5:00 PM")
    print()

if __name__ == "__main__":
    import sys
    
    if len(sys.argv) > 1:
        hour = sys.argv[1]
        post_map = {"8": 1, "12": 2, "17": 3}
        
        if hour in post_map:
            post_num = post_map[hour]
            print(f"\nTime to post #{post_num}!")
            print("Run: python poster.py", post_num)
        else:
            print("Invalid time! Use 8, 12, or 17")
    else:
        show_reminder()
