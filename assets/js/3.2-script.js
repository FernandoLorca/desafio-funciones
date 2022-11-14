"use strict";

const element = document.getElementById("ele1");

function pintar(e, color = "green") {
  e.style.backgroundColor = color;
}

element.addEventListener("click", () => {
  pintar(element, "yellow");
});
