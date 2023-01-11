// Global Variables/Data Model 👇
var currentGame;
var user;
var computer;
var fighters;

// DOM Element Variables 👇
var userSection = document.getElementById('userSection');
var userWins = document.getElementById('userWins');
var computerSection = document.getElementById('computerSection');
var computerWins = document.getElementById('computerWins');

var choiceSection = document.getElementById('choiceSection');
var classicSection = document.getElementById('classicSection');
var hardSection = document.getElementById('hardSection');

var fighterSection = document.getElementById('fighterSection');

var changeGameBtn = document.getElementById('changeGameButton');

var header2 = document.querySelector('h2');

// Event Listeners 👇
choiceSection.addEventListener('click', (event) => {
  var gameChoice = event.target.parentNode.id;
  generateVariables(gameChoice);
  toggleViews(gameChoice);
  generateFighters(gameChoice)
  updateHeader('Choose your fighter!');
});

fighterSection.addEventListener('click', (event) => {
  var userChoice = event.target.innerText;

  completeRound(userChoice);
  updateScores()
});

// Event Handlers/Functions 👇
function generateVariables(gameChoice) {
  var type = gameChoice === 'classicSection' ? 'Classic' : 'Hard';
  currentGame = new Game(type);
  user = currentGame.player;
  computer = currentGame.computer;
  fighters = currentGame.getCleanBoard();
}

function toggleViews(gameChoice) {
  choiceSection.classList.toggle('hidden');
  fighterSection.classList.toggle('hidden');
  changeGameBtn.classList.toggle('hidden');
}

function generateFighters(gameChoice) {
  for (var i = 0; i < fighters.length; i++) {
    fighterSection.innerHTML += 
    `<div>${fighters[i]}</div>`
  }
}

function updateHeader(newHeadText) {
  header2.innerText = newHeadText;
}

function completeRound(userChoice) {
  user.takeTurn(userChoice);
  computer.takeTurn();
  updateHeader(currentGame.determineWinner(user.choice, computer.choice))
}

function updateScores() {
  userWins.innerText = user.wins;
  computerWins.innerText = computer.wins;
}






/*
 - Clicking one of the game options (classic or hard) generates a new instance of Game and sets the type equal to the type that was clicked.
 - Based on Game.type, appropriate list of fighters is displayed on DOM (3 or 5)
 - On clicking one of the fighters, Game method is called to 
*/