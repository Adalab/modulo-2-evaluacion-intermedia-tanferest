'use strict';

// 1. Crear constantes y variables
const diceSelect = document.querySelector('.js-select');
const btn = document.querySelector('.js-btn');
const messageBox = document.querySelector('.js-message');
const balanceContainer = document.querySelector('.js-balance');
const betInput = document.querySelector('.js-bet');
let selectedDice = '';
let computerNum = '';
let betAmount = '';
let balanceAmount = 50;

// 2. Crear funciones
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// Función pintar resultado HTML
function paintHTML() {
  if (selectedDice === computerNum) {
    messageBox.innerHTML = `<p>¡Has ganado el doble de lo apostado! :)</p><p>Jugada del ordenador: ${computerNum}</p>`;
  } else {
    messageBox.innerHTML = `<p>Has perdido lo apostado :(</p><p>Jugada del ordenador: ${computerNum}</p>`;
  }
   balanceContainer.innerHTML = `Saldo: ${balanceAmount}`;
}

// Comprobar si el número escogido es igual al del ordenador
function checkNumber() {
  selectedDice = parseInt(diceSelect.value);
  computerNum = getRandomNumber(6);
  betAmount = parseInt(betInput.value);
  if (selectedDice === computerNum) {
    balanceAmount += betAmount;
  } else {
    balanceAmount -= betAmount;
  }
}

function handleClick() {
  checkNumber();
  paintHTML();
}

btn.addEventListener('click', handleClick);
