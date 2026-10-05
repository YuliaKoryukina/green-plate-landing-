document.getElementById("moon").onclick = function () {
    document.body.classList.add("dark");
  };
  document.getElementById("sun").onclick = function () {
    document.body.classList.remove("dark");
  };
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