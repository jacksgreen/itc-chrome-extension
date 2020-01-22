function handleOnLoad() {
  chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, 'give me data', displayData);
  });
}

function checkHighScore(main, test1, test2, test3) {
  let scores = [];
  scores.push(main, test1, test2, test3);
  scores.sort(function(a, b) {
    return a - b;
  });
  if (scores[0] == main) {
    result = document.createElement('div');
    result.classList.add('hintMsg');
    result.textContent =
      "We've found products that are more environmentally-friendly for you!";
    box.append(result);
  } else {
    result = document.createElement('div');
    result.classList.add('hintMsg');
    result.textContent = 'We like this product!';
    box.append(result);
  }
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

  checkHighScore(
    res.data.mainProduct.ecoscore,
    res.data.firstSuggestion.ecoscore,
    res.data.secondSuggestion.ecoscore,
    res.data.thirdSuggestion.ecoscore
  );
}

document.addEventListener('DOMContentLoaded', handleOnLoad);
const websiteBtn = document.getElementById('website-button');
websiteBtn.addEventListener('click', handleWebsiteRedirect);

function handleWebsiteRedirect() {
  //website = "https://wingspan-1.firebaseapp.com/"
  website = 'http://127.0.0.1:3000';
  window.open(website);
}
