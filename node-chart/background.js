console.log('background chrome', chrome);
chrome.runtime.onMessage.addListener((message) => {
    console.log('message', message);
    if(message == 'addData'){
        chrome.tabs.query({ active: true }, ([tab]) => {
            // 执行Function
            chrome.scripting.executeScript({
                target: {
                    tabId: tab.id
                },
                function: () => {
                    return {
                        a: 1
                    }
                }
            }).then((result) => console.log("script injected", result));
        })
    }
})

// 执行脚本
// chrome.runtime.onMessage.addListener((message) => {
//     if(message === 'reload'){
//         chrome.tabs.query({ active: true }, ([tab]) => {
//             // 执行Function
//             chrome.scripting.executeScript({
//                 target: {
//                     tabId: tab.id
//                 },
//                 function: () => {
//                     console.log('window', window.api);
//                     return {
//                         a: 1
//                     }
//                 }
//             }).then((result) => console.log("script injected", result));
//         })
//     }
// })

// 监听页面请求，只有静态资源
// chrome.webRequest.onCompleted.addListener((res) => {
//     console.log('res :>> ', res.url);
// },{ urls: ["<all_urls>"] })