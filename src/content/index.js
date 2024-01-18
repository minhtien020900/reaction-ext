import {EMOJIS, HTML_BTN_REACTION} from "../constant/emoji.js";
import {BASE_API_URL_DEV, BASE_API_URL_PROD, DOMAIN_PROD} from "../constant/api.js";


let my_tabid = null
async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}



let [tab] = await  getCurrentTab()
console.log(tab)
function changeBackgroundColor() {
    console.log(tab,'hihi')
    document.body.style.backgroundColor = 'red';
}
chrome.scripting
    .executeScript({
        target : {tabId : tab},
        func : changeBackgroundColor,
    })
    .then(() => console.log("injected a function"));


(function () {

    function notifyCallback(title, opt) {
        console.log("title", title);
    }

    const OldNotify = window.Notification;

    function newNotify(title, opt) {
        notifyCallback(title, opt);
        return new OldNotify(title, opt);
    }

    newNotify.requestPermission = OldNotify.requestPermission.bind(OldNotify);
    Object.defineProperty(newNotify, 'permission', {
        get: function() {
            return OldNotify.permission;
        }
    });

    window.Notification = newNotify;
})();
// (function () {
//     console.log('ssdjaosd')

//     function notifyCallback(title, opt) {
//         console.log("title", title);
//     }
//
//     const handler = {
//         construct(target, args) {
//             notifyCallback(...args);
//             return new target(...args);
//         }
//     };
//
//     const ProxifiedNotification = new Proxy(Notification, handler);
//
//     window.Notification = ProxifiedNotification;
// })();

// Notification.requestPermission(function (permission) {
//     if (permission === "granted") {
//
//         const notif = new Notification('My title');
//     }
// });

chrome.runtime.onMessage.addListener((message, sender, sendResponssse) => {
    if (message.url) {
        // const currentURL = message.url;
        // Sử dụng currentURL ở đây
        // console.log(currentURL.split('/'))
        // console.log("URL hiện tại là: " + currentURL);

        // document.querySelectorAll('.mtien').forEach((item) => item.remove())
        // $('.mtien').popover('dispose')
        setTimeout(addReactionButtonToChatMessages, 2500)
    }
});

const rmBtnReact = () => {
    document.querySelectorAll('.mtien').forEach((item) => item.remove())
    $('.mtien').popover('dispose')

}

let emojiItems = ''

EMOJIS.forEach((emoji) => {
    if (emoji.showInList) {
        emojiItems += `<li id="emoji-${emoji.id}" ><img alt="${emoji.name}" src="${emoji.src}" class="ui_emoticon"></li>`

    }
})
const fullEmojiElement = `<div class="list-item-emoji mtien-ext"><ul>${emojiItems}</ul></div>`

const createBtnReact = (message) => {
    const divMsgContent = message.querySelector('.msg-main-content')

    let userMsg = divMsgContent.getAttribute('data-uid')
    let msgId = message.getAttribute('id').split('-').slice(-1)

    const btnReactExtension = document.createElement('button');
    btnReactExtension.classList.add('btn', 'btn-custom', 'btn-success', 'mtien', 'position-absolute')
    btnReactExtension.style.bottom = '5px'
    btnReactExtension.style.right = '5px'
    btnReactExtension.setAttribute('id', `thichngamtrang-${msgId}`)
    btnReactExtension.setAttribute('data-hash', `hehe${msgId}hehe`)
    btnReactExtension.setAttribute('data-toggle', "popover-mtien")
    btnReactExtension.setAttribute('uid', userMsg)

    btnReactExtension.innerHTML = HTML_BTN_REACTION;

    message.appendChild(btnReactExtension);
}
const createPopover = () => {
    $('.mtien').popover({
        content: fullEmojiElement,
        html: true,
        container: 'body',
        delay: {hide: 200},

        trigger: 'focus',
    }).on('shown.bs.popover', function () {
        const splitBaseUri = $(this)[0].baseURI.split('/').slice(-1)
        // const endpoint = splitBaseUri === DOMAIN_PROD ? BASE_API_URL_PROD : BASE_API_URL_DEV
        const roomId = splitBaseUri[0].split('-').slice(-1)

        const detachMsgId = $(this).attr('data-hash').replaceAll('hehe', '')
        console.log(detachMsgId)
        const childEl = document.querySelectorAll('div.list-item-emoji.mtien-ext > ul > li')
        const user = JSON.parse(localStorage.getItem('user'))

        childEl.forEach(item => {
            item.addEventListener('click', () => {
                if (user.token) {
                    $.ajax({
                        type: 'POST',
                        url: BASE_API_URL_PROD,
                        data: {
                            'room_id': roomId[0],
                            'message_id': detachMsgId,
                            'message_user': $(this).attr('uid'),
                            'icon_id': item.getAttribute('id').replace('emoji-', '')
                        },
                        headers: {
                            "Authorization": `Bearer ${user.token}`,
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Headers': 'Origin,X-Requested-With',
                            'Accept': 'application/json',
                            'Access-Control-Allow-Methods': 'POST',
                            'Access-Control-Allow-Credentials': 'true'
                        },

                    });
                }
            })
        })

    });
}

function addReactionButtonToChatMessages() {
    rmBtnReact()

    const divMsgItemMention = document.querySelectorAll(".chat-element-message>.message-item");
    divMsgItemMention.forEach((message) => {
        createBtnReact(message)

    });
    createPopover()

}

window.addEventListener('load', () => {
    console.log(3)
    setTimeout(addReactionButtonToChatMessages, 2500)
    const msgListEle = document.getElementById('message-list')
    const loadingEle = document.querySelector('.loading-icon')

    const obLoadingEle = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            if (mutation.target.style.display === 'none') {
                addReactionButtonToChatMessages()
            }
        })
    })

    const observer = new MutationObserver((mutations, observer) => {
        mutations.forEach(mutation => {
            addReactionButtonToChatMessages()
        })
    })

    obLoadingEle.observe(loadingEle, {
        attributes: true,
        attributeFilter: ['style'],
    })

    observer.observe(msgListEle, {
        childList: true,

    });
});

