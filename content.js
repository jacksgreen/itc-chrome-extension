chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  sendResponse({ url: window.location.href })
})

async function getIcon() {
  const response = await fetch("http://127.0.0.1:2700/icon");
  const myJson = await response.json()
  chrome.runtime.sendMessage({ icon: myJson.icon })
}
getIcon()
