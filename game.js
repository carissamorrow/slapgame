// var titleElem = document.getElementById("title");
// var slapsElem = document.getElementById("slap-button");
// var kicksElem = document.getElementById("kick-button");
// var punchElem = document.getElementById("punch-button");
// var healthElem = document.getElementById("get health");
// var hitsElem = document.getElementById("get-hits")

let health = 100

let evilHamburger = {
  name: "mr. evil",
  attacks: {
    punch: 0,
    kicks: 0,
    slap: 0,
  },
}

function punch() {
  if (health >= 20) {
    health -= 20
    document.getElementById("health-status").innerText = health.toString()
  }
  endGame();
}

function kick() {
  if (health >= 10) {
    health -= 10
    document.getElementById("health-status").innerText = health.toString()
  }
  endGame();
}

function slap() {
  if (health >= 20) {
    health -= 20
    document.getElementById("health-status").innerText = health.toString()
  }
  endGame();
}

function tomato() {
  if (health < 100) {
    health += 5
    document.getElementById("health-status").innerText = health.toString()
  }
}

function onion() {
  if (health < 99) {
    health += 10
    document.getElementById("health-status").innerText = health.toString()
  }
}

function lettuce() {
  if (health < 99) {
    health += 10
    document.getElementById("health-status").innerText = health.toString()
  }
}

function update() {
  var healthElem = document.getElementById("health");
}

function reset() {
  health = 100
  document.getElementById("health-status").innerText = health.toString()
}
function endGame() {
  if (health <= 0) {
    document.getElementById("end-game").innerText = ""
  }
}
