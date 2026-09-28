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
  if (e.key === "Escape") {
    document.body.classList.remove("menu-open");
    document.body.classList.remove("modal-open");
    if (document.querySelector(".modal")) {
      document.querySelector(".modal").classList.remove("is-open");
    }
  }
};
window.onresize = function () {
  if (window.innerWidth > 768) document.body.classList.remove("menu-open");
};

const track = document.querySelector(".menu_track");
if (track) {
  let i = 0;
  const n = track.children.length;
  document.querySelector(".pagination_prev").onclick = function () {
    i = (i - 1 + n) % n;
    track.style.transform = "translateX(" + (-i * 100) + "%)";
  };
  document.querySelector(".pagination_next").onclick = function () {
    i = (i + 1) % n;
    track.style.transform = "translateX(" + (-i * 100) + "%)";
  };
}

const menuBox = document.querySelector(".menu");
const modal = document.querySelector(".modal");

if (typeof menuData !== "undefined" && menuBox && modal) {
  menuBox.innerHTML = menuData.map(function (item, i) {
    return (
      '<article class="menu_card">' +
        '<div class="menu_visual">' +
          '<img class="menu_pic" src="' + item.img + '" alt="' + item.name + '">' +
          '<div class="price-tag">' +
            '<img src="img/price.svg" alt="" class="price-tag-bg">' +
            '<p class="price">' + item.price + "</p>" +
          "</div>" +
          '<div class="calories-overlay"><span class="calories-text">' + item.kcal + "</span></div>" +
        "</div>" +
        '<div class="menu_h1">' +
          '<h2 class="menu_text-h1">' + item.name + "</h2>" +
          '<p class="text_menu-p">' + item.text + "</p>" +
          '<button class="menu_button" type="button" data-i="' + i + '">Details</button>' +
        "</div>" +
      "</article>"
    );
  }).join("");

  function closeModal() {
    modal.classList.remove("is-open");
    document.body.classList.remove("modal-open");
  }

  menuBox.onclick = function (e) {
    const btn = e.target.closest(".menu_button");
    if (!btn) return;
    const item = menuData[btn.dataset.i];
    document.querySelector(".modal_img").src = item.img;
    document.querySelector(".modal_img").alt = item.name;
    document.querySelector(".modal_title").textContent = item.name;
    document.querySelector(".modal_text").textContent = item.text;
    document.querySelector(".modal_price").textContent = item.price;
    document.querySelector(".modal_kcal").textContent = item.kcal;
    modal.classList.add("is-open");
    document.body.classList.add("modal-open");
  };

  document.querySelector(".modal_close").onclick = closeModal;
  modal.onclick = function (e) {
    if (e.target === modal) closeModal();
  };
}