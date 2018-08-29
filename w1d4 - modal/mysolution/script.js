"use strict";

document.querySelector("#products").addEventListener = ("click", showModal);

function showModal() {
  document.getElementById("#modal_container").style.display = "block";
  console.log("Show modal");
}

function hideModal() {
  console.log("Hide modal");
}
