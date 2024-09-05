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
            if (dropBoxx && !dropBoxx.hasAttribute("aria-hidden") ){
                res("first wave succeed")
            }else{
                rej("first wave failed")
            }
        })
    }

    const konfurm = () => {
        const muncul = document.getElementById("main")
        return new Promise((res, rej) => {
            if (muncul && !muncul.hasAttribute("aria-hidden") ){
                res("second wave succeed")
            }else{
                rej("second wave failed")
            }
        })
    }

    // function yang process aync await
    const start = async () => {

        for (const elem of alam){
            // unsub tray
            elem.querySelector("#notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill").click();
            const resultsatu = await dropBox()
            // 4th child
            document.querySelector("#items > ytd-menu-service-item-renderer:nth-child(4) > tp-yt-paper-item").click()
            // const resultdua = await konfurm()
            // confirm 
            // document.querySelector("#confirm-button > yt-button-shape > button > yt-touch-feedback-shape > div").click()


        }
    }

    if(alam){
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




const elem = document.querySelectorAll("#grid-container > ytd-channel-renderer") 


const dropBox = () => { 
        console.log("hello")
        return new Promise( (res,rej) => {
            const dropBoxx = document.querySelector("body > ytd-app > ytd-popup-container > tp-yt-iron-dropdown")
            if (dropBoxx && !dropBoxx.hasAttribute("aria-hidden") ){
                console.log("yeayy")
                res("first wave succeed")
            }else{
                console.log("nonnononno")
                rej("first wave failed")
            }
        })
}

const getDropAttribute = () => {
    const dropBoxx = document.querySelector("body > ytd-app > ytd-popup-container > tp-yt-iron-dropdown")
    if (dropBoxx && !dropBoxx.hasAttribute("aria-hidden") ){
        console.log("yeayy")
        return true
    }else{
        console.log("nonnononno")
       return false
    }
}

function next() {
    elem[1].querySelector("#notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill").click();
    setTimeout( () => getDropAttribute(), 500)
    await 
    if(getDropAttribute === true){
        console.log("tunggu")
    }else{
        console.log("tak tunggu")
    }

}

next()