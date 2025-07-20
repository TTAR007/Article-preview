const authorContainer = document.getElementById("author-container");
const authorInfo = document.querySelectorAll(".author-info");
const shareBtn = document.getElementById("share-button-container");
const shareInfo = document.querySelectorAll(".share");
const shareDesktop = document.getElementById("share-desktop-container");

// listen for the width of browser
addEventListener("resize", function() {
    if (window.innerWidth < 750) {
        closeShareDesktop();
    } else {
        closeShareMobile();
    }
})

// variable to count click
let countClick = 0;

shareBtn.addEventListener("click", (eventObj) => {
    // if window width is < 750 px
    if (window.innerWidth < 750) {
        if (countClick > 0) {
            closeShareMobile();
        } else {
            openShareMobile();
        }
        
    } else { // if width >= 750
        if (countClick > 0) {
            //check if it is a share button (because share info is also a child of share button)
            if (eventObj.target.id === "share-button-container" || eventObj.target.id === "icon-share") {
                closeShareDesktop();
            }
        } else {
            openShareDesktop();
        }
    }
})

authorContainer.addEventListener("mouseleave", () => {
    // for closing (mobile)
    if (window.innerWidth < 750) {
        closeShareMobile();
    }
})

shareDesktop.addEventListener("mouseleave", () => {
    closeShareDesktop();
})


// all functions
function openShareMobile() {
    //change color of share button
    shareBtn.style.backgroundColor = "hsl(214, 17%, 51%)";
    shareBtn.firstElementChild.style.filter = "brightness(0) invert(1)";

    //change author-container background color
    authorContainer.style.backgroundColor = "hsl(217, 19%, 35%)";

    //hide author information
    authorInfo.forEach((info) => {
        info.classList.add("close-author");
    })

    //display share info
    shareInfo.forEach((info) => {
        info.classList.remove("close-share");
    })

    countClick++;
}

function closeShareMobile() {
    //close
    // remove style attribute that I have added
    shareBtn.removeAttribute("style");
    shareBtn.firstElementChild.removeAttribute("style");
    authorContainer.removeAttribute("style");

    // display author information
    authorInfo.forEach((info) => {
        info.classList.remove("close-author");
    })

    // hide share info
    shareInfo.forEach((info) => {
        info.classList.add("close-share");
    })

    countClick = 0;
}

function openShareDesktop() {
    //change color of share button
    shareBtn.style.backgroundColor = "hsl(214, 17%, 51%)";
    shareBtn.firstElementChild.style.filter = "brightness(0) invert(1)";

    //display share info
    shareDesktop.classList.remove("close-share-desktop")

    countClick++;
}

function closeShareDesktop() {
    //hide share info
    shareDesktop.classList.add("close-share-desktop")

    // remove style attribute that I have added
    shareBtn.removeAttribute("style");
    shareBtn.firstElementChild.removeAttribute("style");
    
    countClick = 0;
}