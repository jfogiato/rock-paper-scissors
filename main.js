// Global Variables/Data Model 👇
var currentGame;// = new Game only instantiated after user clicks game;
var user;// = currentGame.player only instantiated after user clicks game;
var computer; // = currentGame.computer only instantiated after user clicks game;
var fighters;// = currentGame.getCleanBoard();

// DOM Element Variables 👇
var userSection = document.getElementById('userSection');
var userWins = document.getElementById('userWins');
var computerSection = document.getElementById('computerSection');
var computerWins = document.getElementById('computerWins');

var choiceSection = document.getElementById('choiceSection');
var classicSection = document.getElementById('classicSection');
var hardSection = document.getElementById('hardSection');
var fighterSection = document.getElementById('fighterSection');
var classicFightersSection = document.getElementById('classicFighters');
var hardFightersSection = document.getElementById('hardFighters');

var changeGameBtn = document.getElementById('changeGameButton');

// Event Listeners 👇
choiceSection.addEventListener('click', (event) => {
  var gameChoice = event.target.parentNode.id
  generateVariables(gameChoice);
  toggleFighters(gameChoice);
});


// Event Handlers/Functions 👇
function generateVariables(gameType) {
  var type = gameType === 'classicSection' ? 'Classic' : 'Hard';
  currentGame = new Game(type);
  user = currentGame.player;
  computer = currentGame.computer;
  fighters = currentGame.getCleanBoard();
}

function toggleFighters(gameChoice) {
  choiceSection.classList.toggle('hidden');
  fighterSection.classList.toggle('hidden');
  chooseSection(gameChoice)
}

function chooseSection(choice) {
  choice === 'classicSection' ? hardFighters.classList.add('hidden') : classicFighters.classList.add('hidden');
}







/*
 - Clicking one of the game options (classic or hard) generates a new instance of Game and sets the type equal to the type that was clicked.
 - Based on Game.type, appropriate list of fighters is displayed on DOM (3 or 5)
 - On clicking one of the fighters, Game method is called to 
*/