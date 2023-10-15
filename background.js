import {EMOJIS,HTML_BTN_REACTION} from "./constant/emoji.js";

chrome.tabs.onUpdated.addListener(function
        (tabId, changeInfo, tab) {
        if (changeInfo.url) {
            console.log(EMOJIS)
            const message = {action: 'change-room', data: changeInfo.url}
            chrome.tabs.sendMessage(tabId, message);
        }
    }
);

