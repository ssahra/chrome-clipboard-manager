chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "clipboard_copy") {
      const newItem = {
        text: message.text,
        timestamp: Date.now()
      };
  
      chrome.storage.local.get({ history: [] }, (result) => {
        const history = result.history;
        history.unshift(newItem); // add to top
        const trimmed = history.slice(0, 20); // keep last 20 items
        chrome.storage.local.set({ history: trimmed });
      });
    }
  });
  