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
  health -= 20
  document.getElementById("health-status").innerText = health.toString()
}

function kick() {
  health -= 20
  document.getElementById("health-status").innerText = health.toString()
}

function slap() {
  health -= 10
  document.getElementById("health-status").innerText = health.toString()
}

function tomato() {
  health += 10
  document.getElementById("health-status").innerText = health.toString()
}

function onion() {
  health += 5
  document.getElementById("health-status").innerText = health.toString()
}

function lettuce() {
  health += 4
  document.getElementById("health-status").innerText = health.toString()
}

function update() {
  var healthElem = document.getElementById("health");
}

function reset() {
  health = 100
  document.getElementById("health-status").innerText = health.toString()
}
