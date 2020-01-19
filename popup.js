function handleOnLoad() {
    chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, 'give me url', getUrl)
    })
}

async function getUrl(res) {
    const div = document.createElement('div')
    div.textContent = "url: " + res.url;
    document.body.append(div);
    img = document.createElement('img')
    img.classList.add('loading-img')
    img.src = './loader.gif'
    document.body.append(img)
    const response = await axios.get(`http://127.0.0.1:2700/data?url=${res.url}`)
    img.classList.remove('loading-img')
    img.src = response.data;
}


document.addEventListener('DOMContentLoaded', handleOnLoad)
