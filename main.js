const title = document.querySelector("h1");
const box = document.querySelector("div");

title.innerHTML = "";

const maxHeight = box.clientHeight;
const maxWidth = box.clientWidth;

title.style.position = "relative";
box.style.position = "relative";

let topPosTitle = 0;
let leftPosTitle = 0;

let topPosBox = 0;
let leftPosBox = 0;

let forceHTitle = -1.25;
let forceWTitle = -1.25;

let forceHBox = -2;
let forceWBox = -2;

function animation(){
    /*** TITLE MOVE */
    if (topPosTitle <= 0) {
        forceHTitle *= -1; 
    }
    else if (topPosTitle + title.offsetHeight >= maxHeight) {
        forceHTitle *= -1;
    }

    if (leftPosTitle <= 0) { 
        forceWTitle *= -1;
    }
    else if (leftPosTitle + title.offsetWidth >= maxWidth) {
        forceWTitle *= -1;
    }

    topPosTitle += forceHTitle;
    leftPosTitle += forceWTitle;


    title.style.top = topPosTitle + "px";
    title.style.left = leftPosTitle + "px";


    /*** BOX MOVE */
    if (topPosBox <= 0) {
        forceHBox *= -1;
    }
    else if (topPosBox + box.offsetHeight >= window.innerHeight) {
        forceHBox *= -1;
    }

    if (leftPosBox <= 0) { 
        forceWBox *= -1;
    }
    else if (leftPosBox + box.offsetWidth >= window.innerWidth) {
        forceWBox *= -1;
    }
    box.style.top = topPosBox + "px";
    box.style.left = leftPosBox + "px";

    topPosBox += forceHBox;
    leftPosBox += forceWBox;
    

    requestAnimationFrame(animation);
}

addEventListener("keypress", function(event) {
    if (event['key'] !== "Enter")
        title.innerHTML += event['key'];
});

addEventListener("keydown", function(event) {
    if (event['key'] === "Backspace")
        title.innerHTML.substring(1, title.innerHTML.length - 1)
});

requestAnimationFrame(animation);