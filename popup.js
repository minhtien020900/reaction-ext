document.addEventListener("DOMContentLoaded", function () {
    const btnRefresh = document.getElementById('btn-refresh-reaction')
    btnRefresh.addEventListener('click',()=>{
        dispatchRsBtnReaction()
    })

});

const dispatchRsBtnReaction = ()=>{
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTab = tabs[0];
        const message = { action: "rs-btn-reaction"};
        chrome.tabs.sendMessage(activeTab.id, message);
    });
}