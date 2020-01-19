chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    chrome.tabs.query({ active: true, windowType: "normal", currentWindow: true }, (d) => {
        let tabId = d[0].id;
        chrome.browserAction.setIcon({ path: `./numbers/${msg.icon}.png`, tabId: tabId });
    })
})