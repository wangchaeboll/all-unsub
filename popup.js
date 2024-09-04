document.addEventListener("DOMContentLoaded", () => {
    chrome.tabs.query({active : true, currentWindow: true } , (tabs) => {
        const currentTab = tabs[0]
        const container = document.getElementsByClassName("container")

        if(currentTab && currentTab.url.includes('youtube.com')){
            console.log("you are in youtube tab")
            container[0].innerHTML = `<i>Hello youtube</i>`
        }else{
            console.log(container)
            container[0].innerText = "This is not a youtube tab"
            console.log("you are not in youtube tabs")
        }
    })
})