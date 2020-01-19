async function getIcon() {
  const response = await fetch("http://127.0.0.1:2700/icon");
  const myJson = await response.json()
  chrome.runtime.sendMessage({ icon: myJson.icon })
}

async function getData() {
  const url = window.location.href;
  const response = await fetch(`http://127.0.0.1:2700/data?url=${url}`)
  const myJson = await response.json()
  return myJson.src;
}

getIcon()
const response = getData()

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  const src = await response;
  sendResponse({ src: src, url: window.location.href })
})