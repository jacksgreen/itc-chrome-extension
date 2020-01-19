chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  sendResponse({url: window.location.href})
})
