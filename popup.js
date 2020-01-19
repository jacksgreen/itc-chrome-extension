
function handleOnLoad() {
    chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, 'give me url', getUrl)
    })
}

async function getUrl(res) {
    const div = document.createElement('div')
    div.textContent = res.url;
    document.body.append(div);
    const response = axios.get(`http://127.0.0.1:2700/data?url=${res.url}`)
    src = response.data;
    img = document.createElement('img')
    img.src = src;
    document.append(img)
    //scrapeProduct(res.url)
}

function takeScreenshot() {
    const div = document.createElement('div')
    div.textContent = 'Screenshot'
    document.body.append(div)
}

// async function scrapeProduct(url) {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage()
//     page.goto(url);
//     const [el] = await page.$x('//*[@id="landingImage"]')
//     const src = await el.getProperty('src')
//     img = document.createElement('img');
//     img.src = src;
//     document.body.append(img)
// }
document.addEventListener('DOMContentLoaded', handleOnLoad)
btn = document.getElementById('screenshot-btn')
btn.addEventListener('click', takeScreenshot)