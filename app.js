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

function moveElement (div) {
    let randomNumberForTop = generateRandomNumber(1, 750);
    let randomNumberForLeft = generateRandomNumber(1, 1500);

    setTimeout(function () {
        div.style.marginTop = randomNumberForTop + "px";
        div.style.marginLeft = randomNumberForLeft + "px";
    }, time);
}

principal.addEventListener("click", generateRandomDiv);