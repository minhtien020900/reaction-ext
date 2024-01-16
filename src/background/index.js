// chrome.notifications.create('myNotification', {
//     type: 'basic',
//     tag: 'LAKA_Notification_' + "2058" + '_' + "18111",
//
//     // iconUrl: '../icon/sj.png',
//     iconUrl: chrome.runtime.getURL("icon/sj.png"),
//     title: 'Thông báo của bạn',
//     message: 'Nội dung thông báo tùy chỉnh'
// });

chrome.tabs.onUpdated.addListener(function
        (tabId, changeInfo, tab) {
        // read changeInfo data and do something with it (like read the url)
        if (changeInfo.url) {
            // do something here
            chrome.tabs.sendMessage(tabId, {url: changeInfo.url});
        }
    }
);