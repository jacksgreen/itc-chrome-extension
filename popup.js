function handleOnLoad() {
    chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, 'give me data', displayData)
    })
}

function displayData(res) {

}

document.addEventListener('DOMContentLoaded', handleOnLoad);
const websiteBtn = document.getElementById('website-button');
websiteBtn.addEventListener('click', handleWebsiteRedirect)

function handleWebsiteRedirect() {
    //website = "https://wingspan-1.firebaseapp.com/"
    website = "http://127.0.0.1:3000"
    window.open(website)
}