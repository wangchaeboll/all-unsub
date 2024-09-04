// const a = document.querySelectorAll("#grid-container > ytd-channel-renderer") 
// return a node-list 
document.querySelector("#notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill")

a.forEach( b => {
    b.addEventListener("contextmenu", e => e.preventDefault())
})

const a = document.querySelectorAll("#grid-container > ytd-channel-renderer") 

a.forEach( b => {
    b.document.querySelector("#notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill").addEventListener("contextmenu", e => e.preventDefault())
})