const lista = document.getElementById("lista");
const menu = document.getElementById("menu");
const btnClick = document.getElementById("btnClick");

btnClick.addEventListener("click", () => {
  lista.classList.toggle("flex");
});
