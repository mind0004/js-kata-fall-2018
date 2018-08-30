"use strict";

document.querySelector("#products").addEventListener("click", showModal);

function showModal() {
  console.log("Show modal");

  document.querySelector(".popup").style.opacity = "1";
  document.querySelector(".popup").style.transition = "1s";
  document.querySelector("#luk").addEventListener("click", hideModal);
}

function hideModal() {
  console.log("Hide modal");

  document.querySelector(".popup").style.opacity = "0";
  document.querySelector(".popup").style.transition = "1s";
}
