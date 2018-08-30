let activeCookie = true;

document
  .querySelector("#cookies button")
  .addEventListener("click", AreCookiesAway);

function AreCookiesAway() {
  activeCookie = false;
  begoneCookies();
}

function begoneCookies() {
  if (activeCookie) {
  } else {
    cookies.style.bottom = "-100px";
  }
}
