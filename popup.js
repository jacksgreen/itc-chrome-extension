
function handleOnLoad() {
    chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, 'give me url', getUrl)
    })
}

async function getUrl(res) {
    const div = document.createElement('div')
    div.textContent = "url: " + res.url;
    document.body.append(div);
    const response = await axios.get(`http://127.0.0.1:2700/data?url=${res.url}`)
    const div2 = document.createElement('div')
    div2.textContent = "image: " + response.data;
    document.body.append(div2)
    img = document.createElement('img')
    img.src = response.data;
    document.body.append(img)
}

document.addEventListener('DOMContentLoaded', handleOnLoad)