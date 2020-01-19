chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  sendResponse({ url: window.location.href })
  console.log('change logo')
  chrome.declerativeContent.setIcon({ path: "./one.png" });
})

chrome.runtime.sendMessage({
  action: 'updateIcon',
  value: false
});
