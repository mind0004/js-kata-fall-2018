document.addEventListener("DOMContentLoaded", fetchstuff);

async function fetchstuff() {
  let jsonObjekt = await fetch("https://kea-alt-del.dk/twitter/api");
  let tweets = await jsonObjekt.json();

  let template = document.querySelector("#myTemplate").content;
  let clone = template.cloneNode(true);

  tweets.forEach(madret => {
    klon("[data-overskrift2]").innerHTML = tweets.statuses.text;

    dest.appendChild(klon);
  });

  document.querySelector("[data-overskrift2]").innerHTML = tweets.statuses.text;
}
