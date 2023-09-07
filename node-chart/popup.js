// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     console.log("Message from content.js:", message);
// });
const reloadBtn = document.getElementById('reloadDom')
reloadBtn.onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function ([tab]) {
        console.log('tab', tab);
        chrome.tabs.sendMessage(tab.id, 'reload', (response) => {
            console.log('response', response);
        })
    });
}