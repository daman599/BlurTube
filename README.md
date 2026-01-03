BlurTube – Intentional YouTube Usage

# BlurTube

A minimal **browser extension** that **reduces YouTube distraction** by blurring the feed on the Home page and Shorts, keeping the search bar accessible.

The goal is simple: **open YouTube with intent, not to scroll mindlessly**.

## Features

- Blurs YouTube Home feed (/)
- Keeps the search bar usable
- Blurs Shorts (/shorts/*) with smooth fade animation 
- Works correctly with YouTube’s SPA navigation
- Lightweight, easy to use

## How It Works

- The extension runs only on https://www.youtube.com/*
- When a YouTube page loads, the content script is initialized
- A blur overlay is added over the main content while keeping the header accessible
- The current route is continuously monitored
- When the route changes (Home, Search, Watch, Shorts), the blur overlay is shown or removed accordingly
- YouTube’s Single Page App (SPA) navigation is handled without requiring page reloads

## Installation

1. Clone or download this repository
2. Load the extension in browser:
   - Open browser and navigate to `browser-name://extensions/`
   - Enable "Developer mode" (toggle in top-right corner)
   - Click "Load unpacked"
   - Select the extension directory
   - The extension should now appear in your extensions list
3. Open YouTube and use it intentionally 🎉

## Files

- `manifest.json` - Extension manifest (Manifest V3)
- `content.js` - Route detection, blur logic
- `style.css` - Adds blur overlay styles and animations

## Requirements

- Any web browser (Manifest V3 compatible)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 