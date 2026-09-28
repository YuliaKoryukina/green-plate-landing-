if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
document.getElementById("moon").onclick = function () {
  document.body.classList.add("dark");
  localStorage.setItem("theme", "dark");
};
document.getElementById("sun").onclick = function () {
  document.body.classList.remove("dark");
  localStorage.setItem("theme", "light");
};

document.querySelector(".burger").onclick = function () {
  document.body.classList.toggle("menu-open");
};
document.querySelector(".navigation").onclick = function () {
  document.body.classList.remove("menu-open");
};
document.onkeydown = function (e) {
  if (e.key === "Escape") document.body.classList.remove("menu-open");
};
window.onresize = function () {
  if (window.innerWidth > 768) document.body.classList.remove("menu-open");
};