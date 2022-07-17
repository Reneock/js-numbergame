let para = document.getElementById("text");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");
let main = document.getElementById("main");
let random = Math.floor(Math.random() * 50) + 1;
console.log(random);
btn.addEventListener("click", function () {
    let inputVal = input.value;
    if (random == inputVal) {
        para.innerHTML = "your guess is right";
        para.style.backgroundColor = "green";
        main.style.backgroundColor = "crimson";
        para.classList.add("win");
    } else if (inputVal < random && inputVal >= 1) {
        para.innerHTML = "your guess is too low";
        para.style.backgroundColor = "red";
        main.style.backgroundColor = "crimson";
    } else if (inputVal > 51) {
        para.innerHTML = "Guess again , this time between 1 and 50";
        para.style.backgroundColor = "grey";
        main.style.backgroundColor = "black";
    } else if (inputVal > random) {
        para.innerHTML = "your guess is too high";
        para.style.backgroundColor = "blue";
        main.style.backgroundColor = "yellow";
    } else if (isNaN(inputVal)) {
        para.innerHTML = "are you lost ? enter a number";
    } else {
        para.innerHTML = "come try again next time :angry:";
    }
});
btn1.addEventListener("click", function () {
    location.reload();
});