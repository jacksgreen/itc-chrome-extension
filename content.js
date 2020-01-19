chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  sendResponse({url: window.location.href})
  // chrome.browserAction.setIcon({path:"./one.png"})
})

chrome.runtime.sendMessage({ "newIconPath" : "./one.png" });