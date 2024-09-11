document.addEventListener("DOMContentLoaded", () => {
    chrome.tabs.query({active : true, currentWindow: true } , (tabs) => {
        const currentTab = tabs[0]
        const container = document.getElementsByClassName("container")
        const butUnsub = document.getElementById("button-list");
        const butHome = document.getElementById("button-home");
        const butPostCom = document.getElementById("button-post");
        
        const goHome = () => {chrome.tabs.sendMessage(currentTab.id, { action : "gohome"})}
        butHome.addEventListener("click", goHome)

        const goCom = () => {chrome.tabs.sendMessage(currentTab.id, { action : "gocom"})}
        butPostCom.addEventListener("click", goCom)

        const startNow = () => {
            chrome.tabs.sendMessage(currentTab.id, { action : "startnow"}, function(response) {
                if (chrome.runtime.lastError) {
                  console.error("Message sending failed:", chrome.runtime.lastError);
                } else {
                        chrome.notifications.create('beginOperations' , {
                        type: 'basic',
                        iconUrl: 'images/icon48.png',
                        title: 'Finish Operation',
                        message: "Hello, sir. Your entire subscription list is currently being processed for unsubscription."
                        })
                    console.log("ni boleh ja")
                }
            })

        }

        const goList = () => {chrome.tabs.sendMessage(currentTab.id, { action : "golist"})}
        butUnsub.addEventListener("click", goList)

        
        
        if(currentTab && currentTab.url.includes('youtube.com')){
            console.log("you are in youtube tab")
            if(currentTab.url === "https://www.youtube.com/feed/channels"){
                console.log("tekan button untuk unfollow all")
                butUnsub.innerText = "Start"
                butUnsub.addEventListener("click", startNow)

            }else if(currentTab.url === "https://www.youtube.com/"){
                

            }else if(currentTab.url === "https://www.youtube.com/@Chae_boll/community"){
                console.log("anda dekat community post")
                
            }else{
                console.log("stay la dekat homepage kak..")
                
            }

        }else{
            container[0].classList.add("more")

            container[0].innerHTML = "<i>This is not a youtube tab</i>"
        }

    })
})