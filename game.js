let evilHamburger = {
  name: "mr. evil",
  attacks: {
    punch: 0,
    kicks: 0,
    slap: 0,
  },
  health: 100,
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
  evilHamburger.health -= 20 + totalItems()
  update();
}

function kick() {
  evilHamburger.health -= 10 + totalItems()
  update()
}

function slap() {
  evilHamburger.health -= 20 + totalItems()
  update();
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
  endGame();
  document.getElementById("health-status").innerText = evilHamburger.health.toString()
}

function reset() {
  evilHamburger.health = 100
  document.getElementById("health-status").innerText =
    evilHamburger.health.toString()
  document.getElementById("end-game").innerText = ""
}
function endGame() {
  if (evilHamburger.health <= 0) {
    evilHamburger.health = 0
    document.getElementById("end-game").innerText = "Game Over"
  }

}
