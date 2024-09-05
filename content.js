// const a = document.querySelectorAll("#grid-container > ytd-channel-renderer") 
// return a node-list 
// a.forEach( b => {
//     b.document.querySelector("#notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill").addEventListener("contextmenu", e => e.preventDefault())
// })



window.addEventListener("load", () => {
    const alam = document.querySelectorAll("#grid-container > ytd-channel-renderer") 

    // function yang trigger promise
    const dropBox = () => {
        const dropBoxx = document.querySelector("body > ytd-app > ytd-popup-container > tp-yt-iron-dropdown")
        return new Promise( (res,rej) => {
            if (dropBoxx.hasAttribute("aria-hidden") && dropBox){
                res()
            }else{
                rej()
            }
        })
    }

    // function yang process aync await
    const start = async () => {

        for (const elem of alam){
            elem.querySelector("#notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill").click();
            await dropBox()
            document.querySelector("#items > ytd-menu-service-item-renderer:nth-child(4) > tp-yt-paper-item").click()
            await
            document.querySelector("#confirm-button > yt-button-shape > button > yt-touch-feedback-shape > div").click()
        }
    }

    if(a){
        setTimeout(() => {
            start()
        }, 400)

    }

})

const a = document.querySelector("body > ytd-app > ytd-popup-container > tp-yt-iron-dropdown")

const button = document.querySelector("#notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape")

button.addEventListener("click", () => {
    if ( a && a.hasAttribute("aria-hidden")){
        console.log("ade")
    }else{
        console.log("tak tekan")
    }
})

const a = document.querySelector("body > ytd-app > ytd-popup-container > tp-yt-iron-dropdown")

console.log(a)