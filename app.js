let body = document.body;
let all = document.querySelector("#all");
let time = 50;
let principal = document.querySelector("#principal");

function generateRandomColor() {
    let r = generateRandomNumber(1, 255);
    let g = generateRandomNumber(1, 255);
    let b = generateRandomNumber(1, 255);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandomNumber (min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}

function generateRandomDiv () {
    principal.style.display = "none";
    let width = generateRandomNumber(1, 75);
    let div = document.createElement("div");

    div.style.height = width + "px";
    div.style.width = width + "px";
    div.style.borderRadius = generateRandomNumber(1, 50) + "%";
    div.style.background = generateRandomColor();
    div.style.position = "absolute";
    div.style.transition = "5s";

    moveElement(div);
    all.appendChild(div);
    setTimeout(generateRandomDiv, time);
}

function alignItem (div) {
    let randomHeight = Math.floor((Math.random() * 2) + 1);
    let randomWidth = Math.floor((Math.random() * 2) + 1);

    let windowWidth = window.innerWidth / 2;
    let windowHeight = window.innerHeight / 2;
    let randomNumberForTop = generateRandomNumber(1, windowHeight - 75);
    let randomNumberForLeft = generateRandomNumber(1, windowWidth - 75);

    if (randomHeight == 1) {
        //left
        if (randomWidth == 1) {
            //bottom
            div.style.marginLeft = randomNumberForTop + "px";
            div.style.marginBottom = randomNumberForLeft + "px";
        } else {
            //top
            div.style.marginLeft = randomNumberForTop + "px";
            div.style.marginTop = randomNumberForLeft + "px";
        } 
    } else {
        //right
        if (randomWidth == 1) {
            //bottom
            div.style.marginRight = randomNumberForTop + "px";
            div.style.marginBottom = randomNumberForLeft + "px";
        } else {
            //top
            div.style.marginRight = randomNumberForTop + "px";
            div.style.marginTop = randomNumberForLeft + "px";
        } 
    }
}

function moveElement (div) {
    setTimeout(alignItem(div), time);
}

principal.addEventListener("click", generateRandomDiv);