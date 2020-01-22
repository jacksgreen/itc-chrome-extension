function handleOnLoad() {
    chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, 'give me data', displayData)
    })
}

function displayData(res) {
    const div = document.createElement('div')
    div.textContent = "url: " + res.url;
    document.body.append(div);
    img = document.createElement('img')
    img.src = res.src;
    document.body.append(img)
}

document.addEventListener('DOMContentLoaded', handleOnLoad);
const websiteBtn = document.getElementById('website-button');
websiteBtn.addEventListener('click', handleWebsiteRedirect)

function handleWebsiteRedirect() {
    window.open("https://wingspan-1.firebaseapp.com/")
}