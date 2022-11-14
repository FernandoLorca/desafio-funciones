"use strict";

const element = document.getElementById("ele1");

function pintar(ele) {
  ele.style.backgroundColor = "yellow";
}

element.addEventListener("click", () => {
  pintar(element);
});
