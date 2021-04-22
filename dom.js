let colors = ["yellow", "white", "green", "black", "orange", "lightblue", "pink"];

let button =  document.getElementById("btn");

button.style.color = colors[Math.floor(Math.random() * colors.length)];

document.body.style.backgroundColor = "lightblue";

function changeFunction() {
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}