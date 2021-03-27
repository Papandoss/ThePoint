// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.

// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)

import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
// import "../../node_modules/popper.js/dist/popper.min.js";

//import "../../node_modules/bootstrap/js/dist/util.js";
//import "../../node_modules/bootstrap/js/dist/modal.js";

/////custom js/////

let btnMenu = document.querySelector(".mobheader__btn");
let navmenu = document.querySelector(".menu");
let burger = document.querySelector(".mobheader__span");
const Md = window.matchMedia("(min-width: 992px)");

btnMenu.onclick = function () {
  btnMenu.classList.toggle("active");
  burger.classList.toggle("active");
  navmenu.classList.toggle("menu");
  navmenu.classList.toggle("menu-mob");
};

function showMenu() {
  if (Md.matches) {
    navmenu.classList.remove("menu-mob");
    navmenu.classList.add("menu");
    btnMenu.classList.remove("active");
    burger.classList.remove("active");
  }
}

showMenu();
window.addEventListener("resize", showMenu, false);
