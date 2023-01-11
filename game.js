class Game {
  constructor(gameType) {
    this.player = new Player('Human', '🧑‍🦲');
    this.computer = new Player('Computer', '💻');
    this.type = gameType;
  }

  getCleanBoard() {
    if (this.type === 'Classic') {
      return ['🐱', '🧹', '🦴'];
    } else {
      return ['🐱', '🧹', '🦴', '💣', '✌️'];
    }
  }

  determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return this.updateScore('draw');
    } else if (playerChoice === '🐱' && (computerChoice === '🧹' || computerChoice === '💣')) { 
      return this.updateScore('computer');
    }  else if (playerChoice === '🧹' && (computerChoice === '✌️' || computerChoice === '🦴')) {
      return this.updateScore('computer');
    } else if (playerChoice === '🦴' && (computerChoice === '🐱' || computerChoice === '💣')) {
      return this.updateScore('computer');
    } else if (playerChoice === '💣' && (computerChoice === '✌️' || computerChoice === '🧹')) {
      return this.updateScore('computer');
    } else if (playerChoice === '✌️' && (computerChoice === '🐱' || computerChoice === '🦴')) {
      return this.updateScore('computer');
    } else {
      return this.updateScore('user');
    }
  }

  updateScore(playerWhoWon) {
    if (playerWhoWon === 'draw') {
      return 'It was a draw!';
    } else if (playerWhoWon === 'computer') {
      this.computer.wins += 1;
      return 'The computer won!';
    } else {
      this.player.wins += 1;
      return 'You won!';
    }
  }
}

/*
✅ A way to keep track of the data for the game board
✅ A way to keep track of the selected game type
✅ A way to check the Game’s board data for win conditions - updateScore()
✅ A way to detect when a game is a draw (no one has won) - updateScore()
✅ A way to reset the Game’s board to begin a new game
*/
