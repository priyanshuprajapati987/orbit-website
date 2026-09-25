# Orbit LinkedIn Auto-Poster

Automatically post LinkedIn content for Orbit.

## 🚀 Quick Start

### 1. Setup LinkedIn API

```bash
cd linkedin-automation
python setup.py
```

This will guide you through:
- Creating a LinkedIn App
- Getting API credentials
- Configuring your account

### 2. Initialize Posts

```bash
python scheduler.py init
```

This creates `posts.json` with all 10 pre-written posts.

### 3. Run Scheduler

```bash
python scheduler.py
```

This will:
- Check for scheduled posts every minute
- Auto-post at 8:00 AM, 12:00 PM, and 5:00 PM
- Mark posts as posted

### 4. Or Post Manually

```bash
# Post all today's posts
python poster.py

# Post specific post by ID
python poster.py 1
```

## 📁 File Structure

```
linkedin-automation/
├── poster.py          # Main posting script
├── scheduler.py       # Auto-scheduler
├── setup.py          # LinkedIn API setup
├── posts.json        # All posts (auto-generated)
├── .env              # Your API credentials
├── .env.example      # Example credentials
└── README.md         # This file
```

## 📅 Posting Schedule

| Day | Time | Post | Type |
|-----|------|------|------|
| Day 1 | 8:00 AM | Launch Announcement | Educational |
| Day 1 | 12:00 PM | Story Post | Personal |
| Day 1 | 5:00 PM | List Post | Value |
| Day 2 | 8:00 AM | Contrarian Post | Engagement |
| Day 2 | 12:00 PM | Behind the Scenes | Build in Public |
| Day 2 | 5:00 PM | Question Post | Engagement |
| Day 3 | 8:00 AM | Testimonial | Social Proof |
| Day 3 | 12:00 PM | Data/Stats | Educational |
| Day 3 | 5:00 PM | Thread-style | Educational |
| Day 4 | 8:00 AM | CTA Post | Conversion |

## ⚙️ Configuration

### Environment Variables (.env)

```env
LINKEDIN_ACCESS_TOKEN=your_token_here
LINKEDIN_PERSON_URN=your_urn_here
```

### Editing Posts

Edit `posts.json` to:
- Change post content
- Reschedule posts
- Add new posts
- Mark posts as posted

## 🔧 Commands

```bash
# Setup
python setup.py              # Setup LinkedIn API

# Initialize
python scheduler.py init     # Create posts.json

# Run
python scheduler.py          # Run auto-scheduler
python poster.py             # Post all today's posts
python poster.py 1           # Post specific post (ID=1)

# Check
python -c "import json; print(json.load(open('posts.json')))"
```

## ⚠️ Important Notes

1. **LinkedIn Rate Limits**: Don't post more than 10 times per day
2. **API Access**: Requires LinkedIn Developer Account
3. **Token Expiry**: Access tokens expire after 60 days
4. **Manual Approval**: LinkedIn may review your app before approval

## 🐛 Troubleshooting

### "Unauthorized" Error
- Check your access token is valid
- Ensure token has `w_member_social` scope

### "Rate Limit" Error
- Wait 24 hours before posting again
- Reduce posting frequency

### "Person URN" Error
- Verify your Person URN is correct
- Check LinkedIn profile URL

## 📞 Support

If you need help:
1. Check LinkedIn API docs: https://learn.microsoft.com/en-us/linkedin/
2. Verify your app settings in LinkedIn Developer Portal
3. Check `.env` file for correct credentials
