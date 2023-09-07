console.log('content chrome', chrome);
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     console.log('request', request);
//     if (request == 'reload') {
//         // 处理接收到的消息
//         const script = document.createElement('script')
//         script.setAttribute('id', "nodeChartData")
//         document.head.appendChild(script)
        
//         chrome.runtime.sendMessage('addData')
//     }
//     sendResponse("finish")
// });

chrome.runtime.onMessage.addListener((message) => {
    console.log('message', message);
})