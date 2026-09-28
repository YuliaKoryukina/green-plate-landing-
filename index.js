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
  if (typeof renderMenu === "function") renderMenu();
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

const modal = document.querySelector(".modal");

function openModal(item) {
  if (!modal || !item) return;
  document.querySelector(".modal_img").src = item.img;
  document.querySelector(".modal_img").alt = item.name;
  document.querySelector(".modal_title").textContent = item.name;
  document.querySelector(".modal_text").textContent = item.text;
  document.querySelector(".modal_price").textContent = item.price;
  document.querySelector(".modal_kcal").textContent = item.kcal;
  modal.classList.add("is-open");
  document.body.classList.add("modal-open");
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove("is-open");
  document.body.classList.remove("modal-open");
}

if (modal) {
  document.querySelector(".modal_close").onclick = closeModal;
  modal.onclick = function (e) {
    if (e.target === modal) closeModal();
  };
}

if (track) {
  track.onclick = function (e) {
    const card = e.target.closest(".menu_card");
    if (!card) return;
    openModal(menuData[card.dataset.i]);
  };
}

const menuBox = document.querySelector(".menu_cats") && document.querySelector(".our_menu .menu");
let renderMenu;

if (typeof menuData !== "undefined" && menuBox && modal && document.querySelector(".menu_cats")) {
  let category = "Vegan";
  let page = 1;

  function perPage() {
    return window.innerWidth > 768 ? 3 : 2;
  }

  function cardHtml(item, i) {
    return (
      '<article class="menu_card" data-i="' + i + '">' +
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
          '<button class="menu_button" type="button">Details</button>' +
        "</div>" +
      "</article>"
    );
  }

  renderMenu = function () {
    const ids = [];
    for (let i = 0; i < menuData.length; i++) {
      if (menuData[i].category === category) ids.push(i);
    }
    const size = perPage();
    const pages = Math.ceil(ids.length / size) || 1;
    if (page > pages) page = 1;
    const start = (page - 1) * size;
    const show = ids.slice(start, start + size);
    menuBox.innerHTML = show.map(function (i) {
      return cardHtml(menuData[i], i);
    }).join("");

    const pag = document.querySelector(".pagination--menu");
    const nums = document.querySelector(".pagination_nums");
    if (pages < 2) {
      pag.classList.add("is-hidden");
      return;
    }
    pag.classList.remove("is-hidden");
    nums.innerHTML = "";
    for (let n = 1; n <= pages; n++) {
      nums.innerHTML +=
        '<button class="pagination_num' +
        (n === page ? " is-active" : "") +
        '" type="button" data-page="' + n + '">' + n + "</button>";
    }
  };

  document.querySelectorAll(".menu_cat").forEach(function (btn) {
    btn.onclick = function () {
      document.querySelector(".menu_cat.is-active").classList.remove("is-active");
      btn.classList.add("is-active");
      category = btn.textContent.trim();
      page = 1;
      renderMenu();
    };
  });

  document.querySelector(".pagination_nums").onclick = function (e) {
    const num = e.target.closest(".pagination_num");
    if (!num) return;
    page = Number(num.dataset.page);
    renderMenu();
  };

  document.querySelector(".pagination--menu .pagination_prev").onclick = function () {
    if (page > 1) {
      page -= 1;
      renderMenu();
    }
  };

  document.querySelector(".pagination--menu .pagination_next").onclick = function () {
    const count = menuData.filter(function (item) {
      return item.category === category;
    }).length;
    if (page < Math.ceil(count / perPage())) {
      page += 1;
      renderMenu();
    }
  };

  menuBox.onclick = function (e) {
    const card = e.target.closest(".menu_card");
    if (!card) return;
    openModal(menuData[card.dataset.i]);
  };

  renderMenu();
}