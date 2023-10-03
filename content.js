// import {EMOJIS, HTML_BTN_REACTION} from "./constant/emoji";
const HTML_BTN_REACTION =
    `<span
        id="nav-icon-emoji-smile" class="laka-icon text-dark"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                                       focusable="false" role="img"
                                                                       aria-label="emoji smile" id="b-icon-emoji-smile"
                                                                       xmlns="http://www.w3.org/2000/svg"
                                                                       fill="currentColor"
                                                                       class="bi-emoji-smile b-icon bi"><g><path
        fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path
        fill-rule="evenodd"
        d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z"></path><path
        d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"></path></g></svg></span>`
const EMOJIS = [
    {
        id: 0,
        name: 'Smiling face',
        src: '/static/emojis/default/emo_smile.gif',
        code: ':)',
        altCode: ':)',
        showInList: true,
    },
    {
        id: 1,
        name: 'Sad face',
        src: '/static/emojis/default/emo_sad.gif',
        code: ':(',
        altCode: ':(',
        showInList: true,
    },
    {
        id: 2,
        name: 'Laughing face',
        src:
            '/static/emojis/default/emo_more_smile.gif',
        code: ':D',
        altCode: ':D',
        showInList: true,
    },
    {
        id: 3,
        name: 'Smiling face with sunglasses',
        src: '/static/emojis/default/emo_lucky.gif',
        code: '8-)',
        altCode: '8-)',
        showInList: true,
    },
    {
        id: 4,
        name: 'Hushed face',
        src:
            '/static/emojis/default/emo_surprise.gif',
        code: ':o',
        altCode: ':o',
        showInList: true,
    },
    {
        id: 5,
        name: 'Winking face',
        src: '/static/emojis/default/emo_wink.gif',
        code: ';)',
        altCode: ';)',
        showInList: true,
    },
    {
        id: 6,
        name: 'Crying face',
        src: '/static/emojis/default/emo_tears.gif',
        code: ';(',
        altCode: ';(',
        showInList: true,
    },
    {
        id: 7,
        name: 'Face with cold sweat',
        src: '/static/emojis/default/emo_sweat.gif',
        code: '(sweat)',
        altCode: '(sweat)',
        showInList: true,
    },
    {
        id: 8,
        name: 'Silent face',
        src: '/static/emojis/default/emo_mumu.gif',
        code: ':|',
        altCode: ':|',
        showInList: true,
    },
    {
        id: 9,
        name: 'Kiss face',
        src: '/static/emojis/default/emo_kiss.gif',
        code: ':*',
        altCode: ':*',
        showInList: true,
    },
    {
        id: 10,
        name: 'Tongue face',
        src:
            '/static/emojis/default/emo_tongueout.gif',
        code: ':p',
        altCode: ':p',
        showInList: true,
    },
    {
        id: 11,
        name: 'Blushing face',
        src: '/static/emojis/default/emo_blush.gif',
        code: '(blush)',
        altCode: '(blush)',
        showInList: true,
    },
    {
        id: 12,
        name: 'Frowning face',
        src: '/static/emojis/default/emo_wonder.gif',
        code: ':^)',
        altCode: ':^)',
        showInList: true,
    },
    {
        id: 13,
        name: 'Sleeping face',
        src: '/static/emojis/default/emo_snooze.gif',
        code: '|-)',
        altCode: '|-)',
        showInList: true,
    },
    {
        id: 14,
        name: 'Smiling face with hearts',
        src: '/static/emojis/default/emo_love.gif',
        code: '(inlove)',
        altCode: '(inlove)',
        showInList: true,
    },
    {
        id: 15,
        name: 'Bragging face',
        src: '/static/emojis/default/emo_grin.gif',
        code: ']:)',
        altCode: '',
        showInList: true,
    },
    {
        id: 16,
        name: 'Speaking face',
        src: '/static/emojis/default/emo_talk.gif',
        code: '(talk)',
        altCode: '(talk)',
        showInList: true,
    },
    {
        id: 17,
        name: 'Sleepy face',
        src: '/static/emojis/default/emo_yawn.gif',
        code: '(yawn)',
        altCode: '(yawn)',
        showInList: true,
    },
    {
        id: 18,
        name: 'Vomiting face',
        src: '/static/emojis/default/emo_puke.gif',
        code: '(puke)',
        altCode: '(puke)',
        showInList: true,
    },
    {
        id: 19,
        name: 'Hair flip face',
        src: '/static/emojis/default/emo_ikemen.gif',
        code: '(emo)',
        altCode: '(emo)',
        showInList: true,
    },
    {
        id: 20,
        name: 'Glasses face',
        src: '/static/emojis/default/emo_otaku.gif',
        code: '8-|',
        altCode: '8-|',
        showInList: true,
    },
    {
        id: 21,
        name: 'Grinning face',
        src:
            '/static/emojis/default/emo_ninmari.gif',
        code: ':#)',
        altCode: ':#)',
        showInList: true,
    },
    {
        id: 22,
        name: 'Nodding face',
        src: '/static/emojis/default/emo_nod.gif',
        code: '(nod)',
        altCode: '(nod)',
        showInList: true,
    },
    {
        id: 23,
        name: 'Shaking head face',
        src: '/static/emojis/default/emo_shake.gif',
        code: '(shake)',
        altCode: '(shake)',
        showInList: true,
    },
    {
        id: 24,
        name: 'Grinning face with sweat',
        src:
            '/static/emojis/default/emo_wry_smile.gif',
        code: '(^^;)',
        altCode: '(whew)',
        showInList: true,
    },
    {
        id: 25,
        name: 'Sweating face',
        src: '/static/emojis/default/emo_whew.gif',
        code: '(whew)',
        altCode: '(whew)',
        showInList: true,
    },
    {
        id: 26,
        name: 'Clapping hands',
        src: '/static/emojis/default/emo_clap.gif',
        code: '(clap)',
        altCode: '(clap)',
        showInList: true,
    },
    {
        id: 27,
        name: 'Bowing Person',
        src: '/static/emojis/default/emo_bow.gif',
        code: '(bow)',
        altCode: '(bow)',
        showInList: true,
    },
    {
        id: 28,
        name: 'Saluting face',
        src: '/static/emojis/default/emo_roger.gif',
        code: '(roger)',
        altCode: '(roger)',
        showInList: true,
    },
    {
        id: 29,
        name: 'Flexing Person',
        src: '/static/emojis/default/emo_muscle.gif',
        code: '(flex)',
        altCode: '(flex)',
        showInList: true,
    },
    {
        id: 30,
        name: 'Dancer',
        src: '/static/emojis/default/emo_dance.gif',
        code: '(dance)',
        altCode: '(dance)',
        showInList: true,
    },
    {
        id: 31,
        name: 'Funny face',
        src:
            '/static/emojis/default/emo_komanechi.gif',
        code: '(:/)',
        altCode: '(:/)',
        showInList: true,
    },
    {
        id: 32,
        name: 'Raised fist',
        src: '/static/emojis/default/emo_gogo.gif',
        code: '(gogo)',
        altCode: '(gogo)',
        showInList: true,
    },
    {
        id: 33,
        name: 'Thinking face',
        src: '/static/emojis/default/emo_think.gif',
        code: '(think)',
        altCode: '(think)',
        showInList: true,
    },
    {
        id: 34,
        name: 'Please',
        src: '/static/emojis/default/emo_please.gif',
        code: '(please)',
        altCode: '(please)',
        showInList: true,
    },
    {
        id: 35,
        name: 'Hurrying face',
        src: '/static/emojis/default/emo_quick.gif',
        code: '(quick)',
        altCode: '(quick)',
        showInList: true,
    },
    {
        id: 36,
        name: 'Angry face',
        src: '/static/emojis/default/emo_anger.gif',
        code: '(anger)',
        altCode: '(anger)',
        showInList: true,
    },
    {
        id: 37,
        name: 'Smiling face with horns',
        src: '/static/emojis/default/emo_devil.gif',
        code: '(devil)',
        altCode: '(devil)',
        showInList: true,
    },
    {
        id: 38,
        name: 'Lightbulb',
        src:
            '/static/emojis/default/emo_lightbulb.gif',
        code: '(lightbulb)',
        altCode: '(lightbulb)',
        showInList: true,
    },
    {
        id: 39,
        name: 'Star',
        src: '/static/emojis/default/emo_star.gif',
        code: '(*)',
        altCode: '(*)',
        showInList: true,
    },
    {
        id: 40,
        name: 'Trembling heart',
        src: '/static/emojis/default/emo_heart.gif',
        code: '(h)',
        altCode: '(h)',
        showInList: true,
    },
    {
        id: 41,
        name: 'Blooming flower',
        src: '/static/emojis/default/emo_flower.gif',
        code: '(F)',
        altCode: '(F)',
        showInList: true,
    },
    {
        id: 42,
        name: 'Firecracker',
        src:
            '/static/emojis/default/emo_cracker.gif',
        code: '(cracker)',
        altCode: '(cracker)',
        showInList: true,
    },
    {
        id: 43,
        name: 'Food',
        src: '/static/emojis/default/emo_eat.gif',
        code: '(eat)',
        altCode: '(eat)',
        showInList: true,
    },
    {
        id: 44,
        name: 'Cake',
        src: '/static/emojis/default/emo_cake.gif',
        code: '(^)',
        altCode: '(^)',
        showInList: true,
    },
    {
        id: 45,
        name: 'Coffee',
        src: '/static/emojis/default/emo_coffee.gif',
        code: '(coffee)',
        altCode: '(coffee)',
        showInList: true,
    },
    {
        id: 46,
        name: 'Beer',
        src: '/static/emojis/default/emo_beer.gif',
        code: '(beer)',
        altCode: '(beer)',
        showInList: true,
    },
    {
        id: 47,
        name: 'Handshake',
        src:
            '/static/emojis/default/emo_handshake.gif',
        code: '(handshake)',
        altCode: '(handshake)',
        showInList: true,
    },
    {
        id: 48,
        name: 'Thumbs up',
        src: '/static/emojis/default/emo_yes.gif',
        code: '(y)',
        altCode: '(y)',
        showInList: true,
    },
    {
        id: 49,
        name: 'Thumbs up',
        src: '/static/emojis/default/rolling-on-the-floor-laughing.gif',
        code: '=))',
        altCode: '=))',
        showInList: false,
    },
]

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message)
    if (message.url) {
        const currentURL = message.url;
        // Sử dụng currentURL ở đây
        console.log(currentURL.split('/'))
        console.log("URL hiện tại là: " + currentURL);

        document.querySelectorAll('.mtien').forEach((item)=>item.remove())
        $('.mtien').popover('dispose')
        setTimeout(addReactionButtonToChatMessages, 2500)
    }
});


let emojiItems = ''

EMOJIS.forEach((emoji) => {
    emojiItems += `<li id="emoji-${emoji.id}" data-emoji="nytun" ><img alt="${emoji.name}" src="${emoji.src}" class="ui_emoticon"></li>`
})
const fullEmojiElement = `<div class="list-item-emoji mtien-ext"><ul>${emojiItems}</ul></div>`

const token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxMSIsImp0aSI6ImI5MzI4ODg0NGI2ZjgyYWFiZWQzNjQ0YWJmZDI1OTU0MmRkN2ZlOGQxNDk4ZWU5MThjMWYzYWMyODAwYjFiZmVlMGJhZDMzODJiMjI4ZDg3IiwiaWF0IjoxNjkyNzE1ODU3LjI4Njk1NywibmJmIjoxNjkyNzE1ODU3LjI4Njk2MSwiZXhwIjoxNzI0MzM4MjU3LjI4Mzc5NSwic3ViIjoiNDM5Iiwic2NvcGVzIjpbXX0.clLsTTQ8OmD9i6IgIopW2pNNIGbRZ_XwwXw7lfv4nPu8IM7CeeBzVMgVsfUjVU7BT7vKJJ91lCbTZ2VVIjRJcZmdFTQB3u3cg5sDurY5kKRPU6N43ObfcUW-M3HUtzVB0NfaHVOkIJ2FsNRD2qPKN1dATv_zWzBgciefzOr4z8gM63HRDI3dxVPpeW0F0agM4jGqznoZ5nAaFwiR0rDYAH_fLImJBKsqm9YMVXxLk9QYLQOr29tL9XxLtW9ytvPfZ1hvfjEuRfbtRXkoeuVdvMTVjN-VTrkQZoV_eD2qvnQcL_LVR00RLP5NJe13p0uJ_ynUPXwDu4JPQSED-RIQUM6ThURoV2jOj7Rt6FUHu5y03SHEMMvaq6V_o02ck-aiiebbJ8D4hEq4uFKHpv0VGHl-AIjCthR6W0BM9Cww5zxpo3xZtB0RNKCIk1VLxnzYF6UwlpfCWsVUe6YYMD5QEL_8pILkpfIprbBcQIoJmqq7-UzVxWEZLZUMczh2JG-Fg2c6LSpQ-PbN2PETrREtTd4gdwGKM2mzFD8odWCrEc02BG-L6CjQbiDQCBabeDg6ye8LM8Wn0HFkpvMRh6z9mRljRJd8rZBEzOvv-B5a24VnYP9OUKXfPoOkOUoDim0m5gAzCbiQWdVtJ_GfT_04jhyFXEicGy0vHCfrmIKTQqQ"

$.ajaxSetup({
    beforeSend: function(xhr) {
        xhr.setRequestHeader('Authorization', token);
    }
});
function addReactionButtonToChatMessages() {
    const divChatMsg = document.querySelectorAll('div[class="chat-element-message"]');
    divChatMsg.forEach((message, index) => {

        let msgId =  message.getAttribute('id').split('-').slice(-1)

        const btnReactExtension = document.createElement('button');
        btnReactExtension.classList.add('btn', 'btn-custom', 'btn-success', 'mtien')
        btnReactExtension.setAttribute('data-popover', `ny-${index}`)
        btnReactExtension.setAttribute('id', `thichngamtrang-${msgId}`)
        btnReactExtension.setAttribute('data-hash', `hehe${msgId}hehe`)
        btnReactExtension.setAttribute('data-toggle', "popover-mtien")

        btnReactExtension.innerHTML = HTML_BTN_REACTION;
        message.appendChild(btnReactExtension);

    });

    // const btnHavePopover = document.querySelectorAll('.mtien');
    $('.mtien').popover({
        content: fullEmojiElement,
        html: true,
        container: 'body',
        delay:{hide:200},

        trigger: 'focus',
    }).on('shown.bs.popover', function () {


        const splitBaseUri = $(this)[0].baseURI.split('/').slice(-1)

        const roomId = splitBaseUri[0].split('-').slice(-1)
        console.log(roomId)
        const detachMsgId =$(this).attr('data-hash').replaceAll('hehe','')
        const childEl = document.querySelectorAll('div.list-item-emoji.mtien-ext > ul > li')
        childEl.forEach(item =>{
            item.addEventListener('click',()=>{
                $.post('https://laka.lampart-vn.com:9443/api/v1/message/set-reaction',{
                    'room_id': roomId[0],
                    'message_id': detachMsgId,
                    'message_user':439,
                    'icon_id': item.getAttribute('id').replace('emoji-','')
                })
            })
        })

    });

}
window.addEventListener('load', () => {
    setTimeout(addReactionButtonToChatMessages, 2500)
});