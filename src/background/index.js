// chrome.notifications.create('myNotification', {
//     type: 'basic',
//     tag: 'LAKA_Notification_' + "2058" + '_' + "18111",
//
//     // iconUrl: '../icon/sj.png',
//     iconUrl: chrome.runtime.getURL("icon/sj.png"),
//     title: 'Thông báo của bạn',
//     message: 'Nội dung thông báo tùy chỉnh'
// });

import {ACTION, regex} from "../constant/const.js";

let  contentScriptLoaded = false;

chrome.tabs.onUpdated.addListener( function
        (tabId, changeInfo, tab) {

        if (changeInfo.status === 'complete' && tab.url.match(regex) ) {
            // console.log('xxx')
            // if (contentScriptLoaded){

                chrome.tabs.sendMessage(tabId, {action: ACTION.CHANGE_TAB});

            }
            // else{
            //     console.log("Content script not loaded yet. Waiting...");
            // }
        // }
    }
);
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     // Khi content script báo hiệu rằng đã load xong
//     if (request.message === "ContentScriptLoaded") {
//         // Cập nhật trạng thái biến
//         contentScriptLoaded = true;
//     }
// });

// Sự kiện khi tab được đóng
// chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
//     console.log("Tab removed: ", removeInfo);
//     // Tắt biến cờ để ngừng gửi thông điệp khi tab đóng
//     isClose = true;
// });