"use strict";

const detailsForm = document.querySelector(".cta-form");
const overlay = document.querySelector(".overlay");
const btndetailsForm = document.querySelector(".cta-consult-now-btn");
const btnClose = document.querySelector(".close-btn");
const navBar = document.querySelector(".nav-bar");
const presentYear = document.querySelector(".present-year");

const currentYear = new Date().getFullYear();
presentYear.textContent = currentYear;

window.onscroll = function () {
  // if (window.pageYOffset > 590) {
  //   navBar.classList.remove("top");
  // } else {
  //   navBar.classList.add("top");
  // }

  window.pageYOffset > 590
    ? navBar.classList.remove("top")
    : navBar.classList.add("top");
};

const onClickdetailsForm = function () {
  detailsForm.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const onClickCloseButton = function () {
  detailsForm.classList.add("hidden");
  overlay.classList.add("hidden");
};

btndetailsForm.addEventListener("click", onClickdetailsForm);
btnClose.addEventListener("click", onClickCloseButton);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !detailsForm.classList.contains("hidden")) {
    onClickCloseButton();
  }
});
