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
var iconSection = document.getElementById('iconSection');
var userWins = document.getElementById('userWins');
var userToken = document.getElementById('userToken');
var computerWins = document.getElementById('computerWins');
var choiceSection = document.getElementById('choiceSection');
var fighterSection = document.getElementById('fighterSection');
var changeGameBtn = document.getElementById('changeGameButton');
var changeGameSection = document.getElementById('buttonSection');
var ruleSection = document.getElementById('ruleSection');
var header2 = document.querySelector('h2');

// Event Listeners 👇
iconSection.addEventListener('click', (event) => {
  if (event.target.classList.contains("token")) {
    currentGame.player.updateToken(event.target.innerText);
    displayToken();
    hide(iconSection);
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
      generateFighters();
      updateHeader('Choose your fighter!');
      currentGame.resetChoices();
    }, 3500);
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
    header2.innerText = newHeadText;
  } else {
    setTimeout( () => {
      header2.innerText = currentGame.determineWinner();
    }, 1000);
  }
}

function updateScores() {
  setTimeout( () => {
    userWins.innerText = currentGame.player.wins;
    computerWins.innerText = currentGame.computer.wins}
    , 1000);
}

function updateBoard() {
  setTimeout(() => {
    fighterSection.innerHTML = 
    `<img src="${iconKeys[currentGame.player.choice]}" alt="" id="${currentGame.player.choice}"/> <img src="${iconKeys[currentGame.computer.choice]}" alt="" id="${currentGame.computer.choice}"/>`;
  }, 1000);
}
