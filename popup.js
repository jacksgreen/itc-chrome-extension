function handleOnLoad() {
  chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, 'give me data', displayData);
  });
}

function checkHighScore(main, test1, test2, test3) {
  let scores = [];
  scores.push(main, test1, test2, test3);
  scores.sort(function(a, b) {
    return b - a;
  });
  if (scores[0] != main) {
    result = document.createElement('div');
    result.classList.add('hintMsg');
    result.textContent =
      "We've found products that are more environmentally-friendly for you!";
    box.append(result);
  } else {
    result = document.createElement('div');
    result.classList.add('hintMsg');
    result.textContent =
      "We've found products that are more environmentally-friendly for you!";
    box.append(result);
  }
}

function displayData(res) {
  box = document.getElementById('content-box');

  brand = document.createElement('div');
  brand.textContent = 'Brand: ' + res.data.mainProduct.brand;
  box.append(brand);

  cot_pcth = document.createElement('div');
  cot_pcth.textContent =
    'Cotton: ' + res.data.mainProduct.cot_pcth.toFixed(0) + '%';
  box.append(cot_pcth);

  pol_pctg = document.createElement('div');
  pol_pctg.textContent =
    'Polyster: ' + res.data.mainProduct.pol_pctg.toFixed(0) + '%';
  box.append(pol_pctg);

  co2 = document.createElement('div');
  co2.textContent =
    'Carbon Emissions: ' + res.data.mainProduct.co2.toFixed(1) + 'kg';
  box.append(co2);

  weight = document.createElement('div');
  weight.textContent =
    'Weight: ' + res.data.mainProduct.weight.toFixed(2) + 'kg';
  box.append(weight);

  ecoscore = document.createElement('div');
  ecoscore.textContent =
    'WingSpan: ' + res.data.mainProduct.ecoscore.toFixed(0);
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
