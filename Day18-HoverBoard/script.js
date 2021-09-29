const container = document.getElementById("container");
const colors = [
    "#f6e58d",
    "#ffbe76",
    "#ff7979",
    "#badc58",
    "#dff9fb",
    "#eb4d4b",
    "#be2edd",
    "#130f40",
    "#22a6b3",
];

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.background = "#1d1d1d";
    element.style.boxShadow = "0 0 2px #000";
}

const SQUARES = 400;
for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));

    square.addEventListener("mouseout", () => removeColor(square));

    container.appendChild(square);
}
