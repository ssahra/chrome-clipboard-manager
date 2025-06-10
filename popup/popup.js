document.addEventListener("DOMContentLoaded", () => {
    const historyList = document.getElementById("history-list");
    const clearBtn = document.getElementById("clear-btn");
  
    // Fake clipboard data for testing
    const sampleHistory = [
      "Copied text one",
      "Some URL: https://example.com",
      "Another item"
    ];
  
    function renderHistory(items) {
      historyList.innerHTML = "";
      items.forEach(item => {
        const li = document.createElement("li");
        //li.textContent = item; shows the item e.g. [object, Object]
        li.textContent = item.text;
        historyList.appendChild(li);
      });
    }
  
    chrome.storage.local.get({ history: [] }, (result) => {
        renderHistory(result.history);
      });    
  
      clearBtn.addEventListener("click", () => {
        chrome.storage.local.set({ history: [] }, () => {
          historyList.innerHTML = "";
        });
      });
    });