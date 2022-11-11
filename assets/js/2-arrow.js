const suma = (a, b) => {
  return a + b;
};

ele = document.getElementById("ele1");

function pintar() {
  ele.style.backgroundColor = "yellow";
}
ele.addEventListener("click", pintar);
