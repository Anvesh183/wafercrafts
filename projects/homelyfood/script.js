"use strict";

const learnMore = document.querySelector(".learn-more");
const overlay = document.querySelector(".overlay");
const btnLearnMore = document.querySelector(".button-learn-more");
const btnClose = document.querySelector(".close-btn");

const onClickLearnMore = function () {
  learnMore.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const onClickCloseButton = function () {
  learnMore.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnLearnMore.addEventListener("click", onClickLearnMore);
btnClose.addEventListener("click", onClickCloseButton);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !learnMore.classList.contains("hidden")) {
    onClickCloseButton();
  }
});
