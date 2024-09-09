document.addEventListener("DOMContentLoaded", () => {
    chrome.tabs.query({active : true, currentWindow: true } , (tabs) => {
        const currentTab = tabs[0]
        const container = document.getElementsByClassName("container")
        const butUnsub = document.getElementById("button-list");
        const butHome = document.getElementById("button-home");
        const butPostCom = document.getElementById("button-post");

        butUnsub.addEventListener("click", () => {
            console.log("fuhh")
            chrome.tabs.sendMessage(currentTab.id, { action : "startnow"}, function(response) {
                if (chrome.runtime.lastError) {
                  console.error("Message sending failed:", chrome.runtime.lastError);
                } else {
                  console.log("Response received:", response);
                }
            })
        })

        
        if(currentTab && currentTab.url.includes('youtube.com')){
            console.log("you are in youtube tab")
            if(currentTab.url === "https://www.youtube.com/feed/channels"){
                console.log("tekan button untuk unfollow all")
            }else{
                console.log("stay la dekat homepage kak..")
            }

        }else{
            container[0].classList.add("more")

            container[0].innerHTML = "<i>This is not a youtube tab</i>"
        }

        // chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
            
        //     var notifObject = {
        //         type: 'basic',
        //         iconUrl: 'icon48.png',
        //         title: 'Finish Operation',
        //         message: 'Hello sir, your entire subscriptions is already been unsubscribe.'
        //     }
    
        //     if(request.method === "finish"){
    
        //         console.log(sender.tab ? "hello this is from " + sender.tab : "failed")
                
        //         chrome.notifications.create('settledOperations' , notifObject);
    
        //         sendResponse({ patahbalik : "dah notify."})
        //     }
        // })
    })
})