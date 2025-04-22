//Mouse Status on Navigation
var mouse = false

function mouseStatus(n) {
    mouse = n
}

//Seconds
const seconds = document.getElementById("seconds")
var secondToggle = 1
function secondstoggle() {
    secondToggle ? secondToggle=0 : secondToggle=1
}
seconds.addEventListener("click",secondstoggle)

//Basic Functionality
function updateTime() {
    let now = new Date()

    let hours = (now.getHours() < 10 ? '0' : '') + now.getHours()
    let minutes = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes()
    let seconds = (now.getSeconds() < 10 ? '0' : '') + now.getSeconds()

    if (secondToggle==1) {
        document.getElementById("clock").innerHTML = `${hours}:${minutes}:${seconds}`
    }
    else if (secondToggle==0) {
        document.getElementById("clock").innerHTML = `${hours}:${minutes}`
    }
}
setInterval(updateTime, 1000)
updateTime()

//Zen Mode
var doc = document.documentElement
const zen = document.getElementById("zen")

function zenmode() {
    //Fullscreen on
    if (doc.requestFullscreen) {
        doc.requestFullscreen();
    } 
    else if (doc.webkitRequestFullscreen) {
        doc.webkitRequestFullscreen();
    } 
    else if (doc.msRequestFullscreen) {
        doc.msRequestFullscreen();
    }

    //Fullscreen off
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

zen.addEventListener("click", zenmode)

//Style
let fonts = ["Limelight", "Notable", "League Script", "Lexend", "Michroma", "Rubik Glitch"]
let index = 0
const style = document.getElementById("style")

function styleshift() {
    const clock = document.getElementById("clock")

    clock.style.opacity = 0;

    setTimeout(() => {
        index = (index + 1) % fonts.length;
        clock.style.fontFamily = fonts[index];
        clock.style.opacity = 1;
    }, 200);
}
style.addEventListener("click",styleshift)

//Theme
const theme = document.getElementById("theme")
function switcheroo() {
    const page = document.body
    if (page.style.backgroundColor == "white") {
        page.style.backgroundColor = "black"
        page.style.color = "white"
    }
    else {
        page.style.backgroundColor = "white"
        page.style.color = "black"
    }
}
theme.addEventListener("click", switcheroo)

//Navigation Bar Disappearing on Idle
let idleTimer = null;
let idleState = false;

function toggleNavigationDisplay(time) {
    clearTimeout(idleTimer);
    if (idleState == true) {
        document.getElementById("navigation").classList.remove("navigation-inactive")
    }
    idleState = false;
    
    idleTimer = setTimeout(function() {
        if (!mouse) {
        document.getElementById("navigation").classList.add("navigation-inactive")
        idleState = true;
        }
    }, time);

}

toggleNavigationDisplay(2000);

document.documentElement.addEventListener("mousemove",function(){
    toggleNavigationDisplay(2000);
});