

//listens for when you copy
document.addEventListener("copy", () => {
    const copiedText = document.getSelection()?.toString(); //gets the text
    if (copiedText) {
      chrome.runtime.sendMessage({ type: "clipboard_copy", text: copiedText }); //sends to background script
    }
  });