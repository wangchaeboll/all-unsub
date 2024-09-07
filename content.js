// const a = document.querySelectorAll("#grid-container > ytd-channel-renderer") 
// return a node-list 
// a.forEach( b => {
//     b.document.querySelector("#notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill").addEventListener("contextmenu", e => e.preventDefault())
// })



// window.addEventListener("load", () => {
//     const alam = document.querySelectorAll("#grid-container > ytd-channel-renderer") 

//     // function yang trigger promise
//     const dropBox = () => {
//         return new Promise( resolve => {
//             setTimeout(() => { 
//                 const dropBoxx = document.querySelector("body > ytd-app > ytd-popup-container > tp-yt-iron-dropdown")
//                 if (dropBoxx && !dropBoxx.hasAttribute("aria-hidden") ){
//                     resolve("first wave succeed")
//                 }else{
//                     return
//                 }
//             })
//         })
//     }

//     const konfurm = () => {
//         const muncul = document.getElementById("main")
//         return new Promise(res => {
//             setTimeout ( () => {
//                 const muncul = document.getElementById("main")
//                 if (muncul && !muncul.hasAttribute("aria-hidden") ){
//                     res("second wave succeed")
//                 }else{
//                     return
//                 }
//             }, 1500)
//         })
//     }

//     // function yang process aync await
//     const start = async () => {

//         for (const elem of alam){
//             // unsub tray
//             elem.querySelector("#notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill").click();
//             await dropBox()
//             document.querySelector("#items > ytd-menu-service-item-renderer:nth-child(4) > tp-yt-paper-item").click()
//             await konfurm()
//             // confirm 
//             document.querySelector("#confirm-button > yt-button-shape > button > yt-touch-feedback-shape > div").click()


//         }
//     }

//     if(alam){
//         setTimeout(() => {
//             start()
//         }, 400)

//     }

// })



// const a = document.querySelector("body > ytd-app > ytd-popup-container > tp-yt-iron-dropdown")

// const button = document.querySelector("#notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape")

// button.addEventListener("click", () => {
//     if ( a && a.hasAttribute("aria-hidden")){
//         console.log("ade")
//     }else{
//         console.log("tak tekan")
//     }
// })

// const a = document.querySelector("body > ytd-app > ytd-popup-container > tp-yt-iron-dropdown")

// console.log(a)




// const elem = document.querySelectorAll("#grid-container > ytd-channel-renderer") 


// const dropBox = () => { 
//         console.log("hello")
//         return new Promise( (res,rej) => {
//             const dropBoxx = document.querySelector("body > ytd-app > ytd-popup-container > tp-yt-iron-dropdown")
//             if (dropBoxx && !dropBoxx.hasAttribute("aria-hidden") ){
//                 console.log("yeayy")
//                 res("first wave succeed")
//             }else{
//                 console.log("nonnononno")
//                 rej("first wave failed")
//             }
//         })
// }

// const getDropAttribute = () => {
//     const dropBoxx = document.querySelector("body > ytd-app > ytd-popup-container > tp-yt-iron-dropdown")
//     if (dropBoxx && !dropBoxx.hasAttribute("aria-hidden") ){
//         console.log("yeayy")
//         return true
//     }else{
//         console.log("nonnononno")
//        return false
//     }
// }

// function next() {
//     elem[1].querySelector("#notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill").click();
//     setTimeout( () => getDropAttribute(), 500)
//     await 
//     if(getDropAttribute === true){
//         console.log("tunggu")
//     }else{
//         console.log("tak tunggu")
//     }

// }

// next()

window.addEventListener("load" , () => {

    const nodeList = document.querySelectorAll("#grid-container > ytd-channel-renderer") 
    
    
    console.log(nodeList)
    
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    
    
    // function yang trigger promise
    const dropBox = () => {
        return new Promise( resolve => {
            setTimeout(() => { 
                const dropBoxx = document.querySelector("body > ytd-app > ytd-popup-container > tp-yt-iron-dropdown")
                if (dropBoxx && !dropBoxx.hasAttribute("aria-hidden") ){
                    resolve("first wave succeed")
                }else{
                    return
                }
            }, 500)
        })
    }
    
    const konfurm = () => {
        const muncul = document.getElementById("main")
        return new Promise(res => {
            setTimeout ( () => {
                const muncul = document.getElementById("main")
                if (muncul && !muncul.hasAttribute("aria-hidden") ){
                    res("second wave succeed")
                }else{
                    return
                }
            }, 500)
        })
    }
    
    const start = async () => {
    
            for (const elem of nodeList){
                elem.querySelector("#notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill").click();
                await dropBox()
                document.querySelector("#items > ytd-menu-service-item-renderer:nth-child(4) > tp-yt-paper-item").click()
                await konfurm()
                // confirm 
                document.querySelector("#confirm-button > yt-button-shape > button > yt-touch-feedback-shape > div").click()
    
                await delay(200);
            }
    
            chrome.runtime.sendMessage({ method : "finish" })
    }

    // chrome.onUpdate.onMessage

})
