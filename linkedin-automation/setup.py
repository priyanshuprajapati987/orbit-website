"""
LinkedIn API Setup Script
Help you get your LinkedIn API credentials
"""

import os
import webbrowser
from datetime import datetime

def setup_linkedin():
    print("=" * 60)
    print("🔧 LinkedIn API Setup for Orbit Auto-Poster")
    print("=" * 60)
    print()
    
    print("📋 Step 1: Create LinkedIn App")
    print("-" * 40)
    print("1. Go to: https://www.linkedin.com/developers/")
    print("2. Click 'Create App'")
    print("3. Fill in:")
    print("   - App Name: Orbit Auto-Poster")
    print("   - LinkedIn Page: Your company page (or create one)")
    print("   - App Logo: Upload any image")
    print("   - Legal Agreement: Accept")
    print("4. Click 'Create App'")
    print()
    
    input("Press Enter when done with Step 1...")
    print()
    
    print("📋 Step 2: Get API Credentials")
    print("-" * 40)
    print("1. In your app dashboard, go to 'Auth' tab")
    print("2. Copy these values:")
    print("   - Client ID")
    print("   - Client Secret")
    print("3. Under 'OAuth 2.0 tools', click 'Generate access token'")
    print("4. Select these scopes:")
    print("   - w_member_social (post on behalf of user)")
    print("5. Click 'Generate Token'")
    print("6. Copy the access token")
    print()
    
    input("Press Enter when done with Step 2...")
    print()
    
    print("📋 Step 3: Get Your Person URN")
    print("-" * 40)
    print("1. Go to your LinkedIn profile")
    print("2. The URL looks like: linkedin.com/in/johndoe-12345678")
    print("3. The number at the end is your Person URN")
    print("   Example: 12345678")
    print()
    
    # Get credentials from user
    access_token = input("Enter your Access Token: ").strip()
    person_urn = input("Enter your Person URN (numbers only): ").strip()
    
    # Save to .env file
    env_file = os.path.join(os.path.dirname(__file__), ".env")
    with open(env_file, "w") as f:
        f.write(f"LINKEDIN_ACCESS_TOKEN={access_token}\n")
        f.write(f"LINKEDIN_PERSON_URN={person_urn}\n")
    
    print()
    print("=" * 60)
    print("✅ Setup Complete!")
    print("=" * 60)
    print()
    print("Next steps:")
    print("1. Initialize posts: python scheduler.py init")
    print("2. Run scheduler: python scheduler.py")
    print("3. Or post manually: python poster.py")
    print()
    print("Test with: python poster.py 1")
    print()


if __name__ == "__main__":
    setup_linkedin()
