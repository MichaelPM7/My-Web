window.onscroll = scrollBar = () => {
  let scroll = document.documentElement.scrollTop;
  let header = document.getElementById("header");
  let nav = document.getElementById("header__nav");

  if (scroll > 15) {
    header.classList.add("header__modification");
    nav.classList.add("header__nav--modificador");
  } else if (scroll < 15) {
    header.classList.remove("header__modification");
    nav.classList.remove("header__nav--modificador");
  }
};

document.getElementById("header__btn-menu").addEventListener("click", mostrar_menu);

let menu = document.getElementById("header__container");
let nav = document.getElementById("header__nav");

function mostrar_menu() {
  menu.classList.toggle("move__content");
  nav.classList.toggle("move__nav");
}
