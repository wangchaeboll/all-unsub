document.addEventListener("DOMContentLoaded", () => {
    chrome.tabs.query({active : true, currentWindow: true } , (tabs) => {
        const currentTab = tabs[0]
        const container = document.getElementsByClassName("container")

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
    })
})