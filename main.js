// Global Variables/Data Model 👇
var currentGame = new Game;
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
    currentGame.setChoice(gameChoice);
    currentGame.getCleanBoard();
    toggleViews();
    generateFighters();
    updateHeader('Choose your fighter!');
  }
});

fighterSection.addEventListener('click', (event) => {
  var userChoice = event.target;
  if (userChoice.id !== 'fighterSection') {
    userChoice.style.filter = 'drop-shadow(20px 20px 15px #9A9A9A)';
    currentGame.player.takeTurn(userChoice.id);
    currentGame.computer.takeTurn();
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

function updateScores() {
  setTimeout( () => {
    userWins.innerText = currentGame.player.wins;
    computerWins.innerText = currentGame.computer.wins}
    , 1000);
}

function updateBoard() {
  setTimeout(() => {
    // var children = fighterSection.childNodes // array of child nodes with id's
    // console.log(children)
    // for (var i = 0; i < currentGame.fighters.length; i++) {
    //   console.log('current loop id: ', children[i].id)
    //   console.log('player choice;', currentGame.player.choice)
    //   console.log('computer choice;', currentGame.computer.choice)
    //   if (children[i].id !== (currentGame.player.choice || currentGame.computer.choice)) {
    //     console.log('removing; ', children[i])
    //     fighterSection.removeChild(children[i])
    //   } else {
    //     console.log('did not remove')
    //   }
    // }
    fighterSection.innerHTML = 
    `
    <img src="${iconKeys[currentGame.player.choice]}" alt="" id="${currentGame.player.choice}"/>
    <img src="${iconKeys[currentGame.computer.choice]}" alt="" id="${currentGame.computer.choice}"/>
    `;
  }, 1000);
}
