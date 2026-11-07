#!/bin/bash
# One-click deployment script for Vercel
echo "🪔 Building and Deploying Diwali Surprise to Vercel..."

# Navigate to project directory
cd "$(dirname "$0")"

# Run production build check
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Build failed. Please check errors above."
  exit 1
fi

echo "✨ Build successful! Launching Vercel deployment..."

# Deploy to Vercel (interactive login if not already authenticated)
npx vercel --prod

echo "🎉 Deployment complete! Share the link with Namrata ❤️"

