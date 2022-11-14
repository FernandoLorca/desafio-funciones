"use strict";

const element = document.getElementById("ele1");

function pintar(e) {
  e.style.backgroundColor = "yellow";
}

element.addEventListener("click", pintar);
