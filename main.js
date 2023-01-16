// Global Variables/Data Model 👇
var currentGame = new Game;
var iconKeys = {
  '🐱': 'assets/fig.png', 
  '🧹': 'assets/vacuum.png', 
  '🦴': 'assets/cat-toy.png', 
  '💣': 'assets/nuke.png', 
  '✌️': 'assets/peace.png' 
};

// DOM Element Variables 👇
var tokenSection = document.getElementById('iconSection');
var userWins = document.getElementById('userWins');
var userToken = document.getElementById('userToken');
var computerWins = document.getElementById('computerWins');
var choiceSection = document.getElementById('choiceSection');
var fighterSection = document.getElementById('fighterSection');
var changeGameBtn = document.getElementById('changeGameButton');
var changeGameSection = document.getElementById('buttonSection');
var ruleSection = document.getElementById('ruleSection');
var variableHeader = document.querySelector('h2');

// Event Listeners 👇
window.addEventListener('load', () => {
  retrieveWins();
  updateScores();
})

tokenSection.addEventListener('click', (event) => {
  if (event.target.classList.contains("token")) {
    currentGame.player.updateToken(event.target.innerText);
    displayToken();
    hide(tokenSection);
    show(choiceSection);
    updateHeader('Choose your game mode!');
  }
});

choiceSection.addEventListener('click', (event) => {
  var gameChoice = event.target.parentNode.id;
  if (gameChoice) {
    currentGame.setGameChoice(gameChoice);
    currentGame.resetBoard();
    hide(choiceSection);
    show(fighterSection);
    show(changeGameSection);
    show(ruleSection);
    displayRules(gameChoice);
    generateFighters();
    updateHeader('Choose your fighter!');
  }
});

fighterSection.addEventListener('click', (event) => {
  var userChoice = event.target;
  if (userChoice.id !== 'fighterSection') {
    currentGame.player.takeTurn(userChoice.id);
    currentGame.computer.takeTurn();
    addShadow(userChoice);
    updateBoard();
    updateHeader();
    updateScores();
    setTimeout( () => {
      saveWins();
      currentGame.resetChoices();
      generateFighters();
      updateHeader('Choose your fighter!');
    }, 2000);
  }
});

changeGameBtn.addEventListener('click', () => {
  updateHeader('Choose your game mode!');
  hide(fighterSection);
  hide(changeGameSection);
  show(choiceSection);
  displayRules();
});

// Event Handlers/Functions 👇
function addShadow(userChoice) {
  userChoice.style.filter = 'drop-shadow(20px 20px 15px #9A9A9A)';
}

function displayToken() {
  userToken.innerText = currentGame.player.token;
}

function hide(element) {
  element.classList.add('hidden');
}

function show(element) {
  element.classList.remove('hidden');
}

function displayRules(gameChoice) {
  ruleSection.innerHTML = '';
  if (gameChoice) {
    var section = document.getElementById(`${gameChoice}`).cloneNode(true);
    ruleSection.appendChild(section);
  }
}

function generateFighters() {
  fighterSection.innerHTML = '';
  for (var i = 0; i < currentGame.fighters.length; i++) {
    fighterSection.innerHTML += 
    `<img src="${iconKeys[currentGame.fighters[i]]}" alt="${currentGame.fighters[i]}" id="${currentGame.fighters[i]}"/>`;
  }
}

function updateHeader(newHeadText) {
  if (newHeadText) {
    variableHeader.innerText = newHeadText;
  } else {
    setTimeout( () => {
      variableHeader.innerText = currentGame.determineWinner();
    }, 500);
  }
}

function updateScores() {
  setTimeout(() => {
    userWins.innerText = currentGame.player.wins;
    computerWins.innerText = currentGame.computer.wins;
  }, 500);
}

function updateBoard() {
  setTimeout(() => {
    fighterSection.innerHTML = 
    `<img src="${iconKeys[currentGame.player.choice]}" alt="${currentGame.player.choice}" class= "unclickable" id="${currentGame.player.choice}"/> <img src="${iconKeys[currentGame.computer.choice]}" alt="${currentGame.computer.choice}" class= "unclickable" id="${currentGame.computer.choice}"/>`;
  }, 500);
}

function saveWins() {
    currentGame.player.saveWinsToStorage();
    currentGame.computer.saveWinsToStorage();
}

function retrieveWins() {
  setTimeout(() => {
    currentGame.player.retrieveWinsFromStorage();
    currentGame.computer.retrieveWinsFromStorage();
  }, 200)
}

;