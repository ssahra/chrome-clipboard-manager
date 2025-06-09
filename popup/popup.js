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
        li.textContent = item;
        historyList.appendChild(li);
      });
    }
  
    renderHistory(sampleHistory);
  
    clearBtn.addEventListener("click", () => {
      historyList.innerHTML = "";
    });
  });
  