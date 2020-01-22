function handleOnLoad() {
  chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, 'give me data', displayData);
  });
}

function displayData(res) {
  box = document.getElementById('content-box');

  brand = document.createElement('div');
  brand.textContent = 'Brand: ' + res.data.mainProduct.brand;
  box.append(brand);

  composition = document.createElement('div');
  composition.textContent = 'Composition: ' + res.data.mainProduct.composition;
  box.append(composition);

  type = document.createElement('div');
  type.textContent = 'Type: ' + res.data.mainProduct.type;
  box.append(type);

  ecoscore = document.createElement('div');
  ecoscore.textContent = 'Ecoscore: ' + res.data.mainProduct.ecoscore;
  box.append(ecoscore);
}

document.addEventListener('DOMContentLoaded', handleOnLoad);
const websiteBtn = document.getElementById('website-button');
websiteBtn.addEventListener('click', handleWebsiteRedirect);

function handleWebsiteRedirect() {
  //website = "https://wingspan-1.firebaseapp.com/"
  website = 'http://127.0.0.1:3000';
  window.open(website);
}
