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
  let mod = totalItems()
  if (mod > -20) {
    evilHamburger.health -= 20 + mod
  }
  else {
    alert("HE HAS BECOME TOO STRONG!!!!")
  }
  update();
}

function kick() {
  let mod = totalItems()
  if (mod > -10) {
    evilHamburger.health -= 10 + mod
  }
  else {
    alert("HE HAS BECOME TOO STRONG!!!!")
  }
  update();
}

function slap() {
  let mod = totalItems()
  if (mod > -20) {
    evilHamburger.health -= 20 + mod
  }
  else {
    alert("HE HAS BECOME TOO STRONG!!!!")
  }
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
  document.getElementById("progressbar").style.width = evilHamburger.health.toString() + "px"
}

function reset() {
  evilHamburger.health = 100
  document.getElementById("health-status").innerText =
    evilHamburger.health.toString()
  document.getElementById("end-game").innerText = ""
  document.getElementById("progressbar").style.width = evilHamburger.health.toString() + "px"
}
function endGame() {
  if (evilHamburger.health <= 0) {
    evilHamburger.health = 0
    document.getElementById("end-game").innerText = "Game Over"
  }

}
