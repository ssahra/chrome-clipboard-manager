# Clipboard Manager

A Chrome extension that saves everything you copy and provides easy access to your clipboard history.

- Tech: Chrome Extension Manifest V3, JavaScript, Chrome Storage API

## Features

- Captures all copied text from any webpage
- Stores up to 20 most recent clipboard items
- One-click copy to re-copy any previous item
- Delete copied items
- Clear all button to reset history
- Timestamp tracking for each copied item

## How It Works

The extension uses content scripts to monitor copy events across all websites, automatically saving copied text to Chrome's local storage. The popup interface displays your clipboard history with options to copy, delete individual items, or clear everything at once.

## Installation

1. Clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension folder
5. The extension icon will appear in your toolbar
