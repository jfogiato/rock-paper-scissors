// Global Variables/Data Model 👇
var currentGame;
var user;
var computer;
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
  if (gameChoice) {
    generateNewGame(gameChoice);
    generateVariables();
    toggleViews();
    generateFighters();
    updateHeader('Choose your fighter!');
  }
});

fighterSection.addEventListener('click', (event) => {
  var userChoice = event.target.id;
  if (userChoice !== 'fighterSection') {
    completeRound(userChoice);
    updateBoard();
    updateHeader();
    updateScores();
    setTimeout(generateFighters, 3000);
    setTimeout( () => {
      updateHeader('Choose your fighter!');
    }, 3000);
  }
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
  currentGame.getCleanBoard();
}

function toggleViews() {
  choiceSection.classList.toggle('hidden');
  fighterSection.classList.toggle('hidden');
  changeGameSection.classList.toggle('hidden');
}

function generateFighters() {
  fighterSection.innerHTML = '';
  for (var i = 0; i < currentGame.fighters.length; i++) {
    fighterSection.innerHTML += 
    `<img src="${iconKeys[currentGame.fighters[i]]}" alt="" id="${currentGame.fighters[i]}"/>`
  }
}

function updateHeader(newHeadText) {
  if (newHeadText) {
    header2.innerText = newHeadText;
  } else {
    setTimeout( () => {
      header2.innerText = currentGame.determineWinner();
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
    <img src="${iconKeys[user.choice]}" alt="" id="${user.choice}"/>
    <img src="${iconKeys[computer.choice]}" alt="" id="${computer.choice}"/>
    `;
  }, 1000);
}
