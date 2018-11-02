const slaps = document.getElementById("slap-button");
const kicks = document.getElementById("kick-button");
const punch = document.getElementById("punch-button");

var health = 100

let evilHamburger = {
  name: "evil hamburger",
  levels: ["normal", "moderatlely hurt", "very hurt", "morgue"],
  levelimage: ["https://static1.fjcdn.com/comments/I+havent+had+a+mcdonalds+burger+in+at+least+3+_e83fd1ea7af4ab5f68ca0c6ef7d948d0.jpg"],
  health: 100,
  slap: 0,
  tolerance: 3,
  level: "base"
}

let evilHamburger2 = {
  name: "evil hamburger two",
  levels: ["normal", "moderatlely hurt", "very hurt", "morgue"],
  levelimage: [],
  health: 90,
  slap: 0,
  tolerance: 3,
  level: "base"
}
