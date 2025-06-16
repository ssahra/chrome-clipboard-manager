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

      

      items.forEach((item, index) => {
        const li = document.createElement("li");
        
        const textSpan = document.createElement("span");
        const copiedText = item.text;
        if (copiedText.length > 50) {
          const previewText = copiedText.substring(0, 50) + "...";
          textSpan.textContent = previewText;
        }
        else {
          textSpan.textContent = item.text;
        }

        // Copy button
        const copyBtn = document.createElement("button");
        copyBtn.textContent = "Copy";
        copyBtn.addEventListener("click", () => {
          navigator.clipboard.writeText(item.text);
        });

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
          console.log("Deleting item:", item.text);
          console.log("At index:", index);

          items.splice(index, 1); // remove from array
          chrome.storage.local.set({ history: items }, () => {
            renderHistory(items); // re-render list
          });
        });
        

        li.appendChild(textSpan);
        li.appendChild(copyBtn);
        li.appendChild(deleteBtn);
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