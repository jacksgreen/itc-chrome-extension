async function getData() {
  chrome.runtime.sendMessage({ icon: 'loader' })
  const url = window.location.href;
  const response = await fetch(`${server}/data?url=${url}`);
  const myJson = await response.json();
  chrome.runtime.sendMessage({ icon: myJson.mainProduct.ecoscore.toFixed(0) });
  return myJson;
}

const server = 'http://127.0.0.1:2700';
//const server = 'https://itc-chrome-extension-server.herokuapp.com';
const response = getData();

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  const jsonData = await response;
  sendResponse({ data: jsonData, url: window.location.href });
});

