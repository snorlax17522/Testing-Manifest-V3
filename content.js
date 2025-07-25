let ytmusicPlayerBar

let waitForPlayerBarInterval = setInterval(() => {

    if (document.querySelector("ytmusic-player-bar")) {
        ytmusicPlayerBar = document.querySelector("ytmusic-player-bar")
        clearInterval(waitForPlayerBarInterval)
        getInfo()
    }

}, 1000)

function getInfo() {

    let getInfoInterval = setInterval(() => {
        console.log(ytmusicPlayerBar.innerHTML);/*
        if (ytmusicPlayerBar.querySelector(".title").innerText != null) {

            song = "No song name found";
            artist = "No artist name found"
            albumName = "No album name found"
            albumCover = "No album cover found"
            time = "No time"

          /*  
          if (titleElement && titleElement.innerText !== undefined) {
                song = titleElement.innerText;
            }

            if(ytmusicPlayerBar.querySelector("a").innerText != undefined){
                artist = ytmusicPlayerBar.querySelector("a").innerText
            }

            if(ytmusicPlayerBar.querySelector("a").innerText != undefined){
                albumName = ytmusicPlayerBar.querySelector("a").innerText
            }

            if(ytmusicPlayerBar.querySelector(".image").innerText != undefined){
                albumCover = ytmusicPlayerBar.querySelector(".image").innerText
            }else{
                albumCover = "No album cover found"
            }

            if(ytmusicPlayerBar.querySelector(".time-info").innerText != undefined){
                time = ytmusicPlayerBar.querySelector(".time-info").innerText
            }else{
                time = "No time"
            }
                

            

            let info = {
                song: song,
                artist: artist,
                albumName: albumName,
                albumCover: albumCover,
                time: time,
            }
            console.log(info)
            chrome.runtime.sendMessage(info)

        } else {
            console.log("Nothing is playing.")
            chrome.runtime.sendMessage(info)
        }
            */
    }, 1000)

}