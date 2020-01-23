chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    chrome.tabs.query({ active: true, windowType: "normal", currentWindow: true }, (d) => {
        let tabId = d[0].id;
        // if (msg.icon == "loader") {
        //     let loader = 1
        //     while (loader < 10) {
        //         chrome.browserAction.setIcon({ path: `./numbers/${loader.toString()}.png`, tabId: tabId });
        //         if (loader == 10) {
        //             loader = 1
        //         } else {
        //             loader++
        //         }
        //     }
        // } 
            chrome.browserAction.setIcon({ path: `./numbers/${msg.icon}.png`, tabId: tabId })
    })
})