"use strict";

// 1. Crear constantes y variables
const diceSelect = document.querySelector(".js-select");
const btn = document.querySelector(".js-btn");
const message = document.querySelector(".js-message");
const balance = document.querySelector('.js-balance');
const bet = document.querySelector('.js-bet');
// let balanceAmount = 50;
// 2. Crear funciones
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function checkNumber() {
  const selectedDice = parseInt(diceSelect.value);
  const computerNum = getRandomNumber(6);
  if (selectedDice === computerNum) {
    message.innerHTML = `<p>¡Has ganado el doble de lo apostado! :)</p><p>Jugada del ordenador ${computerNum}</p>`;
  } else {
    message.innerHTML = `<p>Has perdido lo apostado :(</p><p>Jugada del ordenador ${computerNum}</p>`;
  }
  console.log(selectedDice);
  console.log(computerNum);
}

btn.addEventListener("click", checkNumber);
