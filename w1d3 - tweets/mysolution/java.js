let tweets;

document.addEventListener("DOMContentLoaded", init);

async function init() {
  let jsonData = await fetch("https://kea-alt-del.dk/twitter/api/");
  tweets = await jsonData.json();

  displayTweets(tweets);
}

function displayTweets(tweets) {
  console.log("tweets");

  let temp = document.querySelector("#tweet-template");
  let dest = document.querySelector("#tweet-container");

  tweets.statuses.forEach(tweet => {
    let clone = temp.cloneNode(true).content;

    clone.querySelector(".tweet-date").textContent = tweet.created_at;
    clone.querySelector(".tweet-user").textContent = tweet.user.name;
    clone.querySelector(".tweet-text").textContent = tweet.text;

    dest.appendChild(clone);
  });
}
