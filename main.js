// Global Variables/Data Model 👇
var currentGame = new Game(); // = new Game only instantiated after user clicks game;
var user = currentGame.player; // = currentGame.player only instantiated after user clicks game;
var computer = currentGame.computer; // = currentGame.computer only instantiated after user clicks game;
var fighters = currentGame.getCleanBoard(); // = currentGame.getCleanBoard();

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
choiceSection.addEventListener('click', () => {
  generateVariables(event);
});


// Event Handlers/Functions 👇
function generateVariables(event) {
  var gameChoice = event.target.parentNode.id // classicSection or hardSection
  toggleFighters(gameChoice);
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