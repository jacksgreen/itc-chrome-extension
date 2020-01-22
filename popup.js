function handleOnLoad() {
    chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, 'give me data', displayData)
    })
}

function displayData(res) {
    const div = document.createElement('div')
    div.textContent = "url: " + res.url;
    document.body.append(div);
}

document.addEventListener('DOMContentLoaded', handleOnLoad);
const websiteBtn = document.getElementById('website-button');
websiteBtn.addEventListener('click', handleWebsiteRedirect)

function handleWebsiteRedirect() {
    //website = "https://wingspan-1.firebaseapp.com/"
    website = "http://127.0.0.1:3000"
    window.open(website)
}