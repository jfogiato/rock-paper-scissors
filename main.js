// Global Variables/Data Model 👇
var currentGame;
var user;
var computer;
var fighters;
var iconKeys = {
  '🐱': 'assets/fig.png', 
  '🧹': 'assets/vacuum.png', 
  '🦴': 'assets/cat-toy.png', 
  '💣': 'assets/nuke.png', 
  '✌️': 'assets/peace.png' 
}

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
var changeGameSection = document.getElementById('buttonSection');
var header2 = document.querySelector('h2');

// Event Listeners 👇
choiceSection.addEventListener('click', (event) => {
  var gameChoice = event.target.parentNode.id;
  generateNewGame(gameChoice);
  generateVariables();
  toggleViews();
  generateFighters()
  updateHeader('Choose your fighter!');
});

fighterSection.addEventListener('click', (event) => {
  var userChoice = event.target;
  userChoice.classList.add('.selected-icon') // figure this out
  completeRound(userChoice.innerText);
  updateBoard();
  updateHeader();
  updateScores();
  setTimeout(generateFighters, 3000);
  setTimeout( () => {
    updateHeader('Choose your fighter!');
  }, 3000);
});

changeGameBtn.addEventListener('click', toggleViews);

// Event Handlers/Functions 👇
function generateNewGame(gameChoice) {
  var type = gameChoice === 'classicSection' ? 'Classic' : 'Hard';
  if (currentGame) {
    currentGame.type = type;
  } else {
    currentGame = new Game(type);
  }
}

function generateVariables() {
  user = currentGame.player;
  computer = currentGame.computer;
  fighters = currentGame.getCleanBoard();
}

function toggleViews() {
  choiceSection.classList.toggle('hidden');
  fighterSection.classList.toggle('hidden');
  changeGameSection.classList.toggle('hidden');
}

function generateFighters() {
  fighterSection.innerHTML = '';
  for (var i = 0; i < fighters.length; i++) {
    fighterSection.innerHTML += 
    `<img src="${iconKeys[fighters[i]]}" alt=""/>`
  }
}

function updateHeader(newHeadText) {
  if (newHeadText) {
    header2.innerText = newHeadText;
  } else {
    setTimeout( () => {
      header2.innerText = currentGame.determineWinner(user.choice, computer.choice);
    }, 1000);
  }
}

function completeRound(userChoice) {
  user.takeTurn(userChoice);
  computer.takeTurn();
}

function updateScores() {
  setTimeout( () => {
    userWins.innerText = user.wins;
    computerWins.innerText = computer.wins}
    , 1000);
}

function updateBoard() {
  setTimeout(() => {
    fighterSection.innerHTML = `
    <div class="selected-icon">${user.choice}</div>
    <div>${computer.choice}</div>
    `;
  }, 1000);
}




/*
 - Clicking one of the game options (classic or hard) generates a new instance of Game and sets the type equal to the type that was clicked.
 - Based on Game.type, appropriate list of fighters is displayed on DOM (3 or 5)
 - On clicking one of the fighters, Game method is called to 
*/