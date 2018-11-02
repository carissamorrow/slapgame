// var titleElem = document.getElementById("title");
// var slapsElem = document.getElementById("slap-button");
// var kicksElem = document.getElementById("kick-button");
// var punchElem = document.getElementById("punch-button");
// var healthElem = document.getElementById("get health");
// var hitsElem = document.getElementById("get-hits")


let evilHamburger = {
  name: "mr. evil",
  attacks: {
    punch: 0,
    kicks: 0,
    slap: 0,
    health: 100
  },
  modifiers: []
}

function totalItems() {
  let total = 0
  for (let i = 0; i < evilHamburger.modifiers.length; i++) {
    let modifier = evilHamburger.modifiers[i];
    total += modifier
  }
  return total
}

function punch() {
  evilHamburger.health = 20 + totalItems()
  document.getElementById("health-status").innerText = evilHamburger.health.toString()
  endGame();
}

function kick() {
  evilHamburger.health = 10 + totalItems()
  document.getElementById("health-status").innerText = evilHamburger.health.toString()
  endGame();
}

function slap() {
  evilHamburger.health = 20 + totalItems()
  evilHamburger.modifiers.push(-1)
  document.getElementById("health-status").innerText = evilHamburger.health.toString()
  endGame();
}

function tomato() {
  evilHamburger.modifiers.push(-1)
}


function onion() {
  evilHamburger.modifiers.push(-1)
}

function lettuce() {
  evilHamburger.modifiers.push(-1)
}

function update() {
  var healthElem = document.getElementById("health");
}

function reset() {
  evilHamburger.health = 100
  document.getElementById("health-status").innerText = evilHamburger.health.toString()
  document.getElementById("end-game").innerText = ""
}
function endGame() {
  if (evilHamburger.health <= 0) {
    evilHamburger.health = 0
    document.getElementById("end-game").innerText = "Game Over"
  }
}
