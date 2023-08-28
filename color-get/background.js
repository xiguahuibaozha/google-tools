// 我们的 Service Worker 将监听的第一个事件是runtime.onInstalled()
// 此方法允许扩展设置初始状态或完成安装时的某些任务
// 扩展可以使用Storage API和IndexedDB来存储应用程序状态。
chrome.runtime.onInstalled.addListener(() => {
    console.log('onInstalled');
    // chrome.action.setBadgeText({ // 配置插件 Badge
    //     text: "OFF",
    // });
});

const actionClick = async (tab) => {
    // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    // Next state will always be the opposite
    const nextState = prevState === 'ON' ? 'OFF' : 'ON'

    // Set the action badge to the next state
    await chrome.action.setBadgeText({
        tabId: tab.id,
        text: nextState,
    });

    // 更换选项卡样式
    if (nextState === "ON") {
        // Insert the CSS file when the user turns the extension on
        // 您可以使用scripting.executeScript()注入 JavaScript。
        await chrome.scripting.insertCSS({
            files: ["focus-mode.css"],
            target: { tabId: tab.id },
        });
    } else if (nextState === "OFF") {
        // Remove the CSS file when the user turns the extension off
        await chrome.scripting.removeCSS({
            files: ["focus-mode.css"],
            target: { tabId: tab.id },
        });
    }
}

// 跟踪当前选项卡的状态
console.log('chrome.action.onClicked', chrome.action.onClicked);
chrome.action.onClicked.addListener("click",() => {
    console.log('action click');
    chrome.action.setBadgeText({
        text: "ON",
    });
})